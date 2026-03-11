#!/usr/bin/env Rscript
#
# compute_color_proportions.R
#
# Reads each shifted map PNG and assigns every pixel to its exact colorscale
# index by strict RGB matching. Requires images rendered with
# type="cairo", antialias="none" (see prep/regenerate_shifted_maps.R).
#
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
# Load reference RGB for each colorscale (256 x 3, values in [0,1])
# -------------------------------------------------------------------

preds <- read.csv(preds_file, stringsAsFactors = FALSE)

# Use group_keys to guarantee names align with group_map order
# (sort() and group_keys() use different collation — the original
#  setNames(group_map(...), sort(...)) was silently misaligning palettes)
ref_rgb_list <- preds %>%
  filter(colorscale %in% exp2_scales) %>%
  arrange(colorscale, index) %>%
  group_by(colorscale) %>%
  {
    keys <- group_keys(.)$colorscale
    maps <- group_map(., ~ as.matrix(.x[, c("R", "G", "B")]), .keep = FALSE)
    setNames(maps, keys)
  }

# Verify palette assignment: first RGB of each scale must match preds
for (sn in names(ref_rgb_list)) {
  expected <- as.numeric(preds[preds$colorscale == sn & preds$index == 1,
                               c("R","G","B")])
  actual   <- ref_rgb_list[[sn]][1, ]
  stopifnot(all(abs(actual - expected) < 1e-6))
}
cat("Palette assignment verified for all scales.\n")

# -------------------------------------------------------------------
# Core function: strict pixel matching
# -------------------------------------------------------------------

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

  # Build lookup: "R G B" string -> palette index
  ref_key <- paste(ref_int[, 1], ref_int[, 2], ref_int[, 3])
  palette_lookup <- setNames(seq_len(nrow(ref_int)), ref_key)

  # Strict matching
  uniq_key <- paste(uniq_int[, 1], uniq_int[, 2], uniq_int[, 3])
  uniq_idx <- palette_lookup[uniq_key]

  # Flag non-matching colors
  non_matching <- which(is.na(uniq_idx))
  if (length(non_matching) > 0) {
    px_key   <- paste(px_int[, 1], px_int[, 2], px_int[, 3])
    bad_keys <- uniq_key[non_matching]
    n_bad_px <- sum(px_key %in% bad_keys)
    pct_bad  <- 100 * n_bad_px / nrow(px)
    warning(sprintf(
      "%s: %d / %d unique colors (%.1f%% of pixels) not in palette",
      basename(img_path), length(non_matching), nrow(uniq_int), pct_bad
    ))
    for (j in head(non_matching, 5)) {
      cat(sprintf("    non-palette color: (%s)\n", uniq_key[j]))
    }
  }

  # Map all pixels to palette indices
  px_key   <- paste(px_int[, 1], px_int[, 2], px_int[, 3])
  all_idx  <- setNames(uniq_idx, uniq_key)[px_key]
  stopifnot(length(all_idx) == nrow(px))
  stopifnot(!anyNA(all_idx))

  counts <- tabulate(all_idx, nbins = nrow(ref_rgb))
  stopifnot(sum(counts) == nrow(px))
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
