import docx
from docx.oxml.ns import qn
import os

docx_path = "../動作提示.docx"
doc = docx.Document(docx_path)
table = doc.tables[0]

R = len(table.rows)
C = len(table.columns)

grid = [[None for _ in range(C)] for _ in range(R)]
for r in range(R):
    for c in range(C):
        grid[r][c] = table.rows[r].cells[c]._tc

visited = [[False for _ in range(C)] for _ in range(R)]
image_dir = "../images/docx_hints"
os.makedirs(image_dir, exist_ok=True)

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
                
                # Convert PackURI to string
                partname_str = str(image_part.partname)
                basename = os.path.basename(partname_str)
                
                dest_path = os.path.join(image_dir, basename)
                with open(dest_path, "wb") as f:
                    f.write(image_bytes)
                images.append(f"images/docx_hints/{basename}")
            except Exception as e:
                print("Error extracting image:", e)
    return images

# Test extracting a few rows to see if it fixes the error
for r in range(min(5, R)):
    for c in range(C):
        if visited[r][c]:
            continue
        
        tc = grid[r][c]
        colspan = 1
        while c + colspan < C and grid[r][c + colspan] == tc:
            colspan += 1
            
        rowspan = 1
        while r + rowspan < R and grid[r + rowspan][c] == tc:
            rowspan += 1
            
        for dr in range(rowspan):
            for dc in range(colspan):
                visited[r + dr][c + dc] = True
                
        cell = table.rows[r].cells[c]
        cell_images = get_images_from_cell(cell, doc)
        print(f"Cell ({r},{c}) -> rowspan={rowspan}, colspan={colspan}, images={cell_images}")
        print(f"  Text: {cell.text.replace(chr(10), ' | ')[:100]}")
