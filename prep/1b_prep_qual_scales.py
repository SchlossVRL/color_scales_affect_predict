#!/usr/bin/python

import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from colormath.color_objects import sRGBColor, LCHabColor
from colormath.color_conversions import convert_color
from matplotlib.colors import to_rgb

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
# convert RGB values to LCH, format for output
# -------------------------------------------------------------------

# get list of color values for each 
rows = []
for color_scale_name in color_scales:
	color_scale = plt.get_cmap(color_scale_name)
	rgb_colors = np.array(color_scale.colors)
	n_colors = color_scale.N
	for i in range(n_colors):
		r, g, b = [float(x) for x in rgb_colors[i]] # 0–1 floats

		# convert from RGB to CIE LCH with a white point of D65
		rgb = sRGBColor(r, g, b, is_upscaled=False)
		lch = convert_color(rgb, LCHabColor, target_illuminant='d65')

		rows.append([color_scale_name, i+1, r, g, b, lch.lch_l, lch.lch_c, lch.lch_h])

# -------------------------------------------------------------------
# add new tableau 10 palette
# -------------------------------------------------------------------

hex_pal = ['#4E79A7', '#F28E2B', '#E15759', '#76B7B2', '#59A14F', '#EDC948', '#B07AA1', '#FF9DA7', '#9C755F', '#BAB0AC']
n_colors = len(hex_pal)

for i in range(n_colors):

	# convert hex code to rgb
	hex_code = hex_pal[i]
	r, g, b = to_rgb(hex_code) # 0–1 floats

	# convert from RGB to CIE LCH with a white point of D65
	rgb = sRGBColor(r, g, b, is_upscaled=False)
	lch = convert_color(rgb, LCHabColor, target_illuminant='d65')

	rows.append(['tab10new', i+1, r, g, b, lch.lch_l, lch.lch_c, lch.lch_h])

# -------------------------------------------------------------------
# save table to CSV
# -------------------------------------------------------------------

# convert to dataframe
df = pd.DataFrame(rows, columns=["colorscale", "index", "R", "G", "B", "L", "C", "H"])

# export to CSV
df.to_csv("data/matplotlib_qualitative_colorscales_v2.csv", index=False)


