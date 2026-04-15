#!/usr/bin/env Rscript
#
# objective:
# produce large (1000x1000 pixel) images of maps used in Exp 1
#
# -------------------------------------------------------------------
# params
# -------------------------------------------------------------------

map.id.list <- c(2, 5, 7, 10, 12, 13, 15, 23, 26, 27)

colorscales <- c('Reds', 'PuBu', 'vanimo', 'Blues', 'RdGy', 'GnBu', 'PuRd', 'Greys')

out.dir <- 'images/large'

# -------------------------------------------------------------------
# setup
# -------------------------------------------------------------------

# get functions
source('prep/functions.R')

# create output dir if it does not exist
if (!dir.exists(out.dir)) dir.create(out.dir, recursive = T)

# check number of maps
num.maps <- length(map.id.list)
stopifnot(num.maps == 10)

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
df.pals <- read.csv('data/matplotlib_colorscales.csv', stringsAsFactors = F) %>% 
	mutate(hex = rgb(R, G, B, maxColorValue = 1)) %>% 
	filter(colorscale %in% colorscales)

# get list of color scale names
num.pals <- length(colorscales)
stopifnot(length(unique(df.pals$colorscale)) == num.pals)

# -------------------------------------------------------------------
# process maps
# -------------------------------------------------------------------

for (i in 1:num.maps) {

	cat(paste0('MAP ', i, '/', num.maps, ':\n'))

	map.id <- df.f$map_id[i]
	cat(paste(' Map ID:', map.id), fill = T)

	inp.tif <- paste0('data/', df.f$file[i])
	cat(paste(' Input:', inp.tif), fill = T)

	# get raster values, rescaled (from 0 to 100) and converted to integer vector
	r <- get.rescaled.raster(inp.tif, returnInt = F, deleteInput = T)
	stopifnot(nrow(r) == 1000)
	stopifnot(ncol(r) == 1000)

	# convert to matrix (drops geo-spatial attributes)
	m <- as.matrix(r)

	cat(' Saving colormaps:\n')
	pb <- txtProgressBar(
		min = 0,
		max = num.pals,
		initial = 0,
		width = 60,
		style = 3
	)
	for (j in 1:num.pals) {
		# get color palette
		pal.name <- pal.names[j]
		pal <- df.pals %>%
			filter(colorscale == pal.name) %>%
			arrange(index) %>%
			pull(hex)

		# save maps with naming convetion:
		# map[mapid]_[colorscale].png
		save.map.png(m, sprintf('%s/map%02d_%s.png', out.dir, map.id, pal.name), pal, w = 1000, h = 1000)

		setTxtProgressBar(pb, j)
	}
	close(pb)

}
