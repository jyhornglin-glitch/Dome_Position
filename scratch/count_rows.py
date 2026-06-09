import os
import glob
import zipfile
import xml.etree.ElementTree as ET

downloads_dir = "/Users/franklin/Downloads"
xlsx_files = glob.glob(os.path.join(downloads_dir, "*.xlsx"))
xlsx_files += glob.glob(os.path.join(downloads_dir, "*.xls"))

for f in xlsx_files:
    if "~$" in f:
        continue
    try:
        with zipfile.ZipFile(f, 'r') as zip_ref:
            if 'xl/worksheets/sheet1.xml' in zip_ref.namelist():
                sheet_data = zip_ref.read('xl/worksheets/sheet1.xml')
                root = ET.fromstring(sheet_data)
                ns_sheet = {'ns': 'http://schemas.openxmlformats.org/spreadsheetml/2006/main'}
                rows = root.findall('.//ns:row', ns_sheet)
                print(f"File: {os.path.basename(f)} - Sheet1 rows: {len(rows)}")
    except Exception as e:
        pass
