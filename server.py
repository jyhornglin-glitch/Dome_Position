#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
server.py
A custom lightweight Python server to serve static files and provide POST APIs
for data maintenance on performers.csv and dayperformers.csv.
Usage: python3 server.py [port]
"""

import os
import sys
import csv
import json
import subprocess
from http.server import SimpleHTTPRequestHandler, HTTPServer
import import_csv
import import_daycsv

PORT = 8000
if len(sys.argv) > 1:
    try:
        PORT = int(sys.argv[1])
    except ValueError:
        pass

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
os.chdir(BASE_DIR)

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

class AdminRequestHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        # Prevent caching of JS databases for instant frontend updates
        clean_path = self.path.split('?')[0]
        if clean_path.endswith('.js') or clean_path.endswith('.css'):
            self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0')
            self.send_header('Pragma', 'no-cache')
            self.send_header('Expires', '0')
        super().end_headers()

    def do_POST(self):
        if self.path == '/api/update-dayperformer':
            self.handle_update_dayperformer()
        elif self.path == '/api/update-performer':
            self.handle_update_performer()
        elif self.path == '/api/admin/login':
            self.handle_admin_login()
        elif self.path == '/api/admin/get-data':
            self.handle_admin_get_data()
        elif self.path == '/api/admin/save-row':
            self.handle_admin_save_row()
        elif self.path == '/api/admin/import-csv':
            self.handle_admin_import_csv()
        else:
            self.send_error(404, "API endpoint not found")

    def handle_update_dayperformer(self):
        try:
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length)
            data = json.loads(post_data.decode('utf-8'))

            # Verify password
            pwd = data.get('password')
            if pwd != 'tzuchi60' and pwd != 'tzuchi6060':
                self.send_json_response(403, {"success": False, "error": "密碼錯誤，拒絕存取！"})
                return

            session_key = data.get('session')
            target_id = str(data.get('id', '')).strip()
            new_name = str(data.get('name', '')).strip()
            team = str(data.get('team', '')).strip()

            if not session_key or not target_id or not new_name or not team:
                self.send_json_response(400, {"success": False, "error": "Missing required fields"})
                return

            allowed_dates = SESS_ALLOWED_DATES.get(session_key)
            if not allowed_dates:
                self.send_json_response(400, {"success": False, "error": "Invalid session key"})
                return

            # Read and Update dayperformers.csv
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

            # Regenerate daydata.js
            try:
                import_daycsv.main(verbose=False)
            except Exception as e:
                self.send_json_response(500, {"success": False, "error": f"Failed to regenerate daydata.js: {str(e)}"})
                return

            self.send_json_response(200, {"success": True})

        except Exception as e:
            self.send_json_response(500, {"success": False, "error": str(e)})

    def handle_update_performer(self):
        try:
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length)
            data = json.loads(post_data.decode('utf-8'))

            # Verify password
            pwd = data.get('password')
            if pwd != 'tzuchi60' and pwd != 'tzuchi6060':
                self.send_json_response(403, {"success": False, "error": "密碼錯誤，拒絕存取！"})
                return

            target_id = str(data.get('id', '')).strip()
            circle = str(data.get('circle', '')).strip()
            xing_yuan = str(data.get('xingYuan', '')).strip()
            jing_si = str(data.get('jingSi', '')).strip()
            lamp = str(data.get('lamp', '')).strip()
            no_boat = str(data.get('noBoat', '')).strip()
            big_v = str(data.get('bigV', '')).strip()
            da_chuan_shi = str(data.get('daChuanShi', '')).strip()
            edu_water_slash = str(data.get('eduWaterSlash', '')).strip()
            edu_water_arc = str(data.get('eduWaterArc', '')).strip()
            edu_big_lotus = str(data.get('eduBigLotus', '')).strip()
            edu_mid_small_lotus = str(data.get('eduMidSmallLotus', '')).strip()
            humanities = str(data.get('humanities', '')).strip()
            five_continents1 = str(data.get('fiveContinents1', '')).strip()
            five_continents2 = str(data.get('fiveContinents2', '')).strip()
            flying_apsaras = str(data.get('flyingApsaras', '')).strip()
            team = str(data.get('team', '')).strip()

            if not target_id or not team:
                self.send_json_response(400, {"success": False, "error": "Missing performer ID or team"})
                return

            # Read and Update performers.csv
            rows = []
            headers = ['身分別', '身份證', '姓名', '01圓形', '02行願', '04靜思家風', '05-1有法船（點一盞燈）', '05-2無法船（菜市場5毛錢）', '06四弘誓願', '07大船師', '08-1教育(水滴＋斜線)', '08-2教育(水滴＋弧線)', '08-3教育(大蓮花)', '08-4教育(中小蓮花)', '09人文', '10-1五大洲', '10-2五大洲', '11飛天']
            found = False

            if not os.path.exists(PERF_CSV):
                self.send_json_response(500, {"success": False, "error": "performers.csv not found"})
                return

            with open(PERF_CSV, mode='r', encoding='utf-8-sig') as f:
                reader = csv.DictReader(f)
                headers = reader.fieldnames or headers
                for row in reader:
                    row_team = (row.get('班別') or '').strip()
                    if (row.get('身份證') or '').strip() == target_id and row_team == team:
                        row['01圓形'] = circle
                        row['02行願'] = xing_yuan
                        row['04靜思家風'] = jing_si
                        row['05-1有法船（點一盞燈）'] = lamp
                        row['05-2無法船（菜市場5毛錢）'] = no_boat
                        row['06四弘誓願'] = big_v
                        row['07大船師'] = da_chuan_shi
                        row['08-1教育(水滴＋斜線)'] = edu_water_slash
                        row['08-2教育(水滴＋弧線)'] = edu_water_arc
                        row['08-3教育(大蓮花)'] = edu_big_lotus
                        row['08-4教育(中小蓮花)'] = edu_mid_small_lotus
                        row['09人文'] = humanities
                        row['10-1五大洲'] = five_continents1
                        row['10-2五大洲'] = five_continents2
                        row['11飛天'] = flying_apsaras
                        found = True
                    rows.append(row)

            if not found:
                self.send_json_response(404, {"success": False, "error": f"身分證 {target_id} 且屬於 {team} 不存在於 performers.csv 中"})
                return

            with open(PERF_CSV, mode='w', encoding='utf-8-sig', newline='') as f:
                writer = csv.DictWriter(f, fieldnames=headers)
                writer.writeheader()
                writer.writerows(rows)

            # Regenerate data.js
            try:
                import_csv.main(verbose=False)
            except Exception as e:
                self.send_json_response(500, {"success": False, "error": f"Failed to regenerate data.js: {str(e)}"})
                return

            self.send_json_response(200, {"success": True})

        except Exception as e:
            self.send_json_response(500, {"success": False, "error": str(e)})

    def handle_admin_login(self):
        try:
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length)
            data = json.loads(post_data.decode('utf-8'))
            pwd = data.get('password')
            if pwd == 'tzuchi60' or pwd == 'tzuchi6060':
                self.send_json_response(200, {"success": True})
            else:
                self.send_json_response(403, {"success": False, "error": "密碼錯誤"})
        except Exception as e:
            self.send_json_response(500, {"success": False, "error": str(e)})

    def handle_admin_get_data(self):
        try:
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length)
            data = json.loads(post_data.decode('utf-8'))
            pwd = data.get('password')
            if pwd != 'tzuchi60' and pwd != 'tzuchi6060':
                self.send_json_response(403, {"success": False, "error": "未授權存取"})
                return

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

            self.send_json_response(200, {
                "success": True,
                "performers": performers,
                "dayperformers": dayperformers
            })
        except Exception as e:
            self.send_json_response(500, {"success": False, "error": str(e)})

    def handle_admin_save_row(self):
        try:
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length)
            data = json.loads(post_data.decode('utf-8'))
            
            pwd = data.get('password')
            if pwd != 'tzuchi60' and pwd != 'tzuchi6060':
                self.send_json_response(403, {"success": False, "error": "未授權存取"})
                return

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
                headers = ['班別', '身分別', '身份證', '姓名', '01圓形', '02行願', '04靜思家風', '05-1有法船（點一盞燈）', '05-2無法船（菜市場5毛錢）', '06四弘誓願', '07大船師', '08-1教育(水滴＋斜線)', '08-2教育(水滴＋弧線)', '08-3教育(大蓮花)', '08-4教育(中小蓮花)', '09人文', '10-1五大洲', '10-2五大洲', '11飛天']
            else:
                self.send_json_response(400, {"success": False, "error": "無效的表格類型"})
                return

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
                row_data['身份證'] = self.clean_coord_val(row_data['身份證'])

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
                    self.send_json_response(500, {"success": False, "error": f"資料已儲存，但重新生成 JS 失敗: {str(e)}"})
                    return

                self.send_json_response(200, {"success": True})
            else:
                self.send_json_response(400, {"success": False, "error": error_msg})

        except Exception as e:
            self.send_json_response(500, {"success": False, "error": str(e)})

    def handle_admin_import_csv(self):
        import io
        try:
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length)
            data = json.loads(post_data.decode('utf-8'))
            
            pwd = data.get('password')
            if pwd != 'tzuchi60' and pwd != 'tzuchi6060':
                self.send_json_response(403, {"success": False, "error": "未授權存取"})
                return

            import_type = data.get('importType') # 'dayperformers' or 'performers'
            class_val = str(data.get('classVal', '')).strip()
            session_val = str(data.get('sessionVal', '')).strip()
            date_val = str(data.get('dateVal', '')).strip()
            csv_text = data.get('csvText', '')

            if not csv_text:
                self.send_json_response(400, {"success": False, "error": "CSV 內容為空"})
                return

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
                    self.send_json_response(400, {
                        "success": False, 
                        "error": f"CSV 必須包含「班別」、「日期」、「身份證」與「姓名」欄位！目前欄位: {', '.join(fieldnames)}"
                    })
                    return
            else: # performers
                if not class_col or not id_col:
                    self.send_json_response(400, {
                        "success": False, 
                        "error": f"CSV 必須包含「班別」與「身份證」欄位！目前欄位: {', '.join(fieldnames)}"
                    })
                    return

            csv_rows = []
            row_idx = 1
            for row in reader:
                row_idx += 1
                row_class = str(row.get(class_col, '')).strip()
                
                # Validate Class consistency
                if row_class != class_val:
                    self.send_json_response(400, {
                        "success": False,
                        "error": f"第 {row_idx} 行資料的班別「{row_class}」與下拉選單選擇的「{class_val}」不一致！匯入中斷。"
                    })
                    return
                
                # Validate Date consistency (only for dayperformers)
                if import_type == 'dayperformers':
                    row_date = str(row.get(date_col, '')).strip()
                    if row_date != date_val:
                        self.send_json_response(400, {
                            "success": False,
                            "error": f"第 {row_idx} 行資料的日期「{row_date}」與下拉選單選擇的「{date_val}」不一致！匯入中斷。"
                        })
                        return
                
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
                    pid = self.clean_coord_val(r.get(id_col))
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
                default_headers = ['班別', '身分別', '身份證', '姓名', '01圓形', '02行願', '04靜思家風', '05-1有法船（點一盞燈）', '05-2無法船（菜市場5毛錢）', '06四弘誓願', '07大船師', '08-1教育(水滴＋斜線)', '08-2教育(水滴＋弧線)', '08-3教育(大蓮花)', '08-4教育(中小蓮花)', '09人文', '10-1五大洲', '10-2五大洲', '11飛天']
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
                jingsi_col = find_field(['04靜思家風', 'jingSi']) or '04靜思家風'
                lamp_col = find_field(['05-1有法船', '05-1有法船（點一盞燈）', 'lamp']) or '05-1有法船（點一盞燈）'
                noboat_col = find_field(['05-2無法船', '05-2無法船（菜市場5毛錢）', 'noBoat']) or '05-2無法船（菜市場5毛錢）'
                bigv_col = find_field(['06四弘誓願', 'bigV']) or '06四弘誓願'
                dachuan_col = find_field(['07大船師', 'daChuanShi']) or '07大船師'
                eduslash_col = find_field(['08-1教育(水滴＋斜線)', 'eduWaterSlash']) or '08-1教育(水滴＋斜線)'
                eduarc_col = find_field(['08-2教育(水滴＋弧線)', 'eduWaterArc']) or '08-2教育(水滴＋弧線)'
                edubiglotus_col = find_field(['08-3教育(大蓮花)', 'eduBigLotus']) or '08-3教育(大蓮花)'
                edumidsmalllotus_col = find_field(['08-4教育(中小蓮花)', 'eduMidSmallLotus']) or '08-4教育(中小蓮花)'
                humanities_col = find_field(['09人文', 'humanities']) or '09人文'
                fivecontinents1_col = find_field(['10-1五大洲', 'fiveContinents1']) or '10-1五大洲'
                fivecontinents2_col = find_field(['10-2五大洲', 'fiveContinents2']) or '10-2五大洲'
                flyingapsaras_col = find_field(['11飛天', 'flyingApsaras']) or '11飛天'

                for r in csv_rows:
                    team = class_val
                    pid = self.clean_coord_val(r.get(id_col))
                    
                    if not pid:
                        continue
                        
                    key = (team, pid)
                    
                    cat = str(r.get(cat_col, '')).strip() if cat_col in r else 'A白'
                    pname = str(r.get(name_col_perf, '')).strip() if name_col_perf in r else '缺'
                    circle = self.clean_coord_val(r.get(circle_col, ''))
                    xingyuan = self.clean_coord_val(r.get(xingyuan_col, ''))
                    jingsi = self.clean_coord_val(r.get(jingsi_col, ''))
                    lamp = self.clean_coord_val(r.get(lamp_col, ''))
                    noboat = self.clean_coord_val(r.get(noboat_col, ''))
                    bigv = self.clean_coord_val(r.get(bigv_col, ''))
                    dachuan = self.clean_coord_val(r.get(dachuan_col, ''))
                    eduslash = self.clean_coord_val(r.get(eduslash_col, ''))
                    eduarc = self.clean_coord_val(r.get(eduarc_col, ''))
                    edubiglotus = self.clean_coord_val(r.get(edubiglotus_col, ''))
                    edumidsmalllotus = self.clean_coord_val(r.get(edumidsmalllotus_col, ''))
                    humanities = self.clean_coord_val(r.get(humanities_col, ''))
                    fivecontinents1 = self.clean_coord_val(r.get(fivecontinents1_col, ''))
                    fivecontinents2 = self.clean_coord_val(r.get(fivecontinents2_col, ''))
                    flyingapsaras = self.clean_coord_val(r.get(flyingapsaras_col, ''))

                    if key in existing_map:
                        exist_idx = existing_map[key]
                        exist_row = existing_rows[exist_idx]
                        
                        changed = False
                        if exist_row.get('01圓形') != circle: exist_row['01圓形'] = circle; changed = True
                        if exist_row.get('02行願') != xingyuan: exist_row['02行願'] = xingyuan; changed = True
                        if exist_row.get('04靜思家風') != jingsi: exist_row['04靜思家風'] = jingsi; changed = True
                        if exist_row.get('05-1有法船（點一盞燈）') != lamp: exist_row['05-1有法船（點一盞燈）'] = lamp; changed = True
                        if exist_row.get('05-2無法船（菜市場5毛錢）') != noboat: exist_row['05-2無法船（菜市場5毛錢）'] = noboat; changed = True
                        if exist_row.get('06四弘誓願') != bigv: exist_row['06四弘誓願'] = bigv; changed = True
                        if exist_row.get('07大船師') != dachuan: exist_row['07大船師'] = dachuan; changed = True
                        if exist_row.get('08-1教育(水滴＋斜線)') != eduslash: exist_row['08-1教育(水滴＋斜線)'] = eduslash; changed = True
                        if exist_row.get('08-2教育(水滴＋弧線)') != eduarc: exist_row['08-2教育(水滴＋弧線)'] = eduarc; changed = True
                        if exist_row.get('08-3教育(大蓮花)') != edubiglotus: exist_row['08-3教育(大蓮花)'] = edubiglotus; changed = True
                        if exist_row.get('08-4教育(中小蓮花)') != edumidsmalllotus: exist_row['08-4教育(中小蓮花)'] = edumidsmalllotus; changed = True
                        if exist_row.get('09人文') != humanities: exist_row['09人文'] = humanities; changed = True
                        if exist_row.get('10-1五大洲') != fivecontinents1: exist_row['10-1五大洲'] = fivecontinents1; changed = True
                        if exist_row.get('10-2五大洲') != fivecontinents2: exist_row['10-2五大洲'] = fivecontinents2; changed = True
                        if exist_row.get('11飛天') != flyingapsaras: exist_row['11飛天'] = flyingapsaras; changed = True
                        
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
                            elif clean_h == '04靜思家風': new_row[h] = jingsi
                            elif clean_h == '05-1有法船（點一盞燈）': new_row[h] = lamp
                            elif clean_h == '05-2無法船（菜市場5毛錢）': new_row[h] = noboat
                            elif clean_h == '06四弘誓願': new_row[h] = bigv
                            elif clean_h == '07大船師': new_row[h] = dachuan
                            elif clean_h == '08-1教育(水滴＋斜線)': new_row[h] = eduslash
                            elif clean_h == '08-2教育(水滴＋弧線)': new_row[h] = eduarc
                            elif clean_h == '08-3教育(大蓮花)': new_row[h] = edubiglotus
                            elif clean_h == '08-4教育(中小蓮花)': new_row[h] = edumidsmalllotus
                            elif clean_h == '09人文': new_row[h] = humanities
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

            self.send_json_response(200, {
                "success": True,
                "total_read": total_read,
                "added_count": added_count,
                "updated_count": updated_count,
                "ignored_count": ignored_count
            })
        except Exception as e:
            self.send_json_response(500, {"success": False, "error": str(e)})

    def clean_coord_val(self, val):
        if not val:
            return ""
        val = str(val).strip()
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

    def send_json_response(self, status_code, data):
        self.send_response(status_code)
        self.send_header('Content-Type', 'application/json')
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0')
        self.end_headers()
        self.wfile.write(json.dumps(data).encode('utf-8'))

def run():
    print(f"Starting custom server on port {PORT} in directory {BASE_DIR}...")
    server = HTTPServer(('', PORT), AdminRequestHandler)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nStopping server...")
        server.server_close()

if __name__ == '__main__':
    run()
