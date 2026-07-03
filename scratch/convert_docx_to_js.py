import docx
from docx.oxml.ns import qn
import os
import json
import re

docx_path = "../動作提示.docx"
output_js = "../docx_action_hints_data.js"
image_dir = "../images/docx_hints"
os.makedirs(image_dir, exist_ok=True)

# Regex to detect YouTube links
YT_REGEX = r'(https?://(?:www\.)?(?:youtube\.com/watch\?v=|youtu\.be/)[a-zA-Z0-9_-]{11}(?:[^\s]*)?)'

def get_images_from_cell(cell, doc):
    images = []
    tc = cell._tc
    blips = tc.xpath('.//a:blip')
    for blip in blips:
        embed_id = blip.get(qn('r:embed'))
        if embed_id:
            try:
                image_part = doc.part.related_parts[embed_id]
                image_bytes = image_part.blob
                partname_str = str(image_part.partname)
                basename = os.path.basename(partname_str)
                dest_path = os.path.join(image_dir, basename)
                with open(dest_path, "wb") as f:
                    f.write(image_bytes)
                images.append(f"images/docx_hints/{basename}")
            except Exception as e:
                print(f"Error extracting image {embed_id}: {e}")
    return images

def main():
    if not os.path.exists(docx_path):
        print(f"Error: {docx_path} does not exist!")
        return

    doc = docx.Document(docx_path)
    table = doc.tables[0]
    
    R = len(table.rows)
    C = len(table.columns)
    
    print(f"Table dimensions: {R}x{C}")
    
    grid = [[None for _ in range(C)] for _ in range(R)]
    for r in range(R):
        for c in range(C):
            grid[r][c] = table.rows[r].cells[c]._tc
            
    visited = [[False for _ in range(C)] for _ in range(R)]
    cells_data = []
    
    for r in range(R):
        for c in range(C):
            if visited[r][c]:
                continue
                
            tc = grid[r][c]
            
            # Calculate colspan
            colspan = 1
            while c + colspan < C and grid[r][c + colspan] == tc:
                colspan += 1
                
            # Calculate rowspan
            rowspan = 1
            while r + rowspan < R and grid[r + rowspan][c] == tc:
                rowspan += 1
                
            # Mark visited
            for dr in range(rowspan):
                for dc in range(colspan):
                    visited[r + dr][c + dc] = True
                    
            cell = table.rows[r].cells[c]
            text = cell.text
            images = get_images_from_cell(cell, doc)
            
            cells_data.append({
                "r": r,
                "c": c,
                "rowspan": rowspan,
                "colspan": colspan,
                "text": text,
                "images": images
            })
            
    result = {
        "rowsCount": R,
        "colsCount": C,
        "cells": cells_data
    }
    
    # Save to js file
    js_content = (
        "// Document Action Hints Database — 自動由 convert_docx_to_js.py 產生，請勿手動修改\n"
        f"const DOCX_ACTION_HINTS_DATA = {json.dumps(result, ensure_ascii=False, indent=2)};\n\n"
        "// Export if in node environment\n"
        "if (typeof module !== 'undefined' && module.exports) {\n"
        "  module.exports = DOCX_ACTION_HINTS_DATA;\n"
        "}\n"
    )
    
    with open(output_js, "w", encoding="utf-8") as f:
        f.write(js_content)
        
    print(f"Successfully converted Word table to {output_js}!")
    print(f"Total rows: {R}, Total cells converted: {len(cells_data)}")

if __name__ == "__main__":
    main()
