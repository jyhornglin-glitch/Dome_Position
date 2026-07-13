#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
wsgi.py
WSGI application wrapper for PythonAnywhere deployment.
Handles POST APIs and serves static files.
"""

import os
import sys
import csv
import json
import subprocess
import mimetypes
import import_csv
import import_daycsv

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, BASE_DIR)

DAY_CSV = os.path.join(BASE_DIR, 'dayperformers.csv')
PERF_CSV = os.path.join(BASE_DIR, 'performers.csv')

SESS_MAP = {
    '1112': '11/12(四)',
    '1113': '11/13(五)',
    '1114': '11/14(六)',
    '1115': '11/15(日)',
}

SESS_ALLOWED_DATES = {
    '1112': {'1/12(四)', '11/12(四)'},
    '1113': {'1/13(五)', '11/13(五)'},
    '1114': {'1/14(六)', '11/14(六)'},
    '1115': {'1/15(日)', '11/15(日)'},
}

def clean_coord(val):
    if not val:
        return ""
    val = val.strip()
    import re
    m1 = re.match(r'^(\d+)月(\d+)日$', val)
    if m1:
        return f"{m1.group(1)}-{m1.group(2)}"
    m2 = re.match(r'^(\d+)/(\d+)$', val)
    if m2:
        return f"{m2.group(1)}-{m2.group(2)}"
    m3 = re.match(r'^(\d+)/(\d+)/(\d+)$', val)
    if m3:
        if len(m3.group(1)) == 4:
            return f"{int(m3.group(2))}-{int(m3.group(3))}"
    return val

def handle_update_dayperformer(data):
    pwd = data.get('password')
    if pwd != 'tzuchi60' and pwd != 'tzuchi6060':
        return 403, {"success": False, "error": "密碼錯誤，拒絕存取！"}

    session_key = data.get('session')
    target_id = str(data.get('id', '')).strip()
    new_name = str(data.get('name', '')).strip()
    team = str(data.get('team', '')).strip()

    if not session_key or not target_id or not new_name or not team:
        return 400, {"success": False, "error": "Missing required fields"}

    allowed_dates = SESS_ALLOWED_DATES.get(session_key)
    if not allowed_dates:
        return 400, {"success": False, "error": "Invalid session key"}

    rows = []
    headers = ['班別', '日期', '身份證', '姓名']
    found = False
    
    if os.path.exists(DAY_CSV):
        with open(DAY_CSV, mode='r', encoding='utf-8-sig') as f:
            reader = csv.DictReader(f)
            headers = reader.fieldnames or headers
            for row in reader:
                row_date = (row.get('日期') or '').strip()
                row_team = (row.get('班別') or '').strip()
                if row_date in allowed_dates and (row.get('身份證') or '').strip() == target_id and row_team == team:
                    row['姓名'] = new_name
                    found = True
                rows.append(row)

    if not found:
        default_date = SESS_MAP.get(session_key)
        rows.append({'班別': team, '日期': default_date, '身份證': target_id, '姓名': new_name})

    with open(DAY_CSV, mode='w', encoding='utf-8-sig', newline='') as f:
        writer = csv.DictWriter(f, fieldnames=headers)
        writer.writeheader()
        writer.writerows(rows)

    # Run regeneration script
    try:
        import_daycsv.main(verbose=False)
    except Exception as e:
        return 500, {"success": False, "error": f"Failed to regenerate daydata.js: {str(e)}"}

    return 200, {"success": True}

def handle_update_performer(data):
    pwd = data.get('password')
    if pwd != 'tzuchi60' and pwd != 'tzuchi6060':
        return 403, {"success": False, "error": "密碼錯誤，拒絕存取！"}

    target_id = str(data.get('id', '')).strip()
    circle = str(data.get('circle', '')).strip()
    xing_yuan = str(data.get('xingYuan', '')).strip()
    mi_luo = str(data.get('miLuo', '')).strip()
    jing_si = str(data.get('jingSi', '')).strip()
    lamp = str(data.get('lamp', '')).strip()
    no_boat = str(data.get('noBoat', '')).strip()
    big_v = str(data.get('bigV', '')).strip()
    da_chuan_shi = str(data.get('daChuanShi', '')).strip()
    bone_donation = str(data.get('boneDonation', '')).strip()
    edu = str(data.get('edu', '')).strip()
    humanities2 = str(data.get('humanities2', '')).strip()
    five_continents1 = str(data.get('fiveContinents1', '')).strip()
    five_continents2 = str(data.get('fiveContinents2', '')).strip()
    flying_apsaras = str(data.get('flyingApsaras', '')).strip()
    team = str(data.get('team', '')).strip()

    if not target_id or not team:
        return 400, {"success": False, "error": "Missing performer ID or team"}

    rows = []
    headers = ['身分別', '身份證', '姓名', '01圓形', '02行願', '03米籮', '04靜思家風', '05-1有法船（點一盞燈）', '05-2無法船（菜市場5毛錢）', '06四弘誓願', '07-1大船師', '07-2骨捐能捨', '08教育', '09-1人文(基本隊形)', '09-2人文(主機板)', '10-1五大洲', '10-2五大洲', '11飛天']
    found = False

    if not os.path.exists(PERF_CSV):
        return 500, {"success": False, "error": "performers.csv not found"}

    with open(PERF_CSV, mode='r', encoding='utf-8-sig') as f:
        reader = csv.DictReader(f)
        headers = reader.fieldnames or headers
        for row in reader:
            row_team = (row.get('班別') or '').strip()
            if (row.get('身份證') or '').strip() == target_id and row_team == team:
                row['01圓形'] = circle
                row['02行願'] = xing_yuan
                row['03米籮'] = target_id  # 強制與起點一致
                row['04靜思家風'] = jing_si
                row['05-1有法船（點一盞燈）'] = lamp
                row['05-2無法船（菜市場5毛錢）'] = no_boat
                row['06四弘誓願'] = big_v
                row['07-1大船師'] = da_chuan_shi
                row['07-2骨捐能捨'] = bone_donation
                row['08教育'] = edu
                row['09-1人文(基本隊形)'] = target_id  # 強制與身份證一致
                row['09-2人文(主機板)'] = humanities2
                row['10-1五大洲'] = five_continents1
                row['10-2五大洲'] = five_continents2
                row['11飛天'] = flying_apsaras
                found = True
            rows.append(row)

    if not found:
        return 404, {"success": False, "error": f"身分證 {target_id} 且屬於 {team} 不存在於 performers.csv 中"}

    with open(PERF_CSV, mode='w', encoding='utf-8-sig', newline='') as f:
        writer = csv.DictWriter(f, fieldnames=headers)
        writer.writeheader()
        writer.writerows(rows)

    # Run regeneration script
    try:
        import_csv.main(verbose=False)
    except Exception as e:
        return 500, {"success": False, "error": f"Failed to regenerate data.js: {str(e)}"}

    return 200, {"success": True}

def handle_admin_login(data):
    pwd = data.get('password')
    if pwd == 'tzuchi60' or pwd == 'tzuchi6060':
        return 200, {"success": True}
    return 403, {"success": False, "error": "密碼錯誤"}

def handle_admin_get_data(data):
    pwd = data.get('password')
    if pwd != 'tzuchi60' and pwd != 'tzuchi6060':
        return 403, {"success": False, "error": "未授權存取"}

    performers = []
    if os.path.exists(PERF_CSV):
        with open(PERF_CSV, mode='r', encoding='utf-8-sig') as f:
            reader = csv.DictReader(f)
            for row in reader:
                performers.append(dict(row))

    dayperformers = []
    if os.path.exists(DAY_CSV):
        with open(DAY_CSV, mode='r', encoding='utf-8-sig') as f:
            reader = csv.DictReader(f)
            for row in reader:
                dayperformers.append(dict(row))

    return 200, {
        "success": True,
        "performers": performers,
        "dayperformers": dayperformers
    }

def handle_admin_save_row(data):
    pwd = data.get('password')
    if pwd != 'tzuchi60' and pwd != 'tzuchi6060':
        return 403, {"success": False, "error": "未授權存取"}

    table_type = data.get('type')  # 'performers' or 'dayperformers'
    action = data.get('action')    # 'add', 'update', 'delete'
    row_data = data.get('row', {})
    old_key = data.get('oldKey')   # dict of keys identifying the row before modification

    if table_type == 'dayperformers':
        csv_path = DAY_CSV
        key_fields = ['班別', '日期', '身份證']
        headers = ['班別', '日期', '身份證', '姓名']
    elif table_type == 'performers':
        csv_path = PERF_CSV
        key_fields = ['班別', '身份證']
        headers = ['班別', '身分別', '身份證', '姓名', '01圓形', '02行願', '03米籮', '04靜思家風', '05-1有法船（點一盞燈）', '05-2無法船（菜市場5毛錢）', '06四弘誓願', '07-1大船師', '07-2骨捐能捨', '08教育', '09-1人文(基本隊形)', '09-2人文(主機板)', '10-1五大洲', '10-2五大洲', '11飛天']
    else:
        return 400, {"success": False, "error": "無效的表格類型"}

    # Read existing rows
    rows = []
    existing_headers = []
    if os.path.exists(csv_path):
        with open(csv_path, mode='r', encoding='utf-8-sig') as f:
            reader = csv.DictReader(f)
            existing_headers = reader.fieldnames or []
            for r in reader:
                rows.append(dict(r))
    
    final_headers = existing_headers if existing_headers else headers
    final_headers = [h for h in final_headers if h is not None and h != '']

    def row_matches(r, key_dict):
        return all(str(r.get(k, '')).strip() == str(key_dict.get(k, '')).strip() for k in key_fields)

    success = False
    error_msg = ""
    
    if '身份證' in row_data:
        row_data['身份證'] = clean_coord(row_data['身份證'])
        row_data['03米籮'] = row_data['身份證']  # 強制與起點一致
        row_data['09-1人文(基本隊形)'] = row_data['身份證']  # 強制與起點一致

    if action == 'add':
        duplicate = any(row_matches(r, row_data) for r in rows)
        if duplicate:
            error_msg = "資料已存在（身份證編號與班別重複）"
        else:
            new_row = {}
            for h in final_headers:
                new_row[h] = row_data.get(h, '')
            rows.append(new_row)
            success = True
    elif action == 'update':
        found_idx = -1
        for idx, r in enumerate(rows):
            if row_matches(r, old_key or row_data):
                found_idx = idx
                break
        if found_idx != -1:
            updated_row = rows[found_idx]
            for h in final_headers:
                if h in row_data:
                    updated_row[h] = row_data[h]
            rows[found_idx] = updated_row
            success = True
        else:
            error_msg = "找不到要更新的原始資料"
    elif action == 'delete':
        original_len = len(rows)
        rows = [r for r in rows if not row_matches(r, old_key or row_data)]
        if len(rows) < original_len:
            success = True
        else:
            error_msg = "找不到要刪除的資料"

    if success:
        with open(csv_path, mode='w', encoding='utf-8-sig', newline='') as f:
            writer = csv.DictWriter(f, fieldnames=final_headers)
            writer.writeheader()
            writer.writerows(rows)

        try:
            if table_type == 'dayperformers':
                import_daycsv.main(verbose=False)
            else:
                import_csv.main(verbose=False)
        except Exception as e:
            return 500, {"success": False, "error": f"資料已儲存，但重新生成 JS 失敗: {str(e)}"}

        return 200, {"success": True}
    else:
        return 400, {"success": False, "error": error_msg}

def handle_admin_import_csv(data):
    import io
    pwd = data.get('password')
    if pwd != 'tzuchi60' and pwd != 'tzuchi6060':
        return 403, {"success": False, "error": "未授權存取"}

    import_type = data.get('importType') # 'dayperformers' or 'performers'
    class_val = str(data.get('classVal', '')).strip()
    session_val = str(data.get('sessionVal', '')).strip()
    date_val = str(data.get('dateVal', '')).strip()
    csv_text = data.get('csvText', '')

    if not csv_text:
        return 400, {"success": False, "error": "CSV 內容為空"}

    f = io.StringIO(csv_text.strip())
    if csv_text.startswith('\ufeff'):
        f = io.StringIO(csv_text[1:].strip())
        
    reader = csv.DictReader(f)
    fieldnames = reader.fieldnames or []
    fieldnames = [fn.strip() for fn in fieldnames if fn]

    def find_field(aliases):
        for a in aliases:
            for fn in fieldnames:
                if fn.lower() == a.lower():
                    return fn
        return None

    class_col = find_field(['班別', '東西班', '組別', 'team'])
    date_col = find_field(['日期', 'date'])
    id_col = find_field(['身份證', '身分證', 'id'])
    name_col = find_field(['姓名', 'name'])

    # Validate headers existence
    if import_type == 'dayperformers':
        if not class_col or not date_col or not id_col or not name_col:
            return 400, {
                "success": False, 
                "error": f"CSV 必須包含「班別」、「日期」、「身份證」與「姓名」欄位！目前欄位: {', '.join(fieldnames)}"
            }
    else: # performers
        if not class_col or not id_col:
            return 400, {
                "success": False, 
                "error": f"CSV 必須包含「班別」與「身份證」欄位！目前欄位: {', '.join(fieldnames)}"
            }

    csv_rows = []
    row_idx = 1
    for row in reader:
        row_idx += 1
        row_class = str(row.get(class_col, '')).strip()
        
        # Validate Class consistency
        if row_class != class_val:
            return 400, {
                "success": False,
                "error": f"第 {row_idx} 行資料的班別「{row_class}」與下拉選單選擇的「{class_val}」不一致！匯入中斷。"
            }
        
        # Validate Date consistency (only for dayperformers)
        if import_type == 'dayperformers':
            row_date = str(row.get(date_col, '')).strip()
            if row_date != date_val:
                return 400, {
                    "success": False,
                    "error": f"第 {row_idx} 行資料的日期「{row_date}」與下拉選單選擇的「{date_val}」不一致！匯入中斷。"
                }
        
        csv_rows.append(row)

    total_read = len(csv_rows)
    added_count = 0
    updated_count = 0
    ignored_count = 0

    if import_type == 'dayperformers':
        existing_rows = []
        existing_headers = ['班別', '日期', '身份證', '姓名']
        if os.path.exists(DAY_CSV):
            with open(DAY_CSV, mode='r', encoding='utf-8-sig') as f_exist:
                r_exist = csv.DictReader(f_exist)
                existing_headers = r_exist.fieldnames or existing_headers
                for r in r_exist:
                    existing_rows.append(dict(r))

        existing_map = {}
        for idx, r in enumerate(existing_rows):
            key = (str(r.get('班別', '')).strip(), str(r.get('日期', '')).strip(), str(r.get('身份證', '')).strip())
            existing_map[key] = idx

        for r in csv_rows:
            team = class_val
            date = date_val
            pid = clean_coord(r.get(id_col))
            name = str(r.get(name_col, '')).strip()
            
            if not pid:
                continue
                
            key = (team, date, pid)
            if key in existing_map:
                exist_idx = existing_map[key]
                if str(existing_rows[exist_idx].get('姓名', '')).strip() != name:
                    existing_rows[exist_idx]['姓名'] = name
                    updated_count += 1
                else:
                    ignored_count += 1
            else:
                new_row = {}
                for h in existing_headers:
                    if h == '班別': new_row[h] = team
                    elif h == '日期': new_row[h] = date
                    elif h == '身份證': new_row[h] = pid
                    elif h == '姓名': new_row[h] = name
                    else: new_row[h] = ''
                existing_rows.append(new_row)
                existing_map[key] = len(existing_rows) - 1
                added_count += 1

        with open(DAY_CSV, mode='w', encoding='utf-8-sig', newline='') as f_out:
            writer = csv.DictWriter(f_out, fieldnames=existing_headers)
            writer.writeheader()
            writer.writerows(existing_rows)

        import_daycsv.main(verbose=False)

    else: # performers
        existing_rows = []
        default_headers = ['班別', '身分別', '身份證', '姓名', '01圓形', '02行願', '03米籮', '04靜思家風', '05-1有法船（點一盞燈）', '05-2無法船（菜市場5毛錢）', '06四弘誓願', '07-1大船師', '07-2骨捐能捨', '08教育', '09-1人文(基本隊形)', '09-2人文(主機板)', '10-1五大洲', '10-2五大洲', '11飛天']
        existing_headers = default_headers
        if os.path.exists(PERF_CSV):
            with open(PERF_CSV, mode='r', encoding='utf-8-sig') as f_exist:
                r_exist = csv.DictReader(f_exist)
                existing_headers = r_exist.fieldnames or existing_headers
                for r in r_exist:
                    existing_rows.append(dict(r))

        existing_map = {}
        for idx, r in enumerate(existing_rows):
            key = (str(r.get('班別', '')).strip(), str(r.get('身份證', '')).strip())
            existing_map[key] = idx

        cat_col = find_field(['身分別', 'category']) or '身分別'
        name_col_perf = find_field(['姓名', 'name']) or '姓名'
        circle_col = find_field(['01圓形', 'circle']) or '01圓形'
        xingyuan_col = find_field(['02行願', 'xingYuan']) or '02行願'
        miluo_col = find_field(['03米籮', '03米蘿', 'miLuo']) or '03米籮'
        jingsi_col = find_field(['04靜思家風', 'jingSi']) or '04靜思家風'
        lamp_col = find_field(['05-1有法船', '05-1有法船（點一盞燈）', 'lamp']) or '05-1有法船（點一盞燈）'
        noboat_col = find_field(['05-2無法船', '05-2無法船（菜市場5毛錢）', 'noBoat']) or '05-2無法船（菜市場5毛錢）'
        bigv_col = find_field(['06四弘誓願', 'bigV']) or '06四弘誓願'
        dachuan_col = find_field(['07-1大船師', 'daChuanShi']) or '07-1大船師'
        bonedonation_col = find_field(['07-2骨捐能捨', 'boneDonation']) or '07-2骨捐能捨'
        edu_col = find_field(['08教育', 'edu']) or '08教育'
        humanities1_col = find_field(['09-1人文', '09-1人文(基本隊形)', 'humanities1']) or '09-1人文(基本隊形)'
        humanities2_col = find_field(['09-2人文', '09-2人文(主機板)', 'humanities2']) or '09-2人文(主機板)'
        fivecontinents1_col = find_field(['10-1五大洲', 'fiveContinents1']) or '10-1五大洲'
        fivecontinents2_col = find_field(['10-2五大洲', 'fiveContinents2']) or '10-2五大洲'
        flyingapsaras_col = find_field(['11飛天', 'flyingApsaras']) or '11飛天'

        for r in csv_rows:
            team = class_val
            pid = clean_coord(r.get(id_col))
            
            if not pid:
                continue
                
            key = (team, pid)
            
            cat = str(r.get(cat_col, '')).strip() if cat_col in r else 'A白'
            pname = str(r.get(name_col_perf, '')).strip() if name_col_perf in r else '缺'
            circle = clean_coord(r.get(circle_col, ''))
            xingyuan = clean_coord(r.get(xingyuan_col, ''))
            miluo = pid  # 強制與起點一致
            jingsi = clean_coord(r.get(jingsi_col, ''))
            lamp = clean_coord(r.get(lamp_col, ''))
            noboat = clean_coord(r.get(noboat_col, ''))
            bigv = clean_coord(r.get(bigv_col, ''))
            dachuan = clean_coord(r.get(dachuan_col, ''))
            bone_donation = clean_coord(r.get(bonedonation_col, ''))
            edu = clean_coord(r.get(edu_col, ''))
            humanities1 = pid  # 強制與起點一致
            humanities2 = clean_coord(r.get(humanities2_col, ''))
            fivecontinents1 = clean_coord(r.get(fivecontinents1_col, ''))
            fivecontinents2 = clean_coord(r.get(fivecontinents2_col, ''))
            flyingapsaras = clean_coord(r.get(flyingapsaras_col, ''))

            if key in existing_map:
                exist_idx = existing_map[key]
                exist_row = existing_rows[exist_idx]
                
                changed = False
                if circle_col in r and exist_row.get('01圓形') != circle: exist_row['01圓形'] = circle; changed = True
                if xingyuan_col in r and exist_row.get('02行願') != xingyuan: exist_row['02行願'] = xingyuan; changed = True
                miluo_key_in_row = '03米籮' if '03米籮' in exist_row else ('03米蘿' if '03米蘿' in exist_row else miluo_col)
                if miluo_col in r and exist_row.get(miluo_key_in_row) != miluo: exist_row[miluo_key_in_row] = miluo; changed = True
                if jingsi_col in r and exist_row.get('04靜思家風') != jingsi: exist_row['04靜思家風'] = jingsi; changed = True
                if lamp_col in r and exist_row.get('05-1有法船（點一盞燈）') != lamp: exist_row['05-1有法船（點一盞燈）'] = lamp; changed = True
                if noboat_col in r and exist_row.get('05-2無法船（菜市場5毛錢）') != noboat: exist_row['05-2無法船（菜市場5毛錢）'] = noboat; changed = True
                if bigv_col in r and exist_row.get('06四弘誓願') != bigv: exist_row['06四弘誓願'] = bigv; changed = True
                if dachuan_col in r and exist_row.get('07-1大船師') != dachuan: exist_row['07-1大船師'] = dachuan; changed = True
                if bonedonation_col in r and exist_row.get('07-2骨捐能捨') != bone_donation: exist_row['07-2骨捐能捨'] = bone_donation; changed = True
                if edu_col in r and exist_row.get('08教育') != edu: exist_row['08教育'] = edu; changed = True
                
                h1_key = '09-1人文(基本隊形)' if '09-1人文(基本隊形)' in exist_row else ('09-1人文' if '09-1人文' in exist_row else humanities1_col)
                if exist_row.get(h1_key) != humanities1: exist_row[h1_key] = humanities1; changed = True
                
                h2_key = '09-2人文(主機板)' if '09-2人文(主機板)' in exist_row else ('09-2人文' if '09-2人文' in exist_row else humanities2_col)
                if humanities2_col in r and exist_row.get(h2_key) != humanities2: exist_row[h2_key] = humanities2; changed = True

                if fivecontinents1_col in r and exist_row.get('10-1五大洲') != fivecontinents1: exist_row['10-1五大洲'] = fivecontinents1; changed = True
                if fivecontinents2_col in r and exist_row.get('10-2五大洲') != fivecontinents2: exist_row['10-2五大洲'] = fivecontinents2; changed = True
                if flyingapsaras_col in r and exist_row.get('11飛天') != flyingapsaras: exist_row['11飛天'] = flyingapsaras; changed = True
                
                if cat_col in r and exist_row.get('身分別') != cat: exist_row['身分別'] = cat; changed = True
                if name_col_perf in r and exist_row.get('姓名') != pname: exist_row['姓名'] = pname; changed = True

                if changed:
                    updated_count += 1
                else:
                    ignored_count += 1
            else:
                new_row = {}
                for h in existing_headers:
                    if not h:
                        new_row[h] = ''
                        continue
                    clean_h = h.strip()
                    if clean_h == '班別': new_row[h] = team
                    elif clean_h == '身分別': new_row[h] = cat
                    elif clean_h == '身份證': new_row[h] = pid
                    elif clean_h == '姓名': new_row[h] = pname
                    elif clean_h == '01圓形': new_row[h] = circle
                    elif clean_h == '02行願': new_row[h] = xingyuan
                    elif clean_h in ['03米蘿', '03米籮']: new_row[h] = miluo
                    elif clean_h == '04靜思家風': new_row[h] = jingsi
                    elif clean_h == '05-1有法船（點一盞燈）': new_row[h] = lamp
                    elif clean_h == '05-2無法船（菜市場5毛錢）': new_row[h] = noboat
                    elif clean_h == '06四弘誓願': new_row[h] = bigv
                    elif clean_h == '07-1大船師': new_row[h] = dachuan
                    elif clean_h == '07-2骨捐能捨': new_row[h] = bone_donation
                    elif clean_h == '08教育': new_row[h] = edu
                    elif clean_h in ['09-1人文', '09-1人文(基本隊形)']: new_row[h] = humanities1
                    elif clean_h in ['09-2人文', '09-2人文(主機板)']: new_row[h] = humanities2
                    elif clean_h == '10-1五大洲': new_row[h] = fivecontinents1
                    elif clean_h == '10-2五大洲': new_row[h] = fivecontinents2
                    elif clean_h == '11飛天': new_row[h] = flyingapsaras
                    else:
                        new_row[h] = r.get(h, '')
                existing_rows.append(new_row)
                existing_map[key] = len(existing_rows) - 1
                added_count += 1

        with open(PERF_CSV, mode='w', encoding='utf-8-sig', newline='') as f_out:
            clean_headers = [h for h in existing_headers if h is not None]
            writer = csv.DictWriter(f_out, fieldnames=clean_headers)
            writer.writeheader()
            writer.writerows(existing_rows)

        import_csv.main(verbose=False)

    return 200, {
        "success": True,
        "total_read": total_read,
        "added_count": added_count,
        "updated_count": updated_count,
        "ignored_count": ignored_count
    }

def application(environ, start_response):
    path = environ.get('PATH_INFO', '')
    method = environ.get('REQUEST_METHOD', 'GET')

    # 1. Handle API requests (POST)
    if method == 'POST':
        if path == '/api/update-dayperformer' or path == '/api/update-performer' or path.startswith('/api/admin/'):
            try:
                content_length = int(environ.get('CONTENT_LENGTH', 0))
                body = environ['wsgi.input'].read(content_length)
                data = json.loads(body.decode('utf-8'))
                
                if path == '/api/update-dayperformer':
                    status_code, response_data = handle_update_dayperformer(data)
                elif path == '/api/update-performer':
                    status_code, response_data = handle_update_performer(data)
                elif path == '/api/admin/login':
                    status_code, response_data = handle_admin_login(data)
                elif path == '/api/admin/get-data':
                    status_code, response_data = handle_admin_get_data(data)
                elif path == '/api/admin/save-row':
                    status_code, response_data = handle_admin_save_row(data)
                elif path == '/api/admin/import-csv':
                    status_code, response_data = handle_admin_import_csv(data)
                else:
                    status_code, response_data = 404, {"success": False, "error": "API endpoint not found"}
                    
                status = f"{status_code} " + ("OK" if status_code == 200 else "Error")
                response_body = json.dumps(response_data).encode('utf-8')
                
                headers = [
                    ('Content-Type', 'application/json; charset=utf-8'),
                    ('Content-Length', str(len(response_body))),
                    ('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0'),
                ]
                start_response(status, headers)
                return [response_body]
            except Exception as e:
                status = '500 Internal Server Error'
                response_body = json.dumps({"success": False, "error": str(e)}).encode('utf-8')
                headers = [
                    ('Content-Type', 'application/json; charset=utf-8'),
                    ('Content-Length', str(len(response_body)))
                ]
                start_response(status, headers)
                return [response_body]
        else:
            status = '404 Not Found'
            response_body = b'API endpoint not found'
            start_response(status, [('Content-Type', 'text/plain'), ('Content-Length', str(len(response_body)))])
            return [response_body]

    # 2. Handle static files (GET)
    if path == '/' or path == '':
        filename = 'index.html'
    else:
        filename = path.lstrip('/')

    file_path = os.path.join(BASE_DIR, filename)
    
    # Security check: Prevent directory traversal
    real_base = os.path.realpath(BASE_DIR)
    real_file = os.path.realpath(file_path)
    if not real_file.startswith(real_base) or not os.path.exists(real_file) or os.path.isdir(real_file):
        status = '404 Not Found'
        response_body = b'File not found'
        start_response(status, [('Content-Type', 'text/plain'), ('Content-Length', str(len(response_body)))])
        return [response_body]

    # Serve files with correct mime type
    content_type, _ = mimetypes.guess_type(real_file)
    if not content_type:
        content_type = 'application/octet-stream'
    
    # Append charset for text files
    if 'text/' in content_type or content_type == 'application/javascript':
        content_type += '; charset=utf-8'

    status = '200 OK'
    headers = [('Content-Type', content_type)]
    
    # Disable cache for javascript and css
    if real_file.endswith('.js') or real_file.endswith('.css'):
        headers.extend([
            ('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0'),
            ('Pragma', 'no-cache'),
            ('Expires', '0')
        ])

    try:
        with open(real_file, 'rb') as f:
            content = f.read()
        headers.append(('Content-Length', str(len(content))))
        start_response(status, headers)
        return [content]
    except Exception as e:
        status = '500 Internal Server Error'
        response_body = str(e).encode('utf-8')
        start_response(status, [('Content-Type', 'text/plain'), ('Content-Length', str(len(response_body)))])
        return [response_body]
