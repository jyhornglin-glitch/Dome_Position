import docx

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

current_loc = None
for r in range(1, R):
    loc_cell = table.rows[r].cells[0]
    loc_text = loc_cell.text.strip().replace("\n", " ")
    if loc_text:
        current_loc = loc_text
        
    for c in range(1, C):
        if visited[r][c]:
            continue
        tc = grid[r][c]
        # colspan
        colspan = 1
        while c + colspan < C and grid[r][c + colspan] == tc:
            colspan += 1
        # rowspan
        rowspan = 1
        while r + rowspan < R and grid[r + rowspan][c] == tc:
            rowspan += 1
            
        for dr in range(rowspan):
            for dc in range(colspan):
                visited[r+dr][c+dc] = True
                
        cell = table.rows[r].cells[c]
        txt_preview = cell.text.replace("\n", " | ")[:120]
        print(f"Row {r} | Loc: {current_loc} | Cell ({r},{c}) -> rowspan={rowspan}, colspan={colspan}")
        print(f"  Txt: {txt_preview}")
