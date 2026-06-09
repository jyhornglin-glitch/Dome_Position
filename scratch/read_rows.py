import os
import zipfile
import xml.etree.ElementTree as ET

f = "/Users/franklin/Downloads/松四組隊形位座標0609.xlsx"

try:
    with zipfile.ZipFile(f, 'r') as zip_ref:
        # Load shared strings
        shared_strings = []
        if 'xl/sharedStrings.xml' in zip_ref.namelist():
            ss_data = zip_ref.read('xl/sharedStrings.xml')
            root = ET.fromstring(ss_data)
            ns = {'ns': 'http://schemas.openxmlformats.org/spreadsheetml/2006/main'}
            for t in root.findall('.//ns:t', ns):
                shared_strings.append(t.text or "")
        
        # Load workbook sheets to get sheet names
        wb_data = zip_ref.read('xl/workbook.xml')
        wb_root = ET.fromstring(wb_data)
        ns_wb = {'ns': 'http://schemas.openxmlformats.org/spreadsheetml/2006/main'}
        sheets = wb_root.findall('.//ns:sheet', ns_wb)
        print("Sheets in workbook:")
        for s in sheets:
            print(f"  ID: {s.get('sheetId')}, Name: {s.get('name')}")
            
        # Let's read xl/worksheets/sheet1.xml
        sheet_data = zip_ref.read('xl/worksheets/sheet1.xml')
        root = ET.fromstring(sheet_data)
        ns_sheet = {'ns': 'http://schemas.openxmlformats.org/spreadsheetml/2006/main'}
        
        print("\nFirst 15 rows of sheet 1:")
        rows = root.findall('.//ns:row', ns_sheet)
        for r in rows[:20]:
            r_id = r.get('r')
            cells = r.findall('ns:c', ns_sheet)
            row_vals = []
            for cell in cells:
                t = cell.get('t')
                val_el = cell.find('ns:v', ns_sheet)
                val = ""
                if val_el is not None:
                    val = val_el.text or ""
                    if t == 's':
                        idx = int(val)
                        val = shared_strings[idx] if idx < len(shared_strings) else val
                row_vals.append((cell.get('r'), val))
            print(f"Row {r_id}: {row_vals}")
            
except Exception as e:
    print(f"Error: {e}")
