import csv
import os
import re

def clean_coord(val):
    if not val:
        return ""
    val = val.strip()
    # 1. Chinese date format: "X月Y日" -> "X-Y"
    m1 = re.match(r'^(\d+)月(\d+)日$', val)
    if m1:
        return f"{m1.group(1)}-{m1.group(2)}"
    # 2. Slash date format: "X/Y" -> "X-Y" or "YYYY/X/Y" -> "X-Y"
    m2 = re.match(r'^(\d+)/(\d+)$', val)
    if m2:
        return f"{m2.group(1)}-{m2.group(2)}"
    m3 = re.match(r'^(\d+)/(\d+)/(\d+)$', val)
    if m3:
        if len(m3.group(1)) == 4:
            return f"{int(m3.group(2))}-{int(m3.group(3))}"
    return val

def esc(s):
    return s.replace('\\', '\\\\').replace('"', '\\"').replace('\n', '\\n').replace('\r', '\\r')

def main(verbose=True):
    # Use script's directory as base path to ensure it works when run from any folder
    base_dir = os.path.dirname(os.path.abspath(__file__))
    csv_path = os.path.join(base_dir, "performers.csv")
    js_path = os.path.join(base_dir, "data.js")

    if not os.path.exists(csv_path):
        if verbose:
            print("請先在專案目錄下建立 'performers.csv' 檔案！")
            print("CSV 欄位格式（第一列標頭）請採用以下英文名稱：")
            print("category,id,name,circle,xingYuan,jingSi,lamp,bigV")
            print("\n範例資料內容：")
            print("category,id,name,circle,xingYuan,jingSi,lamp,bigV")
            print("A藍,4-46,范志偉,5.2-46.2,2-49,4-46,12.4-41.6,3-49.6")
            print("B白,19-54,柯博文,16.8-54.2,18-58,19-54,31-30,23.8-39")
        return

    performers = []
    # Using utf-8-sig to automatically handle Excel BOM if present
    with open(csv_path, mode='r', encoding='utf-8-sig') as f:
        reader = csv.DictReader(f)
        for row in reader:
            # Clean and strip values
            p = {
                "category": (row.get("category") or row.get("身分別") or "").strip(),
                "id": clean_coord(row.get("id") or row.get("身份證") or ""),
                "name": "",  # 姓名由 dayperformers.csv 帶入，此欄固定為空
                "team": (row.get("team") or row.get("班別") or row.get("東西班") or row.get("組別") or "東班").strip(),
                "circle": clean_coord(row.get("circle") or row.get("01圓形") or ""),
                "xingYuan": clean_coord(row.get("xingYuan") or row.get("02行願") or ""),
                "jingSi": clean_coord(row.get("jingSi") or row.get("04靜思家風") or ""),
                "lamp": clean_coord(row.get("lamp") or row.get("05-1有法船") or row.get("05-1有法船（點一盞燈）") or ""),
                "noBoat": clean_coord(row.get("noBoat") or row.get("05-2無法船") or row.get("05-2無法船（菜市場5毛錢）") or ""),
                "bigV": clean_coord(row.get("bigV") or row.get("06四弘誓願") or ""),
                "daChuanShi": clean_coord(row.get("daChuanShi") or row.get("07大船師") or ""),
                "eduWaterSlash": clean_coord(row.get("eduWaterSlash") or row.get("08-1教育(水滴＋斜線)") or ""),
                "eduWaterArc": clean_coord(row.get("eduWaterArc") or row.get("08-2教育(水滴＋弧線)") or ""),
                "eduBigLotus": clean_coord(row.get("eduBigLotus") or row.get("08-3教育(大蓮花)") or ""),
                "eduMidSmallLotus": clean_coord(row.get("eduMidSmallLotus") or row.get("08-4教育(中小蓮花)") or ""),
                "humanities": clean_coord(row.get("humanities") or row.get("09人文") or ""),
                "fiveContinents1": clean_coord(row.get("fiveContinents1") or row.get("10-1五大洲") or ""),
                "fiveContinents2": clean_coord(row.get("fiveContinents2") or row.get("10-2五大洲") or ""),
                "flyingApsaras": clean_coord(row.get("flyingApsaras") or row.get("11飛天") or "")
            }
            # Add only if id is present (name is always empty; comes from dayperformers.csv)
            if p["id"]:
                performers.append(p)
                
    # Generate data.js format content
    js_content = "// Performer Stage Formations Database\nconst performersData = [\n"
    for idx, p in enumerate(performers):
        comma = "," if idx < len(performers) - 1 else ""
        js_content += f'  {{ category: "{esc(p["category"])}", id: "{esc(p["id"])}", name: "{esc(p["name"])}", team: "{esc(p["team"])}", circle: "{esc(p["circle"])}", xingYuan: "{esc(p["xingYuan"])}", jingSi: "{esc(p["jingSi"])}", lamp: "{esc(p["lamp"])}", noBoat: "{esc(p["noBoat"])}", bigV: "{esc(p["bigV"])}", daChuanShi: "{esc(p["daChuanShi"])}", eduWaterSlash: "{esc(p["eduWaterSlash"])}", eduWaterArc: "{esc(p["eduWaterArc"])}", eduBigLotus: "{esc(p["eduBigLotus"])}", eduMidSmallLotus: "{esc(p["eduMidSmallLotus"])}", humanities: "{esc(p["humanities"])}", fiveContinents1: "{esc(p["fiveContinents1"])}", fiveContinents2: "{esc(p["fiveContinents2"])}", flyingApsaras: "{esc(p["flyingApsaras"])}" }}{comma}\n'
    js_content += "];\n\n// Export if in node environment, otherwise make it global\nif (typeof module !== 'undefined' && module.exports) {\n  module.exports = performersData;\n}\n"
    
    with open(js_path, mode='w', encoding='utf-8') as f:
        f.write(js_content)
        
    if verbose:
        print(f"成功！已批次匯入 {len(performers)} 筆表演者名單至 data.js 檔案！")

if __name__ == '__main__':
    main()
