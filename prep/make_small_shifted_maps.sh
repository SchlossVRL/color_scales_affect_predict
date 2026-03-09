#!/usr/bin/env bash
#
# make_small_shifted_maps.sh
#
# Objective:
#   Produce small (25x25 → upscaled to 500x500) versions of all map02
#   shifted maps and save them to images/shifted_maps_small/.
#
# Usage:
#   bash prep/make_small_shifted_maps.sh
#   (run from the project root directory)

set -euo pipefail

SRC_DIR="images/shifted_maps"
OUT_DIR="images/shifted_maps_small"
TMP=$(mktemp -d)

mkdir -p "$OUT_DIR"

files=("$SRC_DIR"/map02_*.png)
total=${#files[@]}
count=0

echo "Processing $total images..."

for f in "${files[@]}"; do
    basename=$(basename "$f")
    out="$OUT_DIR/$basename"

    # Downsample to 25x25 (matching the small/ convention), then upsample to 500x500
    sips -z 25 25 "$f" --out "$TMP/tmp.png" > /dev/null 2>&1
    sips -z 500 500 "$TMP/tmp.png" --out "$out" > /dev/null 2>&1

    count=$((count + 1))
    printf "\r  %d / %d" "$count" "$total"
done

rm -rf "$TMP"
echo ""
echo "Done. Saved $count images to $OUT_DIR/"
