#!/usr/bin/env Rscript
#
# compute_color_proportions.R
#
# Reads each shifted map PNG (orientDef_000 canonical rotation) and assigns
# every pixel to its nearest original colorscale index via RGB nearest-neighbor.
# Saves results/color_proportions.csv with one row per
# (map_id, scale_name, mapping_code, rotation_code, shift_code, index).
#
# Shift variants are processed separately: lightshift/darkshift change pixel
# colors, which changes which colorscale indices pixels map to.
# Rotation is invariant (rearranges pixels but preserves counts), so
# proportions from the _000 rotation are replicated to 090/180/270.
#
# Usage (from project root):
#   Rscript prep/compute_color_proportions.R

library(png)
library(dplyr)

# -------------------------------------------------------------------
# Config
# -------------------------------------------------------------------

shifted_dir <- "images/shifted_maps"
results_dir <- "results"
out_file    <- file.path(results_dir, "color_proportions.csv")
preds_file  <- file.path(
  results_dir, "matplotlib_colorscales_w_predictions_2.csv"
)

exp2_scales <- c(
  "Reds", "PuBu", "PiYG", "Greys", "PuRd", "coolwarm", "vanimo", "RdGy",
  "BuPu", "BrBG", "magma", "cividis", "YlOrBr", "PRGn", "RdYlGn", "PuOr",
  "BuGn", "berlin", "managua", "turbo"
)

map_ids       <- c("02","05","07","10","12","13","15","23","26","27")
mapping_codes <- c("scaleDef", "scaleRev")
rotation_codes <- c("0", "90", "180", "270")
shift_codes   <- c("lightshift", "darkshift")

# -------------------------------------------------------------------
# Load reference RGB for each colorscale (256 × 3, values in [0,1])
# -------------------------------------------------------------------

preds <- read.csv(preds_file, stringsAsFactors = FALSE)

ref_rgb_list <- preds %>%
  filter(colorscale %in% exp2_scales) %>%
  arrange(colorscale, index) %>%
  group_by(colorscale) %>%
  group_map(~ as.matrix(.x[, c("R", "G", "B")]), .keep = FALSE) %>%
  setNames(sort(intersect(exp2_scales, unique(preds$colorscale))))

# -------------------------------------------------------------------
# Core functions
# -------------------------------------------------------------------

nearest_palette_index <- function(unique_px, ref_rgb) {
  d2 <- matrix(0, nrow(unique_px), nrow(ref_rgb))
  for (ch in seq_len(3)) {
    d2 <- d2 + outer(unique_px[, ch], ref_rgb[, ch], `-`)^2
  }
  max.col(-d2)
}

color_proportions_from_png <- function(img_path, ref_rgb) {
  img <- readPNG(img_path)
  px  <- cbind(
    as.vector(img[, , 1]),
    as.vector(img[, , 2]),
    as.vector(img[, , 3])
  )

  px_int   <- round(px * 255)
  uniq_int <- unique(px_int)
  ref_int  <- round(ref_rgb * 255)

  uniq_idx <- nearest_palette_index(uniq_int, ref_int)

  px_key   <- paste(px_int[, 1], px_int[, 2], px_int[, 3])
  uniq_key <- paste(uniq_int[, 1], uniq_int[, 2], uniq_int[, 3])
  all_idx  <- setNames(uniq_idx, uniq_key)[px_key]
  stopifnot(length(all_idx) == nrow(px))

  counts <- tabulate(all_idx, nbins = nrow(ref_rgb))
  data.frame(
    index      = seq_len(nrow(ref_rgb)),
    proportion = counts / sum(counts)
  )
}

process_one <- function(map_id, scale, mcode, shift, ref_rgb) {
  fname <- sprintf(
    "map%s_%s_%s_orientDef_000_%s.png", map_id, scale, mcode, shift
  )
  fpath <- file.path(shifted_dir, fname)

  if (!file.exists(fpath)) {
    warning("Missing: ", fpath)
    return(NULL)
  }

  props <- color_proportions_from_png(fpath, ref_rgb)

  data.frame(
    map_id        = map_id,
    scale_name    = scale,
    mapping_code  = mcode,
    rotation_code = rep(rotation_codes, each = nrow(props)),
    shift_code    = shift,
    index         = rep(props$index, times = length(rotation_codes)),
    proportion    = rep(props$proportion, times = length(rotation_codes)),
    stringsAsFactors = FALSE
  )
}

# -------------------------------------------------------------------
# Main loop
# -------------------------------------------------------------------

combos <- expand.grid(
  map_id       = map_ids,
  scale_name   = exp2_scales,
  mapping_code = mapping_codes,
  shift_code   = shift_codes,
  stringsAsFactors = FALSE
)

n <- nrow(combos)
cat(sprintf(
  "Processing %d shifted images, expanding to %d stimuli...\n",
  n, n * length(rotation_codes)
))

results <- vector("list", n)
for (i in seq_len(n)) {
  r <- combos[i, ]
  scale <- r$scale_name
  if (!(scale %in% names(ref_rgb_list))) next

  results[[i]] <- process_one(
    r$map_id, scale, r$mapping_code, r$shift_code, ref_rgb_list[[scale]]
  )

  if (i %% 80 == 0) cat(sprintf("  %d / %d\n", i, n))
}

out <- bind_rows(Filter(Negate(is.null), results)) %>%
  filter(proportion > 0) %>%
  select(
    map_id, scale_name, mapping_code,
    rotation_code, shift_code, index, proportion
  )

write.csv(out, out_file, row.names = FALSE)
cat(sprintf("Saved %d rows to %s\n", nrow(out), out_file))
