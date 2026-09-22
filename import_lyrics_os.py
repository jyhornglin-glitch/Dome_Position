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
    existing = []
    if os.path.exists(existing_data_file):
        with open(existing_data_file, 'r', encoding='utf-8') as f:
            content = f.read()
            m = re.search(r'const LYRICS_OS_DATA = (\[.*?\]);', content, re.DOTALL)
            if m:
                existing = json.loads(m.group(1))

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

            # Handle normal section start, ignoring rehearsal flow transitions like 【後接 大醫王】
            if line_text.startswith('【') and not line_text.startswith('【後接'):
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
    assert len(raw_sections) == 75, f"Expected 75 sections, got {len(raw_sections)}"

    # Clean wrapped session line in 富中之富 A, B
    for s in raw_sections:
        if '富中之富' in s['title'] and s['lines']:
            first_l_text = ''.join(sp['text'] for sp in s['lines'][0]).strip()
            if re.search(r'^\d{2}/\d{2}.*專屬曲目', first_l_text):
                s['title'] += ' ' + first_l_text
                s['lines'].pop(0)

    # 3. Define metadata configurations for all 75 sections in order of 0922 PDF
    section_configs = [
        # 1..6: circle (序、生、老、病、死、六度)
        {'fk': 'circle', 'sessions': ['1112', '1113', '1114', '1115'], 'audio': 'Music/慈善+醫療/01序.mp3'},
        {'fk': 'circle', 'sessions': ['1112', '1113', '1114', '1115'], 'audio': 'Music/慈善+醫療/02生.mp3'},
        {'fk': 'circle', 'sessions': ['1112', '1113', '1114', '1115'], 'audio': 'Music/慈善+醫療/03老.mp3'},
        {'fk': 'circle', 'sessions': ['1112', '1113', '1114', '1115'], 'audio': 'Music/慈善+醫療/04病.mp3'},
        {'fk': 'circle', 'sessions': ['1112', '1113', '1114', '1115'], 'audio': 'Music/慈善+醫療/05死.mp3'},
        {'fk': 'circle', 'sessions': ['1112', '1113', '1114', '1115'], 'audio': 'Music/慈善+醫療/06六度.mp3'},
        # 7..8: xingYuan (行願、開經偈)
        {'fk': 'xingYuan', 'sessions': ['1112', '1113', '1114', '1115'], 'audio': 'Music/慈善+醫療/07行願+開經偈.mp3'},
        {'fk': 'xingYuan', 'sessions': ['1112', '1113', '1114', '1115'], 'audio': 'Music/慈善+醫療/07行願+開經偈.mp3'},
        # 9: miLuo (扛天下米籮)
        {'fk': 'miLuo', 'sessions': ['1112', '1113', '1114', '1115'], 'audio': 'Music/慈善+醫療/08扛天下米籮.mp3'},
        # 10: jingSi (靜思家風)
        {'fk': 'jingSi', 'sessions': ['1112', '1113', '1114', '1115'], 'audio': 'Music/慈善+醫療/09靜思家風.mp3'},
        # 11: lamp (點一盞燈)
        {'fk': 'lamp', 'sessions': ['1112', '1113', '1114', '1115'], 'audio': 'Music/慈善+醫療/10點一盞燈.mp3'},
        # 12: noBoat (菜市場的五毛錢)
        {'fk': 'noBoat', 'sessions': ['1112', '1113', '1114', '1115'], 'audio': 'Music/慈善+醫療/11菜市場五毛錢.mp3'},
        # 13: noBoat3 (慈善ending)
        {'fk': 'noBoat3', 'sessions': ['1112', '1113', '1114', '1115'], 'audio': 'Music/慈善+醫療/12圍爐_是諸眾生.mp3'},
        # 14..15: bigV (地藏經啟航、四弘誓願)
        {'fk': 'bigV', 'sessions': ['1112', '1113', '1114', '1115'], 'audio': 'Music/慈善+醫療/13醫療_地藏經.mp3'},
        {'fk': 'bigV', 'sessions': ['1112', '1113', '1114', '1115'], 'audio': 'Music/慈善+醫療/14四弘誓願.mp3'},
        # 16..17: daChuanShi (拉繩、醫療德行品梵唄)
        {'fk': 'daChuanShi', 'sessions': ['1112', '1113', '1114', '1115'], 'audio': 'Music/慈善+醫療/15拉繩-船師大船師梵唄.mp3'},
        {'fk': 'daChuanShi', 'sessions': ['1112', '1113', '1114', '1115'], 'audio': 'Music/慈善+醫療/15拉繩-船師大船師梵唄.mp3'},
        # 18..23: daChuanShi 醫療各場次專屬曲目
        {'fk': 'daChuanShi', 'sessions': ['1112'], 'audio': 'Music/慈善+醫療/18北慈＿疫情捨我其誰.mp3'}, # 羅倫佐
        {'fk': 'daChuanShi', 'sessions': ['1112'], 'audio': 'Music/慈善+醫療/16 大醫王.mp3'}, # 大埔無醫村
        {'fk': 'daChuanShi', 'sessions': ['1113'], 'audio': ''}, # 花慈連體嬰
        {'fk': 'daChuanShi', 'sessions': ['1114'], 'audio': 'Music/慈善+醫療/18北慈＿疫情捨我其誰.mp3'}, # 北慈疫情 (白袍禮讚)
        {'fk': 'daChuanShi', 'sessions': ['1114'], 'audio': ''}, # 中慈江永旭
        {'fk': 'daChuanShi', 'sessions': ['1115'], 'audio': 'Music/慈善+醫療/17 骨捐.mp3'}, # 北慈八仙塵爆
        # 24: 大醫王
        {'fk': 'daChuanShi', 'sessions': ['1112', '1113', '1114', '1115'], 'audio': 'Music/慈善+醫療/16 大醫王.mp3'},
        # 25..26: boneDonation (骨捐、大體捐贈)
        {'fk': 'boneDonation', 'sessions': ['1112', '1113', '1114', '1115'], 'audio': 'Music/慈善+醫療/17 骨捐.mp3'},
        {'fk': 'boneDonation', 'sessions': ['1112', '1113', '1114', '1115'], 'audio': 'Music/慈善+醫療/17 骨捐.mp3'},
        # 27..29: edu (教育說法品梵唄、大體老師、慈大醫學院宣誓)
        {'fk': 'edu', 'sessions': ['1112', '1113', '1114', '1115'], 'audio': 'Music/教育+人文/教育01_教育說法品梵唄.mp3'},
        {'fk': 'edu', 'sessions': ['1112', '1113', '1114', '1115'], 'audio': 'Music/教育+人文/教育02_大體老師.mp3'},
        {'fk': 'edu', 'sessions': ['1112', '1113', '1114', '1115'], 'audio': 'Music/教育+人文/教育03_慈大醫學院宣誓.mp3'},
        # 30: 許永祥 (11/12, 11/13)
        {'fk': 'edu', 'sessions': ['1112', '1113'], 'audio': 'Music/教育+人文/教育02_大體老師.mp3'},
        # 31..32: 慈小、教育完全化
        {'fk': 'edu', 'sessions': ['1112', '1113', '1114', '1115'], 'audio': 'Music/教育+人文/教育04_慈小個案.mp3'},
        {'fk': 'edu', 'sessions': ['1112', '1113', '1114', '1115'], 'audio': 'Music/教育+人文/教育05_教育完全化.mp3'},
        # 33: 靜思語教學 (11/14, 11/15)
        {'fk': 'edu', 'sessions': ['1114', '1115'], 'audio': 'Music/教育+人文/教育06_靜思語教學.mp3'},
        # 34..35: humanities1 (幸福人生講座、跪羊圖)
        {'fk': 'humanities1', 'sessions': ['1112', '1113', '1114', '1115'], 'audio': 'Music/教育+人文/人文02_幸福人生講座.mp3'},
        {'fk': 'humanities1', 'sessions': ['1112', '1113', '1114', '1115'], 'audio': 'Music/教育+人文/人文02_幸福人生講座.mp3'},
        # 36: 【七月是吉祥月(換主機板隊形) 孝親月 歡喜月(目犍連救母) 】
        {'fk': 'humanities2', 'sessions': ['1112', '1113', '1114', '1115'], 'audio': ''},
        # 37: 十戒 (慈誠隊歌)
        {'fk': 'humanities2', 'sessions': ['1112', '1113', '1114', '1115'], 'audio': 'Music/教育+人文/人文01_慈誠隊歌.mp3'},
        # 38..41: humanities2 (大愛台經典、大地的園丁、法譬如水能洗垢、慈悲科技上聯合國)
        {'fk': 'humanities2', 'sessions': ['1112', '1113', '1114', '1115'], 'audio': 'Music/教育+人文/人文03_大愛讓世界亮起來_珺月.mp3'},
        {'fk': 'humanities2', 'sessions': ['1112', '1113', '1114', '1115'], 'audio': 'Music/教育+人文/人文04_大地的園丁.mp3'},
        {'fk': 'humanities2', 'sessions': ['1112', '1113', '1114', '1115'], 'audio': 'Music/教育+人文/人文05_法譬如水能洗垢.mp3'},
        {'fk': 'humanities2', 'sessions': ['1112', '1113', '1114', '1115'], 'audio': 'Music/教育+人文/人文06_慈悲科技上聯合國.mp3'},
        # 42: 樂生 (11/12, 11/15)
        {'fk': 'fiveContinents2', 'sessions': ['1112', '1115'], 'audio': 'Music/功德品/1112/11_12 [功德品] 01樂生療養院_超越天堂.mp3'},
        # 43: 【第一功德】
        {'fk': 'fiveContinents2', 'sessions': ['1112', '1113', '1114', '1115'], 'audio': ''},
        # 44: 富中之富A (0922: 11/13, 11/15)
        {'fk': 'fiveContinents2', 'sessions': ['1113', '1115'], 'audio': 'Music/功德品/1112/[功德品] 富中之富-A 0811.wav'},
        # 45: 富中之富B (0922: 11/12, 11/14)
        {'fk': 'fiveContinents2', 'sessions': ['1112', '1114'], 'audio': 'Music/功德品/1112/[功德品] 富中之富-A 0811.wav'},
        # 46: 【五毛錢的力量(馬來西亞阿婆)】
        {'fk': 'fiveContinents2', 'sessions': ['1112', '1113', '1114', '1115'], 'audio': ''},
        # 47: 開經書
        {'fk': 'fiveContinents1', 'sessions': ['1112', '1113', '1114', '1115'], 'audio': 'Music/功德品/1112/[功德品] 開經書_無量義經佛宅來.mp3'},
        # 48..51: 11/12 黑區、化城喻、約旦、啟航
        {'fk': 'fiveContinents2', 'sessions': ['1112'], 'audio': 'Music/功德品/1112/11_12 [功德品] 03A黑區&亮區_第六功德.mp3'},
        {'fk': 'fiveContinents2', 'sessions': ['1112'], 'audio': 'Music/功德品/1112/11_12 [功德品] 03B黑區&亮區_化城喻故事.mp3'},
        {'fk': 'fiveContinents2', 'sessions': ['1112'], 'audio': 'Music/功德品/1112/11_12 [功德品] 02A第三功德(約旦).mp3'},
        {'fk': 'fiveContinents2', 'sessions': ['1112'], 'audio': 'Music/功德品/1112/11_12 [功德品] 02B啟航(約旦).mp3'},
        # 52..53: 11/12 台灣救災集錦、衣珠喻手扎
        {'fk': 'fiveContinents1', 'sessions': ['1112'], 'audio': 'Music/功德品/1112/11_12 [功德品] 05台灣救災集錦_第五功德.mp3'},
        {'fk': 'fiveContinents1', 'sessions': ['1112'], 'audio': 'Music/功德品/1112/11_12 [功德品] 05台灣救災集錦_第五功德.mp3'},
        # 54..58: 11/13 土耳其、莫三比克、髻珠喻、印尼、化城喻
        {'fk': 'fiveContinents2', 'sessions': ['1113'], 'audio': 'Music/功德品/1112/11_12 [功德品] 02A第三功德(約旦).mp3'},
        {'fk': 'fiveContinents2', 'sessions': ['1113'], 'audio': 'Music/功德品/1112/11_12 [功德品] 04A莫三比克_第八功德.mp3'},
        {'fk': 'fiveContinents2', 'sessions': ['1113'], 'audio': 'Music/功德品/1112/11_12 [功德品] 04B莫三比克_髻珠喻經文.mp3'},
        {'fk': 'fiveContinents2', 'sessions': ['1113'], 'audio': ''},
        {'fk': 'fiveContinents2', 'sessions': ['1113'], 'audio': ''},
        # 59..65: 11/14 緬甸、八八風災、十在心路、泰北、辛巴威第八功德、生生世世都在菩提中、髻珠喻經文
        {'fk': 'fiveContinents2', 'sessions': ['1114'], 'audio': 'Music/功德品/1114/11_14 [功德品] 01第二功德(緬甸米撲滿).mp3'},
        {'fk': 'fiveContinents2', 'sessions': ['1114'], 'audio': 'Music/功德品/1114/11_14 [功德品] 02第七功德(八八風災).mp3'},
        {'fk': 'fiveContinents2', 'sessions': ['1114'], 'audio': 'Music/功德品/1114/11_14 [功德品] 02第七功德(八八風災).mp3'},
        {'fk': 'fiveContinents2', 'sessions': ['1114'], 'audio': 'Music/功德品/1114/11_14 [功德品] 03第四功德(泰北).mp3'},
        {'fk': 'fiveContinents2', 'sessions': ['1114'], 'audio': 'Music/功德品/1114/11_14 [功德品] 04A第八功德(辛巴威).mp3'},
        {'fk': 'fiveContinents2', 'sessions': ['1114'], 'audio': 'Music/功德品/1114/11_14 [功德品] 05生生世世都在菩提中(辛巴威).mp3'},
        {'fk': 'fiveContinents2', 'sessions': ['1114'], 'audio': 'Music/功德品/1114/11_14 [功德品] 04B髻珠喻經文(辛巴威).mp3'},
        # 66: 11/15 921 第九功德
        {'fk': 'fiveContinents1', 'sessions': ['1115'], 'audio': ''},
        # 67..71: 11/15 921化城喻(若入是城)、化城喻(諸惡道險)、減災工程、報佛恩、第十功德
        {'fk': 'fiveContinents2', 'sessions': ['1115'], 'audio': 'Music/功德品/1112/11_12 [功德品] 03B黑區&亮區_化城喻故事.mp3'},
        {'fk': 'fiveContinents2', 'sessions': ['1115'], 'audio': 'Music/功德品/1112/11_12 [功德品] 03B黑區&亮區_化城喻故事.mp3'},
        {'fk': 'fiveContinents2', 'sessions': ['1115'], 'audio': ''},
        {'fk': 'fiveContinents2', 'sessions': ['1115'], 'audio': ''},
        {'fk': 'fiveContinents2', 'sessions': ['1115'], 'audio': ''},
        # 72..75: 六瑞相、發心立願、慈濟小行星、祈禱
        {'fk': 'sixRuiXiang', 'sessions': ['1112', '1113', '1114', '1115'], 'audio': 'Music/終章/01.六瑞相.mp3'},
        {'fk': 'sixRuiXiang', 'sessions': ['1112', '1113', '1114', '1115'], 'audio': 'Music/終章/02.發心立願.mp3'},
        {'fk': 'sixRuiXiang', 'sessions': ['1112', '1113', '1114', '1115'], 'audio': 'Music/終章/03.慈濟小行星演繹版+開示.mp3'},
        {'fk': 'sixRuiXiang', 'sessions': ['1112', '1113', '1114', '1115'], 'audio': 'Music/終章/04.祈禱三分版.mp3'}
    ]

    # Video Injection rules for Five Continents
    VIDEO_INJECTIONS = [
        ('', '開經書', [('東班', 'https://youtu.be/p2KSIGqj5VE'), ('西班', 'https://youtu.be/dyWGw6dC88I')]),
        ('11/12', '樂生', [('[功德品] 樂生', 'https://www.youtube.com/watch?v=mGhnmtxZrn8&list=PLbIvC-A2H2ko')]),
        ('11/15', '樂生', [('[功德品] 樂生', 'https://www.youtube.com/watch?v=mGhnmtxZrn8&list=PLcdQvmBAiLJ0')]),
        # 富中之富 A & B video mappings (0922: A is 11/13, 11/15; B is 11/12, 11/14)
        ('11/12', '富中之富  B', [('[功德品] 富中之富 B', 'https://www.youtube.com/watch?v=14EMlfGGBXY&list=PLbIvC-A2H2ko')]),
        ('11/14', '富中之富  B', [('[功德品] 富中之富 B', 'https://www.youtube.com/watch?v=14EMlfGGBXY&list=PLGRfIGuFCUAQ')]),
        ('11/13', '富中之富  A', [('[功德品] 富中之富 A', 'https://www.youtube.com/watch?v=m2NvdK1rQpk&list=PLGafJimf9RDw')]),
        ('11/15', '富中之富  A', [('[功德品] 富中之富 A', 'https://www.youtube.com/watch?v=m2NvdK1rQpk&list=PLcdQvmBAiLJ0')]),
        ('', '富中之富  A', [('[功德品] 富中之富 A', 'https://www.youtube.com/watch?v=m2NvdK1rQpk')]),
        ('', '富中之富  B', [('[功德品] 富中之富 B', 'https://www.youtube.com/watch?v=14EMlfGGBXY')]),
        ('11/12', '第三功德', [('[功德品] 第三功德‧約旦+土耳其', 'https://www.youtube.com/watch?v=0UcRe5beSzw&list=PLbIvC-A2H2ko')]),
        ('11/12', '約旦', [('[功德品] 張起大愛的風帆‧約旦(法海)', 'https://www.youtube.com/watch?v=MD8To93EY0I&list=PLbIvC-A2H2ko')]),
        ('11/12', '啟航', [('[功德品] 張起大愛的風帆‧約旦(法海)', 'https://www.youtube.com/watch?v=MD8To93EY0I&list=PLbIvC-A2H2ko')]),
        ('11/12', '第六功德', [('[功德品] 第六功德‧黑區變亮區', 'https://www.youtube.com/watch?v=1SAdHJZAVuc&list=PLbIvC-A2H2ko')]),
        ('11/12', '黑區變亮區', [('[功德品] 第六功德‧黑區變亮區', 'https://www.youtube.com/watch?v=1SAdHJZAVuc&list=PLbIvC-A2H2ko')]),
        ('11/12', '化城喻', [('[功德品] 諸惡道險猶長遠‧黑區變亮區(法海)', 'https://www.youtube.com/watch?v=y2cdRGMovd0&list=PLbIvC-A2H2ko')]),
        ('11/12', '台灣救災', [('[功德品] 第五功德‧台灣救災集錦', 'https://www.youtube.com/watch?v=aNi9Y8qbZp0&list=PLbIvC-A2H2ko')]),
        ('11/13', '土耳其', [('[功德品] 第三功德‧約旦+土耳其', 'https://www.youtube.com/watch?v=0UcRe5beSzw&list=PLGafJimf9RDw')]),
        ('11/13', '第八功德', [('[功德品] 第八功德‧非洲', 'https://www.youtube.com/watch?v=vZU-rtMuEoE&list=PLGafJimf9RDw')]),
        ('11/13', '莫三比克', [('[功德品] 第八功德‧非洲', 'https://www.youtube.com/watch?v=vZU-rtMuEoE&list=PLGafJimf9RDw')]),
        ('11/13', '髻珠喻', [('11/13 [功德品] 身口意念應守護(南非‧法海)', 'https://www.youtube.com/watch?v=htAI4IbqJtE&list=PLGafJimf9RDw')]),
        ('11/13', '第九功德', [('[功德品] 第九功德‧印尼', 'https://www.youtube.com/watch?v=CvAlUYsudqk&list=PLGafJimf9RDw')]),
        ('11/13', '印尼', [('[功德品] 第九功德‧印尼', 'https://www.youtube.com/watch?v=CvAlUYsudqk&list=PLGafJimf9RDw')]),
        ('11/13', '化城喻', [('[功德品] 菩薩慈悲憫眾生‧印尼(法海)', 'https://www.youtube.com/watch?v=xmX4NrnNqJA&list=PLGafJimf9RDw')]),
        ('11/14', '第二功德', [('11/14 [功德品] 第二功德 緬甸米撲滿', 'https://www.youtube.com/watch?v=yeEd_aeAv5k&list=PLGRfIGuFCUAQ')]),
        ('11/14', '緬甸', [('11/14 [功德品] 第二功德 緬甸米撲滿', 'https://www.youtube.com/watch?v=yeEd_aeAv5k&list=PLGRfIGuFCUAQ')]),
        ('11/14', '第七功德', [('[功德品] 第七功德‧莫拉克風災', 'https://www.youtube.com/watch?v=mjPNSTARlmY&list=PLGRfIGuFCUAQ')]),
        ('11/14', '八八風災', [('[功德品] 第七功德‧莫拉克風災', 'https://www.youtube.com/watch?v=mjPNSTARlmY&list=PLGRfIGuFCUAQ')]),
        ('11/14', '泰北', [('[功德品] 第四功德‧泰北', 'https://www.youtube.com/watch?v=_iO0oVSMR8s&list=PLGRfIGuFCUAQ')]),
        ('11/14', '第四功德', [('[功德品] 第四功德‧泰北', 'https://www.youtube.com/watch?v=_iO0oVSMR8s&list=PLGRfIGuFCUAQ')]),
        ('11/14', '第八功德', [('[功德品] 第八功德‧非洲', 'https://www.youtube.com/watch?v=vZU-rtMuEoE&list=PLGRfIGuFCUAQ')]),
        ('11/14', '辛巴威', [('[功德品] 第八功德‧非洲', 'https://www.youtube.com/watch?v=vZU-rtMuEoE&list=PLGRfIGuFCUAQ')]),
        ('11/14', '髻珠喻', [('[功德品] 身口意念應守護(辛巴威)', 'https://www.youtube.com/watch?v=hfwvSIDG0EE&list=PLGRfIGuFCUAQ')]),
        ('11/14', '生生世世', [('[功德品] 生生世世都在菩提中(辛巴威)', 'https://www.youtube.com/watch?v=cSjyuO_KRp8&list=PLGRfIGuFCUAQ')]),
        ('11/15', '樂生', [('[功德品] 樂生', 'https://www.youtube.com/watch?v=mGhnmtxZrn8&list=PLcdQvmBAiLJ0')]),
        ('11/15', '九二一', [('[功德品] 第九功德‧921地震', 'https://www.youtube.com/watch?v=hUpDtkqTQNM&list=PLcdQvmBAiLJ0')]),
        ('11/15', '921', [('[功德品] 第九功德‧921地震', 'https://www.youtube.com/watch?v=hUpDtkqTQNM&list=PLcdQvmBAiLJ0')]),
        ('11/15', '化城喻', [('[化城喻故事] 921地湧菩薩', 'https://www.youtube.com/watch?v=06ylKzGmhdQ')]),
        ('11/15', '減災工程', [('[功德品] 大愛為樑(減災希望工程)', 'https://www.youtube.com/watch?v=Qu7wLnDXivU&list=PLcdQvmBAiLJ0')]),
        ('11/15', '報佛恩', [('[功德品] 報佛恩', 'https://www.youtube.com/watch?v=KwsN8MKQxOE&list=PLcdQvmBAiLJ0')]),
        ('11/15', '第十功德', [
            ('[功德品] 飛天‧白衣走', 'https://www.youtube.com/watch?v=eyAZbFSw39M&list=PLcdQvmBAiLJ0'),
            ('[功德品] 飛天‧藍衣走', 'https://www.youtube.com/watch?v=8FLAEwVIV4k&list=PLcdQvmBAiLJ0'),
            ('[功德品] 飛天‧不動', 'https://www.youtube.com/watch?v=8zdJcA0VUMA&list=PLcdQvmBAiLJ0')
        ])
    ]

    def extract_vid(u):
        m = re.search(r'(?:v=|youtu\.be\/)([a-zA-Z0-9_-]{11})', u)
        return m.group(1) if m else ''

    new_sections = []

    for i in range(len(raw_sections)):
        raw = raw_sections[i]
        cfg = section_configs[i]

        audio = cfg.get('audio', '')
        videos = []

        # Check if video injection matches title (only for fiveContinents chapters)
        title = raw['title']
        if cfg['fk'] in ['fiveContinents1', 'fiveContinents2']:
            for sess_prefix, keyword, video_entries in VIDEO_INJECTIONS:
                match = False
                sess_key = sess_prefix.replace('/', '')
                if sess_key:
                    if sess_key in cfg['sessions'] and keyword in title:
                        match = True
                else:
                    if keyword in title:
                        match = True
                if match:
                    videos = [
                        {'title': label, 'url': url, 'videoId': extract_vid(url)}
                        for label, url in video_entries
                    ]
                    break

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
    pdf_file = '大巨蛋演繹段歌詞OS內容節錄_YDT_0922.pdf' if os.path.exists('大巨蛋演繹段歌詞OS內容節錄_YDT_0922.pdf') else ('大巨蛋演繹段歌詞OS內容節錄_YDT_0916.pdf' if os.path.exists('大巨蛋演繹段歌詞OS內容節錄_YDT_0916.pdf') else '大巨蛋演繹段歌詞OS內容節錄_YDT_0909.pdf')
    if not os.path.exists(pdf_file):
        print(f"Error: {pdf_file} not found")
        return

    sections = generate_lyrics_os_database(pdf_file)
    print(f"Generated {len(sections)} sections from {pdf_file}")

    js_content = "// 大巨蛋演繹段歌詞與 OS 內容資料庫 (依據 0922 PDF 產生，支援多場次動態過濾與精確劇本排版)\n"
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


