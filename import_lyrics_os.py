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
    'fiveContinents1': '10-1五大洲 (台灣/富中之富)',
    'fiveContinents2': '10-2五大洲 (功德品各場次)',
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

def generate_lyrics_os_database(pdf_file, existing_data_file='lyrics_os_data.js'):
    # 1. Load existing database to inherit metadata (audio, videos, formations, sessions)
    with open(existing_data_file, 'r', encoding='utf-8') as f:
        existing = json.loads(re.search(r'const LYRICS_OS_DATA = (\[.*?\]);', f.read(), re.DOTALL).group(1))

    # 2. Extract PDF pages data
    pdf_pages = extract_pdf_data(pdf_file)

    pdf_sections = []
    cur_sec = None

    for p in pdf_pages:
        for l in p['lines']:
            line_text = ''.join(s['text'] for s in l).strip()
            if not line_text or line_text.startswith('---') or line_text.startswith('——'):
                continue
            
            if cur_sec and cur_sec.get('pending_title'):
                cur_sec['title'] += ' ' + line_text
                cur_sec['title_spans'].extend(l)
                if '】' in line_text:
                    cur_sec['pending_title'] = False
                continue

            if line_text.startswith('【'):
                if cur_sec:
                    pdf_sections.append(cur_sec)
                cur_sec = {
                    'title': line_text,
                    'title_spans': list(l),
                    'pending_title': not ('】' in line_text),
                    'content_spans': []
                }
            else:
                if cur_sec:
                    cur_sec['content_spans'].extend(l)

    if cur_sec:
        pdf_sections.append(cur_sec)

    assert len(existing) == len(pdf_sections), f"Section count mismatch: {len(existing)} vs {len(pdf_sections)}"

    new_sections = []

    for i in range(len(existing)):
        ex = existing[i]
        pdf = pdf_sections[i]

        pdf_chars = []
        for s in pdf['content_spans']:
            for ch in s['text']:
                if ch in ['\n', '\r', '\t']:
                    continue
                c_hex = s['color'].upper()
                is_red = c_hex in ['EE0000', 'FF0000', 'A31515', 'FF0066']
                is_green = (c_hex == '196B24')
                is_blue = (c_hex == '0000FF')
                is_purple = (c_hex == '77206D')
                is_boxed = s['isBoxed']
                is_bold = s['isBold']
                is_italic = s['isItalic']

                pdf_chars.append({
                    'char': ch,
                    'isRed': is_red,
                    'isGreen': is_green,
                    'isBlue': is_blue,
                    'isPurple': is_purple,
                    'isBoxed': is_boxed,
                    'isBold': is_bold,
                    'isItalic': is_italic,
                    'color': c_hex
                })

        new_lines = []
        p_idx = 0
        total_p_chars = len(pdf_chars)

        for line in ex['lines']:
            line_text = line['text']
            line_type = line['type']

            line_chars = []
            for ch in line_text:
                if ch.isspace():
                    prev_style = line_chars[-1] if line_chars else (pdf_chars[p_idx] if p_idx < total_p_chars else {})
                    line_chars.append({
                        'char': ch,
                        'isRed': prev_style.get('isRed', False),
                        'isGreen': prev_style.get('isGreen', False),
                        'isBlue': prev_style.get('isBlue', False),
                        'isPurple': prev_style.get('isPurple', False),
                        'isBoxed': prev_style.get('isBoxed', False),
                        'isBold': prev_style.get('isBold', False),
                        'isItalic': prev_style.get('isItalic', False),
                        'color': prev_style.get('color', '000000')
                    })
                    if p_idx < total_p_chars and pdf_chars[p_idx]['char'].isspace():
                        p_idx += 1
                else:
                    while p_idx < total_p_chars and pdf_chars[p_idx]['char'].isspace():
                        p_idx += 1
                    
                    if p_idx < total_p_chars and pdf_chars[p_idx]['char'] == ch:
                        style = pdf_chars[p_idx]
                        line_chars.append({
                            'char': ch,
                            'isRed': style['isRed'],
                            'isGreen': style['isGreen'],
                            'isBlue': style['isBlue'],
                            'isPurple': style['isPurple'],
                            'isBoxed': style['isBoxed'],
                            'isBold': style['isBold'],
                            'isItalic': style['isItalic'],
                            'color': style['color']
                        })
                        p_idx += 1
                    else:
                        line_chars.append({
                            'char': ch,
                            'isRed': False,
                            'isGreen': False,
                            'isBlue': False,
                            'isPurple': False,
                            'isBoxed': False,
                            'isBold': False,
                            'isItalic': False,
                            'color': '000000'
                        })

            segments = []
            for c_info in line_chars:
                ch = c_info['char']
                if not segments:
                    segments.append({
                        'text': ch,
                        'isRed': c_info['isRed'],
                        'isGreen': c_info['isGreen'],
                        'isBlue': c_info['isBlue'],
                        'isPurple': c_info['isPurple'],
                        'isBoxed': c_info['isBoxed'],
                        'isBold': c_info['isBold'],
                        'isItalic': c_info['isItalic'],
                        'color': c_info['color']
                    })
                else:
                    last = segments[-1]
                    same_style = (
                        last['isRed'] == c_info['isRed'] and
                        last['isGreen'] == c_info['isGreen'] and
                        last['isBlue'] == c_info['isBlue'] and
                        last['isPurple'] == c_info['isPurple'] and
                        last['isBoxed'] == c_info['isBoxed'] and
                        last['isBold'] == c_info['isBold'] and
                        last['isItalic'] == c_info['isItalic'] and
                        last['color'] == c_info['color']
                    )
                    if same_style:
                        last['text'] += ch
                    else:
                        segments.append({
                            'text': ch,
                            'isRed': c_info['isRed'],
                            'isGreen': c_info['isGreen'],
                            'isBlue': c_info['isBlue'],
                            'isPurple': c_info['isPurple'],
                            'isBoxed': c_info['isBoxed'],
                            'isBold': c_info['isBold'],
                            'isItalic': c_info['isItalic'],
                            'color': c_info['color']
                        })

            new_lines.append({
                'text': line_text,
                'type': line_type,
                'segments': segments
            })

        new_sec = {
            'id': ex['id'],
            'title': ex['title'],
            'formationKey': ex['formationKey'],
            'formationLabel': ex['formationLabel'],
            'sessionKeys': ex['sessionKeys'],
            'sessionLabel': ex['sessionLabel'],
            'audio': ex['audio'],
            'videos': ex['videos'],
            'lines': new_lines
        }
        new_sections.append(new_sec)

    return new_sections

def main():
    pdf_file = '大巨蛋演繹段歌詞OS內容節錄_YDT_0904.pdf'
    if not os.path.exists(pdf_file):
        print(f"Error: {pdf_file} not found")
        return

    sections = generate_lyrics_os_database(pdf_file)
    print(f"Generated {len(sections)} sections from {pdf_file}")

    js_content = "// 大巨蛋演繹段歌詞與 OS 內容資料庫 (自動由 import_lyrics_os.py 依據 0904 PDF 產生)\n"
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
