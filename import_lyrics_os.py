import docx
import json
import os
import re
import urllib.parse

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

def get_audio_from_para(p, doc):
    for child in p._p.iter():
        if child.tag.endswith('hyperlink'):
            r_id = child.attrib.get('{http://schemas.openxmlformats.org/officeDocument/2006/relationships}id')
            if r_id and r_id in doc.part.rels:
                raw_target = doc.part.rels[r_id].target_ref
                return urllib.parse.unquote(raw_target)
    
    # Or extract from paragraph text
    m = re.search(r'\[(?:🎵\s*)?播放音檔:\s*([^\]]+)\]', p.text)
    if m:
        return urllib.parse.unquote(m.group(1).strip())
    return ''

def clean_section_title(raw_text):
    # Strip any '[🎵 播放音檔:...]' or '[點擊播放音檔]' suffixes
    t = re.sub(r'\s*(\[(?:🎵\s*)?播放音檔:.*$|\[點擊播放音檔\])', '', raw_text).strip()
    return t

def determine_section_metadata(title, current_five_continents_date, current_step_hint):
    s_keys = ['1112', '1113', '1114', '1115']
    s_label = '全場次'
    
    # Date matching (Check multi-day combinations first)
    if '11/12、13' in title or '11/12、11/13' in title or '11/12、 13' in title:
        s_keys = ['1112', '1113']
        s_label = '11/12、11/13 專屬'
    elif '11/14、15' in title or '11/14、11/15' in title or '11/14、 15' in title:
        s_keys = ['1114', '1115']
        s_label = '11/14、11/15 專屬'
    elif '11/12、15' in title or '11/12、11/15' in title or '11/12、 15' in title:
        s_keys = ['1112', '1115']
        s_label = '11/12、11/15 專屬'
    elif '11/12、14' in title or '11/12、11/14' in title or '11/12、 14' in title:
        s_keys = ['1112', '1114']
        s_label = '11/12、11/14 專屬'
    elif '11/13、15' in title or '11/13、11/15' in title or '11/13、 15' in title:
        s_keys = ['1113', '1115']
        s_label = '11/13、11/15 專屬'
    elif '11/12' in title and ('專屬' in title or '第1天' in title):
        s_keys = ['1112']
        s_label = '11/12 (第1天) 專屬'
    elif '11/13' in title and ('專屬' in title or '第2天' in title):
        s_keys = ['1113']
        s_label = '11/13 (第2天) 專屬'
    elif '11/14' in title and ('專屬' in title or '第3天' in title):
        s_keys = ['1114']
        s_label = '11/14 (第3天) 專屬'
    elif '11/15' in title and ('專屬' in title or '第4天' in title):
        s_keys = ['1115']
        s_label = '11/15 (第4天) 專屬'
    elif current_five_continents_date:
        s_keys = [current_five_continents_date]
        day_map = {
            '1112': '11/12 (第1天) 專屬',
            '1113': '11/13 (第2天) 專屬',
            '1114': '11/14 (第3天) 專屬',
            '1115': '11/15 (第4天) 專屬'
        }
        s_label = day_map.get(current_five_continents_date, '專屬場次')

    # Formation matching
    f_key = current_step_hint or 'circle'
    if any(k in title for k in ['【序', '【生】', '【生 ', '【老', '【病', '【死', '【六度']):
        f_key = 'circle'
    elif any(k in title for k in ['【行願', '【開經偈']):
        f_key = 'xingYuan'
    elif '【扛天下米籮' in title:
        f_key = 'miLuo'
    elif '【靜思家風' in title:
        f_key = 'jingSi'
    elif '【點一盞燈' in title:
        f_key = 'lamp'
    elif '【菜市場' in title:
        f_key = 'noBoat'
    elif '【慈善ending' in title or '圍爐' in title:
        f_key = 'noBoat3'
    elif any(k in title for k in ['【地藏經', '【四弘誓願']):
        f_key = 'bigV'
    elif any(k in title for k in ['【拉繩', '【醫療德行品', '【大醫王']):
        f_key = 'daChuanShi'
    elif any(k in title for k in ['【骨捐', '【大體捐贈', '【北慈.疫情', '【花慈', '【北慈.八仙']):
        f_key = 'boneDonation'
    elif any(k in title for k in ['【教育說法品', '【許永祥', '【大體老師', '【慈大醫學院', '【慈小', '【教育完全化', '【靜思語教學']):
        f_key = 'edu'
    elif current_step_hint == 'humanities1' or any(k in title for k in ['【十戒', '【幸福人生', '【跪羊圖', '【大愛台']):
        f_key = 'humanities1'
    elif current_step_hint == 'humanities2' or any(k in title for k in ['【大地的園丁', '【法譬如水', '【慈悲科技']):
        f_key = 'humanities2'
    elif any(k in title for k in ['【貧中之富', '【富中之富', '【開經書']):
        f_key = 'fiveContinents1'
    elif current_five_continents_date or any(k in title for k in ['功德', '化城喻', '生生世世', '許一個希望', '人間導師', '第十功德']):
        if current_step_hint == 'sixRuiXiang' or any(k in title for k in ['【六瑞相', '【發心立願', '【慈濟小行星', '【祈禱']):
            f_key = 'sixRuiXiang'
        else:
            f_key = 'fiveContinents2'
    elif any(k in title for k in ['【六瑞相', '【發心立願', '【慈濟小行星', '【祈禱']):
        f_key = 'sixRuiXiang'

    f_label = FORMATION_LABELS.get(f_key, f_key)
    return f_key, f_label, s_keys, s_label

def extract_para_segments(p):
    has_p_border = bool(p._p.xpath('./w:pPr/w:pBdr'))
    segments = []
    
    for r in p.runs:
        t = r.text
        if not t:
            continue
        color = r.font.color.rgb if r.font.color else None
        c_str = str(color).upper() if color else None
        is_red = c_str in ['EE0000', 'FF0000', 'A31515', 'FF0066']
        is_box = has_p_border or bool(r._r.xpath('./w:rPr/w:bdr'))
        
        # Merge with previous segment if same styling
        if segments and segments[-1]['isRed'] == is_red and segments[-1]['isBoxed'] == is_box:
            segments[-1]['text'] += t
        else:
            segments.append({
                'text': t,
                'isRed': is_red,
                'isBoxed': is_box
            })
    return segments

def parse_docx(docx_path):
    doc = docx.Document(docx_path)
    sections = []
    current_section = None
    current_five_continents_date = None
    current_step_hint = 'circle'

    for p in doc.paragraphs:
        raw_text = p.text.strip()
        if not raw_text:
            continue

        # Step marker in text
        if '09-1人文' in raw_text:
            current_step_hint = 'humanities1'
        elif '09-2人文' in raw_text:
            current_step_hint = 'humanities2'
        elif '10-1五大洲' in raw_text:
            current_step_hint = 'fiveContinents1'
        elif '12-1六瑞相' in raw_text:
            current_step_hint = 'sixRuiXiang'
            current_five_continents_date = None

        # Check divider lines for Five Continents
        if '---' in raw_text or '——' in raw_text:
            if '11/12' in raw_text:
                current_five_continents_date = '1112'
            elif '11/13' in raw_text:
                current_five_continents_date = '1113'
            elif '11/14' in raw_text:
                current_five_continents_date = '1114'
            elif '11/15' in raw_text:
                current_five_continents_date = '1115'
            continue

        # Check if line is a section header (starts with 【...】)
        if raw_text.startswith('【'):
            if current_section and (current_section['title'] or current_section['lines']):
                sections.append(current_section)
            
            title = clean_section_title(raw_text)
            audio_target = get_audio_from_para(p, doc)
            if audio_target.endswith('.wav'):
                audio_target = audio_target[:-4] + '.m4a'

            f_key, f_label, s_keys, s_label = determine_section_metadata(raw_text, current_five_continents_date, current_step_hint)

            current_section = {
                'id': f'sec_{len(sections) + 1}',
                'title': title,
                'formationKey': f_key,
                'formationLabel': f_label,
                'sessionKeys': s_keys,
                'sessionLabel': s_label,
                'audio': audio_target,
                'lines': []
            }
        else:
            if current_section is None:
                continue
            
            # Check line type: OS, dialogue, annotation, or lyrics
            line_type = 'lyrics'
            if re.search(r'^(os|OS|ＯＳ|ｏｓ)[:：\s]?', raw_text, re.IGNORECASE) or 'os' in raw_text.lower():
                line_type = 'os'
            elif '：' in raw_text or ':' in raw_text:
                prefix = raw_text.split('：')[0].split(':')[0]
                if len(prefix) <= 10 and not any(ch in prefix for ch in ['，', '。', '、']):
                    line_type = 'dialogue'
            elif raw_text.startswith('(') or raw_text.startswith('（'):
                line_type = 'annotation'

            segments = extract_para_segments(p)

            current_section['lines'].append({
                'text': raw_text,
                'type': line_type,
                'segments': segments
            })

    if current_section and (current_section['title'] or current_section['lines']):
        sections.append(current_section)

    return sections

def main():
    docx_file = '大巨蛋演繹段歌詞OS內容.docx'
    if not os.path.exists(docx_file):
        print(f"Error: {docx_file} not found")
        return

    sections = parse_docx(docx_file)
    print(f"Parsed {len(sections)} sections from {docx_file}")

    js_content = "// 大巨蛋演繹段歌詞與 OS 內容資料庫 (自動由 import_lyrics_os.py 產生)\n"
    js_content += f"const LYRICS_OS_DATA = {json.dumps(sections, ensure_ascii=False, indent=2)};\n"

    out_file = 'lyrics_os_data.js'
    with open(out_file, 'w', encoding='utf-8') as f:
        f.write(js_content)

    print(f"Generated {out_file} successfully ({len(js_content)} bytes)")

if __name__ == '__main__':
    main()



