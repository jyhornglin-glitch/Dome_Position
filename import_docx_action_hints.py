#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
import_docx_action_hints.py
Parse 動作提示.docx, extract images to images/action_hints/, and generate action_hints_data.js.
"""

import os
import sys
import json
import shutil
import re
import docx
from docx.oxml.ns import qn

DOCX_FILE = "動作提示0909.docx" if os.path.exists("動作提示0909.docx") else ("動作提示0905.docx" if os.path.exists("動作提示0905.docx") else "動作提示.docx")
OUTPUT_JS = "action_hints_data.js"
IMAGE_DIR = os.path.join("images", "action_hints")

# Map Word location names to formation keys in app.js
CATEGORY_MAPPING = {
    '01圓形': 'circle',
    '02行願': 'xingYuan',
    '03米籮': 'miLuo',
    '04靜思家風': 'jingSi',
    '05-1有法船(點一盞燈)': 'lamp',
    '05-2無法船(菜市場5毛錢)': 'noBoat',
    '05-3有法船(是諸眾生)': 'noBoat3', # Support both formatting
    '05-3無法船(是諸眾生)': 'noBoat3',
    '06四弘誓願': 'bigV',
    '06四弘誓願07-1大船師': 'bigV_or_daChuanShi',
    '06四弘誓願 07-1大船師': 'bigV_or_daChuanShi',
    '07-1大船師': 'daChuanShi',
    '07-2骨捐能捨': 'boneDonation',
    '08教育': 'edu',
    '09-1人文': 'humanities1',
    '09-1人文(基本隊形)': 'humanities1',
    '09-2人文': 'humanities2',
    '09-2人文(主機板)': 'humanities2',
    # Five Continents 1 (五大洲 10-1 / 10-4 台灣段)
    '10-1五大洲': 'fiveContinents1',
    '10-1五大洲(台灣)': 'fiveContinents1',
    '10-2五大洲(台灣)': 'fiveContinents1',
    '10-4五大洲(台灣)': 'fiveContinents1',
    '11-1五大洲': 'fiveContinents1',
    '11-1五大洲(台灣)': 'fiveContinents1',
    '五大洲(台灣)': 'fiveContinents1',
    # Five Continents 2 (五大洲 10-2 / 10-3 / 10-5 各國/化城/佛國段)
    '10-2五大洲': 'fiveContinents2',
    '10-3五大洲': 'fiveContinents2',
    '10-5五大洲': 'fiveContinents2',
    '11-2五大洲': 'fiveContinents2'
}

def get_images_from_cell(cell, doc, image_counter):
    extracted_images = []
    tc = cell._tc
    blips = tc.xpath('.//a:blip')
    for blip in blips:
        embed_id = blip.get(qn('r:embed'))
        if embed_id:
            try:
                image_part = doc.part.related_parts[embed_id]
                image_bytes = image_part.blob
                
                # Deduce extension
                content_type = image_part.content_type
                ext = content_type.split('/')[-1]
                if ext == "jpeg":
                    ext = "jpg"
                
                image_counter += 1
                local_image_name = f"hint_{image_counter}.{ext}"
                local_image_path = os.path.join(IMAGE_DIR, local_image_name)
                
                with open(local_image_path, 'wb') as img_f:
                    img_f.write(image_bytes)
                extracted_images.append(f"images/action_hints/{local_image_name}")
            except Exception as e:
                print(f"Failed to extract image {embed_id}: {e}")
    return extracted_images, image_counter

def split_east_west_lines(lines):
    processed = []
    for line in lines:
        if "東班" in line and "西班" in line and ("youtu" in line or "http" in line):
            parts = line.split("西班")
            if len(parts) == 2:
                part1 = parts[0].strip()
                part2 = "西班" + parts[1].strip()
                processed.append(part1)
                processed.append(part2)
            else:
                processed.append(line)
        else:
            processed.append(line)
    return processed

def is_item_start(text):
    text_clean = text.strip()
    if not text_clean:
        return False
    # Split into lines
    lines = [l.strip() for l in text_clean.split('\n') if l.strip()]
    if not lines:
        return False
    first_line = lines[0]
    
    # Matches item start with number, e.g. "1. ", "13. ", "11/12：34.約旦", "11/13、11/15：13.是諸眾生", "11/15：40.【曲目2：第十功德】"
    if re.match(r'^(?:(?:\d{2}/\d{2}|\d{2})(?:[、,，](?:\d{2}/\d{2}|\d{2}))*[:：])?\s*(?:\d+[\.、\s]|【)', first_line):
        return True
    
    # Matches key action segments without leading numbers
    keywords = ['序，', '生，', '老，', '病，', '死，', '六度', '行願', '開經偈', '點一盞燈', '地藏經', '醫療梵唄', '四弘誓願', '大醫王', '骨捐', '能捨', '無醫村', '北慈', '江永旭', '大體老師', '小樹啊', '種樹', '成長', '感恩', '藥草喻', '慈誠隊歌', '父母恩重難報經', '大愛讓世界亮起來', '天空破了洞', '環保志工', '代謝不住', '開經書']
    if any(first_line.startswith(k) or ('【' in first_line and k in first_line) for k in keywords):
        return True
        
    return False

def main():
    if not os.path.exists(DOCX_FILE):
        print(f"Error: {DOCX_FILE} not found!")
        sys.exit(1)

    print(f"Parsing DOCX file: {DOCX_FILE}")

    # Recreate image directory
    if os.path.exists(IMAGE_DIR):
        shutil.rmtree(IMAGE_DIR)
    os.makedirs(IMAGE_DIR, exist_ok=True)

    doc = docx.Document(DOCX_FILE)
    table = doc.tables[0]
    R = len(table.rows)
    C = len(table.columns)
    print(f"Opened table with {R} rows, {C} columns.")

    action_hints_data = {
        'circle': [],
        'xingYuan': [],
        'miLuo': [],
        'jingSi': [],
        'lamp': [],
        'noBoat': [],
        'noBoat3': [],
        'bigV': [],
        'daChuanShi': [],
        'boneDonation': [],
        'edu': [],
        'humanities1': [],
        'humanities2': [],
        'fiveContinents1': [],
        'fiveContinents2': []
    }

    grid = [[None for _ in range(C)] for _ in range(R)]
    for r in range(R):
        for c in range(C):
            grid[r][c] = table.rows[r].cells[c]._tc

    visited = [[False for _ in range(C)] for _ in range(R)]
    
    image_counter = 0
    current_location = None
    current_items = {} # cat -> current_item reference

    for r in range(1, R):
        # 1. Resolve current location
        loc_cell = table.rows[r].cells[0]
        loc_text = loc_cell.text.strip()
        if loc_text:
            current_location = loc_text
            
        # Clean whitespaces and newlines
        loc_clean = re.sub(r'\s+', '', current_location) if current_location else ""
        cat = CATEGORY_MAPPING.get(loc_clean)
        if not cat:
            # Skip if location is not mapped
            continue
            
        for c in range(1, C):
            if visited[r][c]:
                continue
            
            tc = grid[r][c]
            
            # Calculate span to mark visited
            colspan = 1
            while c + colspan < C and grid[r][c + colspan] == tc:
                colspan += 1
                
            rowspan = 1
            while r + rowspan < R and grid[r + rowspan][c] == tc:
                rowspan += 1
                
            # Mark visited
            for dr in range(rowspan):
                for dc in range(colspan):
                    visited[r + dr][c + dc] = True
                    
            cell = table.rows[r].cells[c]
            cell_text = cell.text.strip()
            
            # Extract images from this cell
            cell_images, image_counter = get_images_from_cell(cell, doc, image_counter)
            
            if not cell_text and not cell_images:
                continue
                
            # Determine target categories based on contents
            # Determine target categories based on contents
            target_cats = []
            if '是諸眾生' in cell_text or '圍爐' in cell_text or '米甕與大魚' in cell_text:
                target_cats = ['noBoat3']
            elif loc_clean in ['06四弘誓願07-1大船師', '06四弘誓願 07-1大船師', '06四弘誓願', '07-1大船師']:
                if any(k in cell_text for k in ['地藏經', '四弘誓願', '德行品梵唄', '醫療梵唄']):
                    target_cats = ['bigV']
                elif any(k in cell_text for k in ['大醫王', '無醫村', '北慈', '江永旭', '醫子喻', '藥師如來']):
                    target_cats = ['daChuanShi']
                else:
                    target_cats = ['bigV'] if current_items.get('bigV') else ['daChuanShi']
            elif '五大洲' in loc_clean or '開經書' in cell_text or '無量義經功德品' in cell_text:
                if any(k in cell_text for k in ['化城喻', '若入是城', '諸惡道險', '減災工程', '報佛恩', '人間導師', '第十功德', '印尼']):
                    target_cats = ['fiveContinents2']
                elif any(k in cell_text for k in ['台灣救災', '開經書']) or ('九二一' in cell_text and '第九功德' in cell_text) or '(台灣)' in loc_clean:
                    target_cats = ['fiveContinents1']
                elif any(k in cell_text for k in ['貧中之富', '富中之富', '黑區', '約旦', '土耳其', '莫三比克', '印尼', '緬甸', '八八風災', '泰北', '辛巴威']):
                    target_cats = ['fiveContinents2']
                else:
                    target_cats = ['fiveContinents2'] if ('10-2' in loc_clean or '10-5' in loc_clean) else ['fiveContinents1']
            else:
                target_cats = [cat]

            # Determine if this cell content starts a new item
            if is_item_start(cell_text):
                lines = [l.strip() for l in cell_text.split('\n') if l.strip()]
                title = lines[0] if lines else "動作提示"
                
                # Remove title line from details if it was the first line
                details_text = split_east_west_lines(lines[1:]) if len(lines) > 1 else []
                
                base_item = {
                    "title": title,
                    "videos": [],
                    "details": []
                }
                
                # Add detail lines
                for line in details_text:
                    base_item["details"].append({
                        "type": "text",
                        "content": line
                    })
                    
                # Add images
                for img_src in cell_images:
                    base_item["details"].append({
                        "type": "image",
                        "src": img_src
                    })
                    
                for target_cat in target_cats:
                    item_copy = json.loads(json.dumps(base_item))
                    action_hints_data[target_cat].append(item_copy)
                    current_items[target_cat] = item_copy
            else:
                # Append to current active item for each target category
                for target_cat in target_cats:
                    item = current_items.get(target_cat)
                    if not item:
                        # Create a default item if none active
                        item = {
                            "title": "說明",
                            "videos": [],
                            "details": []
                        }
                        action_hints_data[target_cat].append(item)
                        current_items[target_cat] = item
                    
                    lines = split_east_west_lines([l.strip() for l in cell_text.split('\n') if l.strip()])
                    for line in lines:
                        item["details"].append({
                            "type": "text",
                            "content": line
                        })
                    for img_src in cell_images:
                        item["details"].append({
                            "type": "image",
                            "src": img_src
                        })

    # Inject session YouTube videos into 10-1 and 10-2 items
    VIDEO_INJECTIONS = [
        # Shared (all sessions)
        ('', '開經書', [
            ('東班', 'https://youtu.be/p2KSIGqj5VE'),
            ('西班', 'https://youtu.be/dyWGw6dC88I')
        ]),

        # 11/12
        ('11/12', '樂生', [('[功德品] 樂生', 'https://www.youtube.com/watch?v=mGhnmtxZrn8&list=PLbIvC-A2H2ko')]),
        ('11/12', '富中之富', [('[功德品] 富中之富 A', 'https://www.youtube.com/watch?v=m2NvdK1rQpk&list=PLbIvC-A2H2ko')]),
        ('11/12', '第三功德', [('[功德品] 第三功德‧約旦+土耳其', 'https://www.youtube.com/watch?v=0UcRe5beSzw&list=PLbIvC-A2H2ko')]),
        ('11/12', '約旦', [('[功德品] 張起大愛的風帆‧約旦(法海)', 'https://www.youtube.com/watch?v=MD8To93EY0I&list=PLbIvC-A2H2ko')]),
        ('11/12', '啟航', [('[功德品] 張起大愛的風帆‧約旦(法海)', 'https://www.youtube.com/watch?v=MD8To93EY0I&list=PLbIvC-A2H2ko')]),
        ('11/12', '第六功德', [('[功德品] 第六功德‧黑區變亮區', 'https://www.youtube.com/watch?v=1SAdHJZAVuc&list=PLbIvC-A2H2ko')]),
        ('11/12', '黑區變亮區', [('[功德品] 第六功德‧黑區變亮區', 'https://www.youtube.com/watch?v=1SAdHJZAVuc&list=PLbIvC-A2H2ko')]),
        ('11/12', '化城喻', [('[功德品] 諸惡道險猶長遠‧黑區變亮區(法海)', 'https://www.youtube.com/watch?v=y2cdRGMovd0&list=PLbIvC-A2H2ko')]),
        ('11/12', '台灣救災', [('[功德品] 第五功德‧台灣救災集錦', 'https://www.youtube.com/watch?v=aNi9Y8qbZp0&list=PLbIvC-A2H2ko')]),

        # 11/13
        ('11/13', '富中之富', [('[功德品] 富中之富 B', 'https://www.youtube.com/watch?v=14EMlfGGBXY&list=PLGafJimf9RDw')]),
        ('11/13', '土耳其', [('[功德品] 第三功德‧約旦+土耳其', 'https://www.youtube.com/watch?v=0UcRe5beSzw&list=PLGafJimf9RDw')]),
        ('11/13', '第八功德', [('[功德品] 第八功德‧非洲', 'https://www.youtube.com/watch?v=vZU-rtMuEoE&list=PLGafJimf9RDw')]),
        ('11/13', '莫三比克', [('[功德品] 第八功德‧非洲', 'https://www.youtube.com/watch?v=vZU-rtMuEoE&list=PLGafJimf9RDw')]),
        ('11/13', '髻珠喻', [('11/13 [功德品] 身口意念應守護(南非‧法海)', 'https://www.youtube.com/watch?v=htAI4IbqJtE&list=PLGafJimf9RDw')]),
        ('11/13', '第九功德', [
            ('[功德品] 第九功德‧印尼', 'https://www.youtube.com/watch?v=CvAlUYsudqk&list=PLGafJimf9RDw')
        ]),
        ('11/13', '印尼', [
            ('[功德品] 第九功德‧印尼', 'https://www.youtube.com/watch?v=CvAlUYsudqk&list=PLGafJimf9RDw')
        ]),
        ('11/13', '化城喻', [
            ('[功德品] 菩薩慈悲憫眾生‧印尼(法海)', 'https://www.youtube.com/watch?v=xmX4NrnNqJA&list=PLGafJimf9RDw')
        ]),

        # 11/14
        ('11/14', '富中之富', [('[功德品] 富中之富 A', 'https://www.youtube.com/watch?v=m2NvdK1rQpk&list=PLGRfIGuFCUAQ')]),
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

        # 11/15
        ('11/15', '樂生', [('[功德品] 樂生', 'https://www.youtube.com/watch?v=mGhnmtxZrn8&list=PLcdQvmBAiLJ0')]),
        ('11/15', '富中之富', [('[功德品] 富中之富 B', 'https://www.youtube.com/watch?v=14EMlfGGBXY&list=PLcdQvmBAiLJ0')]),
        ('11/15', '九二一', [('[功德品] 第九功德‧921地震', 'https://www.youtube.com/watch?v=hUpDtkqTQNM&list=PLcdQvmBAiLJ0')]),
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

    for cat in ['fiveContinents1', 'fiveContinents2']:
        items = action_hints_data.get(cat, [])
        for item in items:
            title = item.get('title', '')
            details_text = ' '.join(d.get('content', '') for d in item.get('details', []) if d.get('type') == 'text')
            for sess_prefix, keyword, video_entries in VIDEO_INJECTIONS:
                match = False
                if sess_prefix:
                    if sess_prefix in title and (keyword in title or keyword in details_text):
                        match = True
                else:
                    if keyword in title or keyword in details_text:
                        match = True
                if match:
                    item['videos'] = [
                        {'title': label, 'url': url, 'videoId': extract_vid(url)}
                        for label, url in video_entries
                    ]

    # Extract YouTube videos from details for chapters other than fiveContinents1 and fiveContinents2
    PROTECTED_CATEGORIES = {'fiveContinents1', 'fiveContinents2'}

    for cat, items in action_hints_data.items():
        if cat in PROTECTED_CATEGORIES:
            continue
        for item in items:
            new_details = []
            extracted_videos = list(item.get('videos', []))
            seen_vids = {v['videoId'] for v in extracted_videos if v.get('videoId')}

            for detail in item.get('details', []):
                if detail.get('type') == 'text':
                    text_content = detail.get('content', '')
                    matches = list(re.finditer(r'(https?://(?:www\.)?(?:youtube\.com/watch\?v=|youtu\.be/)([a-zA-Z0-9_-]{11})[^\s<]*)', text_content))
                    if matches:
                        for m in matches:
                            raw_url = m.group(1)
                            vid = m.group(2)
                            
                            label = '示範影片'
                            if '東班' in text_content:
                                label = '東班示範影片'
                            elif '西班' in text_content:
                                label = '西班示範影片'
                            elif '白衣' in text_content:
                                label = '白衣走示範影片'
                            elif '藍衣' in text_content:
                                label = '藍衣走示範影片'
                            elif '不動' in text_content:
                                label = '不動示範影片'
                            elif '點一盞燈' in item.get('title', ''):
                                label = '點一盞燈示範影片'
                            elif '骨捐' in item.get('title', ''):
                                label = '骨捐示範影片'
                            elif '能捨' in item.get('title', ''):
                                label = '能捨示範影片'
                            elif '行願' in item.get('title', ''):
                                label = '行願示範影片'
                            elif '大船師' in item.get('title', '') or '大醫王' in item.get('title', ''):
                                label = '大船師示範影片'
                            elif item.get('title', ''):
                                clean_t = re.sub(r'^[0-9\.\/、：:\s]+', '', item.get('title', '')).strip()
                                label = f"{clean_t}示範影片" if clean_t else '示範影片'

                            if vid and vid not in seen_vids:
                                extracted_videos.append({
                                    'title': label,
                                    'url': raw_url,
                                    'videoId': vid
                                })
                                seen_vids.add(vid)

                        rem = text_content
                        for m in matches:
                            rem = rem.replace(m.group(0), '')
                        rem = re.sub(r'^(?:東班|西班|示範影片|白衣走|藍衣走|不動)[:：\s]*', '', rem).strip()
                        if rem:
                            new_details.append({
                                'type': 'text',
                                'content': rem
                            })
                    else:
                        new_details.append(detail)
                else:
                    new_details.append(detail)

            item['videos'] = extracted_videos
            item['details'] = new_details

    # Save to action_hints_data.js
    js_content = (
        "// Action Hints Database — 自動由 import_docx_action_hints.py 產生，請勿手動修改\n"
        f"const ACTION_HINTS_DATA = {json.dumps(action_hints_data, ensure_ascii=False, indent=2)};\n\n"
        "// Export if in node environment, otherwise make it global\n"
        "if (typeof module !== 'undefined' && module.exports) {\n"
        "  module.exports = ACTION_HINTS_DATA;\n"
        "}\n"
    )

    with open(OUTPUT_JS, 'w', encoding='utf-8') as js_f:
        js_f.write(js_content)

    print(f"Successfully processed DOCX: {DOCX_FILE}")
    print(f"Extracted {image_counter} unique images to {IMAGE_DIR}.")
    print(f"Generated {OUTPUT_JS} successfully!")

if __name__ == "__main__":
    main()
