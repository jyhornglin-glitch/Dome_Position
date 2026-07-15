#!/bin/bash
export PATH="/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin"
export HOME="/Users/weitung8"

echo "$(date '+%Y-%m-%d %H:%M:%S'): Starting Podman machine from LaunchAgent..." >> "/Users/weitung8/Library/Logs/podman_machine_start.log"
/opt/homebrew/bin/podman machine start

# 等待虛擬機器網路和 SSH socket 穩定就緒，然後啟動容器
for i in {1..15}; do
    if /opt/homebrew/bin/podman ps >/dev/null 2>&1; then
        echo "$(date '+%Y-%m-%d %H:%M:%S'): Podman API is ready. Starting web container..." >> "/Users/weitung8/Library/Logs/podman_machine_start.log"
        /opt/homebrew/bin/podman start dome-position >> "/Users/weitung8/Library/Logs/podman_machine_start.log" 2>&1
        break
    fi
    echo "$(date '+%Y-%m-%d %H:%M:%S'): Waiting for Podman socket to stabilize..." >> "/Users/weitung8/Library/Logs/podman_machine_start.log"
    sleep 2
done
