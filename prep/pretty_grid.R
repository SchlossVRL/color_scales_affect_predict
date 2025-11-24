library(png)
library(ggplot2)
library(cowplot)
library(stringr)
library(dplyr)
library(tidyr)

# get list of pngs
pngs <- list.files(path = 'images', pattern = '\\.png$')

# select maps
set.seed(1)
df <- data.frame(f = pngs) %>% 
	mutate(f = gsub('gist_earth', 'gistearth', f)) %>% 
	separate(f, into = c('id','pal','direct','orient','rot'), sep = '_', remove = F) %>% 
	mutate(f = gsub('gistearth', 'gist_earth', paste0('images/', f)),) %>% 
	relocate(f, .after = everything()) %>% 
	group_by(pal) %>% 
	slice_sample(n = 1)

# helper function for plotting
make_img_plot <- function(f) {
	img <- readPNG(f)
	ggplot() +
		annotation_raster(img, xmin = 0, xmax = 1, ymin = 0, ymax = 1) +
		coord_fixed() +
		theme_void() +
		theme(plot.margin = margin(0, 0, 0, 0, 'line'))
}

# create plots
plt.list <- lapply(df$f, make_img_plot)

# arrange plots in a grid
set.seed(25)
plt.list2 <- sample(plt.list, size = nrow(df))
p <- plot_grid(plotlist = plt.list2, ncol = 10, labels = NULL) +
	theme(
		plot.background = element_rect(fill = '#141414'),
		plot.margin = margin(0.5, 0.5, 0.5, 0.5, 'line')
	)

png(filename = 'prep/map_grid_4x10.png', width = 1500, height = 600, units = 'px')
plot(p)
dev.off()
