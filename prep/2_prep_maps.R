#!/usr/bin/env Rscript
#
# -------------------------------------------------------------------
# params
# -------------------------------------------------------------------

out.dir <- 'images'

# -------------------------------------------------------------------
# setup
# -------------------------------------------------------------------

source('prep/functions.R')

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
df.pals <- read.csv('data/matplotlib_colorscales.csv', stringsAsFactors = F) %>% 
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

	inp.tif <- paste0('data/', df.f$file[i])
	cat(paste(' Input:', inp.tif), fill = T)

	# get raster values, rescaled (from 0 to 100) and converted to integer vector
	r <- get.rescaled.raster(inp.tif, returnInt = F, deleteInput = T)

	# reduce resolution from 1000x1000 to 500x500 pixels (to save storage space)
	ra <- aggregate(r, fact = 4, fun = mean)

	# convert to matrix (drops geo-spatial attributes)
	m.000.d <- as.matrix(ra)

	# rotate matrix 90, 180, and 270 degrees
	m.090.d <- clockwise90(m.000.d)
	m.180.d <- clockwise90(m.090.d)
	m.270.d <- clockwise90(m.180.d)

	# mirror matrices
	m.000.m <- mirror(m.000.d)
	m.090.m <- clockwise90(m.000.m)
	m.180.m <- clockwise90(m.090.m)
	m.270.m <- clockwise90(m.180.m)

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
		# map[mapid]_[colorscale]_scale[Def/Rev]_orient[Def/Mir]_[rotation].png
		save.map.png(m.000.d, sprintf('%s/map%02d_%s_scaleDef_orientDef_000.png', out.dir, map.id, pal.name), pal)
		save.map.png(m.090.d, sprintf('%s/map%02d_%s_scaleDef_orientDef_090.png', out.dir, map.id, pal.name), pal)
		save.map.png(m.180.d, sprintf('%s/map%02d_%s_scaleDef_orientDef_180.png', out.dir, map.id, pal.name), pal)
		save.map.png(m.270.d, sprintf('%s/map%02d_%s_scaleDef_orientDef_270.png', out.dir, map.id, pal.name), pal)

		save.map.png(m.000.d, sprintf('%s/map%02d_%s_scaleRev_orientDef_000.png', out.dir, map.id, pal.name), rev(pal))
		save.map.png(m.090.d, sprintf('%s/map%02d_%s_scaleRev_orientDef_090.png', out.dir, map.id, pal.name), rev(pal))
		save.map.png(m.180.d, sprintf('%s/map%02d_%s_scaleRev_orientDef_180.png', out.dir, map.id, pal.name), rev(pal))
		save.map.png(m.270.d, sprintf('%s/map%02d_%s_scaleRev_orientDef_270.png', out.dir, map.id, pal.name), rev(pal))

		save.map.png(m.000.m, sprintf('%s/map%02d_%s_scaleDef_orientMir_000.png', out.dir, map.id, pal.name), pal)
		save.map.png(m.090.m, sprintf('%s/map%02d_%s_scaleDef_orientMir_090.png', out.dir, map.id, pal.name), pal)
		save.map.png(m.180.m, sprintf('%s/map%02d_%s_scaleDef_orientMir_180.png', out.dir, map.id, pal.name), pal)
		save.map.png(m.270.m, sprintf('%s/map%02d_%s_scaleDef_orientMir_270.png', out.dir, map.id, pal.name), pal)

		save.map.png(m.000.m, sprintf('%s/map%02d_%s_scaleRev_orientMir_000.png', out.dir, map.id, pal.name), rev(pal))
		save.map.png(m.090.m, sprintf('%s/map%02d_%s_scaleRev_orientMir_090.png', out.dir, map.id, pal.name), rev(pal))
		save.map.png(m.180.m, sprintf('%s/map%02d_%s_scaleRev_orientMir_180.png', out.dir, map.id, pal.name), rev(pal))
		save.map.png(m.270.m, sprintf('%s/map%02d_%s_scaleRev_orientMir_270.png', out.dir, map.id, pal.name), rev(pal))

		setTxtProgressBar(pb, j)
	}
	close(pb)
}
