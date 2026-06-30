#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
export_csv.py
反編譯與還原工具：將 data.js 轉回 performers.csv，將 daydata.js 轉回 dayperformers.csv
"""

import os
import re
import csv
import shutil

def backup_file(filepath):
    if os.path.exists(filepath):
        backup_path = filepath + ".bak"
        shutil.copy2(filepath, backup_path)
        print(f"  已備份舊檔案至 {os.path.basename(backup_path)}")

def decompile_performers(base_dir):
    js_path = os.path.join(base_dir, "data.js")
    csv_path = os.path.join(base_dir, "performers.csv")
    
    if not os.path.exists(js_path):
        print(f"錯誤：找不到 {js_path}")
        return False
        
    print(f"正在還原 {os.path.basename(csv_path)}...")
    backup_file(csv_path)
    
    with open(js_path, "r", encoding="utf-8") as f:
        content = f.read()
        
    match = re.search(r'const\s+performersData\s*=\s*\[([\s\S]*?)\];', content)
    if not match:
        match = re.search(r'performersData\s*=\s*\[([\s\S]*?)\]', content)
        if not match:
            print("  錯誤：無法在 data.js 中找到 performersData 陣列！")
            return False
            
    records_str = match.group(1)
    records = re.findall(r'\{\s*(.*?)\s*\}', records_str)
    field_pattern = re.compile(r'([a-zA-Z0-9_]+)\s*:\s*"(.*?)"')
    
    headers_chinese = [
        "班別", "身分別", "身份證", "姓名", "01圓形", "02行願", "03米蘿", "04靜思家風",
        "05-1有法船（點一盞燈）", "05-2無法船（菜市場5毛錢）", "06四弘誓願",
        "07-1大船師", "07-2骨捐能捨", "08教育", "09人文", "10-1五大洲", 
        "10-2五大洲", "11飛天", ""
    ]
    
    js_fields = [
        "team", "category", "id", "name", "circle", "xingYuan", "miLuo", "jingSi",
        "lamp", "noBoat", "bigV", "daChuanShi", "boneDonation", "edu", "humanities", "fiveContinents1",
        "fiveContinents2", "flyingApsaras", ""
    ]
    
    # 嘗試從備份檔案中讀取原本的姓名，以保留姓名資料
    id_to_name = {}
    backup_path = csv_path + ".bak"
    if os.path.exists(backup_path):
        try:
            with open(backup_path, "r", encoding="utf-8-sig") as bf:
                reader = csv.DictReader(bf)
                for row in reader:
                    # 支援中文/英文屬性名
                    pid = row.get("身份證") or row.get("id")
                    pname = row.get("姓名") or row.get("name")
                    if pid and pname:
                        id_to_name[pid.strip()] = pname.strip()
        except Exception as e:
            print(f"  讀取備份檔案中的姓名失敗，將預設姓名為 '缺': {e}")

    decompiled_rows = []
    for record in records:
        fields = dict(field_pattern.findall(record))
        row = {}
        for chi, eng in zip(headers_chinese, js_fields):
            val = fields.get(eng, "")
            # 還原 JS 轉義字元
            val = val.replace('\\"', '"').replace('\\\\', '\\').replace('\\n', '\n').replace('\\r', '\r')
            if eng == "name":
                record_id = fields.get("id", "").strip()
                # 優先使用備份檔案中的姓名，如果沒有才用 "缺"
                val = id_to_name.get(record_id, "")
                if not val:
                    val = "缺"
            row[chi] = val
        decompiled_rows.append(row)
        
    with open(csv_path, "w", encoding="utf-8-sig", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=headers_chinese)
        writer.writeheader()
        writer.writerows(decompiled_rows)
        
    print(f"  成功！已還原 {len(decompiled_rows)} 筆資料。")
    return True

def decompile_day_performers(base_dir):
    js_path = os.path.join(base_dir, "daydata.js")
    csv_path = os.path.join(base_dir, "dayperformers.csv")
    
    if not os.path.exists(js_path):
        print(f"錯誤：找不到 {js_path}")
        return False
        
    print(f"正在還原 {os.path.basename(csv_path)}...")
    backup_file(csv_path)
    
    with open(js_path, "r", encoding="utf-8") as f:
        content = f.read()
        
    # 提取場次日期對照
    sessions_match = re.search(r'const\s+DAY_SESSIONS\s*=\s*\[([\s\S]*?)\];', content)
    session_date_map = {}
    if sessions_match:
        for sess in re.findall(r'\{\s*(.*?)\s*\}', sessions_match.group(1)):
            fields = dict(re.findall(r'([a-zA-Z0-9_]+)\s*:\s*[\'"]?(.*?)[\'"]?\s*(?:,|$)', sess))
            key = fields.get('key', '').strip()
            date_val = fields.get('date', '').strip()
            if key and date_val:
                session_date_map[key] = date_val
                
    if not session_date_map:
        session_date_map = {
            '1112': '11/12(四)',
            '1113': '11/13(五)',
            '1114': '11/14(六)',
            '1115': '11/15(日)'
        }
        
    # 提取名單
    perf_match = re.search(r'const\s+DAY_PERFORMERS\s*=\s*\{([\s\S]*?)\};', content)
    if not perf_match:
        print("  錯誤：無法在 daydata.js 中找到 DAY_PERFORMERS 物件！")
        return False
        
    session_blocks = re.findall(r'[\'"]?(\d+)[\'"]?\s*:\s*\[([\s\S]*?)\]\s*,?', perf_match.group(1))
    
    headers = ["班別", "日期", "身份證", "姓名"]
    decompiled_rows = []
    
    for sess_key, block_str in session_blocks:
        date_label = session_date_map.get(sess_key, f"11/{sess_key[2:]}")
        records = re.findall(r'\{\s*(.*?)\s*\}', block_str)
        for record in records:
            fields = dict(re.findall(r'([a-zA-Z0-9_]+)\s*:\s*[\'"](.*?)[\'"]\s*(?:,|$)', record))
            decompiled_rows.append({
                "班別": fields.get('team', '').replace("\\'", "'").replace('\\\\', '\\'),
                "日期": date_label,
                "身份證": fields.get('id', '').replace("\\'", "'").replace('\\\\', '\\'),
                "姓名": fields.get('name', '').replace("\\'", "'").replace('\\\\', '\\')
            })
            
    with open(csv_path, "w", encoding="utf-8-sig", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=headers)
        writer.writeheader()
        writer.writerows(decompiled_rows)
        
    print(f"  成功！已還原 {len(decompiled_rows)} 筆每日名單資料。")
    return True

def main():
    base_dir = os.path.dirname(os.path.abspath(__file__))
    print("=== 開始進行 JS 資料反編譯回 CSV ===")
    p_ok = decompile_performers(base_dir)
    d_ok = decompile_day_performers(base_dir)
    if p_ok and d_ok:
        print("=== 反編譯完成！ ===")
    else:
        print("=== 部分還原失敗，請檢查資料格式。 ===")

if __name__ == "__main__":
    main()
