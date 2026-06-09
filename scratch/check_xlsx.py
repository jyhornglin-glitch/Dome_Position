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
            # Check if shared strings contains "施麗玲"
            if 'xl/sharedStrings.xml' in zip_ref.namelist():
                ss_data = zip_ref.read('xl/sharedStrings.xml')
                root = ET.fromstring(ss_data)
                ns = {'ns': 'http://schemas.openxmlformats.org/spreadsheetml/2006/main'}
                for t in root.findall('.//ns:t', ns):
                    if t.text and "施麗玲" in t.text:
                        print(f"FOUND in Shared Strings of file: {os.path.basename(f)}")
                        break
    except Exception as e:
        pass
