
# ----------------------------------------------------
# downsampling test
# ----------------------------------------------------

r.500 <- aggregate(r, fact = 2, fun = mean)
r.250 <- aggregate(r, fact = 4, fun = mean)
r.200 <- aggregate(r, fact = 5, fun = mean)

pal <- viridis::viridis(256)
png(filename = 'downsample_test.png', width = 1000, height = 1000, units = 'px')
par(mfrow = c(2, 2), mar = c(1, 0.5, 1, 0.5), oma = c(1, 2, 1, 2))
{
	image(r,     main = '1000x1000', axes = F, asp = 1, useRaster = T, col = pal, xlab = NA, ylab = NA)
	image(r.500, main = '500x500',   axes = F, asp = 1, useRaster = T, col = pal, xlab = NA, ylab = NA)
	image(r.250, main = '250x250',   axes = F, asp = 1, useRaster = T, col = pal, xlab = NA, ylab = NA)
	image(r.200, main = '200x200',   axes = F, asp = 1, useRaster = T, col = pal, xlab = NA, ylab = NA)
}
dev.off()

# ----------------------------------------------------
# reorienting test
# ----------------------------------------------------

# flip matrix along the X direction
flipX <- function(matrix) {
	matrix[, ncol(matrix):1]
}

# flip matrix along the Y direction
flipY <- function(matrix) {
	matrix[nrow(matrix):1, ]
}

m1 <- as.matrix(ra)
m2 <- t(m1)
m3 <- flipX(m1)
m4 <- flipY(m1)

m5 <- clockwise90(m1)
m6 <- clockwise90(m5)
m7 <- clockwise90(m6)

# note image() seems to plot a matrix rotated counter-clockwise 90 degrees relative to how it plots
# a raster object, so we counteract that by rotating the matrix 90 degrees clockwise before plotting

png(filename = 'reorienting_test_1.png', width = 1000, height = 1000, units = 'px')
par(mfrow = c(2, 2), mar = c(1, 0.5, 1, 0.5), oma = c(1, 2, 1, 2))
{
	image(clockwise90(m1), main = 'original', axes = F, asp = 1, useRaster = T, col = pal, xlab = NA, ylab = NA)
	image(clockwise90(m2), main = 'transposed', axes = F, asp = 1, useRaster = T, col = pal, xlab = NA, ylab = NA)
	image(clockwise90(m3), main = 'flipped X', axes = F, asp = 1, useRaster = T, col = pal, xlab = NA, ylab = NA)
	image(clockwise90(m4), main = 'flipped Y', axes = F, asp = 1, useRaster = T, col = pal, xlab = NA, ylab = NA)
}
dev.off()

png(filename = 'reorienting_test_2.png', width = 1000, height = 1000, units = 'px')
par(mfrow = c(2, 2), mar = c(1, 0.5, 1, 0.5), oma = c(1, 2, 1, 2))
{
	image(clockwise90(m1), main = 'original', axes = F, asp = 1, useRaster = T, col = pal, xlab = NA, ylab = NA)
	image(clockwise90(m5), main = 'rotated 90', axes = F, asp = 1, useRaster = T, col = pal, xlab = NA, ylab = NA)
	image(clockwise90(m6), main = 'rotated 180', axes = F, asp = 1, useRaster = T, col = pal, xlab = NA, ylab = NA)
	image(clockwise90(m7), main = 'rotated 270', axes = F, asp = 1, useRaster = T, col = pal, xlab = NA, ylab = NA)
}
dev.off()
