#!/usr/bin/env Rscript
#
# regenerate_shifted_maps.R
#
# Re-renders the shifted map PNGs with type="cairo", antialias="none"
# so that every pixel color exactly matches one of the 256 palette entries.
# Uses the same data processing as the original exp1.qmd generation code.
#
# Usage (from project root):
#   Rscript prep/regenerate_shifted_maps.R

library(data.table)
library(dplyr)
library(png)

# -------------------------------------------------------------------
# Config
# -------------------------------------------------------------------

color_defs <- fread("data/matplotlib_colorscales.csv")

rgb_to_hex <- function(r, g, b) rgb(r, g, b, maxColorValue = 1)

clockwise90    <- function(m) t(apply(m, 2, rev))
mirror_matrix  <- function(m) m[, rev(seq_len(ncol(m)))]

base_out_dir <- "images/shifted_maps/"
dir.create(base_out_dir, showWarnings = FALSE, recursive = TRUE)

target_ids <- c(23, 7, 15, 2, 27, 26, 5, 10, 13, 12)

exp2_scales <- c(
  "Reds", "PuBu", "PiYG", "Greys", "PuRd", "coolwarm", "vanimo", "RdGy",
  "BuPu", "BrBG", "magma", "cividis", "YlOrBr", "PRGn", "RdYlGn", "PuOr",
  "BuGn", "berlin", "managua", "turbo"
)

# -------------------------------------------------------------------
# Main loop (mirrors exp1.qmd "Generating Shifted Maps" chunk)
# -------------------------------------------------------------------

total_generated <- 0

for (shift in c("darkshift", "lightshift")) {

  inp_csv_path <- sprintf("data/map_values_V2_%s.csv", shift)
  if (!file.exists(inp_csv_path)) next

  map_data <- fread(file = inp_csv_path, header = TRUE, data.table = FALSE)

  for (current_scale_name in exp2_scales) {

    scale_colors <- color_defs %>%
      filter(colorscale == current_scale_name) %>%
      arrange(index) %>%
      mutate(hex = rgb_to_hex(R, G, B))

    col_def <- scale_colors$hex
    col_rev <- rev(col_def)

    cat(sprintf("Processing %s for scale: %s\n", shift, current_scale_name))

    for (i in 1:nrow(map_data)) {

      map_id_num <- as.numeric(map_data[i, 1])
      if (!(map_id_num %in% target_ids)) next

      v      <- as.numeric(map_data[i, -1])
      m_base <- matrix(data = v, nrow = 1000, ncol = 1000)
      m_250  <- apply(array(m_base, c(4, 250, 4, 250)), c(2, 4), mean)

      orientations <- list(
        "orientDef_000" = m_250,
        "orientDef_090" = clockwise90(m_250),
        "orientDef_180" = clockwise90(clockwise90(m_250)),
        "orientDef_270" = clockwise90(clockwise90(clockwise90(m_250)))
      )

      m_mirror <- mirror_matrix(m_250)
      orientations[["orientMir_000"]] <- m_mirror
      orientations[["orientMir_090"]] <- clockwise90(m_mirror)
      orientations[["orientMir_180"]] <- clockwise90(clockwise90(m_mirror))
      orientations[["orientMir_270"]] <- clockwise90(clockwise90(clockwise90(m_mirror)))

      for (o_name in names(orientations)) {

        fname_def <- sprintf("map%02d_%s_scaleDef_%s_%s.png",
                             map_id_num, current_scale_name, o_name, shift)
        fname_rev <- sprintf("map%02d_%s_scaleRev_%s_%s.png",
                             map_id_num, current_scale_name, o_name, shift)

        path_def <- file.path(base_out_dir, fname_def)
        path_rev <- file.path(base_out_dir, fname_rev)

        m_to_plot <- t(apply(orientations[[o_name]], 1, rev))

        png(path_def, width = 500, height = 500,
            type = "cairo", antialias = "none")
        par(mar = c(0,0,0,0))
        image(m_to_plot, axes = FALSE, asp = 1, useRaster = TRUE, col = col_def)
        dev.off()

        png(path_rev, width = 500, height = 500,
            type = "cairo", antialias = "none")
        par(mar = c(0,0,0,0))
        image(m_to_plot, axes = FALSE, asp = 1, useRaster = TRUE, col = col_rev)
        dev.off()

        total_generated <- total_generated + 2
      }
    }
  }
}

cat(sprintf("\nDone. Generated %d images.\n", total_generated))

# -------------------------------------------------------------------
# Verification: spot-check a few images for exact palette matching
# -------------------------------------------------------------------

cat("\n=== Verification ===\n")
preds <- read.csv("results/matplotlib_colorscales_w_predictions_2.csv",
                  stringsAsFactors = FALSE)

test_cases <- list(
  list(scale = "Reds", shift = "lightshift"),
  list(scale = "magma", shift = "darkshift"),
  list(scale = "turbo", shift = "lightshift")
)

for (tc in test_cases) {
  ref <- preds[preds$colorscale == tc$scale, c("R","G","B")]
  ref_int <- round(as.matrix(ref) * 255)
  ref_key <- paste(ref_int[,1], ref_int[,2], ref_int[,3])

  img_path <- sprintf("images/shifted_maps/map02_%s_scaleDef_orientDef_000_%s.png",
                       tc$scale, tc$shift)
  img <- readPNG(img_path)
  px <- round(cbind(as.vector(img[,,1]), as.vector(img[,,2]), as.vector(img[,,3])) * 255)
  px_key <- paste(px[,1], px[,2], px[,3])
  n_bad <- sum(!(px_key %in% ref_key))
  cat(sprintf("  %s %s: %d / %d non-palette pixels (%.1f%%)\n",
      tc$scale, tc$shift, n_bad, nrow(px), 100*n_bad/nrow(px)))
}
