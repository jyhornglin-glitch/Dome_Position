import zipfile
import xml.etree.ElementTree as ET
import os

base_dir = "/Users/franklin/Documents/大巨蛋演繹跑位查詢"
docx_path = os.path.join(base_dir, "圖騰.docx")

namespaces = {
    'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main',
    'r': 'http://schemas.openxmlformats.org/officeDocument/2006/relationships'
}

def main():
    if not os.path.exists(docx_path):
        print("圖騰.docx not found!")
        return

    with zipfile.ZipFile(docx_path) as docx:
        doc_xml = docx.read('word/document.xml')
        doc_root = ET.fromstring(doc_xml)
        
        body = doc_root.find('w:body', namespaces)
        tbl = body.find('w:tbl', namespaces)
        if tbl is None:
            print("No table found!")
            return
            
        rows = tbl.findall('w:tr', namespaces)
        print(f"Total rows in table: {len(rows)}")
        
        for r_idx, row in enumerate(rows):
            cells = row.findall('w:tc', namespaces)
            row_text = []
            for c_idx, cell in enumerate(cells):
                cell_text = "".join(t.text for t in cell.findall('.//w:t', namespaces) if t.text).strip()
                row_text.append(cell_text)
            print(f"Row {r_idx}: {row_text}")

if __name__ == '__main__':
    main()
