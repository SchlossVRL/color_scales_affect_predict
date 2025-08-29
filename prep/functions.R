#!/usr/bin/env Rscript
#
# functions.R
# 
# Purpose:
#	Helper functions.
#
# History:
#	Written by Seth Gorelik, 2024-2025
#

library(raster)
library(dplyr)


# better rounding function (i.e., normal rounding)
# converts to integer if digits = 0
round2 <- function(x, digits = 0) {
	# function adapted from https://stackoverflow.com/a/12688836
	posneg <- sign(x)
	z <- abs(x) * 10 ^ digits
	z <- z + 0.5 + sqrt(.Machine$double.eps)
	z <- trunc(z)
	z <- z / 10 ^ digits
	x.new <- z * posneg
	if (digits == 0) {
		x.new <- as.integer(x.new)
	}
	return(x.new)
}


# function to rescale rasters from ≥0 Mg/ha to a range of 0-100 
get.rescaled.raster <- function(f, returnInt = T) {
	
	# local raster path
	f.local <- paste0('~/data/harris30m/tif/', f)
	
	# download tile
	if (!file.exists(f.local)) {
		system(paste0('gsutil -m cp gs://uw-ks-data/harris30m/tiles1000/', f, ' ~/data/harris30m/tif/'), ignore.stdout = T, ignore.stderr = T)
	}
	
	# read raster
	r <- raster(f.local)
	v <- values(r)
	
	# get meaningful bounds (mg/ha)
	qnts.mgha <- quantile(v, probs = c(0.02, 0.98), na.rm = T, names = F)
	min.mgha <- qnts.mgha[1]
	max.mgha <- qnts.mgha[2]
	
	# clip bounds
	v[v < min.mgha] <- min.mgha
	v[v > max.mgha] <- max.mgha
	
	# rescale values from 0 to 100
	v2 <- (((v - min.mgha) / (max.mgha - min.mgha)) * 100)
	if (returnInt) {
		values(r) <- round2(v2)
	} else {
		values(r) <- v2
	}
	names(r) <- 'value'
	
	return(r)
	
}

# rotate matrix 90 degrees clockwise
clockwise90 <- function(matrix) {
	t(apply(matrix, 2, rev))
}

# rotate matrix 180 degrees clockwise
clockwise180 <- function(matrix) {
	matrix[nrow(matrix):1, ncol(matrix):1]
}

# rotate matrix 270 degrees clockwise
clockwise270 <- function(matrix) {
	apply(t(matrix), 2, rev)
}

# flip matrix along the X direction
flipX <- function(matrix) {
	matrix[, ncol(matrix):1]
}

# flip matrix along the Y direction
flipY <- function(matrix) {
	matrix[nrow(matrix):1, ]
}

# function to save geotiff as a png file using a provided color scale
save.map.png <- function(inp_tif, pal, out_png) {
	
	# open geotiff from disk, rescaled from 0 to 100
	r <- get.rescaled.raster(inp_tif)
	
	# save map to PNG file on disk 
	png(filename = out_png, width = 1000, height = 1000, units = 'px')
	par(mar = c(0, 0, 0, 0))
	image(r, axes = F, asp = 1, useRaster = T, col = pal)
	dev.off()

}

