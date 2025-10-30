import os
import json
from itertools import combinations, product

# Define the directory and output file
output_path = '../exp1_conditions.js'

map_nums =['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40']
scale_name = ["berlin", "Blues","BrBG", "BuGn", "BuPu", " bwr", "gist_earth", "GnBu", "Greens", "Greys", "inferno", "magma", "managua", "Oranges", "OrRd", "PlYG", "plasma", "PRGn", "PuBu", "PuBuGn", "PuOr", "PuRd", "Purples", "RdBu", "Rdgy", "RdPu", "RdYlBu", "RdYlGn", "Reds", "seismic", "Spectral", "turbo", "vanimo", "viridis", "YlGn", "YlGnBu", "YlOrBr", "YlOrRd"]
orientation_code = ['1','2', '3', '4']

def get_color_combinations():
    combinations = product(map_nums,scale_name,orientation_code)
    cond_combs =  ['_'.join(combination) for combination in combinations]
    cond_combs = ['images/'+x+'.png' for x in cond_combs]
    return cond_combs

conditions = get_color_combinations()
### create empty 100x100 images with filenames as each item in conditions
# for condition in conditions:
#     os.system(f"convert -size 100x100 xc:white {condition}")

output_dict = {}
for condition in conditions:
    output_dict[condition] = {'map_nums':condition.split('_')[0].split('/')[1],
                              'scale_name':condition.split('_')[1],
                              'orientation_code':condition.split('_')[2]}
    

combinations = product(map_nums,scale_name,orientation_code)
cond_combs =  ['_'.join(combination) for combination in combinations]

# Write the dictionary to the output file
with open(output_path, 'w') as f:
    f.write('var affect_list = ["angry", "happy", "fearful", "disgust", "sad"];')
    f.write('\n')
    f.write('var im2cond_dict = ' + json.dumps(output_dict, indent=2) + ';')
    f.write('\n')
    f.write('var color_scales = ' + json.dumps(cond_combs, indent=2) + ';')

print(f"File written to {output_path}")