#!/bin/bash
# keep_pppoe_alive.sh — PPPoE 自動重連腳本

SERVICE_NAME="PPPoE"
LOG_FILE="/Users/weitung8/Library/Logs/pppoe_keep_alive.log"

# 確保日誌目錄存在
mkdir -p "$(dirname "$LOG_FILE")"

STATUS=$(/usr/sbin/networksetup -showpppoestatus "$SERVICE_NAME" 2>/dev/null)

if [ "$STATUS" != "connected" ]; then
    echo "$(date '+%Y-%m-%d %H:%M:%S') ⚠️ 偵測到 PPPoE 已斷線 (狀態: $STATUS)，正在嘗試重新連線..." >> "$LOG_FILE"
    /usr/sbin/networksetup -connectpppoeservice "$SERVICE_NAME" >> "$LOG_FILE" 2>&1
else
    # 僅作紀錄
    echo "$(date '+%Y-%m-%d %H:%M:%S') ℹ️ PPPoE 連線正常。" >> "$LOG_FILE"
fi
