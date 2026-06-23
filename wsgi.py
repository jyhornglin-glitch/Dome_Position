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
                row_date = row.get('日期', '').strip()
                row_team = row.get('班別', '').strip()
                if row_date in allowed_dates and row.get('身份證', '').strip() == target_id and row_team == team:
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
    if data.get('password') != 'tzuchi6060':
        return 403, {"success": False, "error": "密碼錯誤，拒絕存取！"}

    target_id = str(data.get('id', '')).strip()
    circle = str(data.get('circle', '')).strip()
    xing_yuan = str(data.get('xingYuan', '')).strip()
    jing_si = str(data.get('jingSi', '')).strip()
    lamp = str(data.get('lamp', '')).strip()
    no_boat = str(data.get('noBoat', '')).strip()
    big_v = str(data.get('bigV', '')).strip()
    team = str(data.get('team', '')).strip()

    if not target_id or not team:
        return 400, {"success": False, "error": "Missing performer ID or team"}

    rows = []
    headers = ['身分別', '身份證', '姓名', '01圓形', '02行願', '04靜思家風', '05-1有法船（點一盞燈）', '05-2無法船（菜市場5毛錢）', '06四弘誓願']
    found = False

    if not os.path.exists(PERF_CSV):
        return 500, {"success": False, "error": "performers.csv not found"}

    with open(PERF_CSV, mode='r', encoding='utf-8-sig') as f:
        reader = csv.DictReader(f)
        headers = reader.fieldnames or headers
        for row in reader:
            row_team = row.get('班別', '').strip()
            if row.get('身份證', '').strip() == target_id and row_team == team:
                row['01圓形'] = circle
                row['02行願'] = xing_yuan
                row['04靜思家風'] = jing_si
                row['05-1有法船（點一盞燈）'] = lamp
                row['05-2無法船（菜市場5毛錢）'] = no_boat
                row['06四弘誓願'] = big_v
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

def application(environ, start_response):
    path = environ.get('PATH_INFO', '')
    method = environ.get('REQUEST_METHOD', 'GET')

    # 1. Handle API requests (POST)
    if method == 'POST':
        if path == '/api/update-dayperformer' or path == '/api/update-performer':
            try:
                content_length = int(environ.get('CONTENT_LENGTH', 0))
                body = environ['wsgi.input'].read(content_length)
                data = json.loads(body.decode('utf-8'))
                
                if path == '/api/update-dayperformer':
                    status_code, response_data = handle_update_dayperformer(data)
                else:
                    status_code, response_data = handle_update_performer(data)
                    
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
