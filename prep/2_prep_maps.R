#!/usr/bin/env Rscript

# -------------------------------------------------------------------
# params
# -------------------------------------------------------------------

out.dir <- '../data/maps/'

# -------------------------------------------------------------------
# setup
# -------------------------------------------------------------------

source('functions.R')

# list of maps
map.id.list <- c(2, 5, 7, 10, 12, 13, 15, 23, 26, 27)
num.maps <- length(map.id.list) # 10

# get initial tile set
df.maps <- read.csv('https://github.com/SchlossVRL/color_scales_affect/raw/refs/heads/main/scripts/output/stats_filtered_tiles_set1.csv', stringsAsFactors = F)
nrow(df.maps) # 44

# get subtile filenames associated with each map id
df.f <- df.maps %>% 
	filter(map_id %in% map.id.list) %>% 
	select(map_id, file)

# double check number of maps
stopifnot(nrow(df.f) == num.maps)

# get color scales
df.pals <- read.csv('../data/matplotlib_colorscales.csv', stringsAsFactors = F) %>% 
	mutate(hex = rgb(R, G, B, maxColorValue = 1))

# get list of color scale names
pal.names <- unique(df.pals$colorscale)
num.pals <- length(pal.names)

# -------------------------------------------------------------------
# process maps
# -------------------------------------------------------------------

# reduce resolution and transpose maps
for (i in 1:num.maps) {
	
	cat(paste0('MAP ', i, '/', num.maps, ':\n'))
	
	map.id <- df.f$map_id[i]
	cat(paste(' Map ID:', map.id), fill = T)

	inp.tif <- paste0('../data/', df.f$file[i])
	cat(paste(' Input:', inp.tif), fill = T)
	
	# get raster values, rescaled (from 0 to 100) and converted to integer vector
	r <- get.rescaled.raster(inp.tif, returnInt = F, deleteInput = T)

	# reduce resolution from 1000x1000 to 500x500 pixels (to save storage space)
	ra <- aggregate(r, fact = 2, fun = mean)

	# convert to matrix (drops geo-spatial attributes)
	m1 <- as.matrix(ra)

	# rotate matrix
	m2 <- clockwise90(m1)
	m3 <- clockwise90(m2)
	m4 <- clockwise90(m3)

	cat(' Saving colormaps:\n')
	pb <- txtProgressBar(min = 0, max = num.pals, initial = 0, width = 60, style = 3)
	for (j in 1:num.pals) {
 
		# get color palette
		pal.name <- pal.names[j]
		pal <- df.pals %>% 
			filter(colorscale == pal.name) %>% 
			arrange(index) %>%
			pull(hex)
		
		# create filenames
		f1 <- paste0(out.dir, 'map_', sprintf('%02d', map.id), '_1_', pal.name, '.png')
		f2 <- paste0(out.dir, 'map_', sprintf('%02d', map.id), '_2_', pal.name, '.png')
		f3 <- paste0(out.dir, 'map_', sprintf('%02d', map.id), '_3_', pal.name, '.png')
		f4 <- paste0(out.dir, 'map_', sprintf('%02d', map.id), '_4_', pal.name, '.png')
		
		# save maps
		save.map.png(m1, f1, pal)
		save.map.png(m2, f2, pal)
		save.map.png(m3, f3, pal)
		save.map.png(m4, f4, pal)
		
		setTxtProgressBar(pb, j)
	}
	close(pb)
	
	
}



# ----------------------------------------------------
# downsampling test
# ----------------------------------------------------
#
# r.500 <- aggregate(r, fact = 2, fun = mean)
# r.250 <- aggregate(r, fact = 4, fun = mean)
# r.200 <- aggregate(r, fact = 5, fun = mean)
# 
# pal <- viridis::viridis(256)
# png(filename = 'outputs/downsample_test.png', width = 1000, height = 1000, units = 'px')
# par(mfrow = c(2, 2), mar = c(1, 0.5, 1, 0.5), oma = c(1, 2, 1, 2))
# {
# 	image(r,     main = '1000x1000', axes = F, asp = 1, useRaster = T, col = pal, xlab = NA, ylab = NA)
# 	image(r.500, main = '500x500',   axes = F, asp = 1, useRaster = T, col = pal, xlab = NA, ylab = NA)
# 	image(r.250, main = '250x250',   axes = F, asp = 1, useRaster = T, col = pal, xlab = NA, ylab = NA)
# 	image(r.200, main = '200x200',   axes = F, asp = 1, useRaster = T, col = pal, xlab = NA, ylab = NA)
# }
# dev.off()

# ----------------------------------------------------
# reorienting test
# ----------------------------------------------------
# 
# # flip matrix along the X direction
# flipX <- function(matrix) {
# 	matrix[, ncol(matrix):1]
# }
# 
# # flip matrix along the Y direction
# flipY <- function(matrix) {
# 	matrix[nrow(matrix):1, ]
# }
# 
# m1 <- as.matrix(ra)
# m2 <- t(m1)
# m3 <- flipX(m1)
# m4 <- flipY(m1)
# 
# m5 <- clockwise90(m1)
# m6 <- clockwise90(m5)
# m7 <- clockwise90(m6)
# 
# # note image() seems to plot a matrix rotated counter-clockwise 90 degrees relative to how it plots 
# # a raster object, so we counteract that by rotating the matrix 90 degrees clockwise before plotting
# 
# png(filename = 'outputs/reorienting_test_1.png', width = 1000, height = 1000, units = 'px')
# par(mfrow = c(2, 2), mar = c(1, 0.5, 1, 0.5), oma = c(1, 2, 1, 2))
# {
# 	image(clockwise90(m1), main = 'original', axes = F, asp = 1, useRaster = T, col = pal, xlab = NA, ylab = NA)
# 	image(clockwise90(m2), main = 'transposed', axes = F, asp = 1, useRaster = T, col = pal, xlab = NA, ylab = NA)
# 	image(clockwise90(m3), main = 'flipped X', axes = F, asp = 1, useRaster = T, col = pal, xlab = NA, ylab = NA)
# 	image(clockwise90(m4), main = 'flipped Y', axes = F, asp = 1, useRaster = T, col = pal, xlab = NA, ylab = NA)
# }
# dev.off()
# 
# png(filename = 'outputs/reorienting_test_2.png', width = 1000, height = 1000, units = 'px')
# par(mfrow = c(2, 2), mar = c(1, 0.5, 1, 0.5), oma = c(1, 2, 1, 2))
# {
# 	image(clockwise90(m1), main = 'original', axes = F, asp = 1, useRaster = T, col = pal, xlab = NA, ylab = NA)
# 	image(clockwise90(m5), main = 'rotated 90', axes = F, asp = 1, useRaster = T, col = pal, xlab = NA, ylab = NA)
# 	image(clockwise90(m6), main = 'rotated 180', axes = F, asp = 1, useRaster = T, col = pal, xlab = NA, ylab = NA)
# 	image(clockwise90(m7), main = 'rotated 270', axes = F, asp = 1, useRaster = T, col = pal, xlab = NA, ylab = NA)
# }
# dev.off()
