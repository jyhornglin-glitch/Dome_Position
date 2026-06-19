#!/bin/sh
set -e

echo "=== Starting Dome Position Initialization ==="

# Define persistent data paths
DATA_DIR="/data"
PERF_CSV="${DATA_DIR}/performers.csv"
DAY_CSV="${DATA_DIR}/dayperformers.csv"

# Ensure persistent data directory exists
mkdir -p "${DATA_DIR}"

# 1. Initialize volume with default CSV files from Docker build if missing
if [ ! -f "${PERF_CSV}" ]; then
    echo "Initializing performers.csv in persistent volume..."
    cp /app/performers_bk.csv "${PERF_CSV}" 2>/dev/null || cp /app/performers.csv "${PERF_CSV}"
fi

if [ ! -f "${DAY_CSV}" ]; then
    echo "Initializing dayperformers.csv in persistent volume..."
    cp /app/dayperformers.csv "${DAY_CSV}"
fi

# 2. Replace local app CSVs with symlinks to the persistent volume
echo "Linking database CSV files..."
rm -f /app/performers.csv
rm -f /app/dayperformers.csv
ln -s "${PERF_CSV}" /app/performers.csv
ln -s "${DAY_CSV}" /app/dayperformers.csv

# 3. Regenerate JS files to ensure data is updated
echo "Regenerating data.js and daydata.js..."
python import_csv.py
python import_daycsv.py

# 4. Start the server on port 8080
echo "Starting application server on port 8080..."
exec python server.py 8080
