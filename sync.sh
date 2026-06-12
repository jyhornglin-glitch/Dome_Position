#!/bin/bash
# sync.sh — 同步 GitHub 並備份至通用版資料夾
# 用法：./sync.sh "commit 說明訊息"

set -e

SRC="/Users/franklin/Documents/大巨蛋演繹跑位查詢"
DST="/Users/franklin/Documents/大巨蛋演繹跑位查詢＿通用場次"
MSG="${1:-data: sync update}"

echo "========================================="
echo " 🚀  開始同步流程"
echo "========================================="

# ── 1. Git 推送 ───────────────────────────────
echo ""
echo "📤 [1/2] 推送至 GitHub..."
cd "$SRC"
git add -A
git commit -m "$MSG" 2>/dev/null || echo "  （無新變更，略過 commit）"
git push origin main
echo "  ✅ GitHub 推送完成"

# ── 2. 備份至通用版資料夾 ─────────────────────
echo ""
echo "💾 [2/2] 備份至通用版資料夾..."
rsync -a --delete --exclude='.git' "$SRC/" "$DST/"
echo "  ✅ 備份完成 → $DST"

echo ""
echo "========================================="
echo " 🎉  全部完成！"
echo "========================================="
