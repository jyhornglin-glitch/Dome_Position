#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
import_card_hints.py
Parse 小卡關鍵字提示.docx and generate action_hints_data.js.
"""

import os
import sys
import json
import re
import docx

DOCX_FILE = "小卡關鍵字提示.docx"
OUTPUT_JS = "action_hints_data.js"

# Map Word location names to formation keys in app.js
CATEGORY_MAPPING = {
    '基本': 'basic',
    '01圓形': 'circle',
    '02行願': 'xingYuan',
    '03米籮': 'miLuo',
    '04靜思家風': 'jingSi',
    '05-1有法船(點一盞燈)': 'lamp',
    '05-2無法船(菜市場5毛錢)': 'noBoat',
    '05-3有法船(是諸眾生)': 'noBoat3',
    '06四弘誓願': 'bigV',
    '07-1大船師': 'daChuanShi',
    '07-2骨捐能捨': 'boneDonation',
    '08教育': 'edu',
    '09-1人文': 'humanities1',
    '09-2人文': 'humanities2',
    '10-1五大洲': 'fiveContinents1',
    '10-2五大洲': 'fiveContinents2',
    '11飛天': 'flyingApsaras'
}

def main():
    if not os.path.exists(DOCX_FILE):
        print(f"Error: {DOCX_FILE} not found!")
        sys.exit(1)

    print(f"Parsing DOCX file: {DOCX_FILE}")
    doc = docx.Document(DOCX_FILE)
    table = doc.tables[0]
    R = len(table.rows)
    C = len(table.columns)
    print(f"Opened table with {R} rows, {C} columns.")

    action_hints_data = {
        'basic': [],
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
        'fiveContinents2': [],
        'flyingApsaras': []
    }

    for r in range(1, R):
        loc_cell = table.rows[r].cells[0]
        # Clean whitespaces and newlines in location key
        loc_text = loc_cell.text.strip()
        loc_clean = re.sub(r'\s+', '', loc_text) if loc_text else ""
        
        # Normalize parentheses
        loc_clean = loc_clean.replace('（', '(').replace('）', ')')
        
        cat = CATEGORY_MAPPING.get(loc_clean)
        if not cat:
            print(f"Warning: Location '{loc_clean}' not mapped. Skipping.")
            continue
            
        content_cell = table.rows[r].cells[1]
        
        current_item = None
        
        for p in content_cell.paragraphs:
            text = p.text.strip()
            if not text:
                continue
                
            # Check if this paragraph starts a new item section (e.g. starts with 【...】)
            match = re.match(r'^【([^】]+)】(.*)', text)
            if match:
                title_label = match.group(1).strip()
                extra_text = match.group(2).strip()
                
                title = f"【{title_label}】"
                if extra_text.startswith('：') or extra_text.startswith(':'):
                    title += extra_text
                elif extra_text:
                    title += " " + extra_text
                
                current_item = {
                    "title": title,
                    "details": []
                }
                action_hints_data[cat].append(current_item)
            else:
                # If no item created yet, create a default one using the location's name as title
                if not current_item:
                    current_item = {
                        "title": f"【{loc_clean}】",
                        "details": []
                    }
                    action_hints_data[cat].append(current_item)
                
                # Split line breaks in paragraph and append
                lines = [line.strip() for line in text.split('\n') if line.strip()]
                for line in lines:
                    current_item["details"].append({
                        "type": "text",
                        "content": line
                    })

    # Save to action_hints_data.js
    js_content = (
        "// Action Hints Database — 自動由 import_card_hints.py 產生，請勿手動修改\n"
        f"const ACTION_HINTS_DATA = {json.dumps(action_hints_data, ensure_ascii=False, indent=2)};\n\n"
        "// Export if in node environment, otherwise make it global\n"
        "if (typeof module !== 'undefined' && module.exports) {\n"
        "  module.exports = ACTION_HINTS_DATA;\n"
        "}\n"
    )

    with open(OUTPUT_JS, 'w', encoding='utf-8') as js_f:
        js_f.write(js_content)

    print(f"Successfully processed DOCX: {DOCX_FILE}")
    print(f"Generated {OUTPUT_JS} successfully!")

if __name__ == "__main__":
    main()
