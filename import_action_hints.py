#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
import_action_hints.py
Parse 動作提示.PDF, extract images to images/action_hints/, and generate action_hints_data.js.
Requires PyMuPDF (fitz). Automatically installs it if missing.
"""

import os
import sys
import json
import shutil
import re

# 1. Ensure PyMuPDF (fitz) is installed
try:
    import fitz
except ImportError:
    print("PyMuPDF (fitz) is required for PDF parsing. Installing...")
    import subprocess
    try:
        subprocess.check_call([sys.executable, "-m", "pip", "install", "pymupdf"])
        import fitz
    except Exception as e:
        print(f"Error installing PyMuPDF: {e}")
        print("Please manually run: pip install pymupdf")
        sys.exit(1)

# Paths and Constants
PDF_FILE_UPPER = "動作提示.PDF"
PDF_FILE_LOWER = "動作提示.pdf"
OUTPUT_JS = "action_hints_data.js"
IMAGE_DIR = os.path.join("images", "action_hints")

def get_category_by_title(title):
    t = title.lower()
    if any(k in t for k in ['序', '生', '老', '病', '死', '六度']):
        return 'circle'
    if any(k in t for k in ['海濤澎湃', '開經偈']):
        return 'xingYuan'
    if '米籮' in t:
        return 'miLuo'
    if '靜思家風' in t:
        return 'jingSi'
    if '點一盞燈' in t:
        return 'lamp'
    if '菜市場' in t or '圍爐' in t or '是諸眾生(第一三天' in t:
        return 'noBoat'
    if '米甕與大魚' in t or '是諸眾生(第二四天' in t:
        return 'noBoat3'
    if '07大船師' in t or '大船師' in t or '大醫王' in t:
        return 'daChuanShi'
    if '骨捐' in t or '能捨' in t:
        return 'boneDonation'
    if '教育' in t or '說法品' in t:
        return 'edu'
    if any(k in t for k in ['地藏經', '醫療', '四弘誓願']):
        return 'bigV'
    return None

def is_item_start(first_line, full_text):
    first_line_clean = first_line.strip()
    if not first_line_clean:
        return False
    if re.match(r'^\d+\.', first_line_clean):
        return True
    if first_line_clean.startswith('海濤澎湃'):
        return True
    # Special check for "07大船師" starting without numbers
    if first_line_clean.startswith('【骨捐】') and '大醫王' in full_text and '大船師' in full_text:
        return True
    return False

def main():
    # Resolve correct PDF file name (case-insensitive fallback)
    pdf_file = PDF_FILE_UPPER
    if not os.path.exists(pdf_file):
        if os.path.exists(PDF_FILE_LOWER):
            pdf_file = PDF_FILE_LOWER
        else:
            print(f"Error: Neither {PDF_FILE_UPPER} nor {PDF_FILE_LOWER} was found!")
            sys.exit(1)

    print(f"Parsing PDF file: {pdf_file}")

    # Create target image directory
    if os.path.exists(IMAGE_DIR):
        shutil.rmtree(IMAGE_DIR)
    os.makedirs(IMAGE_DIR, exist_ok=True)

    doc = fitz.open(pdf_file)
    print(f"Opened PDF with {len(doc)} pages.")

    # Target data structure with all formation keys
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

    all_elements = []
    
    # Extract coordinates and content from all pages
    for page_idx in range(len(doc)):
        page = doc[page_idx]
        
        # 1. Get right-column text blocks (x0 >= 65)
        blocks = page.get_text("blocks")
        for b in blocks:
            x0, y0, x1, y1, text, block_no, block_type = b
            text_str = text.strip()
            if not text_str:
                continue
            if x0 >= 65:
                all_elements.append({
                    'type': 'text',
                    'page_idx': page_idx,
                    'y0': y0,
                    'text': text_str
                })
        
        # 2. Get right-column image elements (x0 >= 65)
        page_images = page.get_images(full=True)
        processed_xrefs = set()
        for img_info in page_images:
            xref = img_info[0]
            if xref in processed_xrefs:
                continue
            rects = page.get_image_rects(xref)
            if rects:
                rect = rects[0]
                if rect.x0 >= 65:
                    all_elements.append({
                        'type': 'image',
                        'page_idx': page_idx,
                        'y0': rect.y0,
                        'xref': xref
                    })
                    processed_xrefs.add(xref)

    # Sort elements globally by (page_idx, y0) to construct logical layout flow
    all_elements.sort(key=lambda e: (e['page_idx'], e['y0']))

    current_item = None
    image_counter = 0
    xref_to_filename = {}

    for el in all_elements:
        if el['type'] == 'text':
            text = el['text']
            lines = [l.strip() for l in text.split('\n') if l.strip()]
            if not lines:
                continue
            
            # A. Merge wrapped YouTube URLs inside the same text block first
            merged_lines = []
            i = 0
            while i < len(lines):
                current_line = lines[i]
                if "youtube.com" in current_line and i + 1 < len(lines):
                    next_line = lines[i+1]
                    if not any(ord(c) > 127 for c in next_line) and any(x in next_line for x in ['index=', 'r3H', 'list=', '&', '=']):
                        current_line += next_line
                        i += 1
                merged_lines.append(current_line)
                i += 1
            lines = merged_lines

            # B. Merge wrapped YouTube URLs across elements (including cross-page wraps)
            if current_item:
                target_detail = None
                for detail in reversed(current_item['details']):
                    if detail['type'] == 'text' and "youtube.com" in detail['content'] and "index=" not in detail['content']:
                        target_detail = detail
                        break
                
                if target_detail and lines:
                    first_line = lines[0]
                    if not any(ord(c) > 127 for c in first_line) and any(x in first_line for x in ['index=', 'r3H', 'list=', '&', '=']):
                        target_detail['content'] += first_line
                        lines = lines[1:]
            
            if not lines:
                continue
            
            # Check if this text block starts a new action hint item
            if is_item_start(lines[0], text):
                title = lines[0]
                is_special_da_chuan_shi = False
                
                # Format specific: Row 7 special prefix for "7. 海濤澎湃..."
                if title.startswith("海濤澎湃") and not title.startswith("7."):
                    title = "7. " + title
                # Format specific: 07大船師 title setting
                elif title.startswith("【骨捐】") and "大船師" in text:
                    title = "07大船師"
                    is_special_da_chuan_shi = True
                
                cat = get_category_by_title(title)
                if cat:
                    current_item = {
                        'title': title,
                        'details': []
                    }
                    action_hints_data[cat].append(current_item)
                    
                    # Remaining lines in this text block are detail lines
                    start_detail_idx = 0 if is_special_da_chuan_shi else 1
                    for detail_line in lines[start_detail_idx:]:
                        current_item['details'].append({
                            'type': 'text',
                            'content': detail_line
                        })
            else:
                # Append text lines to current item details if item already started
                if current_item:
                    for line in lines:
                        current_item['details'].append({
                            'type': 'text',
                            'content': line
                        })
        
        elif el['type'] == 'image':
            xref = el['xref']
            if xref not in xref_to_filename:
                image_counter += 1
                
                # Extract image bytes and extension from PDF
                try:
                    base_image = doc.extract_image(xref)
                    image_bytes = base_image["image"]
                    image_ext = base_image["ext"] # e.g. "png", "jpeg"
                    # Force extension to be consistent (normalize jpeg/jpg/png)
                    if image_ext == "jpeg":
                        image_ext = "jpg"
                    
                    local_image_name = f"hint_{image_counter}.{image_ext}"
                    local_image_path = os.path.join(IMAGE_DIR, local_image_name)
                    
                    with open(local_image_path, 'wb') as img_f:
                        img_f.write(image_bytes)
                        
                    xref_to_filename[xref] = f"images/action_hints/{local_image_name}"
                except Exception as img_err:
                    print(f"Failed to extract image xref {xref}: {img_err}")
                    # Fallback default name
                    xref_to_filename[xref] = f"images/action_hints/hint_{image_counter}.png"
            
            if current_item and xref in xref_to_filename:
                current_item['details'].append({
                    'type': 'image',
                    'src': xref_to_filename[xref]
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

    print(f"Successfully processed PDF: {pdf_file}")
    print(f"Extracted {image_counter} unique images to {IMAGE_DIR}.")
    print(f"Generated {OUTPUT_JS} successfully!")

if __name__ == "__main__":
    main()
