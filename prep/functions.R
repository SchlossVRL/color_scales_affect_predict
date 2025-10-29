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
get.rescaled.raster <- function(f, returnInt = T, deleteInput = T) {
	
	# download tile
	if (!file.exists(f)) {
		system(paste0('gsutil -m cp gs://uw-ks-data/harris30m/tiles1000/', basename(f), ' ', dirname(f), '/'), ignore.stdout = T, ignore.stderr = T)
	}
	
	# read raster
	r <- raster(f)
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
	
	if (deleteInput) {
		file.remove(inp.tif)
	}
	
	return(r)
}

# rotate matrix 90 degrees clockwise
clockwise90 <- function(matrix) {
	t(apply(matrix, 2, rev))
}

# function to save a matrix as a png file using a provided color scale.
# note, image() seems to plot a matrix rotated counter-clockwise 90 deg
# relative to how it plots a raster object, so we counteract that by 
# rotating the matrix 90 deg clockwise before plotting
save.map.png <- function(matrix, file, pal) {
	png(filename = file, width = 500, height = 500, units = 'px')
	par(mar = c(0, 0, 0, 0))
	image(clockwise90(matrix), axes = F, asp = 1, useRaster = T, col = pal)
	dev.off()
}

