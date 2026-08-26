import docx
import json
import os
import re

def parse_docx(docx_path):
    doc = docx.Document(docx_path)
    sections = []
    current_section = None

    for p in doc.paragraphs:
        raw_text = p.text.strip()
        if not raw_text:
            continue

        # Check if line is a section header (starts with 【...】)
        if raw_text.startswith('【'):
            if current_section and (current_section['title'] or current_section['lines']):
                sections.append(current_section)
            
            title = raw_text
            current_section = {
                'title': title,
                'lines': []
            }
        else:
            if current_section is None:
                current_section = {
                    'title': '【序曲】',
                    'lines': []
                }
            
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

            current_section['lines'].append({
                'text': raw_text,
                'type': line_type
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
