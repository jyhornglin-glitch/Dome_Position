#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
import_card_hints.py
Parse 小卡關鍵字提示.docx and 動作提示0923.docx, then generate card_hints_data.js.
Uses pure Python standard library (zipfile + xml.etree.ElementTree) without external dependencies.
"""

import os
import sys
import json
import re
import zipfile
import xml.etree.ElementTree as ET

DOCX_CARD = "1007小卡關鍵字提示.docx" if os.path.exists("1007小卡關鍵字提示.docx") else (
    "0909小卡關鍵字提示.docx" if os.path.exists("0909小卡關鍵字提示.docx") else "小卡關鍵字提示.docx"
)
DOCX_ACTION = "動作提示1007.docx" if os.path.exists("動作提示1007.docx") else (
    "動作提示0923.docx" if os.path.exists("動作提示0923.docx") else (
        "動作提示0916.docx" if os.path.exists("動作提示0916.docx") else (
            "動作提示0909.docx" if os.path.exists("動作提示0909.docx") else "動作提示.docx"
        )
    )
)
OUTPUT_JS = "card_hints_data.js"

# Map Word location names to formation keys in app.js
CATEGORY_MAPPING = {
    # Basic
    '基本': 'basic',
    # Circle (圓形)
    '01圓形': 'circle',
    '02圓形': 'circle',
    # Xing Yuan (行願)
    '02行願': 'xingYuan',
    '03行願': 'xingYuan',
    # Mi Luo (米籮)
    '03米籮': 'miLuo',
    '04米籮': 'miLuo',
    # Jing Si (靜思家風)
    '04靜思家風': 'jingSi',
    '05靜思家風': 'jingSi',
    # Lamp (點一盞燈)
    '05-1有法船(點一盞燈)': 'lamp',
    '06-1有法船(點一盞燈)': 'lamp',
    # No Boat (無法船 - 菜市場5毛錢)
    '05-2無法船(菜市場5毛錢)': 'noBoat',
    '06-2無法船(菜市場5毛錢)': 'noBoat',
    # No Boat 3 (有法船 - 是諸眾生)
    '05-3有法船(是諸眾生)': 'noBoat3',
    '06-3有法船(是諸眾生)': 'noBoat3',
    '05-3無法船(是諸眾生)': 'noBoat3',
    '06-3無法船(是諸眾生)': 'noBoat3',
    # Big V (四弘誓願)
    '06四弘誓願': 'bigV',
    '07四弘誓願': 'bigV',
    # Da Chuan Shi (大船師)
    '07-1大船師': 'daChuanShi',
    '08-1大船師': 'daChuanShi',
    # Bone Donation (骨捐能捨)
    '07-2骨捐能捨': 'boneDonation',
    '08-2骨捐能捨': 'boneDonation',
    # Edu (教育)
    '08教育': 'edu',
    '09教育': 'edu',
    # Humanities 1 (人文 09-1 / 10-1)
    '09-1人文': 'humanities1',
    '10-1人文': 'humanities1',
    # Humanities 2 (人文 09-2 / 10-2)
    '09-2人文': 'humanities2',
    '10-2人文': 'humanities2',
    # Five Continents 1 (五大洲 10-2開經書 / 10-4台灣救災/921第九功德)
    '10-1五大洲(台灣)': 'fiveContinents1',
    '10-2五大洲(台灣)': 'fiveContinents1',
    '10-4五大洲(台灣)': 'fiveContinents1',
    '11-1五大洲': 'fiveContinents1',
    '11-1五大洲(台灣)': 'fiveContinents1',
    '五大洲(台灣)': 'fiveContinents1',
    # Five Continents 2 (五大洲 10-1樂生/富中之富, 10-3各國, 10-5化城/佛國)
    '10-1五大洲': 'fiveContinents2',
    '10-2五大洲': 'fiveContinents2',
    '10-3五大洲': 'fiveContinents2',
    '10-5五大洲': 'fiveContinents2',
    '11-2五大洲': 'fiveContinents2',
    '五大洲': 'fiveContinents2',
    # Six Rui Xiang (六瑞相 11 / 12-1)
    '11六瑞相': 'sixRuiXiang',
    '12-1六瑞相': 'sixRuiXiang',
    '六瑞相': 'sixRuiXiang',
    # Flying Apsaras (飛天 11 / 12)
    '11飛天': 'flyingApsaras',
    '12飛天': 'flyingApsaras'
}

def read_docx_table_rows(docx_path):
    """Read first table rows and paragraphs using standard library."""
    if not os.path.exists(docx_path):
        return []
    with zipfile.ZipFile(docx_path) as z:
        xml_content = z.read('word/document.xml')
    tree = ET.fromstring(xml_content)
    w_ns = '{http://schemas.openxmlformats.org/wordprocessingml/2006/main}'
    
    rows_data = []
    tbl = tree.find('.//' + w_ns + 'tbl')
    if tbl is None:
        return []
    
    for tr in tbl.findall('./' + w_ns + 'tr'):
        row_paras = []
        for tc in tr.findall('./' + w_ns + 'tc'):
            cell_p_list = []
            for p in tc.findall('.//' + w_ns + 'p'):
                texts = [t.text for t in p.findall('.//' + w_ns + 't') if t.text]
                p_text = ''.join(texts).strip()
                if p_text:
                    cell_p_list.append(p_text)
            row_paras.append(cell_p_list)
        if any(row_paras):
            rows_data.append(row_paras)
    return rows_data

def build_card_hints():
    card_rows = read_docx_table_rows(DOCX_CARD)
    print(f"Read {len(card_rows)} rows from {DOCX_CARD}")

    action_hints_data = {
        'basic': [],
        'circle': [],
        'xingYuan': [],
        'miLuo': [],
        'jingSi': [],
        'lamp': [],
        'noBoat': [],
        'noBoat3': [],
        'bigV': [],
        'daChuanShi': [],
        'boneDonation': [],
        'edu': [],
        'humanities1': [],
        'humanities2': [],
        'fiveContinents1': [],
        'fiveContinents2': [],
        'sixRuiXiang': [],
        'flyingApsaras': []
    }

    last_cat = 'basic'

    # 1. Parse base card hints from 0909 card file
    for r in range(1, len(card_rows)):
        row = card_rows[r]
        if not row:
            continue
        loc_paras = row[0] if len(row) > 0 else []
        loc_text = ''.join(loc_paras).strip()
        loc_clean = re.sub(r'\s+', '', loc_text)
        loc_clean = loc_clean.replace('（', '(').replace('）', ')')

        if loc_clean:
            cat = CATEGORY_MAPPING.get(loc_clean)
            if not cat:
                cat = last_cat
            else:
                last_cat = cat
        else:
            # Inherit previous row category (e.g. continuation row of fiveContinents1)
            cat = last_cat

        content_paras = row[1] if len(row) > 1 else []
        target_cats = [cat]
        current_date_prefix = ""
        current_items = {}
        active_target_cats = target_cats

        for text in content_paras:
            text = text.strip()
            if not text:
                continue

            date_only_match = re.match(r'^(\d{1,2}/\d{1,2}(?:[、,，]\d{1,2}(?:/\d{1,2})?)*)[:：]?$', text)
            if date_only_match:
                current_date_prefix = date_only_match.group(1) + "："
                continue

            inline_date_match = re.match(r'^(\d{1,2}/\d{1,2}(?:[、,，]\d{1,2}(?:/\d{1,2})?)*)[:：]\s*(.+)', text)
            if inline_date_match:
                current_date_prefix = inline_date_match.group(1) + "："
                text = inline_date_match.group(2).strip()

            match = re.match(r'^(?:\d+[\.、\s]*)?【([^】]+)】(.*)', text)
            if match:
                title_label = match.group(1).strip()
                extra_text = match.group(2).strip()

                title = f"【{title_label}】"
                if extra_text.startswith('：') or extra_text.startswith(':'):
                    title += extra_text
                elif extra_text:
                    title += " " + extra_text

                if current_date_prefix and not title.startswith(current_date_prefix) and not re.search(r'\d{1,2}/\d{1,2}', title):
                    title = current_date_prefix + title

                base_item = {
                    "title": title,
                    "details": []
                }

                if '是諸眾生' in title_label or '是諸眾生' in text:
                    active_target_cats = ['noBoat3']
                else:
                    active_target_cats = target_cats

                for target_cat in active_target_cats:
                    item_copy = json.loads(json.dumps(base_item))
                    action_hints_data[target_cat].append(item_copy)
                    current_items[target_cat] = item_copy
            else:
                for target_cat in active_target_cats:
                    item = current_items.get(target_cat)
                    if not item:
                        item_title = f"【{loc_clean or '提示'}】"
                        if current_date_prefix:
                            item_title = current_date_prefix + item_title
                        item = {
                            "title": item_title,
                            "details": []
                        }
                        action_hints_data[target_cat].append(item)
                        current_items[target_cat] = item

                    lines = [line.strip() for line in text.split('\n') if line.strip()]
                    for line in lines:
                        item["details"].append({
                            "type": "text",
                            "content": line
                        })

    # 2. Refine & update with 動作提示0923.docx latest content
    print("Applying 0923 refinements to card hints data...")

    # (A) Update 10-1 富中之富 A/B version distinctions in fiveContinents2
    updated_fc2 = []
    for item in action_hints_data['fiveContinents2']:
        title = item['title']
        if '11/12：【富中之富】' in title:
            item['title'] = '11/12：【富中之富B】 面甲舞台45度'
            item['details'] = [
                {"type": "text", "content": "實業家災區扛大米、夫人珠寶義賣、溫居士捐萬坪土地、李爺爺捐大體、陳志遠推素11年"},
                {"type": "text", "content": "志工總動員 使命必達；齊合掌 千萬偈頌讚法王"}
            ]
        elif '11/14：【富中之富】' in title:
            item['title'] = '11/14：【富中之富B】 面甲舞台45度'
            item['details'] = [
                {"type": "text", "content": "實業家災區扛大米、夫人珠寶義賣、溫居士捐萬坪土地、李爺爺捐大體、陳志遠推素11年"},
                {"type": "text", "content": "志工總動員 使命必達；齊合掌 千萬偈頌讚法王"}
            ]
        elif '11/13：【富中之富】' in title:
            item['title'] = '11/13：【富中之富A】 面甲舞台45度'
            item['details'] = [
                {"type": "text", "content": "教育不能等(認養學校)、上人「ㄇㄞˋ煩惱」、莊居士捐地、杜俊元捐大體、大成鋼鐵推素14年"},
                {"type": "text", "content": "志工總動員 使命必達；齊合掌 千萬偈頌讚法王"}
            ]
        elif '11/15：【富中之富】' in title:
            item['title'] = '11/15：【富中之富A】 面甲舞台45度'
            item['details'] = [
                {"type": "text", "content": "教育不能等(認養學校)、上人「ㄇㄞˋ煩惱」、莊居士捐地、杜俊元捐大體、大成鋼鐵推素14年"},
                {"type": "text", "content": "志工總動員 使命必達；齊合掌 千萬偈頌讚法王"}
            ]
        updated_fc2.append(item)
    action_hints_data['fiveContinents2'] = updated_fc2

    # (B) Update 11/14 Zimbabwe sequence: 生生世世 first, then 髻珠喻经文
    fc2_list = action_hints_data['fiveContinents2']
    zim_8 = None
    zim_ji = None
    zim_sheng = None
    
    for item in fc2_list:
        t = item['title']
        if '11/14：【辛巴威-第八功德】' in t:
            zim_8 = item
        elif '11/14：【辛巴威-髻珠喻】' in t:
            zim_ji = item
        elif '11/14：【辛巴威-生生世世】' in t:
            zim_sheng = item

    if zim_8 and zim_ji and zim_sheng:
        # Refine Zimbabwe Sheng Sheng Shi Shi
        zim_sheng['title'] = '11/14：【辛巴威-生生世世都在菩提中】 面向非洲陸地中心'
        zim_sheng['details'] = [
            {"type": "text", "content": "OS: 現在新冠疫情...熱食不能停(開黃燈合十)!慈善不能停!"},
            {"type": "text", "content": "我衷心發願!往生之後要埋在辛巴威，五生五世都要出生在這裡翻轉貧窮"},
            {"type": "text", "content": "生生世世守護辛巴威"}
        ]
        # Refine Zimbabwe Ji Zhu Yu
        zim_ji['title'] = '11/14：【辛巴威-髻珠喻經文】 面法師45度'
        zim_ji['details'] = [
            {"type": "text", "content": "用愛傳法到非洲，掘井湧泉 熱食供應 吼、嘿"},
            {"type": "text", "content": "上人開示：師父很感動啊!你發大心立大願如地藏菩薩走入了地獄，為的是要救苦難眾生"}
        ]
        
        # Re-assemble in correct order: 8th Merit -> Sheng Sheng Shi Shi -> Ji Zhu Yu
        new_fc2 = []
        for item in fc2_list:
            if item == zim_8:
                new_fc2.append(zim_8)
                new_fc2.append(zim_sheng)
                new_fc2.append(zim_ji)
            elif item in (zim_ji, zim_sheng):
                continue
            else:
                new_fc2.append(item)
        action_hints_data['fiveContinents2'] = new_fc2

    # (C) Refine 11/12 台灣救災集錦 and 11/15 九二一第九功德 (in fiveContinents1)
    fc1_list = action_hints_data['fiveContinents1']
    for item in fc1_list:
        t = item['title']
        if '11/12：【台灣救災集錦-第五功德】' in t:
            item['details'] = [
                {"type": "text", "content": "面台灣(乙舞臺圓心45度)"},
                {"type": "text", "content": "【衣珠喻手扎】上人開示：每一次哪裡有災難，我一定要說「拜託你們」"},
                {"type": "text", "content": "黃誌群老師：哪裡有災難 慈濟人就在那裡...咚咚 走在最前 咚咚 陪到最後 咚咚 台灣愛心總動員 六度行 樂無窮"}
            ]
        elif '11/15：【九二一-第九功德】' in t:
            item['details'] = [
                {"type": "text", "content": "面乙舞臺圓心45度"},
                {"type": "text", "content": "OS: 上人，臺北的東星大樓倒塌了"}
            ]

    # (D) Refine 11/15 items in fiveContinents2
    for item in action_hints_data['fiveContinents2']:
        t = item['title']
        if '11/15：【九二一-化城】' in t:
            item['title'] = '11/15：【九二一-化城喻(若入是城)】 面法師45度'
            item['details'] = [
                {"type": "text", "content": "法師45度；地湧菩薩 若入是城可止息 希望工程疲極之眾心歡喜"}
            ]
        elif '11/15：【減災工程' in t:
            item['title'] = '11/15：【減災工程-許一個希望的未來】'
            item['details'] = [
                {"type": "text", "content": "OS: 感恩慈濟援建的減災工程，像這次的0403花蓮地震，就帶來了平安與希望"},
                {"type": "text", "content": "動作要領：白衣os「感恩」慈濟援建…從甲舞臺轉背向陸地中心；藍衣觀眾45度"},
                {"type": "text", "content": "大愛為樑 智慧為牆 一念善心 帶來無限希望"}
            ]
        elif '11/15：【佛國-仰師德範】' in t or '11/15：【佛國-人間導師】' in t:
            item['title'] = '11/15：【佛國-人間導師(仰師德範)】'
            item['details'] = [
                {"type": "text", "content": "一開始演”賤民村”時面向甲舞台45度"},
                {"type": "text", "content": "OS: 讓正法(全體合掌轉向法師45)重回佛陀的故鄉，教導人人行菩薩道，完成佛陀救度眾生的心願，這就是回報佛恩(白轉背向陸地中心)"},
                {"type": "text", "content": "藍衣：「讓正法」回歸→面法師45度；白衣：「讓正法」回歸→面法師45度，這就是「回報佛恩」→背向圓心"}
            ]

    # (E) Add 11 六瑞相 (sixRuiXiang)
    action_hints_data['sixRuiXiang'] = [
        {
            "title": "【六瑞相】 面甲舞台腳夾線",
            "details": [
                {"type": "text", "content": "佛說法華演大法 大法六祥瑞相先現前 因緣具足成就 法成就"},
                {"type": "text", "content": "天雨四華柔適意 天雨四華 天雨地動涌震搖吼擊地動 地動 地動 搖~擊~"},
                {"type": "text", "content": "諦聽(全體朝甲舞台壓縮) 諦聽真誠諦聽法華經 真誠諦聽合佛心"}
            ]
        },
        {
            "title": "【發心立願（行願半世紀）】 面法師腳夾線",
            "details": [
                {"type": "text", "content": "~~ 咚~~(合掌內轉面向甲舞台/法師腳夾線)"},
                {"type": "text", "content": "~~ 咚~~佛心師志"},
                {"type": "text", "content": "~~ 咚咚咚咚咚咚咚咚咚咚咚咚咚咚咚~~(手放小跑步到自己地標面向法師/甲舞台腳夾線)"},
                {"type": "text", "content": "~~ 噹 ~~(合掌內轉面向法師腳夾線)"},
                {"type": "text", "content": "體悟佛心(即為己心=人傷我痛) 領受師志(奉為己志=守護生命)"},
                {"type": "text", "content": "生生世世(誓為佛教=扎根教育) 心心念念(誠為眾生=人文傳法)"},
                {"type": "text", "content": "生生世世誓為佛教 心心念念誠為眾生 ~ 咚咚咚咚~ 願佛法興顯弘大乘 菩薩廣行無量義(收手收腳)"}
            ]
        },
        {
            "title": "【慈濟小行星】",
            "details": [
                {"type": "text", "content": "浩瀚的天空有顆慈濟小行星 在無垠的宇宙繞著太陽系運行"},
                {"type": "text", "content": "上人感恩開示：小星星會合亮麗星河，讓天地調順平安。慈濟小行星 化剎那為永恆"}
            ]
        },
        {
            "title": "【祈禱】 面乙舞台圓心",
            "details": [
                {"type": "text", "content": "上人開示：天天祈禱 淨化人心、祥和社會、天下無災難"},
                {"type": "text", "content": "用心(舉高) 祈禱 但願人人(慢慢收) 牽手心連心 開啟光明大愛"},
                {"type": "text", "content": "我的心念(舉高)上達諸佛心 大家心口一念(慢慢收)化解惡念結善緣 祈求天下無災 歲歲年年"}
            ]
        }
    ]

    # Save to card_hints_data.js
    js_content = (
        "// Pocket Slip Card Hints Database — 自動由 import_card_hints.py 產生，請勿手動修改\n"
        f"const CARD_HINTS_DATA = {json.dumps(action_hints_data, ensure_ascii=False, indent=2)};\n\n"
        "// Export if in node environment, otherwise make it global\n"
        "if (typeof module !== 'undefined' && module.exports) {\n"
        "  module.exports = CARD_HINTS_DATA;\n"
        "}\n"
    )

    with open(OUTPUT_JS, 'w', encoding='utf-8') as js_f:
        js_f.write(js_content)

    print(f"Successfully processed and generated {OUTPUT_JS} with 0923 refinements!")

if __name__ == "__main__":
    build_card_hints()
