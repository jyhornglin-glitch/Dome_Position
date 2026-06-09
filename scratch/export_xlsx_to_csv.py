import os
import csv
import zipfile
import xml.etree.ElementTree as ET

f = "/Users/franklin/Downloads/松四組隊形位座標0609.xlsx"
standard_csv = "/Users/franklin/Documents/大巨蛋演繹跑位查詢/performers.csv"
general_csv = "/Users/franklin/Documents/大巨蛋演繹跑位查詢＿通用場次/performers.csv"

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
        
        # Load sheet1
        sheet_data = zip_ref.read('xl/worksheets/sheet1.xml')
        root = ET.fromstring(sheet_data)
        ns_sheet = {'ns': 'http://schemas.openxmlformats.org/spreadsheetml/2006/main'}
        
        rows = root.findall('.//ns:row', ns_sheet)
        
        parsed_rows = []
        for r in rows:
            r_id = int(r.get('r'))
            if r_id < 2: # Skip row 1 (empty title row)
                continue
                
            cells = r.findall('ns:c', ns_sheet)
            # We expect 9 columns: A to I
            row_vals = [""] * 9
            for cell in cells:
                ref = cell.get('r') # e.g. "A2", "B2"
                col_letter = "".join([c for c in ref if c.isalpha()])
                col_idx = ord(col_letter) - ord('A')
                if col_idx < 0 or col_idx >= 9:
                    continue
                    
                t = cell.get('t')
                val_el = cell.find('ns:v', ns_sheet)
                val = ""
                if val_el is not None:
                    val = val_el.text or ""
                    if t == 's':
                        idx = int(val)
                        val = shared_strings[idx] if idx < len(shared_strings) else val
                row_vals[col_idx] = val.strip()
            
            # Skip completely empty rows
            if any(row_vals):
                parsed_rows.append(row_vals)
                
    # Headers should be the first row of parsed_rows (from Row 2 of Excel)
    headers = parsed_rows[0]
    data_rows = parsed_rows[1:]
    
    print(f"Parsed headers: {headers}")
    print(f"Number of data rows: {len(data_rows)}")
    
    # 1. Write standard performers.csv
    with open(standard_csv, mode='w', encoding='utf-8-sig', newline='') as f_out:
        writer = csv.writer(f_out)
        writer.writerow(headers)
        writer.writerows(data_rows)
    print(f"Successfully wrote standard CSV to {standard_csv}")
    
    # 2. Write general performers.csv (blank out name column at index 2)
    with open(general_csv, mode='w', encoding='utf-8-sig', newline='') as f_out:
        writer = csv.writer(f_out)
        writer.writerow(headers)
        for row in data_rows:
            gen_row = list(row)
            gen_row[2] = "" # Blank out '姓名'
            writer.writerow(gen_row)
    print(f"Successfully wrote general CSV to {general_csv}")
    
except Exception as e:
    print(f"Error: {e}")
