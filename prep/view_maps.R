#!/usr/bin/env Rscript

library(png)
library(ggplot2)
library(cowplot)
library(stringr)

# config
mapid <- '02'
pal <- 'berlin'

# get list of pngs
pngs <- list.files(path = 'images', pattern = paste0(mapid, '_', pal), full.names = T)

# read pngs
img1 <- readPNG(pngs[1])
img2 <- readPNG(pngs[2])
img3 <- readPNG(pngs[3])
img4 <- readPNG(pngs[4])

# helper function for plotting
make_img_plot <- function(img, title = NULL) {
	ggplot() +
		annotation_raster(img, xmin = 0, xmax = 1, ymin = 0, ymax = 1) +
		coord_fixed() +
		labs(title = title) +
		theme_void() +
		theme(
			plot.margin = margin(0.5, 0, 0, 0, 'line'),
			plot.title = element_text(hjust = 0.5, family = 'Helvetica', face = 'bold', size = 12)
		)
}

# prepare plots
p1 <- make_img_plot(img1, basename(pngs[1]))
p2 <- make_img_plot(img2, basename(pngs[2]))
p3 <- make_img_plot(img3, basename(pngs[3]))
p4 <- make_img_plot(img4, basename(pngs[4]))

# arrange in a 2x2 grid with title
p.row <- plot_grid(p1, NULL, p2, p3, NULL, p4, ncol = 3, rel_widths = c(1, -0.58, 1), labels = NULL)

# create title for grid
title <- ggdraw() + 
	draw_label(paste0('Map ID: ', mapid, ', Color Scale: ', str_to_title(pal)), fontfamily = 'Helvetica', fontface = 'bold', x = 0.5, hjust = 0.5) +
	theme(plot.margin = margin(0, 0, 0, 0))

# combine title with 2x2 grid
plot_grid(title, p.row, ncol = 1, nrow = 2, rel_heights = c(0.05, 1))
