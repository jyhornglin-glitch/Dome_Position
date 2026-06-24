#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
import_daycsv.py
將 dayperformers.csv 轉換成 daydata.js
欄位: 日期, 身份證, 姓名
"""

import csv
import json
import os

base_dir = os.path.dirname(os.path.abspath(__file__))
CSV_FILE = os.path.join(base_dir, 'dayperformers.csv')
OUTPUT_FILE = os.path.join(base_dir, 'daydata.js')

# 四個場次的固定定義（順序固定）
DAY_SESSIONS_DEF = [
    { 'key': '1112', 'label': '11/12(四)', 'date': '11/12(四)', 'allowed_dates': ['1/12(四)', '11/12(四)'] },
    { 'key': '1113', 'label': '11/13(五)', 'date': '11/13(五)', 'allowed_dates': ['1/13(五)', '11/13(五)'] },
    { 'key': '1114', 'label': '11/14(六)', 'date': '11/14(六)', 'allowed_dates': ['1/14(六)', '11/14(六)'] },
    { 'key': '1115', 'label': '11/15(日)', 'date': '11/15(日)', 'allowed_dates': ['1/15(日)', '11/15(日)'] },
]

def esc(s):
    """Escape a string for safe JS single-quoted string embedding."""
    return s.replace('\\', '\\\\').replace("'", "\\'").replace('\n', '\\n').replace('\r', '')

def clean_coord(val):
    if not val:
        return ""
    val = val.strip()
    import re
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

def main(verbose=True):
    if not os.path.exists(CSV_FILE):
        if verbose:
            print(f'錯誤：找不到 {CSV_FILE}')
        return

    # Build a map: session_key -> list of {id, name}
    day_map = {}
    for sess in DAY_SESSIONS_DEF:
        day_map[sess['key']] = []

    total = 0
    with open(CSV_FILE, newline='', encoding='utf-8-sig') as f:
        reader = csv.DictReader(f)
        for row in reader:
            date = (row.get('日期') or '').strip()
            pid  = clean_coord(row.get('身份證') or '')
            name = (row.get('姓名') or '').strip()
            team = (row.get('班別') or row.get('東西班') or row.get('組別') or row.get('team') or '東班').strip()
            if not pid:
                continue
            
            # Find the session this row belongs to
            for sess in DAY_SESSIONS_DEF:
                if date in sess['allowed_dates']:
                    day_map[sess['key']].append({'id': pid, 'name': name, 'team': team})
                    total += 1
                    break

    # Build JS output
    lines = []
    lines.append('// daydata.js — 自動由 import_daycsv.py 產生，請勿手動修改')
    lines.append('')

    # DAY_SESSIONS array
    lines.append('const DAY_SESSIONS = [')
    for sess in DAY_SESSIONS_DEF:
        count = len(day_map.get(sess['key'], []))
        lines.append(f"  {{ key: '{sess['key']}', label: '{sess['label']}', date: '{sess['date']}', count: {count} }},")
    lines.append('];')
    lines.append('')

    # DAY_PERFORMERS object
    lines.append('const DAY_PERFORMERS = {')
    for sess in DAY_SESSIONS_DEF:
        performers = day_map.get(sess['key'], [])
        lines.append(f"  '{sess['key']}': [")
        for p in performers:
            lines.append(f"    {{ id: '{esc(p['id'])}', name: '{esc(p['name'])}', team: '{esc(p['team'])}' }},")
        lines.append('  ],')
    lines.append('};')

    output = '\n'.join(lines) + '\n'
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        f.write(output)

    if verbose:
        print(f'成功！已將場次名單寫入 {OUTPUT_FILE}')
        for sess in DAY_SESSIONS_DEF:
            count = len(day_map.get(sess['key'], []))
            print(f"  {sess['label']}: {count} 筆")
        print(f'  合計: {total} 筆')

if __name__ == '__main__':
    main()
