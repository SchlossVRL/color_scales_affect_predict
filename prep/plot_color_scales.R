library(dplyr)
library(ggplot2)

# -------------------------------------------------------------------
# continuous
# -------------------------------------------------------------------

df.c <- read.csv('data/matplotlib_colorscales.csv', stringsAsFactors = F)

pal.order.c <- list(
	"Perceptually Uniform Sequential" = c(
		"viridis", "plasma", "inferno", "magma", "cividis"
	),
	"Sequential" = c(
		"Greys", "Purples", "Blues", "Greens", "Oranges", "Reds", "YlOrBr", "YlOrRd", "OrRd", 
		"PuRd", "RdPu", "BuPu", "GnBu", "PuBu", "YlGnBu", "PuBuGn", "BuGn", "YlGn"
	),
	"Diverging" = c(
		"PiYG", "PRGn", "BrBG", "PuOr", "RdGy", "RdBu", "RdYlBu", "RdYlGn", "Spectral", 
		"coolwarm", "bwr", "seismic", "berlin", "managua", "vanimo"
	),
	"Miscellaneous" = c(
		"gist_earth", "turbo"
	)
)

length(unlist(pal.order.c)) # 40
all(sort(unique(df.c$colorscale)) == sort(unname(unlist(pal.order.c)))) # TRUE

df.c <- df.c %>% 
	mutate(colorscale = factor(colorscale, levels = unname(unlist(pal.order.c)))) %>% 
	arrange(colorscale)

ggplot(df.c, aes(x = index, y = 1, fill = rgb(R, G, B))) +
	geom_raster(interpolate = FALSE) +
	scale_fill_identity() +
	scale_y_continuous(NULL, breaks = NULL) +
	scale_x_continuous(NULL, breaks = NULL, expand = c(0, 0)) +
	facet_grid(colorscale ~ ., switch = 'y') +
	theme_minimal() +
	theme(
		plot.margin = margin(t = 1, r = 1, b = 1, l = 1, 'lines'),
		panel.grid = element_blank(),
		panel.spacing.y = unit(6, 'pt'),
		strip.placement = 'outside',
		strip.text.y.left = element_text(angle = 0, hjust = 1, color = 'black', size = 10),
		strip.background = element_blank(),
		axis.text = element_blank(),
		axis.ticks = element_blank()
	)

ggsave('figures/continuous_color_scales.pdf', width = 5, height = 10, units = 'in', dpi = 600)


# -------------------------------------------------------------------
# qualitative
# -------------------------------------------------------------------

df.q <- read.csv('data/matplotlib_qualitative_colorscales_v2.csv')

pal.order.q <- c(
	'Pastel1', 'Pastel2', 'Paired', 'Accent', 
	'Dark2', 'Set1', 'Set2', 'Set3',
	'tab10', 'tab10new', 'tab20', 'tab20b', 'tab20c'
)

length(unique(df.q$colorscale)) # 13
all(sort(unique(df.q$colorscale)) == sort(pal.order.q)) # TRUE

df.q <- df.q %>% 
	mutate(colorscale = factor(colorscale, levels = pal.order.q)) %>% 
	arrange(colorscale)

ggplot(df.q, aes(x = index, y = 1, fill = rgb(R, G, B))) +
	geom_tile() +
	scale_fill_identity() +
	scale_y_continuous(NULL, breaks = NULL) +
	scale_x_continuous(NULL, breaks = NULL, expand = c(0, 0)) +
	facet_grid(colorscale ~ ., switch = 'y') +
	theme_minimal() +
	theme(
		plot.margin = margin(t = 1, r = 1, b = 1, l = 1, 'lines'),
		panel.grid = element_blank(),
		panel.spacing.y = unit(6, 'pt'),
		strip.placement = 'outside',
		strip.text.y.left = element_text(angle = 0, hjust = 1, color = 'black', size = 10),
		strip.background = element_blank(),
		axis.text = element_blank(),
		axis.ticks = element_blank()
	)

ggsave('figures/qualitative_color_scales.pdf', width = 5, height = 4, units = 'in', dpi = 600)

