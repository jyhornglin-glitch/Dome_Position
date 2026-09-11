import fitz
import json
import os
import re

FORMATION_LABELS = {
    'basic': '基本 (基本隊形)',
    'circle': '01圓形 (序/生老病死/六度)',
    'xingYuan': '02行願 (行願/開經偈)',
    'miLuo': '03米籮 (扛天下米籮)',
    'jingSi': '04靜思家風 (靜思家風)',
    'lamp': '05-1有法船 (點一盞燈)',
    'noBoat': '05-2無法船 (菜市場5毛錢)',
    'noBoat3': '05-3無法船3 / 有法船3',
    'bigV': '06四弘誓願 (地藏/四弘誓願)',
    'daChuanShi': '07-1大船師 (拉繩/德行品/大醫王)',
    'boneDonation': '07-2骨捐能捨 (骨捐/大體/專屬曲目)',
    'edu': '08教育 (說法品/大體老師/慈小/教育完全化)',
    'humanities1': '09-1人文 (基本隊形)',
    'humanities2': '09-2人文 (主機板)',
    'fiveContinents2': '10-2五大洲 (樂生/富中之富)',
    'fiveContinents1': '10-1五大洲 (台灣/開經書)',
    'sixRuiXiang': '12-1六瑞相 (發願/行星/祈禱)'
}

def extract_pdf_data(pdf_path):
    doc = fitz.open(pdf_path)
    all_pages_data = []

    for pno in range(len(doc)):
        page = doc[pno]
        drawings = page.get_drawings()
        rects = [fitz.Rect(d['rect']) for d in drawings]

        # Cluster border rects to detect boxed text
        clusters = []
        for r in rects:
            matched = False
            for i, c in enumerate(clusters):
                exp = fitz.Rect(c.x0 - 3, c.y0 - 3, c.x1 + 3, c.y1 + 3)
                if exp.intersects(r):
                    clusters[i] = c | r
                    matched = True
                    break
            if not matched:
                clusters.append(fitz.Rect(r))

        changed = True
        while changed:
            changed = False
            new_c = []
            skip = set()
            for i in range(len(clusters)):
                if i in skip:
                    continue
                cur = clusters[i]
                for j in range(i + 1, len(clusters)):
                    if j in skip:
                        continue
                    exp = fitz.Rect(cur.x0 - 3, cur.y0 - 3, cur.x1 + 3, cur.y1 + 3)
                    if exp.intersects(clusters[j]):
                        cur = cur | clusters[j]
                        skip.add(j)
                        changed = True
                new_c.append(cur)
            clusters = new_c

        # Valid text boxes (filter divider lines)
        valid_boxes = [c for c in clusters if c.width > 5 and c.height > 8 and not (c.width > 300 and c.height < 5)]

        # Extract text blocks using rawdict for char-level precision
        raw = page.get_text('rawdict')
        blocks = [b for b in raw['blocks'] if b.get('type') == 0]
        content_blocks = blocks[2:] if len(blocks) >= 2 else blocks

        page_lines = []
        for b in content_blocks:
            for l in b['lines']:
                line_spans = []
                for s in l['spans']:
                    color_hex = f"{s['color']:06X}"
                    is_bold = bool(s['flags'] & 16) or ('bold' in s['font'].lower())
                    is_italic = bool(s['flags'] & 2) or ('italic' in s['font'].lower())
                    
                    chars = s.get('chars', [])
                    if not chars:
                        continue

                    cur_chunk = ""
                    cur_is_boxed = None

                    for c_obj in chars:
                        ch = c_obj['c']
                        c_rect = fitz.Rect(c_obj['bbox'])
                        c_mid = fitz.Point((c_rect.x0 + c_rect.x1) / 2, (c_rect.y0 + c_rect.y1) / 2)

                        ch_boxed = False
                        for vb in valid_boxes:
                            vb_expanded = fitz.Rect(vb.x0 - 1.5, vb.y0 - 1.5, vb.x1 + 1.5, vb.y1 + 1.5)
                            if vb_expanded.contains(c_mid):
                                ch_boxed = True
                                break

                        if cur_is_boxed is None:
                            cur_is_boxed = ch_boxed
                            cur_chunk = ch
                        elif cur_is_boxed == ch_boxed:
                            cur_chunk += ch
                        else:
                            if cur_chunk:
                                line_spans.append({
                                    'text': cur_chunk,
                                    'color': color_hex,
                                    'isBold': is_bold,
                                    'isItalic': is_italic,
                                    'isBoxed': cur_is_boxed,
                                    'font': s['font'],
                                    'size': round(s['size'], 1)
                                })
                            cur_chunk = ch
                            cur_is_boxed = ch_boxed

                    if cur_chunk:
                        line_spans.append({
                            'text': cur_chunk,
                            'color': color_hex,
                            'isBold': is_bold,
                            'isItalic': is_italic,
                            'isBoxed': cur_is_boxed,
                            'font': s['font'],
                            'size': round(s['size'], 1)
                        })

                if line_spans:
                    page_lines.append(line_spans)

        all_pages_data.append({
            'page': pno + 1,
            'lines': page_lines
        })

    return all_pages_data

def determine_line_type(text):
    t = text.strip()
    if not t:
        return 'lyrics'
    if re.match(r'^(侍衛|國王|入經藏|報～|淨飯王|法師|上人|菜販|會眾|演員|東西[一二]|東[一二]|西[一二]|藍衣|白衣|黃老師OS|os|OS)[：:]', t, re.IGNORECASE):
        return 'dialogue'
    if t.lower().startswith('os') or t.lower().startswith('os：') or t.lower().startswith('os:'):
        return 'os'
    if re.match(r'^\([^\)]+\)$', t):
        return 'annotation'
    return 'lyrics'

def spans_to_segments(line_spans):
    segments = []
    for s in line_spans:
        c_hex = s['color'].upper()
        is_red = c_hex in ['EE0000', 'FF0000', 'A31515', 'FF0066']
        is_green = (c_hex == '196B24')
        is_blue = (c_hex == '0000FF')
        is_purple = (c_hex == '77206D')
        
        seg = {
            'text': s['text'],
            'isRed': is_red,
            'isGreen': is_green,
            'isBlue': is_blue,
            'isPurple': is_purple,
            'isBoxed': s.get('isBoxed', False),
            'isBold': s.get('isBold', False),
            'isItalic': s.get('isItalic', False),
            'color': c_hex
        }
        
        if segments:
            last = segments[-1]
            if (last['isRed'] == seg['isRed'] and
                last['isGreen'] == seg['isGreen'] and
                last['isBlue'] == seg['isBlue'] and
                last['isPurple'] == seg['isPurple'] and
                last['isBoxed'] == seg['isBoxed'] and
                last['isBold'] == seg['isBold'] and
                last['isItalic'] == seg['isItalic'] and
                last['color'] == seg['color']):
                last['text'] += seg['text']
                continue
        segments.append(seg)
    return segments

def generate_lyrics_os_database(pdf_file, existing_data_file='lyrics_os_data.js'):
    # 1. Load existing database to inherit metadata (audio, videos)
    with open(existing_data_file, 'r', encoding='utf-8') as f:
        existing = json.loads(re.search(r'const LYRICS_OS_DATA = (\[.*?\]);', f.read(), re.DOTALL).group(1))

    existing_by_id = {s['id']: s for s in existing}

    # 2. Extract PDF pages data
    pdf_pages = extract_pdf_data(pdf_file)

    raw_sections = []
    cur_sec = None
    pending_country = ''

    for p in pdf_pages:
        for l in p['lines']:
            line_text = ''.join(s['text'] for s in l).strip()
            if not line_text or line_text.startswith('---') or line_text.startswith('——'):
                continue

            # Check if line is a section country header like ※約旦※
            m_country = re.match(r'^※(.*?)※$', line_text)
            if m_country:
                pending_country = m_country.group(1).strip()
                continue

            if cur_sec and cur_sec.get('pending_title'):
                cur_sec['title'] += ' ' + line_text
                cur_sec['title_spans'].extend(l)
                if '】' in line_text:
                    cur_sec['pending_title'] = False
                continue

            if line_text.startswith('【'):
                if cur_sec:
                    raw_sections.append(cur_sec)
                full_title = line_text
                if pending_country:
                    full_title = f"【{pending_country} {line_text[1:]}"
                    pending_country = ''
                cur_sec = {
                    'title': full_title,
                    'title_spans': list(l),
                    'pending_title': not ('】' in line_text),
                    'lines': []
                }
            else:
                if cur_sec:
                    cur_sec['lines'].append(l)

    if cur_sec:
        raw_sections.append(cur_sec)

    print(f"Extracted {len(raw_sections)} sections from {pdf_file}")
    assert len(raw_sections) == 73, f"Expected 73 sections, got {len(raw_sections)}"

    # 3. Define metadata configurations for all 73 sections in order
    section_configs = [
        # 1..6: circle
        {'fk': 'circle', 'sessions': ['1112', '1113', '1114', '1115'], 'ex_id': 'sec_1'},
        {'fk': 'circle', 'sessions': ['1112', '1113', '1114', '1115'], 'ex_id': 'sec_2'},
        {'fk': 'circle', 'sessions': ['1112', '1113', '1114', '1115'], 'ex_id': 'sec_3'},
        {'fk': 'circle', 'sessions': ['1112', '1113', '1114', '1115'], 'ex_id': 'sec_4'},
        {'fk': 'circle', 'sessions': ['1112', '1113', '1114', '1115'], 'ex_id': 'sec_5'},
        {'fk': 'circle', 'sessions': ['1112', '1113', '1114', '1115'], 'ex_id': 'sec_6'},
        # 7..8: xingYuan
        {'fk': 'xingYuan', 'sessions': ['1112', '1113', '1114', '1115'], 'ex_id': 'sec_7'},
        {'fk': 'xingYuan', 'sessions': ['1112', '1113', '1114', '1115'], 'ex_id': 'sec_8'},
        # 9: miLuo
        {'fk': 'miLuo', 'sessions': ['1112', '1113', '1114', '1115'], 'ex_id': 'sec_9'},
        # 10: jingSi
        {'fk': 'jingSi', 'sessions': ['1112', '1113', '1114', '1115'], 'ex_id': 'sec_10'},
        # 11: lamp
        {'fk': 'lamp', 'sessions': ['1112', '1113', '1114', '1115'], 'ex_id': 'sec_11'},
        # 12: noBoat
        {'fk': 'noBoat', 'sessions': ['1112', '1113', '1114', '1115'], 'ex_id': 'sec_12'},
        # 13: noBoat3
        {'fk': 'noBoat3', 'sessions': ['1112', '1113', '1114', '1115'], 'ex_id': 'sec_13'},
        # 14..15: bigV
        {'fk': 'bigV', 'sessions': ['1112', '1113', '1114', '1115'], 'ex_id': 'sec_14'},
        {'fk': 'bigV', 'sessions': ['1112', '1113', '1114', '1115'], 'ex_id': 'sec_15'},
        # 16..18: daChuanShi
        {'fk': 'daChuanShi', 'sessions': ['1112', '1113', '1114', '1115'], 'ex_id': 'sec_16'},
        {'fk': 'daChuanShi', 'sessions': ['1112', '1113', '1114', '1115'], 'ex_id': 'sec_17'},
        {'fk': 'daChuanShi', 'sessions': ['1112', '1113', '1114', '1115'], 'ex_id': 'sec_18'},
        # 19..20: boneDonation
        {'fk': 'boneDonation', 'sessions': ['1112', '1113', '1114', '1115'], 'ex_id': 'sec_19'},
        {'fk': 'boneDonation', 'sessions': ['1112', '1113', '1114', '1115'], 'ex_id': 'sec_20'},
        # 21: 花慈 (0909 is 11/12)
        {'fk': 'boneDonation', 'sessions': ['1112'], 'ex_id': 'sec_21', 'audio': 'Music/慈善+醫療/18北慈＿疫情捨我其誰.mp3'},
        # 22: [NEW] 大埔無醫村 (11/12)
        {'fk': 'boneDonation', 'sessions': ['1112'], 'audio': 'Music/慈善+醫療/16 大醫王.mp3', 'videos': []},
        # 23: 北慈疫情 (11/14)
        {'fk': 'boneDonation', 'sessions': ['1114'], 'ex_id': 'sec_22'},
        # 24: [NEW] 中慈江永旭 (11/14)
        {'fk': 'boneDonation', 'sessions': ['1114'], 'audio': '', 'videos': []},
        # 25: 北慈八仙塵爆 (11/15)
        {'fk': 'boneDonation', 'sessions': ['1115'], 'ex_id': 'sec_23'},
        # 26..28: edu
        {'fk': 'edu', 'sessions': ['1112', '1113', '1114', '1115'], 'ex_id': 'sec_24'},
        {'fk': 'edu', 'sessions': ['1112', '1113', '1114', '1115'], 'ex_id': 'sec_25'},
        {'fk': 'edu', 'sessions': ['1112', '1113', '1114', '1115'], 'ex_id': 'sec_26'},
        # 29: 許永祥 (11/12, 11/13)
        {'fk': 'edu', 'sessions': ['1112', '1113'], 'ex_id': 'sec_27'},
        # 30..31: 慈小、教育完全化
        {'fk': 'edu', 'sessions': ['1112', '1113', '1114', '1115'], 'ex_id': 'sec_28'},
        {'fk': 'edu', 'sessions': ['1112', '1113', '1114', '1115'], 'ex_id': 'sec_29'},
        # 32: 靜思語教學 (11/14, 11/15)
        {'fk': 'edu', 'sessions': ['1114', '1115'], 'ex_id': 'sec_30'},
        # 33..35: humanities1
        {'fk': 'humanities1', 'sessions': ['1112', '1113', '1114', '1115'], 'ex_id': 'sec_31'},
        {'fk': 'humanities1', 'sessions': ['1112', '1113', '1114', '1115'], 'ex_id': 'sec_32'},
        {'fk': 'humanities1', 'sessions': ['1112', '1113', '1114', '1115'], 'ex_id': 'sec_33'},
        # 36..39: humanities2
        {'fk': 'humanities2', 'sessions': ['1112', '1113', '1114', '1115'], 'ex_id': 'sec_34'},
        {'fk': 'humanities2', 'sessions': ['1112', '1113', '1114', '1115'], 'ex_id': 'sec_35'},
        {'fk': 'humanities2', 'sessions': ['1112', '1113', '1114', '1115'], 'ex_id': 'sec_36'},
        {'fk': 'humanities2', 'sessions': ['1112', '1113', '1114', '1115'], 'ex_id': 'sec_37'},
        # 40: 樂生 (10-2, 11/12, 11/15)
        {'fk': 'fiveContinents2', 'sessions': ['1112', '1115'], 'ex_id': 'sec_38'},
        # 41: 富中之富A (10-2, 11/12, 11/14)
        {'fk': 'fiveContinents2', 'sessions': ['1112', '1114'], 'ex_id': 'sec_39'},
        # 42: 富中之富B (10-2, 11/13, 11/15)
        {'fk': 'fiveContinents2', 'sessions': ['1113', '1115'], 'ex_id': 'sec_40'},
        # 43: 開經書 (10-1, all)
        {'fk': 'fiveContinents1', 'sessions': ['1112', '1113', '1114', '1115'], 'ex_id': 'sec_41'},
        # 44..49: 11/12 功德品 (約旦、黑區、莫三比克 -> 10-2)
        {'fk': 'fiveContinents2', 'sessions': ['1112'], 'ex_id': 'sec_42'},
        {'fk': 'fiveContinents2', 'sessions': ['1112'], 'ex_id': 'sec_43'},
        {'fk': 'fiveContinents2', 'sessions': ['1112'], 'ex_id': 'sec_44'},
        {'fk': 'fiveContinents2', 'sessions': ['1112'], 'ex_id': 'sec_45'},
        {'fk': 'fiveContinents2', 'sessions': ['1112'], 'ex_id': 'sec_46'},
        {'fk': 'fiveContinents2', 'sessions': ['1112'], 'ex_id': 'sec_47'},
        # 50..51: 11/12 台灣救災集錦 (第五功德、衣珠喻手扎 -> 10-1)
        {'fk': 'fiveContinents1', 'sessions': ['1112'], 'ex_id': 'sec_48'},
        {'fk': 'fiveContinents1', 'sessions': ['1112'], 'audio': 'Music/功德品/1112/11_12 [功德品] 05台灣救災集錦_第五功德.mp3', 'videos': []},
        # 52..56: 11/13 功德品 (土耳其、南非、印尼 -> 10-2)
        {'fk': 'fiveContinents2', 'sessions': ['1113'], 'ex_id': 'sec_49'},
        {'fk': 'fiveContinents2', 'sessions': ['1113'], 'ex_id': 'sec_50'},
        {'fk': 'fiveContinents2', 'sessions': ['1113'], 'ex_id': 'sec_51'},
        {'fk': 'fiveContinents2', 'sessions': ['1113'], 'ex_id': 'sec_52'},
        {'fk': 'fiveContinents2', 'sessions': ['1113'], 'ex_id': 'sec_53'},
        # 57..63: 11/14 功德品 (緬甸、八八風災、十在心路、泰北、辛巴威 -> 10-2)
        {'fk': 'fiveContinents2', 'sessions': ['1114'], 'ex_id': 'sec_54'},
        {'fk': 'fiveContinents2', 'sessions': ['1114'], 'ex_id': 'sec_55'},
        {'fk': 'fiveContinents2', 'sessions': ['1114'], 'audio': 'Music/功德品/1114/11_14 [功德品] 02第七功德(八八風災).mp3', 'videos': []},
        {'fk': 'fiveContinents2', 'sessions': ['1114'], 'ex_id': 'sec_56'},
        {'fk': 'fiveContinents2', 'sessions': ['1114'], 'ex_id': 'sec_57'},
        {'fk': 'fiveContinents2', 'sessions': ['1114'], 'ex_id': 'sec_58'},
        {'fk': 'fiveContinents2', 'sessions': ['1114'], 'ex_id': 'sec_59'},
        # 64: 11/15 921 第九功德 -> 10-1
        {'fk': 'fiveContinents1', 'sessions': ['1115'], 'ex_id': 'sec_60'},
        # 65..69: 11/15 921化城喻、減災工程、報佛恩 -> 10-2
        {'fk': 'fiveContinents2', 'sessions': ['1115'], 'ex_id': 'sec_61'},
        {'fk': 'fiveContinents2', 'sessions': ['1115'], 'ex_id': 'sec_62'},
        {'fk': 'fiveContinents2', 'sessions': ['1115'], 'ex_id': 'sec_63'},
        {'fk': 'fiveContinents2', 'sessions': ['1115'], 'ex_id': 'sec_64'},
        {'fk': 'fiveContinents2', 'sessions': ['1115'], 'ex_id': 'sec_65'},
        # 70..73: 六瑞相
        {'fk': 'sixRuiXiang', 'sessions': ['1112', '1113', '1114', '1115'], 'ex_id': 'sec_66'},
        {'fk': 'sixRuiXiang', 'sessions': ['1112', '1113', '1114', '1115'], 'ex_id': 'sec_67'},
        {'fk': 'sixRuiXiang', 'sessions': ['1112', '1113', '1114', '1115'], 'ex_id': 'sec_68'},
        {'fk': 'sixRuiXiang', 'sessions': ['1112', '1113', '1114', '1115'], 'ex_id': 'sec_69'}
    ]

    new_sections = []

    for i in range(len(raw_sections)):
        raw = raw_sections[i]
        cfg = section_configs[i]
        ex = existing_by_id.get(cfg.get('ex_id', ''))

        # Inherit audio and videos if available
        audio = cfg.get('audio', (ex.get('audio', '') if ex else ''))
        videos = cfg.get('videos', (ex.get('videos', []) if ex else []))

        # Format session label
        sessions = cfg['sessions']
        if len(sessions) == 4:
            session_label = ''
        else:
            labels = []
            for s in sessions:
                day_map = {'1112': '第1天', '1113': '第2天', '1114': '第3天', '1115': '第4天'}
                labels.append(f"{s[:2]}/{s[2:]}({day_map.get(s, '')})")
            session_label = '、'.join(labels) + '專屬曲目'

        lines = []
        for line_spans in raw['lines']:
            line_text = ''.join(s['text'] for s in line_spans).strip()
            if not line_text:
                continue
            line_type = determine_line_type(line_text)
            segments = spans_to_segments(line_spans)
            lines.append({
                'text': line_text,
                'type': line_type,
                'segments': segments
            })

        new_sec = {
            'id': f"sec_{i+1}",
            'title': raw['title'],
            'formationKey': cfg['fk'],
            'formationLabel': FORMATION_LABELS.get(cfg['fk'], cfg['fk']),
            'sessionKeys': sessions,
            'sessionLabel': session_label,
            'audio': audio,
            'videos': videos,
            'lines': lines
        }
        new_sections.append(new_sec)

    return new_sections

def main():
    pdf_file = '大巨蛋演繹段歌詞OS內容節錄_YDT_0909.pdf'
    if not os.path.exists(pdf_file):
        print(f"Error: {pdf_file} not found")
        return

    sections = generate_lyrics_os_database(pdf_file)
    print(f"Generated {len(sections)} sections from {pdf_file}")

    js_content = "// 大巨蛋演繹段歌詞與 OS 內容資料庫 (依據 0909 PDF 產生，支援多場次動態過濾與精確劇本排版)\n"
    js_content += f"const LYRICS_OS_DATA = {json.dumps(sections, ensure_ascii=False, indent=2)};\n\n"
    js_content += "// Export if in node environment, otherwise make it global\n"
    js_content += "if (typeof module !== 'undefined' && module.exports) {\n"
    js_content += "  module.exports = LYRICS_OS_DATA;\n"
    js_content += "}\n"

    out_file = 'lyrics_os_data.js'
    with open(out_file, 'w', encoding='utf-8') as f:
        f.write(js_content)

    print(f"Generated {out_file} successfully ({len(js_content)} bytes)")

if __name__ == '__main__':
    main()

