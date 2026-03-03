#!/bin/bash

# Set the directory containing your maps
MAP_DIR="../images/shifted_maps/"
OUTPUT_GIF="random_map_walk.gif"

# 1. Create a randomized list of PNG files
# Using perl to shuffle since shuf is missing
find "$MAP_DIR" -maxdepth 1 -name "*.png" | perl -MList::Util=shuffle -e 'print shuffle(<STDIN>)' |head -n 200 > temp_file_list.txt

# 2. Check if the list was actually created and has content
if [ ! -s temp_file_list.txt ]; then
    echo "Error: No PNG files found in $MAP_DIR or list creation failed."
    exit 1
fi

# 3. Use ImageMagick to create the GIF
# Note: Limiting to 100 frames for memory safety, as discussed
head -n 100 temp_file_list.txt > subset_list.txt
magick -delay 20 -loop 0 @subset_list.txt "$OUTPUT_GIF"

# 4. Clean up
rm temp_file_list.txt subset_list.txt

echo "Random walk GIF created: $OUTPUT_GIF"