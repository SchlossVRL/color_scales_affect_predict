import os
import json
from itertools import combinations, product

# Define the directory and output file
output_path = '../exp2_conditions.js'

map_nums =['02', '05', '07', '10', '12', '13', '15', '23', '26', '27']
scale_name = [
    
 "Reds",   "PuBu", "PiYG", "Greys", "PuRd", "coolwarm", "vanimo", "RdGy",    
  "BuPu", "BrBG", "magma", "cividis", "YlOrBr", "PRGn", "RdYlGn", "PuOr",
  "BuGn", "berlin", "managua", "turbo"   

]
print(f"Total number of color scales: {len(scale_name)}")
orientation_code = ['orientDef', 'orientMir']
rotate_code = ['000','090', '180', '270']
mapping_code = ['scaleDef', 'scaleRev']
shift_code = ['lightshift', 'darkshift']

def get_color_combinations():
    combinations = product(map_nums,scale_name,mapping_code,orientation_code,rotate_code,shift_code)
    cond_combs =  ['_'.join(combination) for combination in combinations]
    cond_combs = ['images/shifted_maps/'+x+'.png' for x in cond_combs]
    return cond_combs

conditions = get_color_combinations()


output_dict = {}
for combo in product(map_nums, scale_name, mapping_code, orientation_code, rotate_code, shift_code):
    m_num, s_name, m_code, o_code, r_code, sh_code = combo
    filename = 'images/shifted_maps/map' + '_'.join(combo) + '.png'
    output_dict[filename] = {
        'map_num': m_num,
        'scale_name': s_name,
        'mapping_code': m_code,
        'orientation_code': o_code,
        'rotate_code': r_code,
        'shift_code': sh_code
    }
    

# combinations = product(map_nums,scale_name,orientation_code)
combinations = product(map_nums,orientation_code,rotate_code)
map_ids =  ['_'.join(combination) for combination in combinations]

scale_combs = product(scale_name,mapping_code,shift_code)
scale_combs =  ['_'.join(combination) for combination in scale_combs]

# Write the dictionary to the output file
with open(output_path, 'w') as f:
    f.write('var affect_list = ["angry", "happy", "fearful", "disgust", "sad"];')
    f.write('\n')
    f.write('var im2cond_dict = ' + json.dumps(output_dict, indent=2) + ';')
    f.write('\n')
    f.write('var map_ids = ' + json.dumps(map_ids, indent=2) + ';')
    f.write('\n')
    f.write('var color_scales = ' + json.dumps(scale_combs, indent=2) + ';')

print(f"File written to {output_path}")