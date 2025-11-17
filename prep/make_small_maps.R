#!/usr/bin/env Rscript
#
# objective:
# produce small versions of map 02 using its original orientation and 
# all of the original and reversed color sclaes (80 maps total)

# -------------------------------------------------------------------
# params
# -------------------------------------------------------------------

map.id <- 2

out.dir <- 'images/small'

# -------------------------------------------------------------------
# setup
# -------------------------------------------------------------------

source('prep/functions.R')

# get initial tile set
df.maps <- read.csv('https://github.com/SchlossVRL/color_scales_affect/raw/refs/heads/main/scripts/output/stats_filtered_tiles_set1.csv', stringsAsFactors = F)
nrow(df.maps) # 44

# filename
inp.tif <- df.maps %>%
	filter(map_id == map.id) %>%
	pull(file)

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

# get raster values, rescaled (from 0 to 100) and converted to integer vector
r <- get.rescaled.raster(inp.tif, returnInt = F, deleteInput = T)

# reduce resolution from 1000x1000 to 25x25 pixels
af <- 1000/25
ra <- aggregate(r, fact = af, fun = mean)

# convert to matrix (drops geo-spatial attributes)
m <- as.matrix(ra)

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
	# map[mapid]_[colorscale]_scale[Def/Rev]_orient[Def/Mir]_[rotation]_25px.png
	save.map.png(m, sprintf('%s/map%02d_%s_scaleDef_orientDef_000_25px.png', out.dir, map.id, pal.name), pal)
	save.map.png(m, sprintf('%s/map%02d_%s_scaleRev_orientDef_000_25px.png', out.dir, map.id, pal.name), rev(pal))

	setTxtProgressBar(pb, j)
}
close(pb)

