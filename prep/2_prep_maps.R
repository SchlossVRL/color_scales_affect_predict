#!/usr/bin/env Rscript
#
# -------------------------------------------------------------------
# params
# -------------------------------------------------------------------

out.dir <- '../data/maps'

# -------------------------------------------------------------------
# setup
# -------------------------------------------------------------------

source('functions.R')

# list of maps
map.id.list <- c(2, 5, 7, 10, 12, 13, 15, 23, 26, 27)
num.maps <- length(map.id.list)
num.maps # 10

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
num.pals # 40

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

	# rotate matrix 180 degrees
	m2 <- clockwise90(clockwise90(m1))

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
		f1 <- sprintf('%s/map_%02d_%s_1.png', out.dir, map.id, pal.name)
		f2 <- sprintf('%s/map_%02d_%s_2.png', out.dir, map.id, pal.name)
		f3 <- sprintf('%s/map_%02d_%s_3.png', out.dir, map.id, pal.name)
		f4 <- sprintf('%s/map_%02d_%s_4.png', out.dir, map.id, pal.name)

		# save maps
		save.map.png(m1, f1, pal)       # original map, original pal
		save.map.png(m1, f2, rev(pal))  # original map, reversed pal
		save.map.png(m2, f3, pal)       # rotated map,  original pal
		save.map.png(m2, f4, rev(pal))  # rotated map,  reversed pal
		
		setTxtProgressBar(pb, j)
	}
	close(pb)
	
	
}
