#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
import_action_hints.py
Parse 動作提示.docx, extract images to images/action_hints/, and generate action_hints_data.js
"""

import os
import zipfile
import xml.etree.ElementTree as ET
import json
import shutil

DOCX_FILE = "動作提示.docx"
OUTPUT_JS = "action_hints_data.js"
IMAGE_DIR = os.path.join("images", "action_hints")

def main():
    if not os.path.exists(DOCX_FILE):
        print(f"Error: {DOCX_FILE} not found!")
        return

    # Create target image directory
    if os.path.exists(IMAGE_DIR):
        shutil.rmtree(IMAGE_DIR)
    os.makedirs(IMAGE_DIR, exist_ok=True)

    with zipfile.ZipFile(DOCX_FILE) as docx:
        # 1. Parse relationship file to map rId to image target path
        rels_xml = docx.read('word/_rels/document.xml.rels')
        rels_root = ET.fromstring(rels_xml)
        rel_map = {}
        namespaces_rels = {'rel': 'http://schemas.openxmlformats.org/package/2006/relationships'}
        for rel in rels_root.findall('.//rel:Relationship', namespaces_rels):
            rid = rel.get('Id')
            target = rel.get('Target')
            if 'media/' in target:
                rel_map[rid] = 'word/' + target

        # 2. Parse document.xml
        doc_xml = docx.read('word/document.xml')
        doc_root = ET.fromstring(doc_xml)
        
        namespaces = {
            'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main',
            'r': 'http://schemas.openxmlformats.org/officeDocument/2006/relationships',
            'a': 'http://schemas.openxmlformats.org/drawingml/2006/main',
            'pic': 'http://schemas.openxmlformats.org/drawingml/2006/picture'
        }

        body = doc_root.find('w:body', namespaces)
        tbl = body.find('w:tbl', namespaces)
        if tbl is None:
            print("Error: Could not find table (w:tbl) in document.xml!")
            return

        rows = tbl.findall('.//w:tr', namespaces)
        print(f"Found {len(rows)} rows in table.")

        # Structure to hold data
        action_hints_data = {
            'circle': [],
            'xingYuan': [],
            'jingSi': [],
            'lamp': [],
            'noBoat': [],
            'bigV': []
        }

        # Helper to assign row to step key
        def get_formation_key(row_idx, col0_text):
            # Header
            if row_idx == 0:
                return None
            if col0_text == '01圓形' or (1 <= row_idx <= 6):
                return 'circle'
            if col0_text == '02行願' or (7 <= row_idx <= 8):
                return 'xingYuan'
            if col0_text == '04靜思家風' or (9 <= row_idx <= 10):
                return 'jingSi'
            if col0_text == '05-1有法船' or row_idx == 11:
                return 'lamp'
            if col0_text == '05-2無法船' or row_idx == 12:
                return 'noBoat'
            if col0_text == '06四弘誓願' or row_idx >= 13:
                return 'bigV'
            return None

        image_counter = 0

        for r_idx, row in enumerate(rows):
            if r_idx == 0:
                continue # Skip header

            cells = row.findall('.//w:tc', namespaces)
            if len(cells) < 2:
                continue

            # Column 0: Location / Group
            c0_p = cells[0].findall('.//w:p', namespaces)
            c0_texts = []
            for p in c0_p:
                c0_texts.append(''.join(t.text for t in p.findall('.//w:t', namespaces) if t.text))
            c0_text = ' '.join(c0_texts).strip()

            formation_key = get_formation_key(r_idx, c0_text)
            if not formation_key:
                continue

            # Column 1: Action Hint Details
            cell1_p = cells[1].findall('.//w:p', namespaces)
            
            raw_elements = [] # List of tuples: ('text', val) or ('image', filename)

            for p in cell1_p:
                p_text = ''.join(t.text for t in p.findall('.//w:t', namespaces) if t.text).strip()
                
                # Check for drawing/blip
                image_rids = []
                for blip in p.findall('.//a:blip', namespaces):
                    embed_id = blip.get('{http://schemas.openxmlformats.org/officeDocument/2006/relationships}embed')
                    if embed_id:
                        image_rids.append(embed_id)
                
                # If there are images, extract and add them
                for rid in image_rids:
                    if rid in rel_map:
                        zip_image_path = rel_map[rid]
                        image_counter += 1
                        ext = os.path.splitext(zip_image_path)[1] or ".png"
                        local_image_name = f"hint_{image_counter}{ext}"
                        local_image_path = os.path.join(IMAGE_DIR, local_image_name)
                        
                        # Extract the image from ZIP
                        try:
                            with open(local_image_path, 'wb') as img_f:
                                img_f.write(docx.read(zip_image_path))
                            raw_elements.append(('image', f"images/action_hints/{local_image_name}"))
                        except Exception as img_err:
                            print(f"Failed to extract image {zip_image_path}: {img_err}")
                
                if p_text:
                    raw_elements.append(('text', p_text))

            if not raw_elements:
                continue # Empty row details

            # Process elements: first text is title, others are details
            title = ""
            details = []
            
            # Find the title (first text element)
            first_text_idx = -1
            for idx, (el_type, val) in enumerate(raw_elements):
                if el_type == 'text':
                    title = val
                    first_text_idx = idx
                    break

            # If no text is found, it's just images
            if first_text_idx == -1:
                title = f"提示圖片 {r_idx}"
                for el_type, val in raw_elements:
                    details.append({'type': 'image', 'src': val})
            else:
                # Row 7 is special: starts with "海濤澎湃 駭浪洶湧", let's prefix it with "7."
                if r_idx == 7 and not title.startswith("7."):
                    title = "7. " + title

                # Rest of the elements go to details
                for idx, (el_type, val) in enumerate(raw_elements):
                    if idx == first_text_idx:
                        continue # Skip title
                    if el_type == 'text':
                        details.append({'type': 'text', 'content': val})
                    elif el_type == 'image':
                        details.append({'type': 'image', 'src': val})

            action_hints_data[formation_key].append({
                'title': title,
                'details': details
            })

        # 3. Generate action_hints_data.js
        js_content = (
            "// Action Hints Database — 自動由 import_action_hints.py 產生，請勿手動修改\n"
            f"const ACTION_HINTS_DATA = {json.dumps(action_hints_data, ensure_ascii=False, indent=2)};\n\n"
            "// Export if in node environment, otherwise make it global\n"
            "if (typeof module !== 'undefined' && module.exports) {\n"
            "  module.exports = ACTION_HINTS_DATA;\n"
            "}\n"
        )

        with open(OUTPUT_JS, 'w', encoding='utf-8') as js_f:
            js_f.write(js_content)

        print(f"Successfully processed {len(rows)-1} rows.")
        print(f"Extracted {image_counter} images to {IMAGE_DIR}.")
        print(f"Generated {OUTPUT_JS} successfully!")

if __name__ == "__main__":
    main()
