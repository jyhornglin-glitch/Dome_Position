#!/bin/bash
# sync_data.sh — 極簡資料同步腳本

set -e

# 取得腳本所在的目錄（專案根目錄）
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$DIR"

# 定義需要同步的 4 個資料檔案
DATA_FILES=(
  "data.js"
  "daydata.js"
  "performers.csv"
  "dayperformers.csv"
)

echo "========================================="
# 檢查是否有資料變更
CHANGES=false
for file in "${DATA_FILES[@]}"; do
  if git status --porcelain "$file" | grep -q 'M\|??'; then
    CHANGES=true
    break
  fi
done

if [ "$CHANGES" = false ]; then
  echo " ℹ️  沒有偵測到資料檔案變更，略過同步。"
  exit 0
fi

echo " 📤 開始同步資料檔案至 GitHub..."
# 強制 add 這四個資料檔案並 commit push
git add -f "${DATA_FILES[@]}"
# 進行 commit，並使用 pull --rebase --autostash 先與遠端同步後再推送
MSG="data: admin update $(date '+%Y-%m-%d %H:%M:%S') [skip ci]"
git commit -m "$MSG"
echo " 🔄 拉取遠端變更並自動合併 (rebase)..."
git pull --rebase --autostash origin main
echo " 📤 推送至遠端 GitHub..."
git push origin main

echo " ✅ 資料同步完成！"
echo "========================================="
