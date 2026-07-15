#!/bin/bash
export PATH="/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin"
export HOME="/Users/weitung8"
echo "$(date '+%Y-%m-%d %H:%M:%S'): Starting Podman machine from LaunchAgent..."
/opt/homebrew/bin/podman machine start
