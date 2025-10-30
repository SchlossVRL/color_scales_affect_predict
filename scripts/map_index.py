# generate_map_ids.py
output_path = "../map_ids.js"
n = 1600  # change this if you want a different number of IDs

# Create array of strings
ids = [f'"{i}"' for i in range(n)]

# Format as a JavaScript constant
content = f"const map_ids = [{', '.join(ids)}];\n"

# Write to file
with open(output_path, "w") as f:
    f.write(content)

print(f"JavaScript array written to {output_path}")