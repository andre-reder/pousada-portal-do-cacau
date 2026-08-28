#!/usr/bin/env bash
# Downloads the Decap CMS standalone bundle into public/admin/decap-cms/
# Run this after cloning the repo, before `yarn admin` or `yarn build`.
set -e

DIR="$(cd "$(dirname "$0")/.." && pwd)"
TARGET="$DIR/public/admin/decap-cms"
FILE="$TARGET/decap-cms.js"
URL="https://unpkg.com/decap-cms@3.6.4/dist/decap-cms.js"

if [ -f "$FILE" ]; then
  echo "Decap CMS bundle already exists at $FILE"
  exit 0
fi

echo "Downloading Decap CMS standalone bundle..."
mkdir -p "$TARGET"
curl -sL "$URL" -o "$FILE"
echo "Done: $(du -h "$FILE" | cut -f1) saved to $FILE"
