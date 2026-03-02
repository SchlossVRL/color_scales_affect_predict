import os
import json


### EXPERIMENT 1 CONDITIONS
# Define the directory and output file
dir_path = '../images'
output_path = '../imagePaths.js'

# Read the directory
files = os.listdir(dir_path)

# Filter the files to only include those that start with "gray"
#gray_files = [file for file in files if file.startswith('gray')]

# Create the dictionary
maps = {str(i): "images/"+file for i, file in enumerate(files) if file.endswith('.png')}

# Write the dictionary to the output file
with open(output_path, 'w') as f:
    f.write('var maps = ' + json.dumps(maps, indent=2) + ';')

print(f"File written to {output_path}")

### EXPERIMENT 2 CONDITIONS
# Define the directory and output file
dir_path = '../images/shifted_maps'
output_path = '../imagePaths_shifted.js'

files = os.listdir(dir_path)
maps = {str(i): "images/shifted_maps/"+file for i, file in enumerate(files) if file.endswith('.png')}

with open(output_path, 'w') as f:
    f.write('var maps = ' + json.dumps(maps, indent=2) + ';')
print(f"File written to {output_path}")


