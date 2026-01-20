#!/usr/bin/python

import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from colormath.color_objects import sRGBColor, LCHabColor
from colormath.color_conversions import convert_color

# -------------------------------------------------------------------
# qualitative color scales
# -------------------------------------------------------------------

# see https://matplotlib.org/stable/gallery/color/colormap_reference.html#sphx-glr-gallery-color-colormap-reference-py

color_scales = [
    'Pastel1', 'Pastel2', 'Paired', 'Accent', 
	'Dark2', 'Set1', 'Set2', 'Set3', 
	'tab10', 'tab20', 'tab20b', 'tab20c'
]

len(color_scales) # 12

# -------------------------------------------------------------------
# plot color scales
# -------------------------------------------------------------------

gradient = np.linspace(0, 1, 256)
gradient = np.vstack((gradient, gradient))

def plot_color_scales(color_scales_list):
    # create figure and adjust figure height to number of color scales
    nrows = len(color_scales_list)
    figh = 0.35 + 0.15 + (nrows + (nrows-1)*0.1)*0.22
    fig, axs = plt.subplots(nrows=nrows, figsize=(6.4, figh))
    fig.subplots_adjust(top=1-.35/figh, bottom=.15/figh, left=0.2, right=0.99)
    
    axs[0].set_title("color scales", fontsize=14)
    
    for ax, color_scale in zip(axs, color_scales_list):
        ax.imshow(gradient, aspect='auto', cmap=color_scale)
        ax.text(-.01, .5, color_scale, va='center', ha='right', fontsize=10, transform=ax.transAxes)
    
    for ax in axs:
        ax.set_axis_off()

plot_color_scales(color_scales)

# -------------------------------------------------------------------
# export values to csv
# -------------------------------------------------------------------

# get list of color values for each 
rows = []
for color_scale_name in color_scales:
    color_scale = plt.get_cmap(color_scale_name)
    # values = np.linspace(0, 1, 9)
    # rgba_colors = color_scale(values)
    # rgb_colors = rgba_colors[:, :3] # drop alpha
    rgb_colors = np.array(color_scale.colors)
    n_colors = color_scale.N
    for i in range(n_colors):
        r, g, b = rgb_colors[i] # 0–1 floats
        
        # convert from RGB to CIE LCH with a white point of D65
        rgb = sRGBColor(float(r), float(g), float(b), is_upscaled=False)
        lch = convert_color(rgb, LCHabColor, target_illuminant='d65')
        
        rows.append([
            color_scale_name, i+1, r, g, b,  # original RGB
            lch.lch_l, lch.lch_c, lch.lch_h  # L, C, H
        ])

# convert to dataframe
df = pd.DataFrame(rows, columns=["colorscale", "index", "R", "G", "B", "L", "C", "H"])

# export to CSV
df.to_csv("data/matplotlib_qualitative_colorscales.csv", index=False)


