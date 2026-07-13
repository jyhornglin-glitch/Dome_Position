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

DOCX_FILE = "動作提示.docx"
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
    '06四弘誓願': 'bigV',
    '07-1大船師': 'daChuanShi',
    '07-2骨捐能捨': 'boneDonation',
    '08教育': 'edu',
    '09-1人文(基本隊形)': 'humanities1',
    '09-2人文(主機板)': 'humanities2',
    '10-1五大洲': 'fiveContinents1',
    '10-2五大洲': 'fiveContinents2'
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

def is_item_start(text):
    text_clean = text.strip()
    if not text_clean:
        return False
    # Split into lines
    lines = [l.strip() for l in text_clean.split('\n') if l.strip()]
    if not lines:
        return False
    first_line = lines[0]
    
    # Matches "1. ", "12. " etc.
    if re.match(r'^\d+\.', first_line):
        return True
    
    # Matches key action segments
    keywords = ['序，', '生，', '老，', '病，', '死，', '六度', '行願', '開經偈', '點一盞燈', '地藏經', '醫療梵唄', '四弘誓願', '大醫王', '骨捐', '能捨']
    if any(k in first_line for k in keywords):
        return True
        
    # Matches YouTube URLs
    if "youtube.com" in text_clean or "youtu.be" in text_clean:
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
        'miLuo': [], # Empty by default
        'jingSi': [],
        'lamp': [],
        'noBoat': [],
        'noBoat3': [],
        'bigV': [],
        'daChuanShi': [],
        'boneDonation': [],
        'edu': [],
        'eduWaterSlash': [],
        'eduWaterArc': [],
        'eduBigLotus': [],
        'eduMidSmallLotus': [],
        'humanities1': [],
        'humanities2': [],
        'fiveContinents1': [],
        'fiveContinents2': [],
        'flyingApsaras': []
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
                
            # Determine if this cell content starts a new item
            if is_item_start(cell_text):
                lines = [l.strip() for l in cell_text.split('\n') if l.strip()]
                title = lines[0] if lines else "動作提示"
                
                # Remove title line from details if it was the first line
                details_text = lines[1:] if len(lines) > 1 else []
                
                new_item = {
                    "title": title,
                    "details": []
                }
                
                # Add detail lines
                for line in details_text:
                    new_item["details"].append({
                        "type": "text",
                        "content": line
                    })
                    
                # Add images
                for img_src in cell_images:
                    new_item["details"].append({
                        "type": "image",
                        "src": img_src
                    })
                    
                action_hints_data[cat].append(new_item)
                current_items[cat] = new_item
            else:
                # Append to current active item for this category
                item = current_items.get(cat)
                if not item:
                    # Create a default item if none active
                    item = {
                        "title": "說明",
                        "details": []
                    }
                    action_hints_data[cat].append(item)
                    current_items[cat] = item
                
                lines = [l.strip() for l in cell_text.split('\n') if l.strip()]
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
