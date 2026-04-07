# color_scales_affect_predict

## Karen B. Schloss, Halle C. Braun, Kushin Mukherjee, Anna L. Chinni, and Seth R. Gorelik

This repository contains the experiment data and analyses for `Predicting affective connotation of visualizations from their constituent colors'.

jsPsych code for the 4 studies (experiment 3 was split into two studies, one for dot plots and one for bar plots which were later combined in analysis) can be found in the `exp1.html`, `exp2.html`, `exp3_dots.html`, and `exp3_bars.html` files in the root directory. 

Corresponding analysis notebooks in `.qmd` format for each experiment can be found in the analysis directory. Analysis for experiment 1 included `` and ``Analysis for experiment 3 was combined in a single analysis file exp3.qmd. Additionally, there is included `rm_ids.R`, `rm_ids_combine.R`, and `Preprocessing.R` used to remove the subjecty pool ids or participants and prep ratings data for analysis. 

Raw participant data for each study can be found in the data directory.
Raster images for each of the maps used across all experiments can be found in the images directory.

The analysis notebooks will generate all the figures reported in the paper, but for convenience we have already rendered the raw plots, which can be found in the plots directory.
Helper scripts in the scripts directory were used to generate metadata files for condition assingment and generate the original map images.
