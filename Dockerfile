FROM python:3.10-slim

# 設定工作目錄
WORKDIR /app

# 將目前目錄的所有內容複製到容器中的 /app
COPY . /app

# 給予啟動腳本執行權限
RUN chmod +x /app/start.sh

# 暴露 Python 伺服器運行的連接埠
EXPOSE 8080

# 啟動伺服器，使用 startup 腳本
CMD ["/app/start.sh"]
