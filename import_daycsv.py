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

CSV_FILE = 'dayperformers.csv'
OUTPUT_FILE = 'daydata.js'

# 四個場次的固定定義（順序固定）
DAY_SESSIONS_DEF = [
    { 'key': '1112', 'label': '11/12(四)', 'date': '1/12(四)' },
    { 'key': '1113', 'label': '11/13(五)', 'date': '1/13(五)' },
    { 'key': '1114', 'label': '11/14(六)', 'date': '1/14(六)' },
    { 'key': '1115', 'label': '11/15(日)', 'date': '1/15(日)' },
]

def esc(s):
    """Escape a string for safe JS single-quoted string embedding."""
    return s.replace('\\', '\\\\').replace("'", "\\'").replace('\n', '\\n').replace('\r', '')

def main():
    if not os.path.exists(CSV_FILE):
        print(f'錯誤：找不到 {CSV_FILE}')
        return

    # Build a map: date_label -> list of {id, name}
    day_map = {}
    for sess in DAY_SESSIONS_DEF:
        day_map[sess['date']] = []

    total = 0
    with open(CSV_FILE, newline='', encoding='utf-8-sig') as f:
        reader = csv.DictReader(f)
        for row in reader:
            date = row.get('日期', '').strip()
            pid  = row.get('身份證', '').strip()
            name = row.get('姓名', '').strip()
            if not pid:
                continue
            if date in day_map:
                day_map[date].append({'id': pid, 'name': name})
                total += 1
            # Unknown dates are silently ignored

    # Build JS output
    lines = []
    lines.append('// daydata.js — 自動由 import_daycsv.py 產生，請勿手動修改')
    lines.append('')

    # DAY_SESSIONS array
    lines.append('const DAY_SESSIONS = [')
    for sess in DAY_SESSIONS_DEF:
        count = len(day_map.get(sess['date'], []))
        lines.append(f"  {{ key: '{sess['key']}', label: '{sess['label']}', date: '{sess['date']}', count: {count} }},")
    lines.append('];')
    lines.append('')

    # DAY_PERFORMERS object
    lines.append('const DAY_PERFORMERS = {')
    for sess in DAY_SESSIONS_DEF:
        performers = day_map.get(sess['date'], [])
        lines.append(f"  '{sess['key']}': [")
        for p in performers:
            lines.append(f"    {{ id: '{esc(p['id'])}', name: '{esc(p['name'])}' }},")
        lines.append('  ],')
    lines.append('};')

    output = '\n'.join(lines) + '\n'
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        f.write(output)

    print(f'成功！已將場次名單寫入 {OUTPUT_FILE}')
    for sess in DAY_SESSIONS_DEF:
        count = len(day_map.get(sess['date'], []))
        print(f"  {sess['label']}: {count} 筆")
    print(f'  合計: {total} 筆')

if __name__ == '__main__':
    main()
