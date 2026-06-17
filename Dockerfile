FROM python:3.10-slim

# 設定工作目錄
WORKDIR /app

# 將目前目錄的所有內容複製到容器中的 /app
COPY . /app

# 暴露 Python 伺服器運行的連接埠
EXPOSE 8000

# 啟動伺服器，預設使用 8000 連接埠
CMD ["python", "server.py", "8000"]
