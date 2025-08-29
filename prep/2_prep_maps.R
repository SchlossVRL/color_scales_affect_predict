#!/usr/bin/env Rscript

source('etc/functions.R')
library(tiff)

# final list of maps from karen
map.id.list <- c(02, 05, 07, 10, 12, 13, 15, 23, 26, 27, 28, 30, 33, 37, 41, 44)
num.maps <- length(map.id.list) # 16

# get initial tile set
df <- read.csv('../paper1/output/stats_filtered_tiles_set1.csv', stringsAsFactors = F)
nrow(df) # 44

# get geotiff associated with each map id
df.f <- df %>% 
	filter(map_id %in% map.id.list) %>% 
	select(map_id, file)

# double check number of maps
stopifnot(nrow(df.f) == num.maps)

# reduce resolution and transpose maps
for (i in 1:num.maps) {
	
	cat(paste0('Map ', i, '/', num.maps, ':'), fill = T)
	
	map.id <- df.f$map_id[i]
	cat(paste(' Map ID:', map.id), fill = T)

	inp.tif <- df.f$file[i]
	cat(paste(' Input:', inp.tif), fill = T)
	
	# get raster values, rescaled and converted to integer vector
	r <- get.rescaled.raster(inp.tif, returnInt = F)

	# reduce resolution from 1000x1000 to 500x500 pixels (to save storage space)
	ra <- aggregate(r, fact = 2, fun = mean)
	values(ra) <- round2(values(ra))
	
	# convert to matrix (don't need geospatial properties anymore)
	m1 <- as.matrix(ra)

	# transpose
	m2 <- clockwise90(m1)
	m3 <- clockwise180(m1)
	m4 <- clockwise270(m1)
	
	# output as compressed tif
	m1.out <- pmin(pmax(m1 / 100, 0), 1)
	writeTIFF(m1.out, 'm11.tif', bits.per.sample = 16L, compression = 'deflate')
	
}



# read back (returns [0,1])
# x01 <- readTIFF("matrix_16bit.tiff", as.is = TRUE)
# m_back <- x01 * 100



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

# m1 <- as.matrix(ra)
# m2 <- t(m1)
# m3 <- flipX(m1)
# m4 <- flipY(m1)
# 
# m5 <- clockwise90(m1)
# m6 <- clockwise180(m1)
# m7 <- clockwise270(m1)
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
