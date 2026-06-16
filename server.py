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
    '1112': '1/12(四)',
    '1113': '1/13(五)',
    '1114': '1/14(六)',
    '1115': '1/15(日)',
}

class AdminRequestHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        # Prevent caching of JS databases for instant frontend updates
        if self.path.endswith('.js') or self.path.endswith('.css'):
            self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0')
            self.send_header('Pragma', 'no-cache')
            self.send_header('Expires', '0')
        super().end_headers()

    def do_POST(self):
        if self.path == '/api/update-dayperformer':
            self.handle_update_dayperformer()
        elif self.path == '/api/update-performer':
            self.handle_update_performer()
        else:
            self.send_error(404, "API endpoint not found")

    def handle_update_dayperformer(self):
        try:
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length)
            data = json.loads(post_data.decode('utf-8'))

            # Verify password
            if data.get('password') != 'tzuchi60':
                self.send_json_response(403, {"success": False, "error": "密碼錯誤，拒絕存取！"})
                return

            session_key = data.get('session')
            target_id = str(data.get('id', '')).strip()
            new_name = str(data.get('name', '')).strip()

            if not session_key or not target_id or not new_name:
                self.send_json_response(400, {"success": False, "error": "Missing required fields"})
                return

            target_date = SESS_MAP.get(session_key)
            if not target_date:
                self.send_json_response(400, {"success": False, "error": "Invalid session key"})
                return

            # Read and Update dayperformers.csv
            rows = []
            headers = ['日期', '身份證', '姓名']
            found = False
            
            if os.path.exists(DAY_CSV):
                with open(DAY_CSV, mode='r', encoding='utf-8-sig') as f:
                    reader = csv.DictReader(f)
                    headers = reader.fieldnames or headers
                    for row in reader:
                        if row.get('日期', '').strip() == target_date and row.get('身份證', '').strip() == target_id:
                            row['姓名'] = new_name
                            found = True
                        rows.append(row)

            if not found:
                rows.append({'日期': target_date, '身份證': target_id, '姓名': new_name})

            with open(DAY_CSV, mode='w', encoding='utf-8-sig', newline='') as f:
                writer = csv.DictWriter(f, fieldnames=headers)
                writer.writeheader()
                writer.writerows(rows)

            # Regenerate daydata.js
            result = subprocess.run([sys.executable, 'import_daycsv.py'], capture_output=True, text=True)
            if result.returncode != 0:
                self.send_json_response(500, {"success": False, "error": f"Failed to regenerate daydata.js: {result.stderr}"})
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
            if data.get('password') != 'tzuchi60':
                self.send_json_response(403, {"success": False, "error": "密碼錯誤，拒絕存取！"})
                return

            target_id = str(data.get('id', '')).strip()
            circle = str(data.get('circle', '')).strip()
            xing_yuan = str(data.get('xingYuan', '')).strip()
            jing_si = str(data.get('jingSi', '')).strip()
            lamp = str(data.get('lamp', '')).strip()
            no_boat = str(data.get('noBoat', '')).strip()
            big_v = str(data.get('bigV', '')).strip()

            if not target_id:
                self.send_json_response(400, {"success": False, "error": "Missing performer ID"})
                return

            # Read and Update performers.csv
            rows = []
            headers = ['身分別', '身份證', '姓名', '01圓形', '02行願', '04靜思家風', '05-1有法船', '05-2無法船', '06四弘誓願']
            found = False

            if not os.path.exists(PERF_CSV):
                self.send_json_response(500, {"success": False, "error": "performers.csv not found"})
                return

            with open(PERF_CSV, mode='r', encoding='utf-8-sig') as f:
                reader = csv.DictReader(f)
                headers = reader.fieldnames or headers
                for row in reader:
                    if row.get('身份證', '').strip() == target_id:
                        row['01圓形'] = circle
                        row['02行願'] = xing_yuan
                        row['04靜思家風'] = jing_si
                        row['05-1有法船'] = lamp
                        row['05-2無法船'] = no_boat
                        row['06四弘誓願'] = big_v
                        found = True
                    rows.append(row)

            if not found:
                self.send_json_response(404, {"success": False, "error": f"身分證 {target_id} 不存在於 performers.csv 中"})
                return

            with open(PERF_CSV, mode='w', encoding='utf-8-sig', newline='') as f:
                writer = csv.DictWriter(f, fieldnames=headers)
                writer.writeheader()
                writer.writerows(rows)

            # Regenerate data.js
            result = subprocess.run([sys.executable, 'import_csv.py'], capture_output=True, text=True)
            if result.returncode != 0:
                self.send_json_response(500, {"success": False, "error": f"Failed to regenerate data.js: {result.stderr}"})
                return

            self.send_json_response(200, {"success": True})

        except Exception as e:
            self.send_json_response(500, {"success": False, "error": str(e)})

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
