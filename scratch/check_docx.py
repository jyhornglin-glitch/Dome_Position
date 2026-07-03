import docx
import os

docx_path = "../動作提示.docx"
doc = docx.Document(docx_path)
table = doc.tables[0]

print(f"Table rows: {len(table.rows)}, cols: {len(table.columns)}")

# We can print row data and see how merge cells behave.
# Let's inspect the first 10 rows
for r_idx, row in enumerate(table.rows[:10]):
    row_cells = row.cells
    # In python-docx, merged cells share the same cell object.
    # We can print cell memory addresses or check if the text is identical.
    cell_info = []
    for c_idx, cell in enumerate(row_cells):
        text_preview = cell.text.replace("\n", " [NL] ")[:30]
        # Check if this cell is merged with the previous cell in the same row
        is_merged_prev = False
        if c_idx > 0 and row_cells[c_idx]._tc == row_cells[c_idx-1]._tc:
            is_merged_prev = True
        
        # Check if merged with upper cell in same column
        is_merged_up = False
        if r_idx > 0 and table.rows[r_idx-1].cells[c_idx]._tc == cell._tc:
            is_merged_up = True
            
        cell_info.append(f"C{c_idx}(prev={is_merged_prev}, up={is_merged_up}, txt='{text_preview}')")
    
    print(f"Row {r_idx}:", " | ".join(cell_info))
