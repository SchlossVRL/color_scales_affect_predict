var affect_list = ["angry", "happy", "fearful", "disgust", "sad"];
var im2cond_dict = {
  "images/map_02_viridis_1.png": {
    "map_nums": "02",
    "scale_name": "viridis",
    "orientation_code": "1"
  },
  "images/map_02_viridis_2.png": {
    "map_nums": "02",
    "scale_name": "viridis",
    "orientation_code": "2"
  },
  "images/map_02_viridis_3.png": {
    "map_nums": "02",
    "scale_name": "viridis",
    "orientation_code": "3"
  },
  "images/map_02_viridis_4.png": {
    "map_nums": "02",
    "scale_name": "viridis",
    "orientation_code": "4"
  },
  "images/map_02_plasma_1.png": {
    "map_nums": "02",
    "scale_name": "plasma",
    "orientation_code": "1"
  },
  "images/map_02_plasma_2.png": {
    "map_nums": "02",
    "scale_name": "plasma",
    "orientation_code": "2"
  },
  "images/map_02_plasma_3.png": {
    "map_nums": "02",
    "scale_name": "plasma",
    "orientation_code": "3"
  },
  "images/map_02_plasma_4.png": {
    "map_nums": "02",
    "scale_name": "plasma",
    "orientation_code": "4"
  },
  "images/map_02_inferno_1.png": {
    "map_nums": "02",
    "scale_name": "inferno",
    "orientation_code": "1"
  },
  "images/map_02_inferno_2.png": {
    "map_nums": "02",
    "scale_name": "inferno",
    "orientation_code": "2"
  },
  "images/map_02_inferno_3.png": {
    "map_nums": "02",
    "scale_name": "inferno",
    "orientation_code": "3"
  },
  "images/map_02_inferno_4.png": {
    "map_nums": "02",
    "scale_name": "inferno",
    "orientation_code": "4"
  },
  "images/map_02_magma_1.png": {
    "map_nums": "02",
    "scale_name": "magma",
    "orientation_code": "1"
  },
  "images/map_02_magma_2.png": {
    "map_nums": "02",
    "scale_name": "magma",
    "orientation_code": "2"
  },
  "images/map_02_magma_3.png": {
    "map_nums": "02",
    "scale_name": "magma",
    "orientation_code": "3"
  },
  "images/map_02_magma_4.png": {
    "map_nums": "02",
    "scale_name": "magma",
    "orientation_code": "4"
  },
  "images/map_02_cividis_1.png": {
    "map_nums": "02",
    "scale_name": "cividis",
    "orientation_code": "1"
  },
  "images/map_02_cividis_2.png": {
    "map_nums": "02",
    "scale_name": "cividis",
    "orientation_code": "2"
  },
  "images/map_02_cividis_3.png": {
    "map_nums": "02",
    "scale_name": "cividis",
    "orientation_code": "3"
  },
  "images/map_02_cividis_4.png": {
    "map_nums": "02",
    "scale_name": "cividis",
    "orientation_code": "4"
  },
  "images/map_02_Greys_1.png": {
    "map_nums": "02",
    "scale_name": "Greys",
    "orientation_code": "1"
  },
  "images/map_02_Greys_2.png": {
    "map_nums": "02",
    "scale_name": "Greys",
    "orientation_code": "2"
  },
  "images/map_02_Greys_3.png": {
    "map_nums": "02",
    "scale_name": "Greys",
    "orientation_code": "3"
  },
  "images/map_02_Greys_4.png": {
    "map_nums": "02",
    "scale_name": "Greys",
    "orientation_code": "4"
  },
  "images/map_02_Purples_1.png": {
    "map_nums": "02",
    "scale_name": "Purples",
    "orientation_code": "1"
  },
  "images/map_02_Purples_2.png": {
    "map_nums": "02",
    "scale_name": "Purples",
    "orientation_code": "2"
  },
  "images/map_02_Purples_3.png": {
    "map_nums": "02",
    "scale_name": "Purples",
    "orientation_code": "3"
  },
  "images/map_02_Purples_4.png": {
    "map_nums": "02",
    "scale_name": "Purples",
    "orientation_code": "4"
  },
  "images/map_02_Blues_1.png": {
    "map_nums": "02",
    "scale_name": "Blues",
    "orientation_code": "1"
  },
  "images/map_02_Blues_2.png": {
    "map_nums": "02",
    "scale_name": "Blues",
    "orientation_code": "2"
  },
  "images/map_02_Blues_3.png": {
    "map_nums": "02",
    "scale_name": "Blues",
    "orientation_code": "3"
  },
  "images/map_02_Blues_4.png": {
    "map_nums": "02",
    "scale_name": "Blues",
    "orientation_code": "4"
  },
  "images/map_02_Greens_1.png": {
    "map_nums": "02",
    "scale_name": "Greens",
    "orientation_code": "1"
  },
  "images/map_02_Greens_2.png": {
    "map_nums": "02",
    "scale_name": "Greens",
    "orientation_code": "2"
  },
  "images/map_02_Greens_3.png": {
    "map_nums": "02",
    "scale_name": "Greens",
    "orientation_code": "3"
  },
  "images/map_02_Greens_4.png": {
    "map_nums": "02",
    "scale_name": "Greens",
    "orientation_code": "4"
  },
  "images/map_02_Oranges_1.png": {
    "map_nums": "02",
    "scale_name": "Oranges",
    "orientation_code": "1"
  },
  "images/map_02_Oranges_2.png": {
    "map_nums": "02",
    "scale_name": "Oranges",
    "orientation_code": "2"
  },
  "images/map_02_Oranges_3.png": {
    "map_nums": "02",
    "scale_name": "Oranges",
    "orientation_code": "3"
  },
  "images/map_02_Oranges_4.png": {
    "map_nums": "02",
    "scale_name": "Oranges",
    "orientation_code": "4"
  },
  "images/map_02_Reds_1.png": {
    "map_nums": "02",
    "scale_name": "Reds",
    "orientation_code": "1"
  },
  "images/map_02_Reds_2.png": {
    "map_nums": "02",
    "scale_name": "Reds",
    "orientation_code": "2"
  },
  "images/map_02_Reds_3.png": {
    "map_nums": "02",
    "scale_name": "Reds",
    "orientation_code": "3"
  },
  "images/map_02_Reds_4.png": {
    "map_nums": "02",
    "scale_name": "Reds",
    "orientation_code": "4"
  },
  "images/map_02_YlOrBr_1.png": {
    "map_nums": "02",
    "scale_name": "YlOrBr",
    "orientation_code": "1"
  },
  "images/map_02_YlOrBr_2.png": {
    "map_nums": "02",
    "scale_name": "YlOrBr",
    "orientation_code": "2"
  },
  "images/map_02_YlOrBr_3.png": {
    "map_nums": "02",
    "scale_name": "YlOrBr",
    "orientation_code": "3"
  },
  "images/map_02_YlOrBr_4.png": {
    "map_nums": "02",
    "scale_name": "YlOrBr",
    "orientation_code": "4"
  },
  "images/map_02_YlOrRd_1.png": {
    "map_nums": "02",
    "scale_name": "YlOrRd",
    "orientation_code": "1"
  },
  "images/map_02_YlOrRd_2.png": {
    "map_nums": "02",
    "scale_name": "YlOrRd",
    "orientation_code": "2"
  },
  "images/map_02_YlOrRd_3.png": {
    "map_nums": "02",
    "scale_name": "YlOrRd",
    "orientation_code": "3"
  },
  "images/map_02_YlOrRd_4.png": {
    "map_nums": "02",
    "scale_name": "YlOrRd",
    "orientation_code": "4"
  },
  "images/map_02_OrRd_1.png": {
    "map_nums": "02",
    "scale_name": "OrRd",
    "orientation_code": "1"
  },
  "images/map_02_OrRd_2.png": {
    "map_nums": "02",
    "scale_name": "OrRd",
    "orientation_code": "2"
  },
  "images/map_02_OrRd_3.png": {
    "map_nums": "02",
    "scale_name": "OrRd",
    "orientation_code": "3"
  },
  "images/map_02_OrRd_4.png": {
    "map_nums": "02",
    "scale_name": "OrRd",
    "orientation_code": "4"
  },
  "images/map_02_PuRd_1.png": {
    "map_nums": "02",
    "scale_name": "PuRd",
    "orientation_code": "1"
  },
  "images/map_02_PuRd_2.png": {
    "map_nums": "02",
    "scale_name": "PuRd",
    "orientation_code": "2"
  },
  "images/map_02_PuRd_3.png": {
    "map_nums": "02",
    "scale_name": "PuRd",
    "orientation_code": "3"
  },
  "images/map_02_PuRd_4.png": {
    "map_nums": "02",
    "scale_name": "PuRd",
    "orientation_code": "4"
  },
  "images/map_02_RdPu_1.png": {
    "map_nums": "02",
    "scale_name": "RdPu",
    "orientation_code": "1"
  },
  "images/map_02_RdPu_2.png": {
    "map_nums": "02",
    "scale_name": "RdPu",
    "orientation_code": "2"
  },
  "images/map_02_RdPu_3.png": {
    "map_nums": "02",
    "scale_name": "RdPu",
    "orientation_code": "3"
  },
  "images/map_02_RdPu_4.png": {
    "map_nums": "02",
    "scale_name": "RdPu",
    "orientation_code": "4"
  },
  "images/map_02_BuPu_1.png": {
    "map_nums": "02",
    "scale_name": "BuPu",
    "orientation_code": "1"
  },
  "images/map_02_BuPu_2.png": {
    "map_nums": "02",
    "scale_name": "BuPu",
    "orientation_code": "2"
  },
  "images/map_02_BuPu_3.png": {
    "map_nums": "02",
    "scale_name": "BuPu",
    "orientation_code": "3"
  },
  "images/map_02_BuPu_4.png": {
    "map_nums": "02",
    "scale_name": "BuPu",
    "orientation_code": "4"
  },
  "images/map_02_GnBu_1.png": {
    "map_nums": "02",
    "scale_name": "GnBu",
    "orientation_code": "1"
  },
  "images/map_02_GnBu_2.png": {
    "map_nums": "02",
    "scale_name": "GnBu",
    "orientation_code": "2"
  },
  "images/map_02_GnBu_3.png": {
    "map_nums": "02",
    "scale_name": "GnBu",
    "orientation_code": "3"
  },
  "images/map_02_GnBu_4.png": {
    "map_nums": "02",
    "scale_name": "GnBu",
    "orientation_code": "4"
  },
  "images/map_02_PuBu_1.png": {
    "map_nums": "02",
    "scale_name": "PuBu",
    "orientation_code": "1"
  },
  "images/map_02_PuBu_2.png": {
    "map_nums": "02",
    "scale_name": "PuBu",
    "orientation_code": "2"
  },
  "images/map_02_PuBu_3.png": {
    "map_nums": "02",
    "scale_name": "PuBu",
    "orientation_code": "3"
  },
  "images/map_02_PuBu_4.png": {
    "map_nums": "02",
    "scale_name": "PuBu",
    "orientation_code": "4"
  },
  "images/map_02_YlGnBu_1.png": {
    "map_nums": "02",
    "scale_name": "YlGnBu",
    "orientation_code": "1"
  },
  "images/map_02_YlGnBu_2.png": {
    "map_nums": "02",
    "scale_name": "YlGnBu",
    "orientation_code": "2"
  },
  "images/map_02_YlGnBu_3.png": {
    "map_nums": "02",
    "scale_name": "YlGnBu",
    "orientation_code": "3"
  },
  "images/map_02_YlGnBu_4.png": {
    "map_nums": "02",
    "scale_name": "YlGnBu",
    "orientation_code": "4"
  },
  "images/map_02_PuBuGn_1.png": {
    "map_nums": "02",
    "scale_name": "PuBuGn",
    "orientation_code": "1"
  },
  "images/map_02_PuBuGn_2.png": {
    "map_nums": "02",
    "scale_name": "PuBuGn",
    "orientation_code": "2"
  },
  "images/map_02_PuBuGn_3.png": {
    "map_nums": "02",
    "scale_name": "PuBuGn",
    "orientation_code": "3"
  },
  "images/map_02_PuBuGn_4.png": {
    "map_nums": "02",
    "scale_name": "PuBuGn",
    "orientation_code": "4"
  },
  "images/map_02_BuGn_1.png": {
    "map_nums": "02",
    "scale_name": "BuGn",
    "orientation_code": "1"
  },
  "images/map_02_BuGn_2.png": {
    "map_nums": "02",
    "scale_name": "BuGn",
    "orientation_code": "2"
  },
  "images/map_02_BuGn_3.png": {
    "map_nums": "02",
    "scale_name": "BuGn",
    "orientation_code": "3"
  },
  "images/map_02_BuGn_4.png": {
    "map_nums": "02",
    "scale_name": "BuGn",
    "orientation_code": "4"
  },
  "images/map_02_YlGn_1.png": {
    "map_nums": "02",
    "scale_name": "YlGn",
    "orientation_code": "1"
  },
  "images/map_02_YlGn_2.png": {
    "map_nums": "02",
    "scale_name": "YlGn",
    "orientation_code": "2"
  },
  "images/map_02_YlGn_3.png": {
    "map_nums": "02",
    "scale_name": "YlGn",
    "orientation_code": "3"
  },
  "images/map_02_YlGn_4.png": {
    "map_nums": "02",
    "scale_name": "YlGn",
    "orientation_code": "4"
  },
  "images/map_02_PiYG_1.png": {
    "map_nums": "02",
    "scale_name": "PiYG",
    "orientation_code": "1"
  },
  "images/map_02_PiYG_2.png": {
    "map_nums": "02",
    "scale_name": "PiYG",
    "orientation_code": "2"
  },
  "images/map_02_PiYG_3.png": {
    "map_nums": "02",
    "scale_name": "PiYG",
    "orientation_code": "3"
  },
  "images/map_02_PiYG_4.png": {
    "map_nums": "02",
    "scale_name": "PiYG",
    "orientation_code": "4"
  },
  "images/map_02_PRGn_1.png": {
    "map_nums": "02",
    "scale_name": "PRGn",
    "orientation_code": "1"
  },
  "images/map_02_PRGn_2.png": {
    "map_nums": "02",
    "scale_name": "PRGn",
    "orientation_code": "2"
  },
  "images/map_02_PRGn_3.png": {
    "map_nums": "02",
    "scale_name": "PRGn",
    "orientation_code": "3"
  },
  "images/map_02_PRGn_4.png": {
    "map_nums": "02",
    "scale_name": "PRGn",
    "orientation_code": "4"
  },
  "images/map_02_BrBG_1.png": {
    "map_nums": "02",
    "scale_name": "BrBG",
    "orientation_code": "1"
  },
  "images/map_02_BrBG_2.png": {
    "map_nums": "02",
    "scale_name": "BrBG",
    "orientation_code": "2"
  },
  "images/map_02_BrBG_3.png": {
    "map_nums": "02",
    "scale_name": "BrBG",
    "orientation_code": "3"
  },
  "images/map_02_BrBG_4.png": {
    "map_nums": "02",
    "scale_name": "BrBG",
    "orientation_code": "4"
  },
  "images/map_02_PuOr_1.png": {
    "map_nums": "02",
    "scale_name": "PuOr",
    "orientation_code": "1"
  },
  "images/map_02_PuOr_2.png": {
    "map_nums": "02",
    "scale_name": "PuOr",
    "orientation_code": "2"
  },
  "images/map_02_PuOr_3.png": {
    "map_nums": "02",
    "scale_name": "PuOr",
    "orientation_code": "3"
  },
  "images/map_02_PuOr_4.png": {
    "map_nums": "02",
    "scale_name": "PuOr",
    "orientation_code": "4"
  },
  "images/map_02_RdGy_1.png": {
    "map_nums": "02",
    "scale_name": "RdGy",
    "orientation_code": "1"
  },
  "images/map_02_RdGy_2.png": {
    "map_nums": "02",
    "scale_name": "RdGy",
    "orientation_code": "2"
  },
  "images/map_02_RdGy_3.png": {
    "map_nums": "02",
    "scale_name": "RdGy",
    "orientation_code": "3"
  },
  "images/map_02_RdGy_4.png": {
    "map_nums": "02",
    "scale_name": "RdGy",
    "orientation_code": "4"
  },
  "images/map_02_RdBu_1.png": {
    "map_nums": "02",
    "scale_name": "RdBu",
    "orientation_code": "1"
  },
  "images/map_02_RdBu_2.png": {
    "map_nums": "02",
    "scale_name": "RdBu",
    "orientation_code": "2"
  },
  "images/map_02_RdBu_3.png": {
    "map_nums": "02",
    "scale_name": "RdBu",
    "orientation_code": "3"
  },
  "images/map_02_RdBu_4.png": {
    "map_nums": "02",
    "scale_name": "RdBu",
    "orientation_code": "4"
  },
  "images/map_02_RdYlBu_1.png": {
    "map_nums": "02",
    "scale_name": "RdYlBu",
    "orientation_code": "1"
  },
  "images/map_02_RdYlBu_2.png": {
    "map_nums": "02",
    "scale_name": "RdYlBu",
    "orientation_code": "2"
  },
  "images/map_02_RdYlBu_3.png": {
    "map_nums": "02",
    "scale_name": "RdYlBu",
    "orientation_code": "3"
  },
  "images/map_02_RdYlBu_4.png": {
    "map_nums": "02",
    "scale_name": "RdYlBu",
    "orientation_code": "4"
  },
  "images/map_02_RdYlGn_1.png": {
    "map_nums": "02",
    "scale_name": "RdYlGn",
    "orientation_code": "1"
  },
  "images/map_02_RdYlGn_2.png": {
    "map_nums": "02",
    "scale_name": "RdYlGn",
    "orientation_code": "2"
  },
  "images/map_02_RdYlGn_3.png": {
    "map_nums": "02",
    "scale_name": "RdYlGn",
    "orientation_code": "3"
  },
  "images/map_02_RdYlGn_4.png": {
    "map_nums": "02",
    "scale_name": "RdYlGn",
    "orientation_code": "4"
  },
  "images/map_02_Spectral_1.png": {
    "map_nums": "02",
    "scale_name": "Spectral",
    "orientation_code": "1"
  },
  "images/map_02_Spectral_2.png": {
    "map_nums": "02",
    "scale_name": "Spectral",
    "orientation_code": "2"
  },
  "images/map_02_Spectral_3.png": {
    "map_nums": "02",
    "scale_name": "Spectral",
    "orientation_code": "3"
  },
  "images/map_02_Spectral_4.png": {
    "map_nums": "02",
    "scale_name": "Spectral",
    "orientation_code": "4"
  },
  "images/map_02_coolwarm_1.png": {
    "map_nums": "02",
    "scale_name": "coolwarm",
    "orientation_code": "1"
  },
  "images/map_02_coolwarm_2.png": {
    "map_nums": "02",
    "scale_name": "coolwarm",
    "orientation_code": "2"
  },
  "images/map_02_coolwarm_3.png": {
    "map_nums": "02",
    "scale_name": "coolwarm",
    "orientation_code": "3"
  },
  "images/map_02_coolwarm_4.png": {
    "map_nums": "02",
    "scale_name": "coolwarm",
    "orientation_code": "4"
  },
  "images/map_02_bwr_1.png": {
    "map_nums": "02",
    "scale_name": "bwr",
    "orientation_code": "1"
  },
  "images/map_02_bwr_2.png": {
    "map_nums": "02",
    "scale_name": "bwr",
    "orientation_code": "2"
  },
  "images/map_02_bwr_3.png": {
    "map_nums": "02",
    "scale_name": "bwr",
    "orientation_code": "3"
  },
  "images/map_02_bwr_4.png": {
    "map_nums": "02",
    "scale_name": "bwr",
    "orientation_code": "4"
  },
  "images/map_02_seismic_1.png": {
    "map_nums": "02",
    "scale_name": "seismic",
    "orientation_code": "1"
  },
  "images/map_02_seismic_2.png": {
    "map_nums": "02",
    "scale_name": "seismic",
    "orientation_code": "2"
  },
  "images/map_02_seismic_3.png": {
    "map_nums": "02",
    "scale_name": "seismic",
    "orientation_code": "3"
  },
  "images/map_02_seismic_4.png": {
    "map_nums": "02",
    "scale_name": "seismic",
    "orientation_code": "4"
  },
  "images/map_02_berlin_1.png": {
    "map_nums": "02",
    "scale_name": "berlin",
    "orientation_code": "1"
  },
  "images/map_02_berlin_2.png": {
    "map_nums": "02",
    "scale_name": "berlin",
    "orientation_code": "2"
  },
  "images/map_02_berlin_3.png": {
    "map_nums": "02",
    "scale_name": "berlin",
    "orientation_code": "3"
  },
  "images/map_02_berlin_4.png": {
    "map_nums": "02",
    "scale_name": "berlin",
    "orientation_code": "4"
  },
  "images/map_02_managua_1.png": {
    "map_nums": "02",
    "scale_name": "managua",
    "orientation_code": "1"
  },
  "images/map_02_managua_2.png": {
    "map_nums": "02",
    "scale_name": "managua",
    "orientation_code": "2"
  },
  "images/map_02_managua_3.png": {
    "map_nums": "02",
    "scale_name": "managua",
    "orientation_code": "3"
  },
  "images/map_02_managua_4.png": {
    "map_nums": "02",
    "scale_name": "managua",
    "orientation_code": "4"
  },
  "images/map_02_vanimo_1.png": {
    "map_nums": "02",
    "scale_name": "vanimo",
    "orientation_code": "1"
  },
  "images/map_02_vanimo_2.png": {
    "map_nums": "02",
    "scale_name": "vanimo",
    "orientation_code": "2"
  },
  "images/map_02_vanimo_3.png": {
    "map_nums": "02",
    "scale_name": "vanimo",
    "orientation_code": "3"
  },
  "images/map_02_vanimo_4.png": {
    "map_nums": "02",
    "scale_name": "vanimo",
    "orientation_code": "4"
  },
  "images/map_02_gist_earth_1.png": {
    "map_nums": "02",
    "scale_name": "gist",
    "orientation_code": "earth"
  },
  "images/map_02_gist_earth_2.png": {
    "map_nums": "02",
    "scale_name": "gist",
    "orientation_code": "earth"
  },
  "images/map_02_gist_earth_3.png": {
    "map_nums": "02",
    "scale_name": "gist",
    "orientation_code": "earth"
  },
  "images/map_02_gist_earth_4.png": {
    "map_nums": "02",
    "scale_name": "gist",
    "orientation_code": "earth"
  },
  "images/map_02_turbo_1.png": {
    "map_nums": "02",
    "scale_name": "turbo",
    "orientation_code": "1"
  },
  "images/map_02_turbo_2.png": {
    "map_nums": "02",
    "scale_name": "turbo",
    "orientation_code": "2"
  },
  "images/map_02_turbo_3.png": {
    "map_nums": "02",
    "scale_name": "turbo",
    "orientation_code": "3"
  },
  "images/map_02_turbo_4.png": {
    "map_nums": "02",
    "scale_name": "turbo",
    "orientation_code": "4"
  },
  "images/map_05_viridis_1.png": {
    "map_nums": "05",
    "scale_name": "viridis",
    "orientation_code": "1"
  },
  "images/map_05_viridis_2.png": {
    "map_nums": "05",
    "scale_name": "viridis",
    "orientation_code": "2"
  },
  "images/map_05_viridis_3.png": {
    "map_nums": "05",
    "scale_name": "viridis",
    "orientation_code": "3"
  },
  "images/map_05_viridis_4.png": {
    "map_nums": "05",
    "scale_name": "viridis",
    "orientation_code": "4"
  },
  "images/map_05_plasma_1.png": {
    "map_nums": "05",
    "scale_name": "plasma",
    "orientation_code": "1"
  },
  "images/map_05_plasma_2.png": {
    "map_nums": "05",
    "scale_name": "plasma",
    "orientation_code": "2"
  },
  "images/map_05_plasma_3.png": {
    "map_nums": "05",
    "scale_name": "plasma",
    "orientation_code": "3"
  },
  "images/map_05_plasma_4.png": {
    "map_nums": "05",
    "scale_name": "plasma",
    "orientation_code": "4"
  },
  "images/map_05_inferno_1.png": {
    "map_nums": "05",
    "scale_name": "inferno",
    "orientation_code": "1"
  },
  "images/map_05_inferno_2.png": {
    "map_nums": "05",
    "scale_name": "inferno",
    "orientation_code": "2"
  },
  "images/map_05_inferno_3.png": {
    "map_nums": "05",
    "scale_name": "inferno",
    "orientation_code": "3"
  },
  "images/map_05_inferno_4.png": {
    "map_nums": "05",
    "scale_name": "inferno",
    "orientation_code": "4"
  },
  "images/map_05_magma_1.png": {
    "map_nums": "05",
    "scale_name": "magma",
    "orientation_code": "1"
  },
  "images/map_05_magma_2.png": {
    "map_nums": "05",
    "scale_name": "magma",
    "orientation_code": "2"
  },
  "images/map_05_magma_3.png": {
    "map_nums": "05",
    "scale_name": "magma",
    "orientation_code": "3"
  },
  "images/map_05_magma_4.png": {
    "map_nums": "05",
    "scale_name": "magma",
    "orientation_code": "4"
  },
  "images/map_05_cividis_1.png": {
    "map_nums": "05",
    "scale_name": "cividis",
    "orientation_code": "1"
  },
  "images/map_05_cividis_2.png": {
    "map_nums": "05",
    "scale_name": "cividis",
    "orientation_code": "2"
  },
  "images/map_05_cividis_3.png": {
    "map_nums": "05",
    "scale_name": "cividis",
    "orientation_code": "3"
  },
  "images/map_05_cividis_4.png": {
    "map_nums": "05",
    "scale_name": "cividis",
    "orientation_code": "4"
  },
  "images/map_05_Greys_1.png": {
    "map_nums": "05",
    "scale_name": "Greys",
    "orientation_code": "1"
  },
  "images/map_05_Greys_2.png": {
    "map_nums": "05",
    "scale_name": "Greys",
    "orientation_code": "2"
  },
  "images/map_05_Greys_3.png": {
    "map_nums": "05",
    "scale_name": "Greys",
    "orientation_code": "3"
  },
  "images/map_05_Greys_4.png": {
    "map_nums": "05",
    "scale_name": "Greys",
    "orientation_code": "4"
  },
  "images/map_05_Purples_1.png": {
    "map_nums": "05",
    "scale_name": "Purples",
    "orientation_code": "1"
  },
  "images/map_05_Purples_2.png": {
    "map_nums": "05",
    "scale_name": "Purples",
    "orientation_code": "2"
  },
  "images/map_05_Purples_3.png": {
    "map_nums": "05",
    "scale_name": "Purples",
    "orientation_code": "3"
  },
  "images/map_05_Purples_4.png": {
    "map_nums": "05",
    "scale_name": "Purples",
    "orientation_code": "4"
  },
  "images/map_05_Blues_1.png": {
    "map_nums": "05",
    "scale_name": "Blues",
    "orientation_code": "1"
  },
  "images/map_05_Blues_2.png": {
    "map_nums": "05",
    "scale_name": "Blues",
    "orientation_code": "2"
  },
  "images/map_05_Blues_3.png": {
    "map_nums": "05",
    "scale_name": "Blues",
    "orientation_code": "3"
  },
  "images/map_05_Blues_4.png": {
    "map_nums": "05",
    "scale_name": "Blues",
    "orientation_code": "4"
  },
  "images/map_05_Greens_1.png": {
    "map_nums": "05",
    "scale_name": "Greens",
    "orientation_code": "1"
  },
  "images/map_05_Greens_2.png": {
    "map_nums": "05",
    "scale_name": "Greens",
    "orientation_code": "2"
  },
  "images/map_05_Greens_3.png": {
    "map_nums": "05",
    "scale_name": "Greens",
    "orientation_code": "3"
  },
  "images/map_05_Greens_4.png": {
    "map_nums": "05",
    "scale_name": "Greens",
    "orientation_code": "4"
  },
  "images/map_05_Oranges_1.png": {
    "map_nums": "05",
    "scale_name": "Oranges",
    "orientation_code": "1"
  },
  "images/map_05_Oranges_2.png": {
    "map_nums": "05",
    "scale_name": "Oranges",
    "orientation_code": "2"
  },
  "images/map_05_Oranges_3.png": {
    "map_nums": "05",
    "scale_name": "Oranges",
    "orientation_code": "3"
  },
  "images/map_05_Oranges_4.png": {
    "map_nums": "05",
    "scale_name": "Oranges",
    "orientation_code": "4"
  },
  "images/map_05_Reds_1.png": {
    "map_nums": "05",
    "scale_name": "Reds",
    "orientation_code": "1"
  },
  "images/map_05_Reds_2.png": {
    "map_nums": "05",
    "scale_name": "Reds",
    "orientation_code": "2"
  },
  "images/map_05_Reds_3.png": {
    "map_nums": "05",
    "scale_name": "Reds",
    "orientation_code": "3"
  },
  "images/map_05_Reds_4.png": {
    "map_nums": "05",
    "scale_name": "Reds",
    "orientation_code": "4"
  },
  "images/map_05_YlOrBr_1.png": {
    "map_nums": "05",
    "scale_name": "YlOrBr",
    "orientation_code": "1"
  },
  "images/map_05_YlOrBr_2.png": {
    "map_nums": "05",
    "scale_name": "YlOrBr",
    "orientation_code": "2"
  },
  "images/map_05_YlOrBr_3.png": {
    "map_nums": "05",
    "scale_name": "YlOrBr",
    "orientation_code": "3"
  },
  "images/map_05_YlOrBr_4.png": {
    "map_nums": "05",
    "scale_name": "YlOrBr",
    "orientation_code": "4"
  },
  "images/map_05_YlOrRd_1.png": {
    "map_nums": "05",
    "scale_name": "YlOrRd",
    "orientation_code": "1"
  },
  "images/map_05_YlOrRd_2.png": {
    "map_nums": "05",
    "scale_name": "YlOrRd",
    "orientation_code": "2"
  },
  "images/map_05_YlOrRd_3.png": {
    "map_nums": "05",
    "scale_name": "YlOrRd",
    "orientation_code": "3"
  },
  "images/map_05_YlOrRd_4.png": {
    "map_nums": "05",
    "scale_name": "YlOrRd",
    "orientation_code": "4"
  },
  "images/map_05_OrRd_1.png": {
    "map_nums": "05",
    "scale_name": "OrRd",
    "orientation_code": "1"
  },
  "images/map_05_OrRd_2.png": {
    "map_nums": "05",
    "scale_name": "OrRd",
    "orientation_code": "2"
  },
  "images/map_05_OrRd_3.png": {
    "map_nums": "05",
    "scale_name": "OrRd",
    "orientation_code": "3"
  },
  "images/map_05_OrRd_4.png": {
    "map_nums": "05",
    "scale_name": "OrRd",
    "orientation_code": "4"
  },
  "images/map_05_PuRd_1.png": {
    "map_nums": "05",
    "scale_name": "PuRd",
    "orientation_code": "1"
  },
  "images/map_05_PuRd_2.png": {
    "map_nums": "05",
    "scale_name": "PuRd",
    "orientation_code": "2"
  },
  "images/map_05_PuRd_3.png": {
    "map_nums": "05",
    "scale_name": "PuRd",
    "orientation_code": "3"
  },
  "images/map_05_PuRd_4.png": {
    "map_nums": "05",
    "scale_name": "PuRd",
    "orientation_code": "4"
  },
  "images/map_05_RdPu_1.png": {
    "map_nums": "05",
    "scale_name": "RdPu",
    "orientation_code": "1"
  },
  "images/map_05_RdPu_2.png": {
    "map_nums": "05",
    "scale_name": "RdPu",
    "orientation_code": "2"
  },
  "images/map_05_RdPu_3.png": {
    "map_nums": "05",
    "scale_name": "RdPu",
    "orientation_code": "3"
  },
  "images/map_05_RdPu_4.png": {
    "map_nums": "05",
    "scale_name": "RdPu",
    "orientation_code": "4"
  },
  "images/map_05_BuPu_1.png": {
    "map_nums": "05",
    "scale_name": "BuPu",
    "orientation_code": "1"
  },
  "images/map_05_BuPu_2.png": {
    "map_nums": "05",
    "scale_name": "BuPu",
    "orientation_code": "2"
  },
  "images/map_05_BuPu_3.png": {
    "map_nums": "05",
    "scale_name": "BuPu",
    "orientation_code": "3"
  },
  "images/map_05_BuPu_4.png": {
    "map_nums": "05",
    "scale_name": "BuPu",
    "orientation_code": "4"
  },
  "images/map_05_GnBu_1.png": {
    "map_nums": "05",
    "scale_name": "GnBu",
    "orientation_code": "1"
  },
  "images/map_05_GnBu_2.png": {
    "map_nums": "05",
    "scale_name": "GnBu",
    "orientation_code": "2"
  },
  "images/map_05_GnBu_3.png": {
    "map_nums": "05",
    "scale_name": "GnBu",
    "orientation_code": "3"
  },
  "images/map_05_GnBu_4.png": {
    "map_nums": "05",
    "scale_name": "GnBu",
    "orientation_code": "4"
  },
  "images/map_05_PuBu_1.png": {
    "map_nums": "05",
    "scale_name": "PuBu",
    "orientation_code": "1"
  },
  "images/map_05_PuBu_2.png": {
    "map_nums": "05",
    "scale_name": "PuBu",
    "orientation_code": "2"
  },
  "images/map_05_PuBu_3.png": {
    "map_nums": "05",
    "scale_name": "PuBu",
    "orientation_code": "3"
  },
  "images/map_05_PuBu_4.png": {
    "map_nums": "05",
    "scale_name": "PuBu",
    "orientation_code": "4"
  },
  "images/map_05_YlGnBu_1.png": {
    "map_nums": "05",
    "scale_name": "YlGnBu",
    "orientation_code": "1"
  },
  "images/map_05_YlGnBu_2.png": {
    "map_nums": "05",
    "scale_name": "YlGnBu",
    "orientation_code": "2"
  },
  "images/map_05_YlGnBu_3.png": {
    "map_nums": "05",
    "scale_name": "YlGnBu",
    "orientation_code": "3"
  },
  "images/map_05_YlGnBu_4.png": {
    "map_nums": "05",
    "scale_name": "YlGnBu",
    "orientation_code": "4"
  },
  "images/map_05_PuBuGn_1.png": {
    "map_nums": "05",
    "scale_name": "PuBuGn",
    "orientation_code": "1"
  },
  "images/map_05_PuBuGn_2.png": {
    "map_nums": "05",
    "scale_name": "PuBuGn",
    "orientation_code": "2"
  },
  "images/map_05_PuBuGn_3.png": {
    "map_nums": "05",
    "scale_name": "PuBuGn",
    "orientation_code": "3"
  },
  "images/map_05_PuBuGn_4.png": {
    "map_nums": "05",
    "scale_name": "PuBuGn",
    "orientation_code": "4"
  },
  "images/map_05_BuGn_1.png": {
    "map_nums": "05",
    "scale_name": "BuGn",
    "orientation_code": "1"
  },
  "images/map_05_BuGn_2.png": {
    "map_nums": "05",
    "scale_name": "BuGn",
    "orientation_code": "2"
  },
  "images/map_05_BuGn_3.png": {
    "map_nums": "05",
    "scale_name": "BuGn",
    "orientation_code": "3"
  },
  "images/map_05_BuGn_4.png": {
    "map_nums": "05",
    "scale_name": "BuGn",
    "orientation_code": "4"
  },
  "images/map_05_YlGn_1.png": {
    "map_nums": "05",
    "scale_name": "YlGn",
    "orientation_code": "1"
  },
  "images/map_05_YlGn_2.png": {
    "map_nums": "05",
    "scale_name": "YlGn",
    "orientation_code": "2"
  },
  "images/map_05_YlGn_3.png": {
    "map_nums": "05",
    "scale_name": "YlGn",
    "orientation_code": "3"
  },
  "images/map_05_YlGn_4.png": {
    "map_nums": "05",
    "scale_name": "YlGn",
    "orientation_code": "4"
  },
  "images/map_05_PiYG_1.png": {
    "map_nums": "05",
    "scale_name": "PiYG",
    "orientation_code": "1"
  },
  "images/map_05_PiYG_2.png": {
    "map_nums": "05",
    "scale_name": "PiYG",
    "orientation_code": "2"
  },
  "images/map_05_PiYG_3.png": {
    "map_nums": "05",
    "scale_name": "PiYG",
    "orientation_code": "3"
  },
  "images/map_05_PiYG_4.png": {
    "map_nums": "05",
    "scale_name": "PiYG",
    "orientation_code": "4"
  },
  "images/map_05_PRGn_1.png": {
    "map_nums": "05",
    "scale_name": "PRGn",
    "orientation_code": "1"
  },
  "images/map_05_PRGn_2.png": {
    "map_nums": "05",
    "scale_name": "PRGn",
    "orientation_code": "2"
  },
  "images/map_05_PRGn_3.png": {
    "map_nums": "05",
    "scale_name": "PRGn",
    "orientation_code": "3"
  },
  "images/map_05_PRGn_4.png": {
    "map_nums": "05",
    "scale_name": "PRGn",
    "orientation_code": "4"
  },
  "images/map_05_BrBG_1.png": {
    "map_nums": "05",
    "scale_name": "BrBG",
    "orientation_code": "1"
  },
  "images/map_05_BrBG_2.png": {
    "map_nums": "05",
    "scale_name": "BrBG",
    "orientation_code": "2"
  },
  "images/map_05_BrBG_3.png": {
    "map_nums": "05",
    "scale_name": "BrBG",
    "orientation_code": "3"
  },
  "images/map_05_BrBG_4.png": {
    "map_nums": "05",
    "scale_name": "BrBG",
    "orientation_code": "4"
  },
  "images/map_05_PuOr_1.png": {
    "map_nums": "05",
    "scale_name": "PuOr",
    "orientation_code": "1"
  },
  "images/map_05_PuOr_2.png": {
    "map_nums": "05",
    "scale_name": "PuOr",
    "orientation_code": "2"
  },
  "images/map_05_PuOr_3.png": {
    "map_nums": "05",
    "scale_name": "PuOr",
    "orientation_code": "3"
  },
  "images/map_05_PuOr_4.png": {
    "map_nums": "05",
    "scale_name": "PuOr",
    "orientation_code": "4"
  },
  "images/map_05_RdGy_1.png": {
    "map_nums": "05",
    "scale_name": "RdGy",
    "orientation_code": "1"
  },
  "images/map_05_RdGy_2.png": {
    "map_nums": "05",
    "scale_name": "RdGy",
    "orientation_code": "2"
  },
  "images/map_05_RdGy_3.png": {
    "map_nums": "05",
    "scale_name": "RdGy",
    "orientation_code": "3"
  },
  "images/map_05_RdGy_4.png": {
    "map_nums": "05",
    "scale_name": "RdGy",
    "orientation_code": "4"
  },
  "images/map_05_RdBu_1.png": {
    "map_nums": "05",
    "scale_name": "RdBu",
    "orientation_code": "1"
  },
  "images/map_05_RdBu_2.png": {
    "map_nums": "05",
    "scale_name": "RdBu",
    "orientation_code": "2"
  },
  "images/map_05_RdBu_3.png": {
    "map_nums": "05",
    "scale_name": "RdBu",
    "orientation_code": "3"
  },
  "images/map_05_RdBu_4.png": {
    "map_nums": "05",
    "scale_name": "RdBu",
    "orientation_code": "4"
  },
  "images/map_05_RdYlBu_1.png": {
    "map_nums": "05",
    "scale_name": "RdYlBu",
    "orientation_code": "1"
  },
  "images/map_05_RdYlBu_2.png": {
    "map_nums": "05",
    "scale_name": "RdYlBu",
    "orientation_code": "2"
  },
  "images/map_05_RdYlBu_3.png": {
    "map_nums": "05",
    "scale_name": "RdYlBu",
    "orientation_code": "3"
  },
  "images/map_05_RdYlBu_4.png": {
    "map_nums": "05",
    "scale_name": "RdYlBu",
    "orientation_code": "4"
  },
  "images/map_05_RdYlGn_1.png": {
    "map_nums": "05",
    "scale_name": "RdYlGn",
    "orientation_code": "1"
  },
  "images/map_05_RdYlGn_2.png": {
    "map_nums": "05",
    "scale_name": "RdYlGn",
    "orientation_code": "2"
  },
  "images/map_05_RdYlGn_3.png": {
    "map_nums": "05",
    "scale_name": "RdYlGn",
    "orientation_code": "3"
  },
  "images/map_05_RdYlGn_4.png": {
    "map_nums": "05",
    "scale_name": "RdYlGn",
    "orientation_code": "4"
  },
  "images/map_05_Spectral_1.png": {
    "map_nums": "05",
    "scale_name": "Spectral",
    "orientation_code": "1"
  },
  "images/map_05_Spectral_2.png": {
    "map_nums": "05",
    "scale_name": "Spectral",
    "orientation_code": "2"
  },
  "images/map_05_Spectral_3.png": {
    "map_nums": "05",
    "scale_name": "Spectral",
    "orientation_code": "3"
  },
  "images/map_05_Spectral_4.png": {
    "map_nums": "05",
    "scale_name": "Spectral",
    "orientation_code": "4"
  },
  "images/map_05_coolwarm_1.png": {
    "map_nums": "05",
    "scale_name": "coolwarm",
    "orientation_code": "1"
  },
  "images/map_05_coolwarm_2.png": {
    "map_nums": "05",
    "scale_name": "coolwarm",
    "orientation_code": "2"
  },
  "images/map_05_coolwarm_3.png": {
    "map_nums": "05",
    "scale_name": "coolwarm",
    "orientation_code": "3"
  },
  "images/map_05_coolwarm_4.png": {
    "map_nums": "05",
    "scale_name": "coolwarm",
    "orientation_code": "4"
  },
  "images/map_05_bwr_1.png": {
    "map_nums": "05",
    "scale_name": "bwr",
    "orientation_code": "1"
  },
  "images/map_05_bwr_2.png": {
    "map_nums": "05",
    "scale_name": "bwr",
    "orientation_code": "2"
  },
  "images/map_05_bwr_3.png": {
    "map_nums": "05",
    "scale_name": "bwr",
    "orientation_code": "3"
  },
  "images/map_05_bwr_4.png": {
    "map_nums": "05",
    "scale_name": "bwr",
    "orientation_code": "4"
  },
  "images/map_05_seismic_1.png": {
    "map_nums": "05",
    "scale_name": "seismic",
    "orientation_code": "1"
  },
  "images/map_05_seismic_2.png": {
    "map_nums": "05",
    "scale_name": "seismic",
    "orientation_code": "2"
  },
  "images/map_05_seismic_3.png": {
    "map_nums": "05",
    "scale_name": "seismic",
    "orientation_code": "3"
  },
  "images/map_05_seismic_4.png": {
    "map_nums": "05",
    "scale_name": "seismic",
    "orientation_code": "4"
  },
  "images/map_05_berlin_1.png": {
    "map_nums": "05",
    "scale_name": "berlin",
    "orientation_code": "1"
  },
  "images/map_05_berlin_2.png": {
    "map_nums": "05",
    "scale_name": "berlin",
    "orientation_code": "2"
  },
  "images/map_05_berlin_3.png": {
    "map_nums": "05",
    "scale_name": "berlin",
    "orientation_code": "3"
  },
  "images/map_05_berlin_4.png": {
    "map_nums": "05",
    "scale_name": "berlin",
    "orientation_code": "4"
  },
  "images/map_05_managua_1.png": {
    "map_nums": "05",
    "scale_name": "managua",
    "orientation_code": "1"
  },
  "images/map_05_managua_2.png": {
    "map_nums": "05",
    "scale_name": "managua",
    "orientation_code": "2"
  },
  "images/map_05_managua_3.png": {
    "map_nums": "05",
    "scale_name": "managua",
    "orientation_code": "3"
  },
  "images/map_05_managua_4.png": {
    "map_nums": "05",
    "scale_name": "managua",
    "orientation_code": "4"
  },
  "images/map_05_vanimo_1.png": {
    "map_nums": "05",
    "scale_name": "vanimo",
    "orientation_code": "1"
  },
  "images/map_05_vanimo_2.png": {
    "map_nums": "05",
    "scale_name": "vanimo",
    "orientation_code": "2"
  },
  "images/map_05_vanimo_3.png": {
    "map_nums": "05",
    "scale_name": "vanimo",
    "orientation_code": "3"
  },
  "images/map_05_vanimo_4.png": {
    "map_nums": "05",
    "scale_name": "vanimo",
    "orientation_code": "4"
  },
  "images/map_05_gist_earth_1.png": {
    "map_nums": "05",
    "scale_name": "gist",
    "orientation_code": "earth"
  },
  "images/map_05_gist_earth_2.png": {
    "map_nums": "05",
    "scale_name": "gist",
    "orientation_code": "earth"
  },
  "images/map_05_gist_earth_3.png": {
    "map_nums": "05",
    "scale_name": "gist",
    "orientation_code": "earth"
  },
  "images/map_05_gist_earth_4.png": {
    "map_nums": "05",
    "scale_name": "gist",
    "orientation_code": "earth"
  },
  "images/map_05_turbo_1.png": {
    "map_nums": "05",
    "scale_name": "turbo",
    "orientation_code": "1"
  },
  "images/map_05_turbo_2.png": {
    "map_nums": "05",
    "scale_name": "turbo",
    "orientation_code": "2"
  },
  "images/map_05_turbo_3.png": {
    "map_nums": "05",
    "scale_name": "turbo",
    "orientation_code": "3"
  },
  "images/map_05_turbo_4.png": {
    "map_nums": "05",
    "scale_name": "turbo",
    "orientation_code": "4"
  },
  "images/map_07_viridis_1.png": {
    "map_nums": "07",
    "scale_name": "viridis",
    "orientation_code": "1"
  },
  "images/map_07_viridis_2.png": {
    "map_nums": "07",
    "scale_name": "viridis",
    "orientation_code": "2"
  },
  "images/map_07_viridis_3.png": {
    "map_nums": "07",
    "scale_name": "viridis",
    "orientation_code": "3"
  },
  "images/map_07_viridis_4.png": {
    "map_nums": "07",
    "scale_name": "viridis",
    "orientation_code": "4"
  },
  "images/map_07_plasma_1.png": {
    "map_nums": "07",
    "scale_name": "plasma",
    "orientation_code": "1"
  },
  "images/map_07_plasma_2.png": {
    "map_nums": "07",
    "scale_name": "plasma",
    "orientation_code": "2"
  },
  "images/map_07_plasma_3.png": {
    "map_nums": "07",
    "scale_name": "plasma",
    "orientation_code": "3"
  },
  "images/map_07_plasma_4.png": {
    "map_nums": "07",
    "scale_name": "plasma",
    "orientation_code": "4"
  },
  "images/map_07_inferno_1.png": {
    "map_nums": "07",
    "scale_name": "inferno",
    "orientation_code": "1"
  },
  "images/map_07_inferno_2.png": {
    "map_nums": "07",
    "scale_name": "inferno",
    "orientation_code": "2"
  },
  "images/map_07_inferno_3.png": {
    "map_nums": "07",
    "scale_name": "inferno",
    "orientation_code": "3"
  },
  "images/map_07_inferno_4.png": {
    "map_nums": "07",
    "scale_name": "inferno",
    "orientation_code": "4"
  },
  "images/map_07_magma_1.png": {
    "map_nums": "07",
    "scale_name": "magma",
    "orientation_code": "1"
  },
  "images/map_07_magma_2.png": {
    "map_nums": "07",
    "scale_name": "magma",
    "orientation_code": "2"
  },
  "images/map_07_magma_3.png": {
    "map_nums": "07",
    "scale_name": "magma",
    "orientation_code": "3"
  },
  "images/map_07_magma_4.png": {
    "map_nums": "07",
    "scale_name": "magma",
    "orientation_code": "4"
  },
  "images/map_07_cividis_1.png": {
    "map_nums": "07",
    "scale_name": "cividis",
    "orientation_code": "1"
  },
  "images/map_07_cividis_2.png": {
    "map_nums": "07",
    "scale_name": "cividis",
    "orientation_code": "2"
  },
  "images/map_07_cividis_3.png": {
    "map_nums": "07",
    "scale_name": "cividis",
    "orientation_code": "3"
  },
  "images/map_07_cividis_4.png": {
    "map_nums": "07",
    "scale_name": "cividis",
    "orientation_code": "4"
  },
  "images/map_07_Greys_1.png": {
    "map_nums": "07",
    "scale_name": "Greys",
    "orientation_code": "1"
  },
  "images/map_07_Greys_2.png": {
    "map_nums": "07",
    "scale_name": "Greys",
    "orientation_code": "2"
  },
  "images/map_07_Greys_3.png": {
    "map_nums": "07",
    "scale_name": "Greys",
    "orientation_code": "3"
  },
  "images/map_07_Greys_4.png": {
    "map_nums": "07",
    "scale_name": "Greys",
    "orientation_code": "4"
  },
  "images/map_07_Purples_1.png": {
    "map_nums": "07",
    "scale_name": "Purples",
    "orientation_code": "1"
  },
  "images/map_07_Purples_2.png": {
    "map_nums": "07",
    "scale_name": "Purples",
    "orientation_code": "2"
  },
  "images/map_07_Purples_3.png": {
    "map_nums": "07",
    "scale_name": "Purples",
    "orientation_code": "3"
  },
  "images/map_07_Purples_4.png": {
    "map_nums": "07",
    "scale_name": "Purples",
    "orientation_code": "4"
  },
  "images/map_07_Blues_1.png": {
    "map_nums": "07",
    "scale_name": "Blues",
    "orientation_code": "1"
  },
  "images/map_07_Blues_2.png": {
    "map_nums": "07",
    "scale_name": "Blues",
    "orientation_code": "2"
  },
  "images/map_07_Blues_3.png": {
    "map_nums": "07",
    "scale_name": "Blues",
    "orientation_code": "3"
  },
  "images/map_07_Blues_4.png": {
    "map_nums": "07",
    "scale_name": "Blues",
    "orientation_code": "4"
  },
  "images/map_07_Greens_1.png": {
    "map_nums": "07",
    "scale_name": "Greens",
    "orientation_code": "1"
  },
  "images/map_07_Greens_2.png": {
    "map_nums": "07",
    "scale_name": "Greens",
    "orientation_code": "2"
  },
  "images/map_07_Greens_3.png": {
    "map_nums": "07",
    "scale_name": "Greens",
    "orientation_code": "3"
  },
  "images/map_07_Greens_4.png": {
    "map_nums": "07",
    "scale_name": "Greens",
    "orientation_code": "4"
  },
  "images/map_07_Oranges_1.png": {
    "map_nums": "07",
    "scale_name": "Oranges",
    "orientation_code": "1"
  },
  "images/map_07_Oranges_2.png": {
    "map_nums": "07",
    "scale_name": "Oranges",
    "orientation_code": "2"
  },
  "images/map_07_Oranges_3.png": {
    "map_nums": "07",
    "scale_name": "Oranges",
    "orientation_code": "3"
  },
  "images/map_07_Oranges_4.png": {
    "map_nums": "07",
    "scale_name": "Oranges",
    "orientation_code": "4"
  },
  "images/map_07_Reds_1.png": {
    "map_nums": "07",
    "scale_name": "Reds",
    "orientation_code": "1"
  },
  "images/map_07_Reds_2.png": {
    "map_nums": "07",
    "scale_name": "Reds",
    "orientation_code": "2"
  },
  "images/map_07_Reds_3.png": {
    "map_nums": "07",
    "scale_name": "Reds",
    "orientation_code": "3"
  },
  "images/map_07_Reds_4.png": {
    "map_nums": "07",
    "scale_name": "Reds",
    "orientation_code": "4"
  },
  "images/map_07_YlOrBr_1.png": {
    "map_nums": "07",
    "scale_name": "YlOrBr",
    "orientation_code": "1"
  },
  "images/map_07_YlOrBr_2.png": {
    "map_nums": "07",
    "scale_name": "YlOrBr",
    "orientation_code": "2"
  },
  "images/map_07_YlOrBr_3.png": {
    "map_nums": "07",
    "scale_name": "YlOrBr",
    "orientation_code": "3"
  },
  "images/map_07_YlOrBr_4.png": {
    "map_nums": "07",
    "scale_name": "YlOrBr",
    "orientation_code": "4"
  },
  "images/map_07_YlOrRd_1.png": {
    "map_nums": "07",
    "scale_name": "YlOrRd",
    "orientation_code": "1"
  },
  "images/map_07_YlOrRd_2.png": {
    "map_nums": "07",
    "scale_name": "YlOrRd",
    "orientation_code": "2"
  },
  "images/map_07_YlOrRd_3.png": {
    "map_nums": "07",
    "scale_name": "YlOrRd",
    "orientation_code": "3"
  },
  "images/map_07_YlOrRd_4.png": {
    "map_nums": "07",
    "scale_name": "YlOrRd",
    "orientation_code": "4"
  },
  "images/map_07_OrRd_1.png": {
    "map_nums": "07",
    "scale_name": "OrRd",
    "orientation_code": "1"
  },
  "images/map_07_OrRd_2.png": {
    "map_nums": "07",
    "scale_name": "OrRd",
    "orientation_code": "2"
  },
  "images/map_07_OrRd_3.png": {
    "map_nums": "07",
    "scale_name": "OrRd",
    "orientation_code": "3"
  },
  "images/map_07_OrRd_4.png": {
    "map_nums": "07",
    "scale_name": "OrRd",
    "orientation_code": "4"
  },
  "images/map_07_PuRd_1.png": {
    "map_nums": "07",
    "scale_name": "PuRd",
    "orientation_code": "1"
  },
  "images/map_07_PuRd_2.png": {
    "map_nums": "07",
    "scale_name": "PuRd",
    "orientation_code": "2"
  },
  "images/map_07_PuRd_3.png": {
    "map_nums": "07",
    "scale_name": "PuRd",
    "orientation_code": "3"
  },
  "images/map_07_PuRd_4.png": {
    "map_nums": "07",
    "scale_name": "PuRd",
    "orientation_code": "4"
  },
  "images/map_07_RdPu_1.png": {
    "map_nums": "07",
    "scale_name": "RdPu",
    "orientation_code": "1"
  },
  "images/map_07_RdPu_2.png": {
    "map_nums": "07",
    "scale_name": "RdPu",
    "orientation_code": "2"
  },
  "images/map_07_RdPu_3.png": {
    "map_nums": "07",
    "scale_name": "RdPu",
    "orientation_code": "3"
  },
  "images/map_07_RdPu_4.png": {
    "map_nums": "07",
    "scale_name": "RdPu",
    "orientation_code": "4"
  },
  "images/map_07_BuPu_1.png": {
    "map_nums": "07",
    "scale_name": "BuPu",
    "orientation_code": "1"
  },
  "images/map_07_BuPu_2.png": {
    "map_nums": "07",
    "scale_name": "BuPu",
    "orientation_code": "2"
  },
  "images/map_07_BuPu_3.png": {
    "map_nums": "07",
    "scale_name": "BuPu",
    "orientation_code": "3"
  },
  "images/map_07_BuPu_4.png": {
    "map_nums": "07",
    "scale_name": "BuPu",
    "orientation_code": "4"
  },
  "images/map_07_GnBu_1.png": {
    "map_nums": "07",
    "scale_name": "GnBu",
    "orientation_code": "1"
  },
  "images/map_07_GnBu_2.png": {
    "map_nums": "07",
    "scale_name": "GnBu",
    "orientation_code": "2"
  },
  "images/map_07_GnBu_3.png": {
    "map_nums": "07",
    "scale_name": "GnBu",
    "orientation_code": "3"
  },
  "images/map_07_GnBu_4.png": {
    "map_nums": "07",
    "scale_name": "GnBu",
    "orientation_code": "4"
  },
  "images/map_07_PuBu_1.png": {
    "map_nums": "07",
    "scale_name": "PuBu",
    "orientation_code": "1"
  },
  "images/map_07_PuBu_2.png": {
    "map_nums": "07",
    "scale_name": "PuBu",
    "orientation_code": "2"
  },
  "images/map_07_PuBu_3.png": {
    "map_nums": "07",
    "scale_name": "PuBu",
    "orientation_code": "3"
  },
  "images/map_07_PuBu_4.png": {
    "map_nums": "07",
    "scale_name": "PuBu",
    "orientation_code": "4"
  },
  "images/map_07_YlGnBu_1.png": {
    "map_nums": "07",
    "scale_name": "YlGnBu",
    "orientation_code": "1"
  },
  "images/map_07_YlGnBu_2.png": {
    "map_nums": "07",
    "scale_name": "YlGnBu",
    "orientation_code": "2"
  },
  "images/map_07_YlGnBu_3.png": {
    "map_nums": "07",
    "scale_name": "YlGnBu",
    "orientation_code": "3"
  },
  "images/map_07_YlGnBu_4.png": {
    "map_nums": "07",
    "scale_name": "YlGnBu",
    "orientation_code": "4"
  },
  "images/map_07_PuBuGn_1.png": {
    "map_nums": "07",
    "scale_name": "PuBuGn",
    "orientation_code": "1"
  },
  "images/map_07_PuBuGn_2.png": {
    "map_nums": "07",
    "scale_name": "PuBuGn",
    "orientation_code": "2"
  },
  "images/map_07_PuBuGn_3.png": {
    "map_nums": "07",
    "scale_name": "PuBuGn",
    "orientation_code": "3"
  },
  "images/map_07_PuBuGn_4.png": {
    "map_nums": "07",
    "scale_name": "PuBuGn",
    "orientation_code": "4"
  },
  "images/map_07_BuGn_1.png": {
    "map_nums": "07",
    "scale_name": "BuGn",
    "orientation_code": "1"
  },
  "images/map_07_BuGn_2.png": {
    "map_nums": "07",
    "scale_name": "BuGn",
    "orientation_code": "2"
  },
  "images/map_07_BuGn_3.png": {
    "map_nums": "07",
    "scale_name": "BuGn",
    "orientation_code": "3"
  },
  "images/map_07_BuGn_4.png": {
    "map_nums": "07",
    "scale_name": "BuGn",
    "orientation_code": "4"
  },
  "images/map_07_YlGn_1.png": {
    "map_nums": "07",
    "scale_name": "YlGn",
    "orientation_code": "1"
  },
  "images/map_07_YlGn_2.png": {
    "map_nums": "07",
    "scale_name": "YlGn",
    "orientation_code": "2"
  },
  "images/map_07_YlGn_3.png": {
    "map_nums": "07",
    "scale_name": "YlGn",
    "orientation_code": "3"
  },
  "images/map_07_YlGn_4.png": {
    "map_nums": "07",
    "scale_name": "YlGn",
    "orientation_code": "4"
  },
  "images/map_07_PiYG_1.png": {
    "map_nums": "07",
    "scale_name": "PiYG",
    "orientation_code": "1"
  },
  "images/map_07_PiYG_2.png": {
    "map_nums": "07",
    "scale_name": "PiYG",
    "orientation_code": "2"
  },
  "images/map_07_PiYG_3.png": {
    "map_nums": "07",
    "scale_name": "PiYG",
    "orientation_code": "3"
  },
  "images/map_07_PiYG_4.png": {
    "map_nums": "07",
    "scale_name": "PiYG",
    "orientation_code": "4"
  },
  "images/map_07_PRGn_1.png": {
    "map_nums": "07",
    "scale_name": "PRGn",
    "orientation_code": "1"
  },
  "images/map_07_PRGn_2.png": {
    "map_nums": "07",
    "scale_name": "PRGn",
    "orientation_code": "2"
  },
  "images/map_07_PRGn_3.png": {
    "map_nums": "07",
    "scale_name": "PRGn",
    "orientation_code": "3"
  },
  "images/map_07_PRGn_4.png": {
    "map_nums": "07",
    "scale_name": "PRGn",
    "orientation_code": "4"
  },
  "images/map_07_BrBG_1.png": {
    "map_nums": "07",
    "scale_name": "BrBG",
    "orientation_code": "1"
  },
  "images/map_07_BrBG_2.png": {
    "map_nums": "07",
    "scale_name": "BrBG",
    "orientation_code": "2"
  },
  "images/map_07_BrBG_3.png": {
    "map_nums": "07",
    "scale_name": "BrBG",
    "orientation_code": "3"
  },
  "images/map_07_BrBG_4.png": {
    "map_nums": "07",
    "scale_name": "BrBG",
    "orientation_code": "4"
  },
  "images/map_07_PuOr_1.png": {
    "map_nums": "07",
    "scale_name": "PuOr",
    "orientation_code": "1"
  },
  "images/map_07_PuOr_2.png": {
    "map_nums": "07",
    "scale_name": "PuOr",
    "orientation_code": "2"
  },
  "images/map_07_PuOr_3.png": {
    "map_nums": "07",
    "scale_name": "PuOr",
    "orientation_code": "3"
  },
  "images/map_07_PuOr_4.png": {
    "map_nums": "07",
    "scale_name": "PuOr",
    "orientation_code": "4"
  },
  "images/map_07_RdGy_1.png": {
    "map_nums": "07",
    "scale_name": "RdGy",
    "orientation_code": "1"
  },
  "images/map_07_RdGy_2.png": {
    "map_nums": "07",
    "scale_name": "RdGy",
    "orientation_code": "2"
  },
  "images/map_07_RdGy_3.png": {
    "map_nums": "07",
    "scale_name": "RdGy",
    "orientation_code": "3"
  },
  "images/map_07_RdGy_4.png": {
    "map_nums": "07",
    "scale_name": "RdGy",
    "orientation_code": "4"
  },
  "images/map_07_RdBu_1.png": {
    "map_nums": "07",
    "scale_name": "RdBu",
    "orientation_code": "1"
  },
  "images/map_07_RdBu_2.png": {
    "map_nums": "07",
    "scale_name": "RdBu",
    "orientation_code": "2"
  },
  "images/map_07_RdBu_3.png": {
    "map_nums": "07",
    "scale_name": "RdBu",
    "orientation_code": "3"
  },
  "images/map_07_RdBu_4.png": {
    "map_nums": "07",
    "scale_name": "RdBu",
    "orientation_code": "4"
  },
  "images/map_07_RdYlBu_1.png": {
    "map_nums": "07",
    "scale_name": "RdYlBu",
    "orientation_code": "1"
  },
  "images/map_07_RdYlBu_2.png": {
    "map_nums": "07",
    "scale_name": "RdYlBu",
    "orientation_code": "2"
  },
  "images/map_07_RdYlBu_3.png": {
    "map_nums": "07",
    "scale_name": "RdYlBu",
    "orientation_code": "3"
  },
  "images/map_07_RdYlBu_4.png": {
    "map_nums": "07",
    "scale_name": "RdYlBu",
    "orientation_code": "4"
  },
  "images/map_07_RdYlGn_1.png": {
    "map_nums": "07",
    "scale_name": "RdYlGn",
    "orientation_code": "1"
  },
  "images/map_07_RdYlGn_2.png": {
    "map_nums": "07",
    "scale_name": "RdYlGn",
    "orientation_code": "2"
  },
  "images/map_07_RdYlGn_3.png": {
    "map_nums": "07",
    "scale_name": "RdYlGn",
    "orientation_code": "3"
  },
  "images/map_07_RdYlGn_4.png": {
    "map_nums": "07",
    "scale_name": "RdYlGn",
    "orientation_code": "4"
  },
  "images/map_07_Spectral_1.png": {
    "map_nums": "07",
    "scale_name": "Spectral",
    "orientation_code": "1"
  },
  "images/map_07_Spectral_2.png": {
    "map_nums": "07",
    "scale_name": "Spectral",
    "orientation_code": "2"
  },
  "images/map_07_Spectral_3.png": {
    "map_nums": "07",
    "scale_name": "Spectral",
    "orientation_code": "3"
  },
  "images/map_07_Spectral_4.png": {
    "map_nums": "07",
    "scale_name": "Spectral",
    "orientation_code": "4"
  },
  "images/map_07_coolwarm_1.png": {
    "map_nums": "07",
    "scale_name": "coolwarm",
    "orientation_code": "1"
  },
  "images/map_07_coolwarm_2.png": {
    "map_nums": "07",
    "scale_name": "coolwarm",
    "orientation_code": "2"
  },
  "images/map_07_coolwarm_3.png": {
    "map_nums": "07",
    "scale_name": "coolwarm",
    "orientation_code": "3"
  },
  "images/map_07_coolwarm_4.png": {
    "map_nums": "07",
    "scale_name": "coolwarm",
    "orientation_code": "4"
  },
  "images/map_07_bwr_1.png": {
    "map_nums": "07",
    "scale_name": "bwr",
    "orientation_code": "1"
  },
  "images/map_07_bwr_2.png": {
    "map_nums": "07",
    "scale_name": "bwr",
    "orientation_code": "2"
  },
  "images/map_07_bwr_3.png": {
    "map_nums": "07",
    "scale_name": "bwr",
    "orientation_code": "3"
  },
  "images/map_07_bwr_4.png": {
    "map_nums": "07",
    "scale_name": "bwr",
    "orientation_code": "4"
  },
  "images/map_07_seismic_1.png": {
    "map_nums": "07",
    "scale_name": "seismic",
    "orientation_code": "1"
  },
  "images/map_07_seismic_2.png": {
    "map_nums": "07",
    "scale_name": "seismic",
    "orientation_code": "2"
  },
  "images/map_07_seismic_3.png": {
    "map_nums": "07",
    "scale_name": "seismic",
    "orientation_code": "3"
  },
  "images/map_07_seismic_4.png": {
    "map_nums": "07",
    "scale_name": "seismic",
    "orientation_code": "4"
  },
  "images/map_07_berlin_1.png": {
    "map_nums": "07",
    "scale_name": "berlin",
    "orientation_code": "1"
  },
  "images/map_07_berlin_2.png": {
    "map_nums": "07",
    "scale_name": "berlin",
    "orientation_code": "2"
  },
  "images/map_07_berlin_3.png": {
    "map_nums": "07",
    "scale_name": "berlin",
    "orientation_code": "3"
  },
  "images/map_07_berlin_4.png": {
    "map_nums": "07",
    "scale_name": "berlin",
    "orientation_code": "4"
  },
  "images/map_07_managua_1.png": {
    "map_nums": "07",
    "scale_name": "managua",
    "orientation_code": "1"
  },
  "images/map_07_managua_2.png": {
    "map_nums": "07",
    "scale_name": "managua",
    "orientation_code": "2"
  },
  "images/map_07_managua_3.png": {
    "map_nums": "07",
    "scale_name": "managua",
    "orientation_code": "3"
  },
  "images/map_07_managua_4.png": {
    "map_nums": "07",
    "scale_name": "managua",
    "orientation_code": "4"
  },
  "images/map_07_vanimo_1.png": {
    "map_nums": "07",
    "scale_name": "vanimo",
    "orientation_code": "1"
  },
  "images/map_07_vanimo_2.png": {
    "map_nums": "07",
    "scale_name": "vanimo",
    "orientation_code": "2"
  },
  "images/map_07_vanimo_3.png": {
    "map_nums": "07",
    "scale_name": "vanimo",
    "orientation_code": "3"
  },
  "images/map_07_vanimo_4.png": {
    "map_nums": "07",
    "scale_name": "vanimo",
    "orientation_code": "4"
  },
  "images/map_07_gist_earth_1.png": {
    "map_nums": "07",
    "scale_name": "gist",
    "orientation_code": "earth"
  },
  "images/map_07_gist_earth_2.png": {
    "map_nums": "07",
    "scale_name": "gist",
    "orientation_code": "earth"
  },
  "images/map_07_gist_earth_3.png": {
    "map_nums": "07",
    "scale_name": "gist",
    "orientation_code": "earth"
  },
  "images/map_07_gist_earth_4.png": {
    "map_nums": "07",
    "scale_name": "gist",
    "orientation_code": "earth"
  },
  "images/map_07_turbo_1.png": {
    "map_nums": "07",
    "scale_name": "turbo",
    "orientation_code": "1"
  },
  "images/map_07_turbo_2.png": {
    "map_nums": "07",
    "scale_name": "turbo",
    "orientation_code": "2"
  },
  "images/map_07_turbo_3.png": {
    "map_nums": "07",
    "scale_name": "turbo",
    "orientation_code": "3"
  },
  "images/map_07_turbo_4.png": {
    "map_nums": "07",
    "scale_name": "turbo",
    "orientation_code": "4"
  },
  "images/map_10_viridis_1.png": {
    "map_nums": "10",
    "scale_name": "viridis",
    "orientation_code": "1"
  },
  "images/map_10_viridis_2.png": {
    "map_nums": "10",
    "scale_name": "viridis",
    "orientation_code": "2"
  },
  "images/map_10_viridis_3.png": {
    "map_nums": "10",
    "scale_name": "viridis",
    "orientation_code": "3"
  },
  "images/map_10_viridis_4.png": {
    "map_nums": "10",
    "scale_name": "viridis",
    "orientation_code": "4"
  },
  "images/map_10_plasma_1.png": {
    "map_nums": "10",
    "scale_name": "plasma",
    "orientation_code": "1"
  },
  "images/map_10_plasma_2.png": {
    "map_nums": "10",
    "scale_name": "plasma",
    "orientation_code": "2"
  },
  "images/map_10_plasma_3.png": {
    "map_nums": "10",
    "scale_name": "plasma",
    "orientation_code": "3"
  },
  "images/map_10_plasma_4.png": {
    "map_nums": "10",
    "scale_name": "plasma",
    "orientation_code": "4"
  },
  "images/map_10_inferno_1.png": {
    "map_nums": "10",
    "scale_name": "inferno",
    "orientation_code": "1"
  },
  "images/map_10_inferno_2.png": {
    "map_nums": "10",
    "scale_name": "inferno",
    "orientation_code": "2"
  },
  "images/map_10_inferno_3.png": {
    "map_nums": "10",
    "scale_name": "inferno",
    "orientation_code": "3"
  },
  "images/map_10_inferno_4.png": {
    "map_nums": "10",
    "scale_name": "inferno",
    "orientation_code": "4"
  },
  "images/map_10_magma_1.png": {
    "map_nums": "10",
    "scale_name": "magma",
    "orientation_code": "1"
  },
  "images/map_10_magma_2.png": {
    "map_nums": "10",
    "scale_name": "magma",
    "orientation_code": "2"
  },
  "images/map_10_magma_3.png": {
    "map_nums": "10",
    "scale_name": "magma",
    "orientation_code": "3"
  },
  "images/map_10_magma_4.png": {
    "map_nums": "10",
    "scale_name": "magma",
    "orientation_code": "4"
  },
  "images/map_10_cividis_1.png": {
    "map_nums": "10",
    "scale_name": "cividis",
    "orientation_code": "1"
  },
  "images/map_10_cividis_2.png": {
    "map_nums": "10",
    "scale_name": "cividis",
    "orientation_code": "2"
  },
  "images/map_10_cividis_3.png": {
    "map_nums": "10",
    "scale_name": "cividis",
    "orientation_code": "3"
  },
  "images/map_10_cividis_4.png": {
    "map_nums": "10",
    "scale_name": "cividis",
    "orientation_code": "4"
  },
  "images/map_10_Greys_1.png": {
    "map_nums": "10",
    "scale_name": "Greys",
    "orientation_code": "1"
  },
  "images/map_10_Greys_2.png": {
    "map_nums": "10",
    "scale_name": "Greys",
    "orientation_code": "2"
  },
  "images/map_10_Greys_3.png": {
    "map_nums": "10",
    "scale_name": "Greys",
    "orientation_code": "3"
  },
  "images/map_10_Greys_4.png": {
    "map_nums": "10",
    "scale_name": "Greys",
    "orientation_code": "4"
  },
  "images/map_10_Purples_1.png": {
    "map_nums": "10",
    "scale_name": "Purples",
    "orientation_code": "1"
  },
  "images/map_10_Purples_2.png": {
    "map_nums": "10",
    "scale_name": "Purples",
    "orientation_code": "2"
  },
  "images/map_10_Purples_3.png": {
    "map_nums": "10",
    "scale_name": "Purples",
    "orientation_code": "3"
  },
  "images/map_10_Purples_4.png": {
    "map_nums": "10",
    "scale_name": "Purples",
    "orientation_code": "4"
  },
  "images/map_10_Blues_1.png": {
    "map_nums": "10",
    "scale_name": "Blues",
    "orientation_code": "1"
  },
  "images/map_10_Blues_2.png": {
    "map_nums": "10",
    "scale_name": "Blues",
    "orientation_code": "2"
  },
  "images/map_10_Blues_3.png": {
    "map_nums": "10",
    "scale_name": "Blues",
    "orientation_code": "3"
  },
  "images/map_10_Blues_4.png": {
    "map_nums": "10",
    "scale_name": "Blues",
    "orientation_code": "4"
  },
  "images/map_10_Greens_1.png": {
    "map_nums": "10",
    "scale_name": "Greens",
    "orientation_code": "1"
  },
  "images/map_10_Greens_2.png": {
    "map_nums": "10",
    "scale_name": "Greens",
    "orientation_code": "2"
  },
  "images/map_10_Greens_3.png": {
    "map_nums": "10",
    "scale_name": "Greens",
    "orientation_code": "3"
  },
  "images/map_10_Greens_4.png": {
    "map_nums": "10",
    "scale_name": "Greens",
    "orientation_code": "4"
  },
  "images/map_10_Oranges_1.png": {
    "map_nums": "10",
    "scale_name": "Oranges",
    "orientation_code": "1"
  },
  "images/map_10_Oranges_2.png": {
    "map_nums": "10",
    "scale_name": "Oranges",
    "orientation_code": "2"
  },
  "images/map_10_Oranges_3.png": {
    "map_nums": "10",
    "scale_name": "Oranges",
    "orientation_code": "3"
  },
  "images/map_10_Oranges_4.png": {
    "map_nums": "10",
    "scale_name": "Oranges",
    "orientation_code": "4"
  },
  "images/map_10_Reds_1.png": {
    "map_nums": "10",
    "scale_name": "Reds",
    "orientation_code": "1"
  },
  "images/map_10_Reds_2.png": {
    "map_nums": "10",
    "scale_name": "Reds",
    "orientation_code": "2"
  },
  "images/map_10_Reds_3.png": {
    "map_nums": "10",
    "scale_name": "Reds",
    "orientation_code": "3"
  },
  "images/map_10_Reds_4.png": {
    "map_nums": "10",
    "scale_name": "Reds",
    "orientation_code": "4"
  },
  "images/map_10_YlOrBr_1.png": {
    "map_nums": "10",
    "scale_name": "YlOrBr",
    "orientation_code": "1"
  },
  "images/map_10_YlOrBr_2.png": {
    "map_nums": "10",
    "scale_name": "YlOrBr",
    "orientation_code": "2"
  },
  "images/map_10_YlOrBr_3.png": {
    "map_nums": "10",
    "scale_name": "YlOrBr",
    "orientation_code": "3"
  },
  "images/map_10_YlOrBr_4.png": {
    "map_nums": "10",
    "scale_name": "YlOrBr",
    "orientation_code": "4"
  },
  "images/map_10_YlOrRd_1.png": {
    "map_nums": "10",
    "scale_name": "YlOrRd",
    "orientation_code": "1"
  },
  "images/map_10_YlOrRd_2.png": {
    "map_nums": "10",
    "scale_name": "YlOrRd",
    "orientation_code": "2"
  },
  "images/map_10_YlOrRd_3.png": {
    "map_nums": "10",
    "scale_name": "YlOrRd",
    "orientation_code": "3"
  },
  "images/map_10_YlOrRd_4.png": {
    "map_nums": "10",
    "scale_name": "YlOrRd",
    "orientation_code": "4"
  },
  "images/map_10_OrRd_1.png": {
    "map_nums": "10",
    "scale_name": "OrRd",
    "orientation_code": "1"
  },
  "images/map_10_OrRd_2.png": {
    "map_nums": "10",
    "scale_name": "OrRd",
    "orientation_code": "2"
  },
  "images/map_10_OrRd_3.png": {
    "map_nums": "10",
    "scale_name": "OrRd",
    "orientation_code": "3"
  },
  "images/map_10_OrRd_4.png": {
    "map_nums": "10",
    "scale_name": "OrRd",
    "orientation_code": "4"
  },
  "images/map_10_PuRd_1.png": {
    "map_nums": "10",
    "scale_name": "PuRd",
    "orientation_code": "1"
  },
  "images/map_10_PuRd_2.png": {
    "map_nums": "10",
    "scale_name": "PuRd",
    "orientation_code": "2"
  },
  "images/map_10_PuRd_3.png": {
    "map_nums": "10",
    "scale_name": "PuRd",
    "orientation_code": "3"
  },
  "images/map_10_PuRd_4.png": {
    "map_nums": "10",
    "scale_name": "PuRd",
    "orientation_code": "4"
  },
  "images/map_10_RdPu_1.png": {
    "map_nums": "10",
    "scale_name": "RdPu",
    "orientation_code": "1"
  },
  "images/map_10_RdPu_2.png": {
    "map_nums": "10",
    "scale_name": "RdPu",
    "orientation_code": "2"
  },
  "images/map_10_RdPu_3.png": {
    "map_nums": "10",
    "scale_name": "RdPu",
    "orientation_code": "3"
  },
  "images/map_10_RdPu_4.png": {
    "map_nums": "10",
    "scale_name": "RdPu",
    "orientation_code": "4"
  },
  "images/map_10_BuPu_1.png": {
    "map_nums": "10",
    "scale_name": "BuPu",
    "orientation_code": "1"
  },
  "images/map_10_BuPu_2.png": {
    "map_nums": "10",
    "scale_name": "BuPu",
    "orientation_code": "2"
  },
  "images/map_10_BuPu_3.png": {
    "map_nums": "10",
    "scale_name": "BuPu",
    "orientation_code": "3"
  },
  "images/map_10_BuPu_4.png": {
    "map_nums": "10",
    "scale_name": "BuPu",
    "orientation_code": "4"
  },
  "images/map_10_GnBu_1.png": {
    "map_nums": "10",
    "scale_name": "GnBu",
    "orientation_code": "1"
  },
  "images/map_10_GnBu_2.png": {
    "map_nums": "10",
    "scale_name": "GnBu",
    "orientation_code": "2"
  },
  "images/map_10_GnBu_3.png": {
    "map_nums": "10",
    "scale_name": "GnBu",
    "orientation_code": "3"
  },
  "images/map_10_GnBu_4.png": {
    "map_nums": "10",
    "scale_name": "GnBu",
    "orientation_code": "4"
  },
  "images/map_10_PuBu_1.png": {
    "map_nums": "10",
    "scale_name": "PuBu",
    "orientation_code": "1"
  },
  "images/map_10_PuBu_2.png": {
    "map_nums": "10",
    "scale_name": "PuBu",
    "orientation_code": "2"
  },
  "images/map_10_PuBu_3.png": {
    "map_nums": "10",
    "scale_name": "PuBu",
    "orientation_code": "3"
  },
  "images/map_10_PuBu_4.png": {
    "map_nums": "10",
    "scale_name": "PuBu",
    "orientation_code": "4"
  },
  "images/map_10_YlGnBu_1.png": {
    "map_nums": "10",
    "scale_name": "YlGnBu",
    "orientation_code": "1"
  },
  "images/map_10_YlGnBu_2.png": {
    "map_nums": "10",
    "scale_name": "YlGnBu",
    "orientation_code": "2"
  },
  "images/map_10_YlGnBu_3.png": {
    "map_nums": "10",
    "scale_name": "YlGnBu",
    "orientation_code": "3"
  },
  "images/map_10_YlGnBu_4.png": {
    "map_nums": "10",
    "scale_name": "YlGnBu",
    "orientation_code": "4"
  },
  "images/map_10_PuBuGn_1.png": {
    "map_nums": "10",
    "scale_name": "PuBuGn",
    "orientation_code": "1"
  },
  "images/map_10_PuBuGn_2.png": {
    "map_nums": "10",
    "scale_name": "PuBuGn",
    "orientation_code": "2"
  },
  "images/map_10_PuBuGn_3.png": {
    "map_nums": "10",
    "scale_name": "PuBuGn",
    "orientation_code": "3"
  },
  "images/map_10_PuBuGn_4.png": {
    "map_nums": "10",
    "scale_name": "PuBuGn",
    "orientation_code": "4"
  },
  "images/map_10_BuGn_1.png": {
    "map_nums": "10",
    "scale_name": "BuGn",
    "orientation_code": "1"
  },
  "images/map_10_BuGn_2.png": {
    "map_nums": "10",
    "scale_name": "BuGn",
    "orientation_code": "2"
  },
  "images/map_10_BuGn_3.png": {
    "map_nums": "10",
    "scale_name": "BuGn",
    "orientation_code": "3"
  },
  "images/map_10_BuGn_4.png": {
    "map_nums": "10",
    "scale_name": "BuGn",
    "orientation_code": "4"
  },
  "images/map_10_YlGn_1.png": {
    "map_nums": "10",
    "scale_name": "YlGn",
    "orientation_code": "1"
  },
  "images/map_10_YlGn_2.png": {
    "map_nums": "10",
    "scale_name": "YlGn",
    "orientation_code": "2"
  },
  "images/map_10_YlGn_3.png": {
    "map_nums": "10",
    "scale_name": "YlGn",
    "orientation_code": "3"
  },
  "images/map_10_YlGn_4.png": {
    "map_nums": "10",
    "scale_name": "YlGn",
    "orientation_code": "4"
  },
  "images/map_10_PiYG_1.png": {
    "map_nums": "10",
    "scale_name": "PiYG",
    "orientation_code": "1"
  },
  "images/map_10_PiYG_2.png": {
    "map_nums": "10",
    "scale_name": "PiYG",
    "orientation_code": "2"
  },
  "images/map_10_PiYG_3.png": {
    "map_nums": "10",
    "scale_name": "PiYG",
    "orientation_code": "3"
  },
  "images/map_10_PiYG_4.png": {
    "map_nums": "10",
    "scale_name": "PiYG",
    "orientation_code": "4"
  },
  "images/map_10_PRGn_1.png": {
    "map_nums": "10",
    "scale_name": "PRGn",
    "orientation_code": "1"
  },
  "images/map_10_PRGn_2.png": {
    "map_nums": "10",
    "scale_name": "PRGn",
    "orientation_code": "2"
  },
  "images/map_10_PRGn_3.png": {
    "map_nums": "10",
    "scale_name": "PRGn",
    "orientation_code": "3"
  },
  "images/map_10_PRGn_4.png": {
    "map_nums": "10",
    "scale_name": "PRGn",
    "orientation_code": "4"
  },
  "images/map_10_BrBG_1.png": {
    "map_nums": "10",
    "scale_name": "BrBG",
    "orientation_code": "1"
  },
  "images/map_10_BrBG_2.png": {
    "map_nums": "10",
    "scale_name": "BrBG",
    "orientation_code": "2"
  },
  "images/map_10_BrBG_3.png": {
    "map_nums": "10",
    "scale_name": "BrBG",
    "orientation_code": "3"
  },
  "images/map_10_BrBG_4.png": {
    "map_nums": "10",
    "scale_name": "BrBG",
    "orientation_code": "4"
  },
  "images/map_10_PuOr_1.png": {
    "map_nums": "10",
    "scale_name": "PuOr",
    "orientation_code": "1"
  },
  "images/map_10_PuOr_2.png": {
    "map_nums": "10",
    "scale_name": "PuOr",
    "orientation_code": "2"
  },
  "images/map_10_PuOr_3.png": {
    "map_nums": "10",
    "scale_name": "PuOr",
    "orientation_code": "3"
  },
  "images/map_10_PuOr_4.png": {
    "map_nums": "10",
    "scale_name": "PuOr",
    "orientation_code": "4"
  },
  "images/map_10_RdGy_1.png": {
    "map_nums": "10",
    "scale_name": "RdGy",
    "orientation_code": "1"
  },
  "images/map_10_RdGy_2.png": {
    "map_nums": "10",
    "scale_name": "RdGy",
    "orientation_code": "2"
  },
  "images/map_10_RdGy_3.png": {
    "map_nums": "10",
    "scale_name": "RdGy",
    "orientation_code": "3"
  },
  "images/map_10_RdGy_4.png": {
    "map_nums": "10",
    "scale_name": "RdGy",
    "orientation_code": "4"
  },
  "images/map_10_RdBu_1.png": {
    "map_nums": "10",
    "scale_name": "RdBu",
    "orientation_code": "1"
  },
  "images/map_10_RdBu_2.png": {
    "map_nums": "10",
    "scale_name": "RdBu",
    "orientation_code": "2"
  },
  "images/map_10_RdBu_3.png": {
    "map_nums": "10",
    "scale_name": "RdBu",
    "orientation_code": "3"
  },
  "images/map_10_RdBu_4.png": {
    "map_nums": "10",
    "scale_name": "RdBu",
    "orientation_code": "4"
  },
  "images/map_10_RdYlBu_1.png": {
    "map_nums": "10",
    "scale_name": "RdYlBu",
    "orientation_code": "1"
  },
  "images/map_10_RdYlBu_2.png": {
    "map_nums": "10",
    "scale_name": "RdYlBu",
    "orientation_code": "2"
  },
  "images/map_10_RdYlBu_3.png": {
    "map_nums": "10",
    "scale_name": "RdYlBu",
    "orientation_code": "3"
  },
  "images/map_10_RdYlBu_4.png": {
    "map_nums": "10",
    "scale_name": "RdYlBu",
    "orientation_code": "4"
  },
  "images/map_10_RdYlGn_1.png": {
    "map_nums": "10",
    "scale_name": "RdYlGn",
    "orientation_code": "1"
  },
  "images/map_10_RdYlGn_2.png": {
    "map_nums": "10",
    "scale_name": "RdYlGn",
    "orientation_code": "2"
  },
  "images/map_10_RdYlGn_3.png": {
    "map_nums": "10",
    "scale_name": "RdYlGn",
    "orientation_code": "3"
  },
  "images/map_10_RdYlGn_4.png": {
    "map_nums": "10",
    "scale_name": "RdYlGn",
    "orientation_code": "4"
  },
  "images/map_10_Spectral_1.png": {
    "map_nums": "10",
    "scale_name": "Spectral",
    "orientation_code": "1"
  },
  "images/map_10_Spectral_2.png": {
    "map_nums": "10",
    "scale_name": "Spectral",
    "orientation_code": "2"
  },
  "images/map_10_Spectral_3.png": {
    "map_nums": "10",
    "scale_name": "Spectral",
    "orientation_code": "3"
  },
  "images/map_10_Spectral_4.png": {
    "map_nums": "10",
    "scale_name": "Spectral",
    "orientation_code": "4"
  },
  "images/map_10_coolwarm_1.png": {
    "map_nums": "10",
    "scale_name": "coolwarm",
    "orientation_code": "1"
  },
  "images/map_10_coolwarm_2.png": {
    "map_nums": "10",
    "scale_name": "coolwarm",
    "orientation_code": "2"
  },
  "images/map_10_coolwarm_3.png": {
    "map_nums": "10",
    "scale_name": "coolwarm",
    "orientation_code": "3"
  },
  "images/map_10_coolwarm_4.png": {
    "map_nums": "10",
    "scale_name": "coolwarm",
    "orientation_code": "4"
  },
  "images/map_10_bwr_1.png": {
    "map_nums": "10",
    "scale_name": "bwr",
    "orientation_code": "1"
  },
  "images/map_10_bwr_2.png": {
    "map_nums": "10",
    "scale_name": "bwr",
    "orientation_code": "2"
  },
  "images/map_10_bwr_3.png": {
    "map_nums": "10",
    "scale_name": "bwr",
    "orientation_code": "3"
  },
  "images/map_10_bwr_4.png": {
    "map_nums": "10",
    "scale_name": "bwr",
    "orientation_code": "4"
  },
  "images/map_10_seismic_1.png": {
    "map_nums": "10",
    "scale_name": "seismic",
    "orientation_code": "1"
  },
  "images/map_10_seismic_2.png": {
    "map_nums": "10",
    "scale_name": "seismic",
    "orientation_code": "2"
  },
  "images/map_10_seismic_3.png": {
    "map_nums": "10",
    "scale_name": "seismic",
    "orientation_code": "3"
  },
  "images/map_10_seismic_4.png": {
    "map_nums": "10",
    "scale_name": "seismic",
    "orientation_code": "4"
  },
  "images/map_10_berlin_1.png": {
    "map_nums": "10",
    "scale_name": "berlin",
    "orientation_code": "1"
  },
  "images/map_10_berlin_2.png": {
    "map_nums": "10",
    "scale_name": "berlin",
    "orientation_code": "2"
  },
  "images/map_10_berlin_3.png": {
    "map_nums": "10",
    "scale_name": "berlin",
    "orientation_code": "3"
  },
  "images/map_10_berlin_4.png": {
    "map_nums": "10",
    "scale_name": "berlin",
    "orientation_code": "4"
  },
  "images/map_10_managua_1.png": {
    "map_nums": "10",
    "scale_name": "managua",
    "orientation_code": "1"
  },
  "images/map_10_managua_2.png": {
    "map_nums": "10",
    "scale_name": "managua",
    "orientation_code": "2"
  },
  "images/map_10_managua_3.png": {
    "map_nums": "10",
    "scale_name": "managua",
    "orientation_code": "3"
  },
  "images/map_10_managua_4.png": {
    "map_nums": "10",
    "scale_name": "managua",
    "orientation_code": "4"
  },
  "images/map_10_vanimo_1.png": {
    "map_nums": "10",
    "scale_name": "vanimo",
    "orientation_code": "1"
  },
  "images/map_10_vanimo_2.png": {
    "map_nums": "10",
    "scale_name": "vanimo",
    "orientation_code": "2"
  },
  "images/map_10_vanimo_3.png": {
    "map_nums": "10",
    "scale_name": "vanimo",
    "orientation_code": "3"
  },
  "images/map_10_vanimo_4.png": {
    "map_nums": "10",
    "scale_name": "vanimo",
    "orientation_code": "4"
  },
  "images/map_10_gist_earth_1.png": {
    "map_nums": "10",
    "scale_name": "gist",
    "orientation_code": "earth"
  },
  "images/map_10_gist_earth_2.png": {
    "map_nums": "10",
    "scale_name": "gist",
    "orientation_code": "earth"
  },
  "images/map_10_gist_earth_3.png": {
    "map_nums": "10",
    "scale_name": "gist",
    "orientation_code": "earth"
  },
  "images/map_10_gist_earth_4.png": {
    "map_nums": "10",
    "scale_name": "gist",
    "orientation_code": "earth"
  },
  "images/map_10_turbo_1.png": {
    "map_nums": "10",
    "scale_name": "turbo",
    "orientation_code": "1"
  },
  "images/map_10_turbo_2.png": {
    "map_nums": "10",
    "scale_name": "turbo",
    "orientation_code": "2"
  },
  "images/map_10_turbo_3.png": {
    "map_nums": "10",
    "scale_name": "turbo",
    "orientation_code": "3"
  },
  "images/map_10_turbo_4.png": {
    "map_nums": "10",
    "scale_name": "turbo",
    "orientation_code": "4"
  },
  "images/map_12_viridis_1.png": {
    "map_nums": "12",
    "scale_name": "viridis",
    "orientation_code": "1"
  },
  "images/map_12_viridis_2.png": {
    "map_nums": "12",
    "scale_name": "viridis",
    "orientation_code": "2"
  },
  "images/map_12_viridis_3.png": {
    "map_nums": "12",
    "scale_name": "viridis",
    "orientation_code": "3"
  },
  "images/map_12_viridis_4.png": {
    "map_nums": "12",
    "scale_name": "viridis",
    "orientation_code": "4"
  },
  "images/map_12_plasma_1.png": {
    "map_nums": "12",
    "scale_name": "plasma",
    "orientation_code": "1"
  },
  "images/map_12_plasma_2.png": {
    "map_nums": "12",
    "scale_name": "plasma",
    "orientation_code": "2"
  },
  "images/map_12_plasma_3.png": {
    "map_nums": "12",
    "scale_name": "plasma",
    "orientation_code": "3"
  },
  "images/map_12_plasma_4.png": {
    "map_nums": "12",
    "scale_name": "plasma",
    "orientation_code": "4"
  },
  "images/map_12_inferno_1.png": {
    "map_nums": "12",
    "scale_name": "inferno",
    "orientation_code": "1"
  },
  "images/map_12_inferno_2.png": {
    "map_nums": "12",
    "scale_name": "inferno",
    "orientation_code": "2"
  },
  "images/map_12_inferno_3.png": {
    "map_nums": "12",
    "scale_name": "inferno",
    "orientation_code": "3"
  },
  "images/map_12_inferno_4.png": {
    "map_nums": "12",
    "scale_name": "inferno",
    "orientation_code": "4"
  },
  "images/map_12_magma_1.png": {
    "map_nums": "12",
    "scale_name": "magma",
    "orientation_code": "1"
  },
  "images/map_12_magma_2.png": {
    "map_nums": "12",
    "scale_name": "magma",
    "orientation_code": "2"
  },
  "images/map_12_magma_3.png": {
    "map_nums": "12",
    "scale_name": "magma",
    "orientation_code": "3"
  },
  "images/map_12_magma_4.png": {
    "map_nums": "12",
    "scale_name": "magma",
    "orientation_code": "4"
  },
  "images/map_12_cividis_1.png": {
    "map_nums": "12",
    "scale_name": "cividis",
    "orientation_code": "1"
  },
  "images/map_12_cividis_2.png": {
    "map_nums": "12",
    "scale_name": "cividis",
    "orientation_code": "2"
  },
  "images/map_12_cividis_3.png": {
    "map_nums": "12",
    "scale_name": "cividis",
    "orientation_code": "3"
  },
  "images/map_12_cividis_4.png": {
    "map_nums": "12",
    "scale_name": "cividis",
    "orientation_code": "4"
  },
  "images/map_12_Greys_1.png": {
    "map_nums": "12",
    "scale_name": "Greys",
    "orientation_code": "1"
  },
  "images/map_12_Greys_2.png": {
    "map_nums": "12",
    "scale_name": "Greys",
    "orientation_code": "2"
  },
  "images/map_12_Greys_3.png": {
    "map_nums": "12",
    "scale_name": "Greys",
    "orientation_code": "3"
  },
  "images/map_12_Greys_4.png": {
    "map_nums": "12",
    "scale_name": "Greys",
    "orientation_code": "4"
  },
  "images/map_12_Purples_1.png": {
    "map_nums": "12",
    "scale_name": "Purples",
    "orientation_code": "1"
  },
  "images/map_12_Purples_2.png": {
    "map_nums": "12",
    "scale_name": "Purples",
    "orientation_code": "2"
  },
  "images/map_12_Purples_3.png": {
    "map_nums": "12",
    "scale_name": "Purples",
    "orientation_code": "3"
  },
  "images/map_12_Purples_4.png": {
    "map_nums": "12",
    "scale_name": "Purples",
    "orientation_code": "4"
  },
  "images/map_12_Blues_1.png": {
    "map_nums": "12",
    "scale_name": "Blues",
    "orientation_code": "1"
  },
  "images/map_12_Blues_2.png": {
    "map_nums": "12",
    "scale_name": "Blues",
    "orientation_code": "2"
  },
  "images/map_12_Blues_3.png": {
    "map_nums": "12",
    "scale_name": "Blues",
    "orientation_code": "3"
  },
  "images/map_12_Blues_4.png": {
    "map_nums": "12",
    "scale_name": "Blues",
    "orientation_code": "4"
  },
  "images/map_12_Greens_1.png": {
    "map_nums": "12",
    "scale_name": "Greens",
    "orientation_code": "1"
  },
  "images/map_12_Greens_2.png": {
    "map_nums": "12",
    "scale_name": "Greens",
    "orientation_code": "2"
  },
  "images/map_12_Greens_3.png": {
    "map_nums": "12",
    "scale_name": "Greens",
    "orientation_code": "3"
  },
  "images/map_12_Greens_4.png": {
    "map_nums": "12",
    "scale_name": "Greens",
    "orientation_code": "4"
  },
  "images/map_12_Oranges_1.png": {
    "map_nums": "12",
    "scale_name": "Oranges",
    "orientation_code": "1"
  },
  "images/map_12_Oranges_2.png": {
    "map_nums": "12",
    "scale_name": "Oranges",
    "orientation_code": "2"
  },
  "images/map_12_Oranges_3.png": {
    "map_nums": "12",
    "scale_name": "Oranges",
    "orientation_code": "3"
  },
  "images/map_12_Oranges_4.png": {
    "map_nums": "12",
    "scale_name": "Oranges",
    "orientation_code": "4"
  },
  "images/map_12_Reds_1.png": {
    "map_nums": "12",
    "scale_name": "Reds",
    "orientation_code": "1"
  },
  "images/map_12_Reds_2.png": {
    "map_nums": "12",
    "scale_name": "Reds",
    "orientation_code": "2"
  },
  "images/map_12_Reds_3.png": {
    "map_nums": "12",
    "scale_name": "Reds",
    "orientation_code": "3"
  },
  "images/map_12_Reds_4.png": {
    "map_nums": "12",
    "scale_name": "Reds",
    "orientation_code": "4"
  },
  "images/map_12_YlOrBr_1.png": {
    "map_nums": "12",
    "scale_name": "YlOrBr",
    "orientation_code": "1"
  },
  "images/map_12_YlOrBr_2.png": {
    "map_nums": "12",
    "scale_name": "YlOrBr",
    "orientation_code": "2"
  },
  "images/map_12_YlOrBr_3.png": {
    "map_nums": "12",
    "scale_name": "YlOrBr",
    "orientation_code": "3"
  },
  "images/map_12_YlOrBr_4.png": {
    "map_nums": "12",
    "scale_name": "YlOrBr",
    "orientation_code": "4"
  },
  "images/map_12_YlOrRd_1.png": {
    "map_nums": "12",
    "scale_name": "YlOrRd",
    "orientation_code": "1"
  },
  "images/map_12_YlOrRd_2.png": {
    "map_nums": "12",
    "scale_name": "YlOrRd",
    "orientation_code": "2"
  },
  "images/map_12_YlOrRd_3.png": {
    "map_nums": "12",
    "scale_name": "YlOrRd",
    "orientation_code": "3"
  },
  "images/map_12_YlOrRd_4.png": {
    "map_nums": "12",
    "scale_name": "YlOrRd",
    "orientation_code": "4"
  },
  "images/map_12_OrRd_1.png": {
    "map_nums": "12",
    "scale_name": "OrRd",
    "orientation_code": "1"
  },
  "images/map_12_OrRd_2.png": {
    "map_nums": "12",
    "scale_name": "OrRd",
    "orientation_code": "2"
  },
  "images/map_12_OrRd_3.png": {
    "map_nums": "12",
    "scale_name": "OrRd",
    "orientation_code": "3"
  },
  "images/map_12_OrRd_4.png": {
    "map_nums": "12",
    "scale_name": "OrRd",
    "orientation_code": "4"
  },
  "images/map_12_PuRd_1.png": {
    "map_nums": "12",
    "scale_name": "PuRd",
    "orientation_code": "1"
  },
  "images/map_12_PuRd_2.png": {
    "map_nums": "12",
    "scale_name": "PuRd",
    "orientation_code": "2"
  },
  "images/map_12_PuRd_3.png": {
    "map_nums": "12",
    "scale_name": "PuRd",
    "orientation_code": "3"
  },
  "images/map_12_PuRd_4.png": {
    "map_nums": "12",
    "scale_name": "PuRd",
    "orientation_code": "4"
  },
  "images/map_12_RdPu_1.png": {
    "map_nums": "12",
    "scale_name": "RdPu",
    "orientation_code": "1"
  },
  "images/map_12_RdPu_2.png": {
    "map_nums": "12",
    "scale_name": "RdPu",
    "orientation_code": "2"
  },
  "images/map_12_RdPu_3.png": {
    "map_nums": "12",
    "scale_name": "RdPu",
    "orientation_code": "3"
  },
  "images/map_12_RdPu_4.png": {
    "map_nums": "12",
    "scale_name": "RdPu",
    "orientation_code": "4"
  },
  "images/map_12_BuPu_1.png": {
    "map_nums": "12",
    "scale_name": "BuPu",
    "orientation_code": "1"
  },
  "images/map_12_BuPu_2.png": {
    "map_nums": "12",
    "scale_name": "BuPu",
    "orientation_code": "2"
  },
  "images/map_12_BuPu_3.png": {
    "map_nums": "12",
    "scale_name": "BuPu",
    "orientation_code": "3"
  },
  "images/map_12_BuPu_4.png": {
    "map_nums": "12",
    "scale_name": "BuPu",
    "orientation_code": "4"
  },
  "images/map_12_GnBu_1.png": {
    "map_nums": "12",
    "scale_name": "GnBu",
    "orientation_code": "1"
  },
  "images/map_12_GnBu_2.png": {
    "map_nums": "12",
    "scale_name": "GnBu",
    "orientation_code": "2"
  },
  "images/map_12_GnBu_3.png": {
    "map_nums": "12",
    "scale_name": "GnBu",
    "orientation_code": "3"
  },
  "images/map_12_GnBu_4.png": {
    "map_nums": "12",
    "scale_name": "GnBu",
    "orientation_code": "4"
  },
  "images/map_12_PuBu_1.png": {
    "map_nums": "12",
    "scale_name": "PuBu",
    "orientation_code": "1"
  },
  "images/map_12_PuBu_2.png": {
    "map_nums": "12",
    "scale_name": "PuBu",
    "orientation_code": "2"
  },
  "images/map_12_PuBu_3.png": {
    "map_nums": "12",
    "scale_name": "PuBu",
    "orientation_code": "3"
  },
  "images/map_12_PuBu_4.png": {
    "map_nums": "12",
    "scale_name": "PuBu",
    "orientation_code": "4"
  },
  "images/map_12_YlGnBu_1.png": {
    "map_nums": "12",
    "scale_name": "YlGnBu",
    "orientation_code": "1"
  },
  "images/map_12_YlGnBu_2.png": {
    "map_nums": "12",
    "scale_name": "YlGnBu",
    "orientation_code": "2"
  },
  "images/map_12_YlGnBu_3.png": {
    "map_nums": "12",
    "scale_name": "YlGnBu",
    "orientation_code": "3"
  },
  "images/map_12_YlGnBu_4.png": {
    "map_nums": "12",
    "scale_name": "YlGnBu",
    "orientation_code": "4"
  },
  "images/map_12_PuBuGn_1.png": {
    "map_nums": "12",
    "scale_name": "PuBuGn",
    "orientation_code": "1"
  },
  "images/map_12_PuBuGn_2.png": {
    "map_nums": "12",
    "scale_name": "PuBuGn",
    "orientation_code": "2"
  },
  "images/map_12_PuBuGn_3.png": {
    "map_nums": "12",
    "scale_name": "PuBuGn",
    "orientation_code": "3"
  },
  "images/map_12_PuBuGn_4.png": {
    "map_nums": "12",
    "scale_name": "PuBuGn",
    "orientation_code": "4"
  },
  "images/map_12_BuGn_1.png": {
    "map_nums": "12",
    "scale_name": "BuGn",
    "orientation_code": "1"
  },
  "images/map_12_BuGn_2.png": {
    "map_nums": "12",
    "scale_name": "BuGn",
    "orientation_code": "2"
  },
  "images/map_12_BuGn_3.png": {
    "map_nums": "12",
    "scale_name": "BuGn",
    "orientation_code": "3"
  },
  "images/map_12_BuGn_4.png": {
    "map_nums": "12",
    "scale_name": "BuGn",
    "orientation_code": "4"
  },
  "images/map_12_YlGn_1.png": {
    "map_nums": "12",
    "scale_name": "YlGn",
    "orientation_code": "1"
  },
  "images/map_12_YlGn_2.png": {
    "map_nums": "12",
    "scale_name": "YlGn",
    "orientation_code": "2"
  },
  "images/map_12_YlGn_3.png": {
    "map_nums": "12",
    "scale_name": "YlGn",
    "orientation_code": "3"
  },
  "images/map_12_YlGn_4.png": {
    "map_nums": "12",
    "scale_name": "YlGn",
    "orientation_code": "4"
  },
  "images/map_12_PiYG_1.png": {
    "map_nums": "12",
    "scale_name": "PiYG",
    "orientation_code": "1"
  },
  "images/map_12_PiYG_2.png": {
    "map_nums": "12",
    "scale_name": "PiYG",
    "orientation_code": "2"
  },
  "images/map_12_PiYG_3.png": {
    "map_nums": "12",
    "scale_name": "PiYG",
    "orientation_code": "3"
  },
  "images/map_12_PiYG_4.png": {
    "map_nums": "12",
    "scale_name": "PiYG",
    "orientation_code": "4"
  },
  "images/map_12_PRGn_1.png": {
    "map_nums": "12",
    "scale_name": "PRGn",
    "orientation_code": "1"
  },
  "images/map_12_PRGn_2.png": {
    "map_nums": "12",
    "scale_name": "PRGn",
    "orientation_code": "2"
  },
  "images/map_12_PRGn_3.png": {
    "map_nums": "12",
    "scale_name": "PRGn",
    "orientation_code": "3"
  },
  "images/map_12_PRGn_4.png": {
    "map_nums": "12",
    "scale_name": "PRGn",
    "orientation_code": "4"
  },
  "images/map_12_BrBG_1.png": {
    "map_nums": "12",
    "scale_name": "BrBG",
    "orientation_code": "1"
  },
  "images/map_12_BrBG_2.png": {
    "map_nums": "12",
    "scale_name": "BrBG",
    "orientation_code": "2"
  },
  "images/map_12_BrBG_3.png": {
    "map_nums": "12",
    "scale_name": "BrBG",
    "orientation_code": "3"
  },
  "images/map_12_BrBG_4.png": {
    "map_nums": "12",
    "scale_name": "BrBG",
    "orientation_code": "4"
  },
  "images/map_12_PuOr_1.png": {
    "map_nums": "12",
    "scale_name": "PuOr",
    "orientation_code": "1"
  },
  "images/map_12_PuOr_2.png": {
    "map_nums": "12",
    "scale_name": "PuOr",
    "orientation_code": "2"
  },
  "images/map_12_PuOr_3.png": {
    "map_nums": "12",
    "scale_name": "PuOr",
    "orientation_code": "3"
  },
  "images/map_12_PuOr_4.png": {
    "map_nums": "12",
    "scale_name": "PuOr",
    "orientation_code": "4"
  },
  "images/map_12_RdGy_1.png": {
    "map_nums": "12",
    "scale_name": "RdGy",
    "orientation_code": "1"
  },
  "images/map_12_RdGy_2.png": {
    "map_nums": "12",
    "scale_name": "RdGy",
    "orientation_code": "2"
  },
  "images/map_12_RdGy_3.png": {
    "map_nums": "12",
    "scale_name": "RdGy",
    "orientation_code": "3"
  },
  "images/map_12_RdGy_4.png": {
    "map_nums": "12",
    "scale_name": "RdGy",
    "orientation_code": "4"
  },
  "images/map_12_RdBu_1.png": {
    "map_nums": "12",
    "scale_name": "RdBu",
    "orientation_code": "1"
  },
  "images/map_12_RdBu_2.png": {
    "map_nums": "12",
    "scale_name": "RdBu",
    "orientation_code": "2"
  },
  "images/map_12_RdBu_3.png": {
    "map_nums": "12",
    "scale_name": "RdBu",
    "orientation_code": "3"
  },
  "images/map_12_RdBu_4.png": {
    "map_nums": "12",
    "scale_name": "RdBu",
    "orientation_code": "4"
  },
  "images/map_12_RdYlBu_1.png": {
    "map_nums": "12",
    "scale_name": "RdYlBu",
    "orientation_code": "1"
  },
  "images/map_12_RdYlBu_2.png": {
    "map_nums": "12",
    "scale_name": "RdYlBu",
    "orientation_code": "2"
  },
  "images/map_12_RdYlBu_3.png": {
    "map_nums": "12",
    "scale_name": "RdYlBu",
    "orientation_code": "3"
  },
  "images/map_12_RdYlBu_4.png": {
    "map_nums": "12",
    "scale_name": "RdYlBu",
    "orientation_code": "4"
  },
  "images/map_12_RdYlGn_1.png": {
    "map_nums": "12",
    "scale_name": "RdYlGn",
    "orientation_code": "1"
  },
  "images/map_12_RdYlGn_2.png": {
    "map_nums": "12",
    "scale_name": "RdYlGn",
    "orientation_code": "2"
  },
  "images/map_12_RdYlGn_3.png": {
    "map_nums": "12",
    "scale_name": "RdYlGn",
    "orientation_code": "3"
  },
  "images/map_12_RdYlGn_4.png": {
    "map_nums": "12",
    "scale_name": "RdYlGn",
    "orientation_code": "4"
  },
  "images/map_12_Spectral_1.png": {
    "map_nums": "12",
    "scale_name": "Spectral",
    "orientation_code": "1"
  },
  "images/map_12_Spectral_2.png": {
    "map_nums": "12",
    "scale_name": "Spectral",
    "orientation_code": "2"
  },
  "images/map_12_Spectral_3.png": {
    "map_nums": "12",
    "scale_name": "Spectral",
    "orientation_code": "3"
  },
  "images/map_12_Spectral_4.png": {
    "map_nums": "12",
    "scale_name": "Spectral",
    "orientation_code": "4"
  },
  "images/map_12_coolwarm_1.png": {
    "map_nums": "12",
    "scale_name": "coolwarm",
    "orientation_code": "1"
  },
  "images/map_12_coolwarm_2.png": {
    "map_nums": "12",
    "scale_name": "coolwarm",
    "orientation_code": "2"
  },
  "images/map_12_coolwarm_3.png": {
    "map_nums": "12",
    "scale_name": "coolwarm",
    "orientation_code": "3"
  },
  "images/map_12_coolwarm_4.png": {
    "map_nums": "12",
    "scale_name": "coolwarm",
    "orientation_code": "4"
  },
  "images/map_12_bwr_1.png": {
    "map_nums": "12",
    "scale_name": "bwr",
    "orientation_code": "1"
  },
  "images/map_12_bwr_2.png": {
    "map_nums": "12",
    "scale_name": "bwr",
    "orientation_code": "2"
  },
  "images/map_12_bwr_3.png": {
    "map_nums": "12",
    "scale_name": "bwr",
    "orientation_code": "3"
  },
  "images/map_12_bwr_4.png": {
    "map_nums": "12",
    "scale_name": "bwr",
    "orientation_code": "4"
  },
  "images/map_12_seismic_1.png": {
    "map_nums": "12",
    "scale_name": "seismic",
    "orientation_code": "1"
  },
  "images/map_12_seismic_2.png": {
    "map_nums": "12",
    "scale_name": "seismic",
    "orientation_code": "2"
  },
  "images/map_12_seismic_3.png": {
    "map_nums": "12",
    "scale_name": "seismic",
    "orientation_code": "3"
  },
  "images/map_12_seismic_4.png": {
    "map_nums": "12",
    "scale_name": "seismic",
    "orientation_code": "4"
  },
  "images/map_12_berlin_1.png": {
    "map_nums": "12",
    "scale_name": "berlin",
    "orientation_code": "1"
  },
  "images/map_12_berlin_2.png": {
    "map_nums": "12",
    "scale_name": "berlin",
    "orientation_code": "2"
  },
  "images/map_12_berlin_3.png": {
    "map_nums": "12",
    "scale_name": "berlin",
    "orientation_code": "3"
  },
  "images/map_12_berlin_4.png": {
    "map_nums": "12",
    "scale_name": "berlin",
    "orientation_code": "4"
  },
  "images/map_12_managua_1.png": {
    "map_nums": "12",
    "scale_name": "managua",
    "orientation_code": "1"
  },
  "images/map_12_managua_2.png": {
    "map_nums": "12",
    "scale_name": "managua",
    "orientation_code": "2"
  },
  "images/map_12_managua_3.png": {
    "map_nums": "12",
    "scale_name": "managua",
    "orientation_code": "3"
  },
  "images/map_12_managua_4.png": {
    "map_nums": "12",
    "scale_name": "managua",
    "orientation_code": "4"
  },
  "images/map_12_vanimo_1.png": {
    "map_nums": "12",
    "scale_name": "vanimo",
    "orientation_code": "1"
  },
  "images/map_12_vanimo_2.png": {
    "map_nums": "12",
    "scale_name": "vanimo",
    "orientation_code": "2"
  },
  "images/map_12_vanimo_3.png": {
    "map_nums": "12",
    "scale_name": "vanimo",
    "orientation_code": "3"
  },
  "images/map_12_vanimo_4.png": {
    "map_nums": "12",
    "scale_name": "vanimo",
    "orientation_code": "4"
  },
  "images/map_12_gist_earth_1.png": {
    "map_nums": "12",
    "scale_name": "gist",
    "orientation_code": "earth"
  },
  "images/map_12_gist_earth_2.png": {
    "map_nums": "12",
    "scale_name": "gist",
    "orientation_code": "earth"
  },
  "images/map_12_gist_earth_3.png": {
    "map_nums": "12",
    "scale_name": "gist",
    "orientation_code": "earth"
  },
  "images/map_12_gist_earth_4.png": {
    "map_nums": "12",
    "scale_name": "gist",
    "orientation_code": "earth"
  },
  "images/map_12_turbo_1.png": {
    "map_nums": "12",
    "scale_name": "turbo",
    "orientation_code": "1"
  },
  "images/map_12_turbo_2.png": {
    "map_nums": "12",
    "scale_name": "turbo",
    "orientation_code": "2"
  },
  "images/map_12_turbo_3.png": {
    "map_nums": "12",
    "scale_name": "turbo",
    "orientation_code": "3"
  },
  "images/map_12_turbo_4.png": {
    "map_nums": "12",
    "scale_name": "turbo",
    "orientation_code": "4"
  },
  "images/map_13_viridis_1.png": {
    "map_nums": "13",
    "scale_name": "viridis",
    "orientation_code": "1"
  },
  "images/map_13_viridis_2.png": {
    "map_nums": "13",
    "scale_name": "viridis",
    "orientation_code": "2"
  },
  "images/map_13_viridis_3.png": {
    "map_nums": "13",
    "scale_name": "viridis",
    "orientation_code": "3"
  },
  "images/map_13_viridis_4.png": {
    "map_nums": "13",
    "scale_name": "viridis",
    "orientation_code": "4"
  },
  "images/map_13_plasma_1.png": {
    "map_nums": "13",
    "scale_name": "plasma",
    "orientation_code": "1"
  },
  "images/map_13_plasma_2.png": {
    "map_nums": "13",
    "scale_name": "plasma",
    "orientation_code": "2"
  },
  "images/map_13_plasma_3.png": {
    "map_nums": "13",
    "scale_name": "plasma",
    "orientation_code": "3"
  },
  "images/map_13_plasma_4.png": {
    "map_nums": "13",
    "scale_name": "plasma",
    "orientation_code": "4"
  },
  "images/map_13_inferno_1.png": {
    "map_nums": "13",
    "scale_name": "inferno",
    "orientation_code": "1"
  },
  "images/map_13_inferno_2.png": {
    "map_nums": "13",
    "scale_name": "inferno",
    "orientation_code": "2"
  },
  "images/map_13_inferno_3.png": {
    "map_nums": "13",
    "scale_name": "inferno",
    "orientation_code": "3"
  },
  "images/map_13_inferno_4.png": {
    "map_nums": "13",
    "scale_name": "inferno",
    "orientation_code": "4"
  },
  "images/map_13_magma_1.png": {
    "map_nums": "13",
    "scale_name": "magma",
    "orientation_code": "1"
  },
  "images/map_13_magma_2.png": {
    "map_nums": "13",
    "scale_name": "magma",
    "orientation_code": "2"
  },
  "images/map_13_magma_3.png": {
    "map_nums": "13",
    "scale_name": "magma",
    "orientation_code": "3"
  },
  "images/map_13_magma_4.png": {
    "map_nums": "13",
    "scale_name": "magma",
    "orientation_code": "4"
  },
  "images/map_13_cividis_1.png": {
    "map_nums": "13",
    "scale_name": "cividis",
    "orientation_code": "1"
  },
  "images/map_13_cividis_2.png": {
    "map_nums": "13",
    "scale_name": "cividis",
    "orientation_code": "2"
  },
  "images/map_13_cividis_3.png": {
    "map_nums": "13",
    "scale_name": "cividis",
    "orientation_code": "3"
  },
  "images/map_13_cividis_4.png": {
    "map_nums": "13",
    "scale_name": "cividis",
    "orientation_code": "4"
  },
  "images/map_13_Greys_1.png": {
    "map_nums": "13",
    "scale_name": "Greys",
    "orientation_code": "1"
  },
  "images/map_13_Greys_2.png": {
    "map_nums": "13",
    "scale_name": "Greys",
    "orientation_code": "2"
  },
  "images/map_13_Greys_3.png": {
    "map_nums": "13",
    "scale_name": "Greys",
    "orientation_code": "3"
  },
  "images/map_13_Greys_4.png": {
    "map_nums": "13",
    "scale_name": "Greys",
    "orientation_code": "4"
  },
  "images/map_13_Purples_1.png": {
    "map_nums": "13",
    "scale_name": "Purples",
    "orientation_code": "1"
  },
  "images/map_13_Purples_2.png": {
    "map_nums": "13",
    "scale_name": "Purples",
    "orientation_code": "2"
  },
  "images/map_13_Purples_3.png": {
    "map_nums": "13",
    "scale_name": "Purples",
    "orientation_code": "3"
  },
  "images/map_13_Purples_4.png": {
    "map_nums": "13",
    "scale_name": "Purples",
    "orientation_code": "4"
  },
  "images/map_13_Blues_1.png": {
    "map_nums": "13",
    "scale_name": "Blues",
    "orientation_code": "1"
  },
  "images/map_13_Blues_2.png": {
    "map_nums": "13",
    "scale_name": "Blues",
    "orientation_code": "2"
  },
  "images/map_13_Blues_3.png": {
    "map_nums": "13",
    "scale_name": "Blues",
    "orientation_code": "3"
  },
  "images/map_13_Blues_4.png": {
    "map_nums": "13",
    "scale_name": "Blues",
    "orientation_code": "4"
  },
  "images/map_13_Greens_1.png": {
    "map_nums": "13",
    "scale_name": "Greens",
    "orientation_code": "1"
  },
  "images/map_13_Greens_2.png": {
    "map_nums": "13",
    "scale_name": "Greens",
    "orientation_code": "2"
  },
  "images/map_13_Greens_3.png": {
    "map_nums": "13",
    "scale_name": "Greens",
    "orientation_code": "3"
  },
  "images/map_13_Greens_4.png": {
    "map_nums": "13",
    "scale_name": "Greens",
    "orientation_code": "4"
  },
  "images/map_13_Oranges_1.png": {
    "map_nums": "13",
    "scale_name": "Oranges",
    "orientation_code": "1"
  },
  "images/map_13_Oranges_2.png": {
    "map_nums": "13",
    "scale_name": "Oranges",
    "orientation_code": "2"
  },
  "images/map_13_Oranges_3.png": {
    "map_nums": "13",
    "scale_name": "Oranges",
    "orientation_code": "3"
  },
  "images/map_13_Oranges_4.png": {
    "map_nums": "13",
    "scale_name": "Oranges",
    "orientation_code": "4"
  },
  "images/map_13_Reds_1.png": {
    "map_nums": "13",
    "scale_name": "Reds",
    "orientation_code": "1"
  },
  "images/map_13_Reds_2.png": {
    "map_nums": "13",
    "scale_name": "Reds",
    "orientation_code": "2"
  },
  "images/map_13_Reds_3.png": {
    "map_nums": "13",
    "scale_name": "Reds",
    "orientation_code": "3"
  },
  "images/map_13_Reds_4.png": {
    "map_nums": "13",
    "scale_name": "Reds",
    "orientation_code": "4"
  },
  "images/map_13_YlOrBr_1.png": {
    "map_nums": "13",
    "scale_name": "YlOrBr",
    "orientation_code": "1"
  },
  "images/map_13_YlOrBr_2.png": {
    "map_nums": "13",
    "scale_name": "YlOrBr",
    "orientation_code": "2"
  },
  "images/map_13_YlOrBr_3.png": {
    "map_nums": "13",
    "scale_name": "YlOrBr",
    "orientation_code": "3"
  },
  "images/map_13_YlOrBr_4.png": {
    "map_nums": "13",
    "scale_name": "YlOrBr",
    "orientation_code": "4"
  },
  "images/map_13_YlOrRd_1.png": {
    "map_nums": "13",
    "scale_name": "YlOrRd",
    "orientation_code": "1"
  },
  "images/map_13_YlOrRd_2.png": {
    "map_nums": "13",
    "scale_name": "YlOrRd",
    "orientation_code": "2"
  },
  "images/map_13_YlOrRd_3.png": {
    "map_nums": "13",
    "scale_name": "YlOrRd",
    "orientation_code": "3"
  },
  "images/map_13_YlOrRd_4.png": {
    "map_nums": "13",
    "scale_name": "YlOrRd",
    "orientation_code": "4"
  },
  "images/map_13_OrRd_1.png": {
    "map_nums": "13",
    "scale_name": "OrRd",
    "orientation_code": "1"
  },
  "images/map_13_OrRd_2.png": {
    "map_nums": "13",
    "scale_name": "OrRd",
    "orientation_code": "2"
  },
  "images/map_13_OrRd_3.png": {
    "map_nums": "13",
    "scale_name": "OrRd",
    "orientation_code": "3"
  },
  "images/map_13_OrRd_4.png": {
    "map_nums": "13",
    "scale_name": "OrRd",
    "orientation_code": "4"
  },
  "images/map_13_PuRd_1.png": {
    "map_nums": "13",
    "scale_name": "PuRd",
    "orientation_code": "1"
  },
  "images/map_13_PuRd_2.png": {
    "map_nums": "13",
    "scale_name": "PuRd",
    "orientation_code": "2"
  },
  "images/map_13_PuRd_3.png": {
    "map_nums": "13",
    "scale_name": "PuRd",
    "orientation_code": "3"
  },
  "images/map_13_PuRd_4.png": {
    "map_nums": "13",
    "scale_name": "PuRd",
    "orientation_code": "4"
  },
  "images/map_13_RdPu_1.png": {
    "map_nums": "13",
    "scale_name": "RdPu",
    "orientation_code": "1"
  },
  "images/map_13_RdPu_2.png": {
    "map_nums": "13",
    "scale_name": "RdPu",
    "orientation_code": "2"
  },
  "images/map_13_RdPu_3.png": {
    "map_nums": "13",
    "scale_name": "RdPu",
    "orientation_code": "3"
  },
  "images/map_13_RdPu_4.png": {
    "map_nums": "13",
    "scale_name": "RdPu",
    "orientation_code": "4"
  },
  "images/map_13_BuPu_1.png": {
    "map_nums": "13",
    "scale_name": "BuPu",
    "orientation_code": "1"
  },
  "images/map_13_BuPu_2.png": {
    "map_nums": "13",
    "scale_name": "BuPu",
    "orientation_code": "2"
  },
  "images/map_13_BuPu_3.png": {
    "map_nums": "13",
    "scale_name": "BuPu",
    "orientation_code": "3"
  },
  "images/map_13_BuPu_4.png": {
    "map_nums": "13",
    "scale_name": "BuPu",
    "orientation_code": "4"
  },
  "images/map_13_GnBu_1.png": {
    "map_nums": "13",
    "scale_name": "GnBu",
    "orientation_code": "1"
  },
  "images/map_13_GnBu_2.png": {
    "map_nums": "13",
    "scale_name": "GnBu",
    "orientation_code": "2"
  },
  "images/map_13_GnBu_3.png": {
    "map_nums": "13",
    "scale_name": "GnBu",
    "orientation_code": "3"
  },
  "images/map_13_GnBu_4.png": {
    "map_nums": "13",
    "scale_name": "GnBu",
    "orientation_code": "4"
  },
  "images/map_13_PuBu_1.png": {
    "map_nums": "13",
    "scale_name": "PuBu",
    "orientation_code": "1"
  },
  "images/map_13_PuBu_2.png": {
    "map_nums": "13",
    "scale_name": "PuBu",
    "orientation_code": "2"
  },
  "images/map_13_PuBu_3.png": {
    "map_nums": "13",
    "scale_name": "PuBu",
    "orientation_code": "3"
  },
  "images/map_13_PuBu_4.png": {
    "map_nums": "13",
    "scale_name": "PuBu",
    "orientation_code": "4"
  },
  "images/map_13_YlGnBu_1.png": {
    "map_nums": "13",
    "scale_name": "YlGnBu",
    "orientation_code": "1"
  },
  "images/map_13_YlGnBu_2.png": {
    "map_nums": "13",
    "scale_name": "YlGnBu",
    "orientation_code": "2"
  },
  "images/map_13_YlGnBu_3.png": {
    "map_nums": "13",
    "scale_name": "YlGnBu",
    "orientation_code": "3"
  },
  "images/map_13_YlGnBu_4.png": {
    "map_nums": "13",
    "scale_name": "YlGnBu",
    "orientation_code": "4"
  },
  "images/map_13_PuBuGn_1.png": {
    "map_nums": "13",
    "scale_name": "PuBuGn",
    "orientation_code": "1"
  },
  "images/map_13_PuBuGn_2.png": {
    "map_nums": "13",
    "scale_name": "PuBuGn",
    "orientation_code": "2"
  },
  "images/map_13_PuBuGn_3.png": {
    "map_nums": "13",
    "scale_name": "PuBuGn",
    "orientation_code": "3"
  },
  "images/map_13_PuBuGn_4.png": {
    "map_nums": "13",
    "scale_name": "PuBuGn",
    "orientation_code": "4"
  },
  "images/map_13_BuGn_1.png": {
    "map_nums": "13",
    "scale_name": "BuGn",
    "orientation_code": "1"
  },
  "images/map_13_BuGn_2.png": {
    "map_nums": "13",
    "scale_name": "BuGn",
    "orientation_code": "2"
  },
  "images/map_13_BuGn_3.png": {
    "map_nums": "13",
    "scale_name": "BuGn",
    "orientation_code": "3"
  },
  "images/map_13_BuGn_4.png": {
    "map_nums": "13",
    "scale_name": "BuGn",
    "orientation_code": "4"
  },
  "images/map_13_YlGn_1.png": {
    "map_nums": "13",
    "scale_name": "YlGn",
    "orientation_code": "1"
  },
  "images/map_13_YlGn_2.png": {
    "map_nums": "13",
    "scale_name": "YlGn",
    "orientation_code": "2"
  },
  "images/map_13_YlGn_3.png": {
    "map_nums": "13",
    "scale_name": "YlGn",
    "orientation_code": "3"
  },
  "images/map_13_YlGn_4.png": {
    "map_nums": "13",
    "scale_name": "YlGn",
    "orientation_code": "4"
  },
  "images/map_13_PiYG_1.png": {
    "map_nums": "13",
    "scale_name": "PiYG",
    "orientation_code": "1"
  },
  "images/map_13_PiYG_2.png": {
    "map_nums": "13",
    "scale_name": "PiYG",
    "orientation_code": "2"
  },
  "images/map_13_PiYG_3.png": {
    "map_nums": "13",
    "scale_name": "PiYG",
    "orientation_code": "3"
  },
  "images/map_13_PiYG_4.png": {
    "map_nums": "13",
    "scale_name": "PiYG",
    "orientation_code": "4"
  },
  "images/map_13_PRGn_1.png": {
    "map_nums": "13",
    "scale_name": "PRGn",
    "orientation_code": "1"
  },
  "images/map_13_PRGn_2.png": {
    "map_nums": "13",
    "scale_name": "PRGn",
    "orientation_code": "2"
  },
  "images/map_13_PRGn_3.png": {
    "map_nums": "13",
    "scale_name": "PRGn",
    "orientation_code": "3"
  },
  "images/map_13_PRGn_4.png": {
    "map_nums": "13",
    "scale_name": "PRGn",
    "orientation_code": "4"
  },
  "images/map_13_BrBG_1.png": {
    "map_nums": "13",
    "scale_name": "BrBG",
    "orientation_code": "1"
  },
  "images/map_13_BrBG_2.png": {
    "map_nums": "13",
    "scale_name": "BrBG",
    "orientation_code": "2"
  },
  "images/map_13_BrBG_3.png": {
    "map_nums": "13",
    "scale_name": "BrBG",
    "orientation_code": "3"
  },
  "images/map_13_BrBG_4.png": {
    "map_nums": "13",
    "scale_name": "BrBG",
    "orientation_code": "4"
  },
  "images/map_13_PuOr_1.png": {
    "map_nums": "13",
    "scale_name": "PuOr",
    "orientation_code": "1"
  },
  "images/map_13_PuOr_2.png": {
    "map_nums": "13",
    "scale_name": "PuOr",
    "orientation_code": "2"
  },
  "images/map_13_PuOr_3.png": {
    "map_nums": "13",
    "scale_name": "PuOr",
    "orientation_code": "3"
  },
  "images/map_13_PuOr_4.png": {
    "map_nums": "13",
    "scale_name": "PuOr",
    "orientation_code": "4"
  },
  "images/map_13_RdGy_1.png": {
    "map_nums": "13",
    "scale_name": "RdGy",
    "orientation_code": "1"
  },
  "images/map_13_RdGy_2.png": {
    "map_nums": "13",
    "scale_name": "RdGy",
    "orientation_code": "2"
  },
  "images/map_13_RdGy_3.png": {
    "map_nums": "13",
    "scale_name": "RdGy",
    "orientation_code": "3"
  },
  "images/map_13_RdGy_4.png": {
    "map_nums": "13",
    "scale_name": "RdGy",
    "orientation_code": "4"
  },
  "images/map_13_RdBu_1.png": {
    "map_nums": "13",
    "scale_name": "RdBu",
    "orientation_code": "1"
  },
  "images/map_13_RdBu_2.png": {
    "map_nums": "13",
    "scale_name": "RdBu",
    "orientation_code": "2"
  },
  "images/map_13_RdBu_3.png": {
    "map_nums": "13",
    "scale_name": "RdBu",
    "orientation_code": "3"
  },
  "images/map_13_RdBu_4.png": {
    "map_nums": "13",
    "scale_name": "RdBu",
    "orientation_code": "4"
  },
  "images/map_13_RdYlBu_1.png": {
    "map_nums": "13",
    "scale_name": "RdYlBu",
    "orientation_code": "1"
  },
  "images/map_13_RdYlBu_2.png": {
    "map_nums": "13",
    "scale_name": "RdYlBu",
    "orientation_code": "2"
  },
  "images/map_13_RdYlBu_3.png": {
    "map_nums": "13",
    "scale_name": "RdYlBu",
    "orientation_code": "3"
  },
  "images/map_13_RdYlBu_4.png": {
    "map_nums": "13",
    "scale_name": "RdYlBu",
    "orientation_code": "4"
  },
  "images/map_13_RdYlGn_1.png": {
    "map_nums": "13",
    "scale_name": "RdYlGn",
    "orientation_code": "1"
  },
  "images/map_13_RdYlGn_2.png": {
    "map_nums": "13",
    "scale_name": "RdYlGn",
    "orientation_code": "2"
  },
  "images/map_13_RdYlGn_3.png": {
    "map_nums": "13",
    "scale_name": "RdYlGn",
    "orientation_code": "3"
  },
  "images/map_13_RdYlGn_4.png": {
    "map_nums": "13",
    "scale_name": "RdYlGn",
    "orientation_code": "4"
  },
  "images/map_13_Spectral_1.png": {
    "map_nums": "13",
    "scale_name": "Spectral",
    "orientation_code": "1"
  },
  "images/map_13_Spectral_2.png": {
    "map_nums": "13",
    "scale_name": "Spectral",
    "orientation_code": "2"
  },
  "images/map_13_Spectral_3.png": {
    "map_nums": "13",
    "scale_name": "Spectral",
    "orientation_code": "3"
  },
  "images/map_13_Spectral_4.png": {
    "map_nums": "13",
    "scale_name": "Spectral",
    "orientation_code": "4"
  },
  "images/map_13_coolwarm_1.png": {
    "map_nums": "13",
    "scale_name": "coolwarm",
    "orientation_code": "1"
  },
  "images/map_13_coolwarm_2.png": {
    "map_nums": "13",
    "scale_name": "coolwarm",
    "orientation_code": "2"
  },
  "images/map_13_coolwarm_3.png": {
    "map_nums": "13",
    "scale_name": "coolwarm",
    "orientation_code": "3"
  },
  "images/map_13_coolwarm_4.png": {
    "map_nums": "13",
    "scale_name": "coolwarm",
    "orientation_code": "4"
  },
  "images/map_13_bwr_1.png": {
    "map_nums": "13",
    "scale_name": "bwr",
    "orientation_code": "1"
  },
  "images/map_13_bwr_2.png": {
    "map_nums": "13",
    "scale_name": "bwr",
    "orientation_code": "2"
  },
  "images/map_13_bwr_3.png": {
    "map_nums": "13",
    "scale_name": "bwr",
    "orientation_code": "3"
  },
  "images/map_13_bwr_4.png": {
    "map_nums": "13",
    "scale_name": "bwr",
    "orientation_code": "4"
  },
  "images/map_13_seismic_1.png": {
    "map_nums": "13",
    "scale_name": "seismic",
    "orientation_code": "1"
  },
  "images/map_13_seismic_2.png": {
    "map_nums": "13",
    "scale_name": "seismic",
    "orientation_code": "2"
  },
  "images/map_13_seismic_3.png": {
    "map_nums": "13",
    "scale_name": "seismic",
    "orientation_code": "3"
  },
  "images/map_13_seismic_4.png": {
    "map_nums": "13",
    "scale_name": "seismic",
    "orientation_code": "4"
  },
  "images/map_13_berlin_1.png": {
    "map_nums": "13",
    "scale_name": "berlin",
    "orientation_code": "1"
  },
  "images/map_13_berlin_2.png": {
    "map_nums": "13",
    "scale_name": "berlin",
    "orientation_code": "2"
  },
  "images/map_13_berlin_3.png": {
    "map_nums": "13",
    "scale_name": "berlin",
    "orientation_code": "3"
  },
  "images/map_13_berlin_4.png": {
    "map_nums": "13",
    "scale_name": "berlin",
    "orientation_code": "4"
  },
  "images/map_13_managua_1.png": {
    "map_nums": "13",
    "scale_name": "managua",
    "orientation_code": "1"
  },
  "images/map_13_managua_2.png": {
    "map_nums": "13",
    "scale_name": "managua",
    "orientation_code": "2"
  },
  "images/map_13_managua_3.png": {
    "map_nums": "13",
    "scale_name": "managua",
    "orientation_code": "3"
  },
  "images/map_13_managua_4.png": {
    "map_nums": "13",
    "scale_name": "managua",
    "orientation_code": "4"
  },
  "images/map_13_vanimo_1.png": {
    "map_nums": "13",
    "scale_name": "vanimo",
    "orientation_code": "1"
  },
  "images/map_13_vanimo_2.png": {
    "map_nums": "13",
    "scale_name": "vanimo",
    "orientation_code": "2"
  },
  "images/map_13_vanimo_3.png": {
    "map_nums": "13",
    "scale_name": "vanimo",
    "orientation_code": "3"
  },
  "images/map_13_vanimo_4.png": {
    "map_nums": "13",
    "scale_name": "vanimo",
    "orientation_code": "4"
  },
  "images/map_13_gist_earth_1.png": {
    "map_nums": "13",
    "scale_name": "gist",
    "orientation_code": "earth"
  },
  "images/map_13_gist_earth_2.png": {
    "map_nums": "13",
    "scale_name": "gist",
    "orientation_code": "earth"
  },
  "images/map_13_gist_earth_3.png": {
    "map_nums": "13",
    "scale_name": "gist",
    "orientation_code": "earth"
  },
  "images/map_13_gist_earth_4.png": {
    "map_nums": "13",
    "scale_name": "gist",
    "orientation_code": "earth"
  },
  "images/map_13_turbo_1.png": {
    "map_nums": "13",
    "scale_name": "turbo",
    "orientation_code": "1"
  },
  "images/map_13_turbo_2.png": {
    "map_nums": "13",
    "scale_name": "turbo",
    "orientation_code": "2"
  },
  "images/map_13_turbo_3.png": {
    "map_nums": "13",
    "scale_name": "turbo",
    "orientation_code": "3"
  },
  "images/map_13_turbo_4.png": {
    "map_nums": "13",
    "scale_name": "turbo",
    "orientation_code": "4"
  },
  "images/map_15_viridis_1.png": {
    "map_nums": "15",
    "scale_name": "viridis",
    "orientation_code": "1"
  },
  "images/map_15_viridis_2.png": {
    "map_nums": "15",
    "scale_name": "viridis",
    "orientation_code": "2"
  },
  "images/map_15_viridis_3.png": {
    "map_nums": "15",
    "scale_name": "viridis",
    "orientation_code": "3"
  },
  "images/map_15_viridis_4.png": {
    "map_nums": "15",
    "scale_name": "viridis",
    "orientation_code": "4"
  },
  "images/map_15_plasma_1.png": {
    "map_nums": "15",
    "scale_name": "plasma",
    "orientation_code": "1"
  },
  "images/map_15_plasma_2.png": {
    "map_nums": "15",
    "scale_name": "plasma",
    "orientation_code": "2"
  },
  "images/map_15_plasma_3.png": {
    "map_nums": "15",
    "scale_name": "plasma",
    "orientation_code": "3"
  },
  "images/map_15_plasma_4.png": {
    "map_nums": "15",
    "scale_name": "plasma",
    "orientation_code": "4"
  },
  "images/map_15_inferno_1.png": {
    "map_nums": "15",
    "scale_name": "inferno",
    "orientation_code": "1"
  },
  "images/map_15_inferno_2.png": {
    "map_nums": "15",
    "scale_name": "inferno",
    "orientation_code": "2"
  },
  "images/map_15_inferno_3.png": {
    "map_nums": "15",
    "scale_name": "inferno",
    "orientation_code": "3"
  },
  "images/map_15_inferno_4.png": {
    "map_nums": "15",
    "scale_name": "inferno",
    "orientation_code": "4"
  },
  "images/map_15_magma_1.png": {
    "map_nums": "15",
    "scale_name": "magma",
    "orientation_code": "1"
  },
  "images/map_15_magma_2.png": {
    "map_nums": "15",
    "scale_name": "magma",
    "orientation_code": "2"
  },
  "images/map_15_magma_3.png": {
    "map_nums": "15",
    "scale_name": "magma",
    "orientation_code": "3"
  },
  "images/map_15_magma_4.png": {
    "map_nums": "15",
    "scale_name": "magma",
    "orientation_code": "4"
  },
  "images/map_15_cividis_1.png": {
    "map_nums": "15",
    "scale_name": "cividis",
    "orientation_code": "1"
  },
  "images/map_15_cividis_2.png": {
    "map_nums": "15",
    "scale_name": "cividis",
    "orientation_code": "2"
  },
  "images/map_15_cividis_3.png": {
    "map_nums": "15",
    "scale_name": "cividis",
    "orientation_code": "3"
  },
  "images/map_15_cividis_4.png": {
    "map_nums": "15",
    "scale_name": "cividis",
    "orientation_code": "4"
  },
  "images/map_15_Greys_1.png": {
    "map_nums": "15",
    "scale_name": "Greys",
    "orientation_code": "1"
  },
  "images/map_15_Greys_2.png": {
    "map_nums": "15",
    "scale_name": "Greys",
    "orientation_code": "2"
  },
  "images/map_15_Greys_3.png": {
    "map_nums": "15",
    "scale_name": "Greys",
    "orientation_code": "3"
  },
  "images/map_15_Greys_4.png": {
    "map_nums": "15",
    "scale_name": "Greys",
    "orientation_code": "4"
  },
  "images/map_15_Purples_1.png": {
    "map_nums": "15",
    "scale_name": "Purples",
    "orientation_code": "1"
  },
  "images/map_15_Purples_2.png": {
    "map_nums": "15",
    "scale_name": "Purples",
    "orientation_code": "2"
  },
  "images/map_15_Purples_3.png": {
    "map_nums": "15",
    "scale_name": "Purples",
    "orientation_code": "3"
  },
  "images/map_15_Purples_4.png": {
    "map_nums": "15",
    "scale_name": "Purples",
    "orientation_code": "4"
  },
  "images/map_15_Blues_1.png": {
    "map_nums": "15",
    "scale_name": "Blues",
    "orientation_code": "1"
  },
  "images/map_15_Blues_2.png": {
    "map_nums": "15",
    "scale_name": "Blues",
    "orientation_code": "2"
  },
  "images/map_15_Blues_3.png": {
    "map_nums": "15",
    "scale_name": "Blues",
    "orientation_code": "3"
  },
  "images/map_15_Blues_4.png": {
    "map_nums": "15",
    "scale_name": "Blues",
    "orientation_code": "4"
  },
  "images/map_15_Greens_1.png": {
    "map_nums": "15",
    "scale_name": "Greens",
    "orientation_code": "1"
  },
  "images/map_15_Greens_2.png": {
    "map_nums": "15",
    "scale_name": "Greens",
    "orientation_code": "2"
  },
  "images/map_15_Greens_3.png": {
    "map_nums": "15",
    "scale_name": "Greens",
    "orientation_code": "3"
  },
  "images/map_15_Greens_4.png": {
    "map_nums": "15",
    "scale_name": "Greens",
    "orientation_code": "4"
  },
  "images/map_15_Oranges_1.png": {
    "map_nums": "15",
    "scale_name": "Oranges",
    "orientation_code": "1"
  },
  "images/map_15_Oranges_2.png": {
    "map_nums": "15",
    "scale_name": "Oranges",
    "orientation_code": "2"
  },
  "images/map_15_Oranges_3.png": {
    "map_nums": "15",
    "scale_name": "Oranges",
    "orientation_code": "3"
  },
  "images/map_15_Oranges_4.png": {
    "map_nums": "15",
    "scale_name": "Oranges",
    "orientation_code": "4"
  },
  "images/map_15_Reds_1.png": {
    "map_nums": "15",
    "scale_name": "Reds",
    "orientation_code": "1"
  },
  "images/map_15_Reds_2.png": {
    "map_nums": "15",
    "scale_name": "Reds",
    "orientation_code": "2"
  },
  "images/map_15_Reds_3.png": {
    "map_nums": "15",
    "scale_name": "Reds",
    "orientation_code": "3"
  },
  "images/map_15_Reds_4.png": {
    "map_nums": "15",
    "scale_name": "Reds",
    "orientation_code": "4"
  },
  "images/map_15_YlOrBr_1.png": {
    "map_nums": "15",
    "scale_name": "YlOrBr",
    "orientation_code": "1"
  },
  "images/map_15_YlOrBr_2.png": {
    "map_nums": "15",
    "scale_name": "YlOrBr",
    "orientation_code": "2"
  },
  "images/map_15_YlOrBr_3.png": {
    "map_nums": "15",
    "scale_name": "YlOrBr",
    "orientation_code": "3"
  },
  "images/map_15_YlOrBr_4.png": {
    "map_nums": "15",
    "scale_name": "YlOrBr",
    "orientation_code": "4"
  },
  "images/map_15_YlOrRd_1.png": {
    "map_nums": "15",
    "scale_name": "YlOrRd",
    "orientation_code": "1"
  },
  "images/map_15_YlOrRd_2.png": {
    "map_nums": "15",
    "scale_name": "YlOrRd",
    "orientation_code": "2"
  },
  "images/map_15_YlOrRd_3.png": {
    "map_nums": "15",
    "scale_name": "YlOrRd",
    "orientation_code": "3"
  },
  "images/map_15_YlOrRd_4.png": {
    "map_nums": "15",
    "scale_name": "YlOrRd",
    "orientation_code": "4"
  },
  "images/map_15_OrRd_1.png": {
    "map_nums": "15",
    "scale_name": "OrRd",
    "orientation_code": "1"
  },
  "images/map_15_OrRd_2.png": {
    "map_nums": "15",
    "scale_name": "OrRd",
    "orientation_code": "2"
  },
  "images/map_15_OrRd_3.png": {
    "map_nums": "15",
    "scale_name": "OrRd",
    "orientation_code": "3"
  },
  "images/map_15_OrRd_4.png": {
    "map_nums": "15",
    "scale_name": "OrRd",
    "orientation_code": "4"
  },
  "images/map_15_PuRd_1.png": {
    "map_nums": "15",
    "scale_name": "PuRd",
    "orientation_code": "1"
  },
  "images/map_15_PuRd_2.png": {
    "map_nums": "15",
    "scale_name": "PuRd",
    "orientation_code": "2"
  },
  "images/map_15_PuRd_3.png": {
    "map_nums": "15",
    "scale_name": "PuRd",
    "orientation_code": "3"
  },
  "images/map_15_PuRd_4.png": {
    "map_nums": "15",
    "scale_name": "PuRd",
    "orientation_code": "4"
  },
  "images/map_15_RdPu_1.png": {
    "map_nums": "15",
    "scale_name": "RdPu",
    "orientation_code": "1"
  },
  "images/map_15_RdPu_2.png": {
    "map_nums": "15",
    "scale_name": "RdPu",
    "orientation_code": "2"
  },
  "images/map_15_RdPu_3.png": {
    "map_nums": "15",
    "scale_name": "RdPu",
    "orientation_code": "3"
  },
  "images/map_15_RdPu_4.png": {
    "map_nums": "15",
    "scale_name": "RdPu",
    "orientation_code": "4"
  },
  "images/map_15_BuPu_1.png": {
    "map_nums": "15",
    "scale_name": "BuPu",
    "orientation_code": "1"
  },
  "images/map_15_BuPu_2.png": {
    "map_nums": "15",
    "scale_name": "BuPu",
    "orientation_code": "2"
  },
  "images/map_15_BuPu_3.png": {
    "map_nums": "15",
    "scale_name": "BuPu",
    "orientation_code": "3"
  },
  "images/map_15_BuPu_4.png": {
    "map_nums": "15",
    "scale_name": "BuPu",
    "orientation_code": "4"
  },
  "images/map_15_GnBu_1.png": {
    "map_nums": "15",
    "scale_name": "GnBu",
    "orientation_code": "1"
  },
  "images/map_15_GnBu_2.png": {
    "map_nums": "15",
    "scale_name": "GnBu",
    "orientation_code": "2"
  },
  "images/map_15_GnBu_3.png": {
    "map_nums": "15",
    "scale_name": "GnBu",
    "orientation_code": "3"
  },
  "images/map_15_GnBu_4.png": {
    "map_nums": "15",
    "scale_name": "GnBu",
    "orientation_code": "4"
  },
  "images/map_15_PuBu_1.png": {
    "map_nums": "15",
    "scale_name": "PuBu",
    "orientation_code": "1"
  },
  "images/map_15_PuBu_2.png": {
    "map_nums": "15",
    "scale_name": "PuBu",
    "orientation_code": "2"
  },
  "images/map_15_PuBu_3.png": {
    "map_nums": "15",
    "scale_name": "PuBu",
    "orientation_code": "3"
  },
  "images/map_15_PuBu_4.png": {
    "map_nums": "15",
    "scale_name": "PuBu",
    "orientation_code": "4"
  },
  "images/map_15_YlGnBu_1.png": {
    "map_nums": "15",
    "scale_name": "YlGnBu",
    "orientation_code": "1"
  },
  "images/map_15_YlGnBu_2.png": {
    "map_nums": "15",
    "scale_name": "YlGnBu",
    "orientation_code": "2"
  },
  "images/map_15_YlGnBu_3.png": {
    "map_nums": "15",
    "scale_name": "YlGnBu",
    "orientation_code": "3"
  },
  "images/map_15_YlGnBu_4.png": {
    "map_nums": "15",
    "scale_name": "YlGnBu",
    "orientation_code": "4"
  },
  "images/map_15_PuBuGn_1.png": {
    "map_nums": "15",
    "scale_name": "PuBuGn",
    "orientation_code": "1"
  },
  "images/map_15_PuBuGn_2.png": {
    "map_nums": "15",
    "scale_name": "PuBuGn",
    "orientation_code": "2"
  },
  "images/map_15_PuBuGn_3.png": {
    "map_nums": "15",
    "scale_name": "PuBuGn",
    "orientation_code": "3"
  },
  "images/map_15_PuBuGn_4.png": {
    "map_nums": "15",
    "scale_name": "PuBuGn",
    "orientation_code": "4"
  },
  "images/map_15_BuGn_1.png": {
    "map_nums": "15",
    "scale_name": "BuGn",
    "orientation_code": "1"
  },
  "images/map_15_BuGn_2.png": {
    "map_nums": "15",
    "scale_name": "BuGn",
    "orientation_code": "2"
  },
  "images/map_15_BuGn_3.png": {
    "map_nums": "15",
    "scale_name": "BuGn",
    "orientation_code": "3"
  },
  "images/map_15_BuGn_4.png": {
    "map_nums": "15",
    "scale_name": "BuGn",
    "orientation_code": "4"
  },
  "images/map_15_YlGn_1.png": {
    "map_nums": "15",
    "scale_name": "YlGn",
    "orientation_code": "1"
  },
  "images/map_15_YlGn_2.png": {
    "map_nums": "15",
    "scale_name": "YlGn",
    "orientation_code": "2"
  },
  "images/map_15_YlGn_3.png": {
    "map_nums": "15",
    "scale_name": "YlGn",
    "orientation_code": "3"
  },
  "images/map_15_YlGn_4.png": {
    "map_nums": "15",
    "scale_name": "YlGn",
    "orientation_code": "4"
  },
  "images/map_15_PiYG_1.png": {
    "map_nums": "15",
    "scale_name": "PiYG",
    "orientation_code": "1"
  },
  "images/map_15_PiYG_2.png": {
    "map_nums": "15",
    "scale_name": "PiYG",
    "orientation_code": "2"
  },
  "images/map_15_PiYG_3.png": {
    "map_nums": "15",
    "scale_name": "PiYG",
    "orientation_code": "3"
  },
  "images/map_15_PiYG_4.png": {
    "map_nums": "15",
    "scale_name": "PiYG",
    "orientation_code": "4"
  },
  "images/map_15_PRGn_1.png": {
    "map_nums": "15",
    "scale_name": "PRGn",
    "orientation_code": "1"
  },
  "images/map_15_PRGn_2.png": {
    "map_nums": "15",
    "scale_name": "PRGn",
    "orientation_code": "2"
  },
  "images/map_15_PRGn_3.png": {
    "map_nums": "15",
    "scale_name": "PRGn",
    "orientation_code": "3"
  },
  "images/map_15_PRGn_4.png": {
    "map_nums": "15",
    "scale_name": "PRGn",
    "orientation_code": "4"
  },
  "images/map_15_BrBG_1.png": {
    "map_nums": "15",
    "scale_name": "BrBG",
    "orientation_code": "1"
  },
  "images/map_15_BrBG_2.png": {
    "map_nums": "15",
    "scale_name": "BrBG",
    "orientation_code": "2"
  },
  "images/map_15_BrBG_3.png": {
    "map_nums": "15",
    "scale_name": "BrBG",
    "orientation_code": "3"
  },
  "images/map_15_BrBG_4.png": {
    "map_nums": "15",
    "scale_name": "BrBG",
    "orientation_code": "4"
  },
  "images/map_15_PuOr_1.png": {
    "map_nums": "15",
    "scale_name": "PuOr",
    "orientation_code": "1"
  },
  "images/map_15_PuOr_2.png": {
    "map_nums": "15",
    "scale_name": "PuOr",
    "orientation_code": "2"
  },
  "images/map_15_PuOr_3.png": {
    "map_nums": "15",
    "scale_name": "PuOr",
    "orientation_code": "3"
  },
  "images/map_15_PuOr_4.png": {
    "map_nums": "15",
    "scale_name": "PuOr",
    "orientation_code": "4"
  },
  "images/map_15_RdGy_1.png": {
    "map_nums": "15",
    "scale_name": "RdGy",
    "orientation_code": "1"
  },
  "images/map_15_RdGy_2.png": {
    "map_nums": "15",
    "scale_name": "RdGy",
    "orientation_code": "2"
  },
  "images/map_15_RdGy_3.png": {
    "map_nums": "15",
    "scale_name": "RdGy",
    "orientation_code": "3"
  },
  "images/map_15_RdGy_4.png": {
    "map_nums": "15",
    "scale_name": "RdGy",
    "orientation_code": "4"
  },
  "images/map_15_RdBu_1.png": {
    "map_nums": "15",
    "scale_name": "RdBu",
    "orientation_code": "1"
  },
  "images/map_15_RdBu_2.png": {
    "map_nums": "15",
    "scale_name": "RdBu",
    "orientation_code": "2"
  },
  "images/map_15_RdBu_3.png": {
    "map_nums": "15",
    "scale_name": "RdBu",
    "orientation_code": "3"
  },
  "images/map_15_RdBu_4.png": {
    "map_nums": "15",
    "scale_name": "RdBu",
    "orientation_code": "4"
  },
  "images/map_15_RdYlBu_1.png": {
    "map_nums": "15",
    "scale_name": "RdYlBu",
    "orientation_code": "1"
  },
  "images/map_15_RdYlBu_2.png": {
    "map_nums": "15",
    "scale_name": "RdYlBu",
    "orientation_code": "2"
  },
  "images/map_15_RdYlBu_3.png": {
    "map_nums": "15",
    "scale_name": "RdYlBu",
    "orientation_code": "3"
  },
  "images/map_15_RdYlBu_4.png": {
    "map_nums": "15",
    "scale_name": "RdYlBu",
    "orientation_code": "4"
  },
  "images/map_15_RdYlGn_1.png": {
    "map_nums": "15",
    "scale_name": "RdYlGn",
    "orientation_code": "1"
  },
  "images/map_15_RdYlGn_2.png": {
    "map_nums": "15",
    "scale_name": "RdYlGn",
    "orientation_code": "2"
  },
  "images/map_15_RdYlGn_3.png": {
    "map_nums": "15",
    "scale_name": "RdYlGn",
    "orientation_code": "3"
  },
  "images/map_15_RdYlGn_4.png": {
    "map_nums": "15",
    "scale_name": "RdYlGn",
    "orientation_code": "4"
  },
  "images/map_15_Spectral_1.png": {
    "map_nums": "15",
    "scale_name": "Spectral",
    "orientation_code": "1"
  },
  "images/map_15_Spectral_2.png": {
    "map_nums": "15",
    "scale_name": "Spectral",
    "orientation_code": "2"
  },
  "images/map_15_Spectral_3.png": {
    "map_nums": "15",
    "scale_name": "Spectral",
    "orientation_code": "3"
  },
  "images/map_15_Spectral_4.png": {
    "map_nums": "15",
    "scale_name": "Spectral",
    "orientation_code": "4"
  },
  "images/map_15_coolwarm_1.png": {
    "map_nums": "15",
    "scale_name": "coolwarm",
    "orientation_code": "1"
  },
  "images/map_15_coolwarm_2.png": {
    "map_nums": "15",
    "scale_name": "coolwarm",
    "orientation_code": "2"
  },
  "images/map_15_coolwarm_3.png": {
    "map_nums": "15",
    "scale_name": "coolwarm",
    "orientation_code": "3"
  },
  "images/map_15_coolwarm_4.png": {
    "map_nums": "15",
    "scale_name": "coolwarm",
    "orientation_code": "4"
  },
  "images/map_15_bwr_1.png": {
    "map_nums": "15",
    "scale_name": "bwr",
    "orientation_code": "1"
  },
  "images/map_15_bwr_2.png": {
    "map_nums": "15",
    "scale_name": "bwr",
    "orientation_code": "2"
  },
  "images/map_15_bwr_3.png": {
    "map_nums": "15",
    "scale_name": "bwr",
    "orientation_code": "3"
  },
  "images/map_15_bwr_4.png": {
    "map_nums": "15",
    "scale_name": "bwr",
    "orientation_code": "4"
  },
  "images/map_15_seismic_1.png": {
    "map_nums": "15",
    "scale_name": "seismic",
    "orientation_code": "1"
  },
  "images/map_15_seismic_2.png": {
    "map_nums": "15",
    "scale_name": "seismic",
    "orientation_code": "2"
  },
  "images/map_15_seismic_3.png": {
    "map_nums": "15",
    "scale_name": "seismic",
    "orientation_code": "3"
  },
  "images/map_15_seismic_4.png": {
    "map_nums": "15",
    "scale_name": "seismic",
    "orientation_code": "4"
  },
  "images/map_15_berlin_1.png": {
    "map_nums": "15",
    "scale_name": "berlin",
    "orientation_code": "1"
  },
  "images/map_15_berlin_2.png": {
    "map_nums": "15",
    "scale_name": "berlin",
    "orientation_code": "2"
  },
  "images/map_15_berlin_3.png": {
    "map_nums": "15",
    "scale_name": "berlin",
    "orientation_code": "3"
  },
  "images/map_15_berlin_4.png": {
    "map_nums": "15",
    "scale_name": "berlin",
    "orientation_code": "4"
  },
  "images/map_15_managua_1.png": {
    "map_nums": "15",
    "scale_name": "managua",
    "orientation_code": "1"
  },
  "images/map_15_managua_2.png": {
    "map_nums": "15",
    "scale_name": "managua",
    "orientation_code": "2"
  },
  "images/map_15_managua_3.png": {
    "map_nums": "15",
    "scale_name": "managua",
    "orientation_code": "3"
  },
  "images/map_15_managua_4.png": {
    "map_nums": "15",
    "scale_name": "managua",
    "orientation_code": "4"
  },
  "images/map_15_vanimo_1.png": {
    "map_nums": "15",
    "scale_name": "vanimo",
    "orientation_code": "1"
  },
  "images/map_15_vanimo_2.png": {
    "map_nums": "15",
    "scale_name": "vanimo",
    "orientation_code": "2"
  },
  "images/map_15_vanimo_3.png": {
    "map_nums": "15",
    "scale_name": "vanimo",
    "orientation_code": "3"
  },
  "images/map_15_vanimo_4.png": {
    "map_nums": "15",
    "scale_name": "vanimo",
    "orientation_code": "4"
  },
  "images/map_15_gist_earth_1.png": {
    "map_nums": "15",
    "scale_name": "gist",
    "orientation_code": "earth"
  },
  "images/map_15_gist_earth_2.png": {
    "map_nums": "15",
    "scale_name": "gist",
    "orientation_code": "earth"
  },
  "images/map_15_gist_earth_3.png": {
    "map_nums": "15",
    "scale_name": "gist",
    "orientation_code": "earth"
  },
  "images/map_15_gist_earth_4.png": {
    "map_nums": "15",
    "scale_name": "gist",
    "orientation_code": "earth"
  },
  "images/map_15_turbo_1.png": {
    "map_nums": "15",
    "scale_name": "turbo",
    "orientation_code": "1"
  },
  "images/map_15_turbo_2.png": {
    "map_nums": "15",
    "scale_name": "turbo",
    "orientation_code": "2"
  },
  "images/map_15_turbo_3.png": {
    "map_nums": "15",
    "scale_name": "turbo",
    "orientation_code": "3"
  },
  "images/map_15_turbo_4.png": {
    "map_nums": "15",
    "scale_name": "turbo",
    "orientation_code": "4"
  },
  "images/map_23_viridis_1.png": {
    "map_nums": "23",
    "scale_name": "viridis",
    "orientation_code": "1"
  },
  "images/map_23_viridis_2.png": {
    "map_nums": "23",
    "scale_name": "viridis",
    "orientation_code": "2"
  },
  "images/map_23_viridis_3.png": {
    "map_nums": "23",
    "scale_name": "viridis",
    "orientation_code": "3"
  },
  "images/map_23_viridis_4.png": {
    "map_nums": "23",
    "scale_name": "viridis",
    "orientation_code": "4"
  },
  "images/map_23_plasma_1.png": {
    "map_nums": "23",
    "scale_name": "plasma",
    "orientation_code": "1"
  },
  "images/map_23_plasma_2.png": {
    "map_nums": "23",
    "scale_name": "plasma",
    "orientation_code": "2"
  },
  "images/map_23_plasma_3.png": {
    "map_nums": "23",
    "scale_name": "plasma",
    "orientation_code": "3"
  },
  "images/map_23_plasma_4.png": {
    "map_nums": "23",
    "scale_name": "plasma",
    "orientation_code": "4"
  },
  "images/map_23_inferno_1.png": {
    "map_nums": "23",
    "scale_name": "inferno",
    "orientation_code": "1"
  },
  "images/map_23_inferno_2.png": {
    "map_nums": "23",
    "scale_name": "inferno",
    "orientation_code": "2"
  },
  "images/map_23_inferno_3.png": {
    "map_nums": "23",
    "scale_name": "inferno",
    "orientation_code": "3"
  },
  "images/map_23_inferno_4.png": {
    "map_nums": "23",
    "scale_name": "inferno",
    "orientation_code": "4"
  },
  "images/map_23_magma_1.png": {
    "map_nums": "23",
    "scale_name": "magma",
    "orientation_code": "1"
  },
  "images/map_23_magma_2.png": {
    "map_nums": "23",
    "scale_name": "magma",
    "orientation_code": "2"
  },
  "images/map_23_magma_3.png": {
    "map_nums": "23",
    "scale_name": "magma",
    "orientation_code": "3"
  },
  "images/map_23_magma_4.png": {
    "map_nums": "23",
    "scale_name": "magma",
    "orientation_code": "4"
  },
  "images/map_23_cividis_1.png": {
    "map_nums": "23",
    "scale_name": "cividis",
    "orientation_code": "1"
  },
  "images/map_23_cividis_2.png": {
    "map_nums": "23",
    "scale_name": "cividis",
    "orientation_code": "2"
  },
  "images/map_23_cividis_3.png": {
    "map_nums": "23",
    "scale_name": "cividis",
    "orientation_code": "3"
  },
  "images/map_23_cividis_4.png": {
    "map_nums": "23",
    "scale_name": "cividis",
    "orientation_code": "4"
  },
  "images/map_23_Greys_1.png": {
    "map_nums": "23",
    "scale_name": "Greys",
    "orientation_code": "1"
  },
  "images/map_23_Greys_2.png": {
    "map_nums": "23",
    "scale_name": "Greys",
    "orientation_code": "2"
  },
  "images/map_23_Greys_3.png": {
    "map_nums": "23",
    "scale_name": "Greys",
    "orientation_code": "3"
  },
  "images/map_23_Greys_4.png": {
    "map_nums": "23",
    "scale_name": "Greys",
    "orientation_code": "4"
  },
  "images/map_23_Purples_1.png": {
    "map_nums": "23",
    "scale_name": "Purples",
    "orientation_code": "1"
  },
  "images/map_23_Purples_2.png": {
    "map_nums": "23",
    "scale_name": "Purples",
    "orientation_code": "2"
  },
  "images/map_23_Purples_3.png": {
    "map_nums": "23",
    "scale_name": "Purples",
    "orientation_code": "3"
  },
  "images/map_23_Purples_4.png": {
    "map_nums": "23",
    "scale_name": "Purples",
    "orientation_code": "4"
  },
  "images/map_23_Blues_1.png": {
    "map_nums": "23",
    "scale_name": "Blues",
    "orientation_code": "1"
  },
  "images/map_23_Blues_2.png": {
    "map_nums": "23",
    "scale_name": "Blues",
    "orientation_code": "2"
  },
  "images/map_23_Blues_3.png": {
    "map_nums": "23",
    "scale_name": "Blues",
    "orientation_code": "3"
  },
  "images/map_23_Blues_4.png": {
    "map_nums": "23",
    "scale_name": "Blues",
    "orientation_code": "4"
  },
  "images/map_23_Greens_1.png": {
    "map_nums": "23",
    "scale_name": "Greens",
    "orientation_code": "1"
  },
  "images/map_23_Greens_2.png": {
    "map_nums": "23",
    "scale_name": "Greens",
    "orientation_code": "2"
  },
  "images/map_23_Greens_3.png": {
    "map_nums": "23",
    "scale_name": "Greens",
    "orientation_code": "3"
  },
  "images/map_23_Greens_4.png": {
    "map_nums": "23",
    "scale_name": "Greens",
    "orientation_code": "4"
  },
  "images/map_23_Oranges_1.png": {
    "map_nums": "23",
    "scale_name": "Oranges",
    "orientation_code": "1"
  },
  "images/map_23_Oranges_2.png": {
    "map_nums": "23",
    "scale_name": "Oranges",
    "orientation_code": "2"
  },
  "images/map_23_Oranges_3.png": {
    "map_nums": "23",
    "scale_name": "Oranges",
    "orientation_code": "3"
  },
  "images/map_23_Oranges_4.png": {
    "map_nums": "23",
    "scale_name": "Oranges",
    "orientation_code": "4"
  },
  "images/map_23_Reds_1.png": {
    "map_nums": "23",
    "scale_name": "Reds",
    "orientation_code": "1"
  },
  "images/map_23_Reds_2.png": {
    "map_nums": "23",
    "scale_name": "Reds",
    "orientation_code": "2"
  },
  "images/map_23_Reds_3.png": {
    "map_nums": "23",
    "scale_name": "Reds",
    "orientation_code": "3"
  },
  "images/map_23_Reds_4.png": {
    "map_nums": "23",
    "scale_name": "Reds",
    "orientation_code": "4"
  },
  "images/map_23_YlOrBr_1.png": {
    "map_nums": "23",
    "scale_name": "YlOrBr",
    "orientation_code": "1"
  },
  "images/map_23_YlOrBr_2.png": {
    "map_nums": "23",
    "scale_name": "YlOrBr",
    "orientation_code": "2"
  },
  "images/map_23_YlOrBr_3.png": {
    "map_nums": "23",
    "scale_name": "YlOrBr",
    "orientation_code": "3"
  },
  "images/map_23_YlOrBr_4.png": {
    "map_nums": "23",
    "scale_name": "YlOrBr",
    "orientation_code": "4"
  },
  "images/map_23_YlOrRd_1.png": {
    "map_nums": "23",
    "scale_name": "YlOrRd",
    "orientation_code": "1"
  },
  "images/map_23_YlOrRd_2.png": {
    "map_nums": "23",
    "scale_name": "YlOrRd",
    "orientation_code": "2"
  },
  "images/map_23_YlOrRd_3.png": {
    "map_nums": "23",
    "scale_name": "YlOrRd",
    "orientation_code": "3"
  },
  "images/map_23_YlOrRd_4.png": {
    "map_nums": "23",
    "scale_name": "YlOrRd",
    "orientation_code": "4"
  },
  "images/map_23_OrRd_1.png": {
    "map_nums": "23",
    "scale_name": "OrRd",
    "orientation_code": "1"
  },
  "images/map_23_OrRd_2.png": {
    "map_nums": "23",
    "scale_name": "OrRd",
    "orientation_code": "2"
  },
  "images/map_23_OrRd_3.png": {
    "map_nums": "23",
    "scale_name": "OrRd",
    "orientation_code": "3"
  },
  "images/map_23_OrRd_4.png": {
    "map_nums": "23",
    "scale_name": "OrRd",
    "orientation_code": "4"
  },
  "images/map_23_PuRd_1.png": {
    "map_nums": "23",
    "scale_name": "PuRd",
    "orientation_code": "1"
  },
  "images/map_23_PuRd_2.png": {
    "map_nums": "23",
    "scale_name": "PuRd",
    "orientation_code": "2"
  },
  "images/map_23_PuRd_3.png": {
    "map_nums": "23",
    "scale_name": "PuRd",
    "orientation_code": "3"
  },
  "images/map_23_PuRd_4.png": {
    "map_nums": "23",
    "scale_name": "PuRd",
    "orientation_code": "4"
  },
  "images/map_23_RdPu_1.png": {
    "map_nums": "23",
    "scale_name": "RdPu",
    "orientation_code": "1"
  },
  "images/map_23_RdPu_2.png": {
    "map_nums": "23",
    "scale_name": "RdPu",
    "orientation_code": "2"
  },
  "images/map_23_RdPu_3.png": {
    "map_nums": "23",
    "scale_name": "RdPu",
    "orientation_code": "3"
  },
  "images/map_23_RdPu_4.png": {
    "map_nums": "23",
    "scale_name": "RdPu",
    "orientation_code": "4"
  },
  "images/map_23_BuPu_1.png": {
    "map_nums": "23",
    "scale_name": "BuPu",
    "orientation_code": "1"
  },
  "images/map_23_BuPu_2.png": {
    "map_nums": "23",
    "scale_name": "BuPu",
    "orientation_code": "2"
  },
  "images/map_23_BuPu_3.png": {
    "map_nums": "23",
    "scale_name": "BuPu",
    "orientation_code": "3"
  },
  "images/map_23_BuPu_4.png": {
    "map_nums": "23",
    "scale_name": "BuPu",
    "orientation_code": "4"
  },
  "images/map_23_GnBu_1.png": {
    "map_nums": "23",
    "scale_name": "GnBu",
    "orientation_code": "1"
  },
  "images/map_23_GnBu_2.png": {
    "map_nums": "23",
    "scale_name": "GnBu",
    "orientation_code": "2"
  },
  "images/map_23_GnBu_3.png": {
    "map_nums": "23",
    "scale_name": "GnBu",
    "orientation_code": "3"
  },
  "images/map_23_GnBu_4.png": {
    "map_nums": "23",
    "scale_name": "GnBu",
    "orientation_code": "4"
  },
  "images/map_23_PuBu_1.png": {
    "map_nums": "23",
    "scale_name": "PuBu",
    "orientation_code": "1"
  },
  "images/map_23_PuBu_2.png": {
    "map_nums": "23",
    "scale_name": "PuBu",
    "orientation_code": "2"
  },
  "images/map_23_PuBu_3.png": {
    "map_nums": "23",
    "scale_name": "PuBu",
    "orientation_code": "3"
  },
  "images/map_23_PuBu_4.png": {
    "map_nums": "23",
    "scale_name": "PuBu",
    "orientation_code": "4"
  },
  "images/map_23_YlGnBu_1.png": {
    "map_nums": "23",
    "scale_name": "YlGnBu",
    "orientation_code": "1"
  },
  "images/map_23_YlGnBu_2.png": {
    "map_nums": "23",
    "scale_name": "YlGnBu",
    "orientation_code": "2"
  },
  "images/map_23_YlGnBu_3.png": {
    "map_nums": "23",
    "scale_name": "YlGnBu",
    "orientation_code": "3"
  },
  "images/map_23_YlGnBu_4.png": {
    "map_nums": "23",
    "scale_name": "YlGnBu",
    "orientation_code": "4"
  },
  "images/map_23_PuBuGn_1.png": {
    "map_nums": "23",
    "scale_name": "PuBuGn",
    "orientation_code": "1"
  },
  "images/map_23_PuBuGn_2.png": {
    "map_nums": "23",
    "scale_name": "PuBuGn",
    "orientation_code": "2"
  },
  "images/map_23_PuBuGn_3.png": {
    "map_nums": "23",
    "scale_name": "PuBuGn",
    "orientation_code": "3"
  },
  "images/map_23_PuBuGn_4.png": {
    "map_nums": "23",
    "scale_name": "PuBuGn",
    "orientation_code": "4"
  },
  "images/map_23_BuGn_1.png": {
    "map_nums": "23",
    "scale_name": "BuGn",
    "orientation_code": "1"
  },
  "images/map_23_BuGn_2.png": {
    "map_nums": "23",
    "scale_name": "BuGn",
    "orientation_code": "2"
  },
  "images/map_23_BuGn_3.png": {
    "map_nums": "23",
    "scale_name": "BuGn",
    "orientation_code": "3"
  },
  "images/map_23_BuGn_4.png": {
    "map_nums": "23",
    "scale_name": "BuGn",
    "orientation_code": "4"
  },
  "images/map_23_YlGn_1.png": {
    "map_nums": "23",
    "scale_name": "YlGn",
    "orientation_code": "1"
  },
  "images/map_23_YlGn_2.png": {
    "map_nums": "23",
    "scale_name": "YlGn",
    "orientation_code": "2"
  },
  "images/map_23_YlGn_3.png": {
    "map_nums": "23",
    "scale_name": "YlGn",
    "orientation_code": "3"
  },
  "images/map_23_YlGn_4.png": {
    "map_nums": "23",
    "scale_name": "YlGn",
    "orientation_code": "4"
  },
  "images/map_23_PiYG_1.png": {
    "map_nums": "23",
    "scale_name": "PiYG",
    "orientation_code": "1"
  },
  "images/map_23_PiYG_2.png": {
    "map_nums": "23",
    "scale_name": "PiYG",
    "orientation_code": "2"
  },
  "images/map_23_PiYG_3.png": {
    "map_nums": "23",
    "scale_name": "PiYG",
    "orientation_code": "3"
  },
  "images/map_23_PiYG_4.png": {
    "map_nums": "23",
    "scale_name": "PiYG",
    "orientation_code": "4"
  },
  "images/map_23_PRGn_1.png": {
    "map_nums": "23",
    "scale_name": "PRGn",
    "orientation_code": "1"
  },
  "images/map_23_PRGn_2.png": {
    "map_nums": "23",
    "scale_name": "PRGn",
    "orientation_code": "2"
  },
  "images/map_23_PRGn_3.png": {
    "map_nums": "23",
    "scale_name": "PRGn",
    "orientation_code": "3"
  },
  "images/map_23_PRGn_4.png": {
    "map_nums": "23",
    "scale_name": "PRGn",
    "orientation_code": "4"
  },
  "images/map_23_BrBG_1.png": {
    "map_nums": "23",
    "scale_name": "BrBG",
    "orientation_code": "1"
  },
  "images/map_23_BrBG_2.png": {
    "map_nums": "23",
    "scale_name": "BrBG",
    "orientation_code": "2"
  },
  "images/map_23_BrBG_3.png": {
    "map_nums": "23",
    "scale_name": "BrBG",
    "orientation_code": "3"
  },
  "images/map_23_BrBG_4.png": {
    "map_nums": "23",
    "scale_name": "BrBG",
    "orientation_code": "4"
  },
  "images/map_23_PuOr_1.png": {
    "map_nums": "23",
    "scale_name": "PuOr",
    "orientation_code": "1"
  },
  "images/map_23_PuOr_2.png": {
    "map_nums": "23",
    "scale_name": "PuOr",
    "orientation_code": "2"
  },
  "images/map_23_PuOr_3.png": {
    "map_nums": "23",
    "scale_name": "PuOr",
    "orientation_code": "3"
  },
  "images/map_23_PuOr_4.png": {
    "map_nums": "23",
    "scale_name": "PuOr",
    "orientation_code": "4"
  },
  "images/map_23_RdGy_1.png": {
    "map_nums": "23",
    "scale_name": "RdGy",
    "orientation_code": "1"
  },
  "images/map_23_RdGy_2.png": {
    "map_nums": "23",
    "scale_name": "RdGy",
    "orientation_code": "2"
  },
  "images/map_23_RdGy_3.png": {
    "map_nums": "23",
    "scale_name": "RdGy",
    "orientation_code": "3"
  },
  "images/map_23_RdGy_4.png": {
    "map_nums": "23",
    "scale_name": "RdGy",
    "orientation_code": "4"
  },
  "images/map_23_RdBu_1.png": {
    "map_nums": "23",
    "scale_name": "RdBu",
    "orientation_code": "1"
  },
  "images/map_23_RdBu_2.png": {
    "map_nums": "23",
    "scale_name": "RdBu",
    "orientation_code": "2"
  },
  "images/map_23_RdBu_3.png": {
    "map_nums": "23",
    "scale_name": "RdBu",
    "orientation_code": "3"
  },
  "images/map_23_RdBu_4.png": {
    "map_nums": "23",
    "scale_name": "RdBu",
    "orientation_code": "4"
  },
  "images/map_23_RdYlBu_1.png": {
    "map_nums": "23",
    "scale_name": "RdYlBu",
    "orientation_code": "1"
  },
  "images/map_23_RdYlBu_2.png": {
    "map_nums": "23",
    "scale_name": "RdYlBu",
    "orientation_code": "2"
  },
  "images/map_23_RdYlBu_3.png": {
    "map_nums": "23",
    "scale_name": "RdYlBu",
    "orientation_code": "3"
  },
  "images/map_23_RdYlBu_4.png": {
    "map_nums": "23",
    "scale_name": "RdYlBu",
    "orientation_code": "4"
  },
  "images/map_23_RdYlGn_1.png": {
    "map_nums": "23",
    "scale_name": "RdYlGn",
    "orientation_code": "1"
  },
  "images/map_23_RdYlGn_2.png": {
    "map_nums": "23",
    "scale_name": "RdYlGn",
    "orientation_code": "2"
  },
  "images/map_23_RdYlGn_3.png": {
    "map_nums": "23",
    "scale_name": "RdYlGn",
    "orientation_code": "3"
  },
  "images/map_23_RdYlGn_4.png": {
    "map_nums": "23",
    "scale_name": "RdYlGn",
    "orientation_code": "4"
  },
  "images/map_23_Spectral_1.png": {
    "map_nums": "23",
    "scale_name": "Spectral",
    "orientation_code": "1"
  },
  "images/map_23_Spectral_2.png": {
    "map_nums": "23",
    "scale_name": "Spectral",
    "orientation_code": "2"
  },
  "images/map_23_Spectral_3.png": {
    "map_nums": "23",
    "scale_name": "Spectral",
    "orientation_code": "3"
  },
  "images/map_23_Spectral_4.png": {
    "map_nums": "23",
    "scale_name": "Spectral",
    "orientation_code": "4"
  },
  "images/map_23_coolwarm_1.png": {
    "map_nums": "23",
    "scale_name": "coolwarm",
    "orientation_code": "1"
  },
  "images/map_23_coolwarm_2.png": {
    "map_nums": "23",
    "scale_name": "coolwarm",
    "orientation_code": "2"
  },
  "images/map_23_coolwarm_3.png": {
    "map_nums": "23",
    "scale_name": "coolwarm",
    "orientation_code": "3"
  },
  "images/map_23_coolwarm_4.png": {
    "map_nums": "23",
    "scale_name": "coolwarm",
    "orientation_code": "4"
  },
  "images/map_23_bwr_1.png": {
    "map_nums": "23",
    "scale_name": "bwr",
    "orientation_code": "1"
  },
  "images/map_23_bwr_2.png": {
    "map_nums": "23",
    "scale_name": "bwr",
    "orientation_code": "2"
  },
  "images/map_23_bwr_3.png": {
    "map_nums": "23",
    "scale_name": "bwr",
    "orientation_code": "3"
  },
  "images/map_23_bwr_4.png": {
    "map_nums": "23",
    "scale_name": "bwr",
    "orientation_code": "4"
  },
  "images/map_23_seismic_1.png": {
    "map_nums": "23",
    "scale_name": "seismic",
    "orientation_code": "1"
  },
  "images/map_23_seismic_2.png": {
    "map_nums": "23",
    "scale_name": "seismic",
    "orientation_code": "2"
  },
  "images/map_23_seismic_3.png": {
    "map_nums": "23",
    "scale_name": "seismic",
    "orientation_code": "3"
  },
  "images/map_23_seismic_4.png": {
    "map_nums": "23",
    "scale_name": "seismic",
    "orientation_code": "4"
  },
  "images/map_23_berlin_1.png": {
    "map_nums": "23",
    "scale_name": "berlin",
    "orientation_code": "1"
  },
  "images/map_23_berlin_2.png": {
    "map_nums": "23",
    "scale_name": "berlin",
    "orientation_code": "2"
  },
  "images/map_23_berlin_3.png": {
    "map_nums": "23",
    "scale_name": "berlin",
    "orientation_code": "3"
  },
  "images/map_23_berlin_4.png": {
    "map_nums": "23",
    "scale_name": "berlin",
    "orientation_code": "4"
  },
  "images/map_23_managua_1.png": {
    "map_nums": "23",
    "scale_name": "managua",
    "orientation_code": "1"
  },
  "images/map_23_managua_2.png": {
    "map_nums": "23",
    "scale_name": "managua",
    "orientation_code": "2"
  },
  "images/map_23_managua_3.png": {
    "map_nums": "23",
    "scale_name": "managua",
    "orientation_code": "3"
  },
  "images/map_23_managua_4.png": {
    "map_nums": "23",
    "scale_name": "managua",
    "orientation_code": "4"
  },
  "images/map_23_vanimo_1.png": {
    "map_nums": "23",
    "scale_name": "vanimo",
    "orientation_code": "1"
  },
  "images/map_23_vanimo_2.png": {
    "map_nums": "23",
    "scale_name": "vanimo",
    "orientation_code": "2"
  },
  "images/map_23_vanimo_3.png": {
    "map_nums": "23",
    "scale_name": "vanimo",
    "orientation_code": "3"
  },
  "images/map_23_vanimo_4.png": {
    "map_nums": "23",
    "scale_name": "vanimo",
    "orientation_code": "4"
  },
  "images/map_23_gist_earth_1.png": {
    "map_nums": "23",
    "scale_name": "gist",
    "orientation_code": "earth"
  },
  "images/map_23_gist_earth_2.png": {
    "map_nums": "23",
    "scale_name": "gist",
    "orientation_code": "earth"
  },
  "images/map_23_gist_earth_3.png": {
    "map_nums": "23",
    "scale_name": "gist",
    "orientation_code": "earth"
  },
  "images/map_23_gist_earth_4.png": {
    "map_nums": "23",
    "scale_name": "gist",
    "orientation_code": "earth"
  },
  "images/map_23_turbo_1.png": {
    "map_nums": "23",
    "scale_name": "turbo",
    "orientation_code": "1"
  },
  "images/map_23_turbo_2.png": {
    "map_nums": "23",
    "scale_name": "turbo",
    "orientation_code": "2"
  },
  "images/map_23_turbo_3.png": {
    "map_nums": "23",
    "scale_name": "turbo",
    "orientation_code": "3"
  },
  "images/map_23_turbo_4.png": {
    "map_nums": "23",
    "scale_name": "turbo",
    "orientation_code": "4"
  },
  "images/map_26_viridis_1.png": {
    "map_nums": "26",
    "scale_name": "viridis",
    "orientation_code": "1"
  },
  "images/map_26_viridis_2.png": {
    "map_nums": "26",
    "scale_name": "viridis",
    "orientation_code": "2"
  },
  "images/map_26_viridis_3.png": {
    "map_nums": "26",
    "scale_name": "viridis",
    "orientation_code": "3"
  },
  "images/map_26_viridis_4.png": {
    "map_nums": "26",
    "scale_name": "viridis",
    "orientation_code": "4"
  },
  "images/map_26_plasma_1.png": {
    "map_nums": "26",
    "scale_name": "plasma",
    "orientation_code": "1"
  },
  "images/map_26_plasma_2.png": {
    "map_nums": "26",
    "scale_name": "plasma",
    "orientation_code": "2"
  },
  "images/map_26_plasma_3.png": {
    "map_nums": "26",
    "scale_name": "plasma",
    "orientation_code": "3"
  },
  "images/map_26_plasma_4.png": {
    "map_nums": "26",
    "scale_name": "plasma",
    "orientation_code": "4"
  },
  "images/map_26_inferno_1.png": {
    "map_nums": "26",
    "scale_name": "inferno",
    "orientation_code": "1"
  },
  "images/map_26_inferno_2.png": {
    "map_nums": "26",
    "scale_name": "inferno",
    "orientation_code": "2"
  },
  "images/map_26_inferno_3.png": {
    "map_nums": "26",
    "scale_name": "inferno",
    "orientation_code": "3"
  },
  "images/map_26_inferno_4.png": {
    "map_nums": "26",
    "scale_name": "inferno",
    "orientation_code": "4"
  },
  "images/map_26_magma_1.png": {
    "map_nums": "26",
    "scale_name": "magma",
    "orientation_code": "1"
  },
  "images/map_26_magma_2.png": {
    "map_nums": "26",
    "scale_name": "magma",
    "orientation_code": "2"
  },
  "images/map_26_magma_3.png": {
    "map_nums": "26",
    "scale_name": "magma",
    "orientation_code": "3"
  },
  "images/map_26_magma_4.png": {
    "map_nums": "26",
    "scale_name": "magma",
    "orientation_code": "4"
  },
  "images/map_26_cividis_1.png": {
    "map_nums": "26",
    "scale_name": "cividis",
    "orientation_code": "1"
  },
  "images/map_26_cividis_2.png": {
    "map_nums": "26",
    "scale_name": "cividis",
    "orientation_code": "2"
  },
  "images/map_26_cividis_3.png": {
    "map_nums": "26",
    "scale_name": "cividis",
    "orientation_code": "3"
  },
  "images/map_26_cividis_4.png": {
    "map_nums": "26",
    "scale_name": "cividis",
    "orientation_code": "4"
  },
  "images/map_26_Greys_1.png": {
    "map_nums": "26",
    "scale_name": "Greys",
    "orientation_code": "1"
  },
  "images/map_26_Greys_2.png": {
    "map_nums": "26",
    "scale_name": "Greys",
    "orientation_code": "2"
  },
  "images/map_26_Greys_3.png": {
    "map_nums": "26",
    "scale_name": "Greys",
    "orientation_code": "3"
  },
  "images/map_26_Greys_4.png": {
    "map_nums": "26",
    "scale_name": "Greys",
    "orientation_code": "4"
  },
  "images/map_26_Purples_1.png": {
    "map_nums": "26",
    "scale_name": "Purples",
    "orientation_code": "1"
  },
  "images/map_26_Purples_2.png": {
    "map_nums": "26",
    "scale_name": "Purples",
    "orientation_code": "2"
  },
  "images/map_26_Purples_3.png": {
    "map_nums": "26",
    "scale_name": "Purples",
    "orientation_code": "3"
  },
  "images/map_26_Purples_4.png": {
    "map_nums": "26",
    "scale_name": "Purples",
    "orientation_code": "4"
  },
  "images/map_26_Blues_1.png": {
    "map_nums": "26",
    "scale_name": "Blues",
    "orientation_code": "1"
  },
  "images/map_26_Blues_2.png": {
    "map_nums": "26",
    "scale_name": "Blues",
    "orientation_code": "2"
  },
  "images/map_26_Blues_3.png": {
    "map_nums": "26",
    "scale_name": "Blues",
    "orientation_code": "3"
  },
  "images/map_26_Blues_4.png": {
    "map_nums": "26",
    "scale_name": "Blues",
    "orientation_code": "4"
  },
  "images/map_26_Greens_1.png": {
    "map_nums": "26",
    "scale_name": "Greens",
    "orientation_code": "1"
  },
  "images/map_26_Greens_2.png": {
    "map_nums": "26",
    "scale_name": "Greens",
    "orientation_code": "2"
  },
  "images/map_26_Greens_3.png": {
    "map_nums": "26",
    "scale_name": "Greens",
    "orientation_code": "3"
  },
  "images/map_26_Greens_4.png": {
    "map_nums": "26",
    "scale_name": "Greens",
    "orientation_code": "4"
  },
  "images/map_26_Oranges_1.png": {
    "map_nums": "26",
    "scale_name": "Oranges",
    "orientation_code": "1"
  },
  "images/map_26_Oranges_2.png": {
    "map_nums": "26",
    "scale_name": "Oranges",
    "orientation_code": "2"
  },
  "images/map_26_Oranges_3.png": {
    "map_nums": "26",
    "scale_name": "Oranges",
    "orientation_code": "3"
  },
  "images/map_26_Oranges_4.png": {
    "map_nums": "26",
    "scale_name": "Oranges",
    "orientation_code": "4"
  },
  "images/map_26_Reds_1.png": {
    "map_nums": "26",
    "scale_name": "Reds",
    "orientation_code": "1"
  },
  "images/map_26_Reds_2.png": {
    "map_nums": "26",
    "scale_name": "Reds",
    "orientation_code": "2"
  },
  "images/map_26_Reds_3.png": {
    "map_nums": "26",
    "scale_name": "Reds",
    "orientation_code": "3"
  },
  "images/map_26_Reds_4.png": {
    "map_nums": "26",
    "scale_name": "Reds",
    "orientation_code": "4"
  },
  "images/map_26_YlOrBr_1.png": {
    "map_nums": "26",
    "scale_name": "YlOrBr",
    "orientation_code": "1"
  },
  "images/map_26_YlOrBr_2.png": {
    "map_nums": "26",
    "scale_name": "YlOrBr",
    "orientation_code": "2"
  },
  "images/map_26_YlOrBr_3.png": {
    "map_nums": "26",
    "scale_name": "YlOrBr",
    "orientation_code": "3"
  },
  "images/map_26_YlOrBr_4.png": {
    "map_nums": "26",
    "scale_name": "YlOrBr",
    "orientation_code": "4"
  },
  "images/map_26_YlOrRd_1.png": {
    "map_nums": "26",
    "scale_name": "YlOrRd",
    "orientation_code": "1"
  },
  "images/map_26_YlOrRd_2.png": {
    "map_nums": "26",
    "scale_name": "YlOrRd",
    "orientation_code": "2"
  },
  "images/map_26_YlOrRd_3.png": {
    "map_nums": "26",
    "scale_name": "YlOrRd",
    "orientation_code": "3"
  },
  "images/map_26_YlOrRd_4.png": {
    "map_nums": "26",
    "scale_name": "YlOrRd",
    "orientation_code": "4"
  },
  "images/map_26_OrRd_1.png": {
    "map_nums": "26",
    "scale_name": "OrRd",
    "orientation_code": "1"
  },
  "images/map_26_OrRd_2.png": {
    "map_nums": "26",
    "scale_name": "OrRd",
    "orientation_code": "2"
  },
  "images/map_26_OrRd_3.png": {
    "map_nums": "26",
    "scale_name": "OrRd",
    "orientation_code": "3"
  },
  "images/map_26_OrRd_4.png": {
    "map_nums": "26",
    "scale_name": "OrRd",
    "orientation_code": "4"
  },
  "images/map_26_PuRd_1.png": {
    "map_nums": "26",
    "scale_name": "PuRd",
    "orientation_code": "1"
  },
  "images/map_26_PuRd_2.png": {
    "map_nums": "26",
    "scale_name": "PuRd",
    "orientation_code": "2"
  },
  "images/map_26_PuRd_3.png": {
    "map_nums": "26",
    "scale_name": "PuRd",
    "orientation_code": "3"
  },
  "images/map_26_PuRd_4.png": {
    "map_nums": "26",
    "scale_name": "PuRd",
    "orientation_code": "4"
  },
  "images/map_26_RdPu_1.png": {
    "map_nums": "26",
    "scale_name": "RdPu",
    "orientation_code": "1"
  },
  "images/map_26_RdPu_2.png": {
    "map_nums": "26",
    "scale_name": "RdPu",
    "orientation_code": "2"
  },
  "images/map_26_RdPu_3.png": {
    "map_nums": "26",
    "scale_name": "RdPu",
    "orientation_code": "3"
  },
  "images/map_26_RdPu_4.png": {
    "map_nums": "26",
    "scale_name": "RdPu",
    "orientation_code": "4"
  },
  "images/map_26_BuPu_1.png": {
    "map_nums": "26",
    "scale_name": "BuPu",
    "orientation_code": "1"
  },
  "images/map_26_BuPu_2.png": {
    "map_nums": "26",
    "scale_name": "BuPu",
    "orientation_code": "2"
  },
  "images/map_26_BuPu_3.png": {
    "map_nums": "26",
    "scale_name": "BuPu",
    "orientation_code": "3"
  },
  "images/map_26_BuPu_4.png": {
    "map_nums": "26",
    "scale_name": "BuPu",
    "orientation_code": "4"
  },
  "images/map_26_GnBu_1.png": {
    "map_nums": "26",
    "scale_name": "GnBu",
    "orientation_code": "1"
  },
  "images/map_26_GnBu_2.png": {
    "map_nums": "26",
    "scale_name": "GnBu",
    "orientation_code": "2"
  },
  "images/map_26_GnBu_3.png": {
    "map_nums": "26",
    "scale_name": "GnBu",
    "orientation_code": "3"
  },
  "images/map_26_GnBu_4.png": {
    "map_nums": "26",
    "scale_name": "GnBu",
    "orientation_code": "4"
  },
  "images/map_26_PuBu_1.png": {
    "map_nums": "26",
    "scale_name": "PuBu",
    "orientation_code": "1"
  },
  "images/map_26_PuBu_2.png": {
    "map_nums": "26",
    "scale_name": "PuBu",
    "orientation_code": "2"
  },
  "images/map_26_PuBu_3.png": {
    "map_nums": "26",
    "scale_name": "PuBu",
    "orientation_code": "3"
  },
  "images/map_26_PuBu_4.png": {
    "map_nums": "26",
    "scale_name": "PuBu",
    "orientation_code": "4"
  },
  "images/map_26_YlGnBu_1.png": {
    "map_nums": "26",
    "scale_name": "YlGnBu",
    "orientation_code": "1"
  },
  "images/map_26_YlGnBu_2.png": {
    "map_nums": "26",
    "scale_name": "YlGnBu",
    "orientation_code": "2"
  },
  "images/map_26_YlGnBu_3.png": {
    "map_nums": "26",
    "scale_name": "YlGnBu",
    "orientation_code": "3"
  },
  "images/map_26_YlGnBu_4.png": {
    "map_nums": "26",
    "scale_name": "YlGnBu",
    "orientation_code": "4"
  },
  "images/map_26_PuBuGn_1.png": {
    "map_nums": "26",
    "scale_name": "PuBuGn",
    "orientation_code": "1"
  },
  "images/map_26_PuBuGn_2.png": {
    "map_nums": "26",
    "scale_name": "PuBuGn",
    "orientation_code": "2"
  },
  "images/map_26_PuBuGn_3.png": {
    "map_nums": "26",
    "scale_name": "PuBuGn",
    "orientation_code": "3"
  },
  "images/map_26_PuBuGn_4.png": {
    "map_nums": "26",
    "scale_name": "PuBuGn",
    "orientation_code": "4"
  },
  "images/map_26_BuGn_1.png": {
    "map_nums": "26",
    "scale_name": "BuGn",
    "orientation_code": "1"
  },
  "images/map_26_BuGn_2.png": {
    "map_nums": "26",
    "scale_name": "BuGn",
    "orientation_code": "2"
  },
  "images/map_26_BuGn_3.png": {
    "map_nums": "26",
    "scale_name": "BuGn",
    "orientation_code": "3"
  },
  "images/map_26_BuGn_4.png": {
    "map_nums": "26",
    "scale_name": "BuGn",
    "orientation_code": "4"
  },
  "images/map_26_YlGn_1.png": {
    "map_nums": "26",
    "scale_name": "YlGn",
    "orientation_code": "1"
  },
  "images/map_26_YlGn_2.png": {
    "map_nums": "26",
    "scale_name": "YlGn",
    "orientation_code": "2"
  },
  "images/map_26_YlGn_3.png": {
    "map_nums": "26",
    "scale_name": "YlGn",
    "orientation_code": "3"
  },
  "images/map_26_YlGn_4.png": {
    "map_nums": "26",
    "scale_name": "YlGn",
    "orientation_code": "4"
  },
  "images/map_26_PiYG_1.png": {
    "map_nums": "26",
    "scale_name": "PiYG",
    "orientation_code": "1"
  },
  "images/map_26_PiYG_2.png": {
    "map_nums": "26",
    "scale_name": "PiYG",
    "orientation_code": "2"
  },
  "images/map_26_PiYG_3.png": {
    "map_nums": "26",
    "scale_name": "PiYG",
    "orientation_code": "3"
  },
  "images/map_26_PiYG_4.png": {
    "map_nums": "26",
    "scale_name": "PiYG",
    "orientation_code": "4"
  },
  "images/map_26_PRGn_1.png": {
    "map_nums": "26",
    "scale_name": "PRGn",
    "orientation_code": "1"
  },
  "images/map_26_PRGn_2.png": {
    "map_nums": "26",
    "scale_name": "PRGn",
    "orientation_code": "2"
  },
  "images/map_26_PRGn_3.png": {
    "map_nums": "26",
    "scale_name": "PRGn",
    "orientation_code": "3"
  },
  "images/map_26_PRGn_4.png": {
    "map_nums": "26",
    "scale_name": "PRGn",
    "orientation_code": "4"
  },
  "images/map_26_BrBG_1.png": {
    "map_nums": "26",
    "scale_name": "BrBG",
    "orientation_code": "1"
  },
  "images/map_26_BrBG_2.png": {
    "map_nums": "26",
    "scale_name": "BrBG",
    "orientation_code": "2"
  },
  "images/map_26_BrBG_3.png": {
    "map_nums": "26",
    "scale_name": "BrBG",
    "orientation_code": "3"
  },
  "images/map_26_BrBG_4.png": {
    "map_nums": "26",
    "scale_name": "BrBG",
    "orientation_code": "4"
  },
  "images/map_26_PuOr_1.png": {
    "map_nums": "26",
    "scale_name": "PuOr",
    "orientation_code": "1"
  },
  "images/map_26_PuOr_2.png": {
    "map_nums": "26",
    "scale_name": "PuOr",
    "orientation_code": "2"
  },
  "images/map_26_PuOr_3.png": {
    "map_nums": "26",
    "scale_name": "PuOr",
    "orientation_code": "3"
  },
  "images/map_26_PuOr_4.png": {
    "map_nums": "26",
    "scale_name": "PuOr",
    "orientation_code": "4"
  },
  "images/map_26_RdGy_1.png": {
    "map_nums": "26",
    "scale_name": "RdGy",
    "orientation_code": "1"
  },
  "images/map_26_RdGy_2.png": {
    "map_nums": "26",
    "scale_name": "RdGy",
    "orientation_code": "2"
  },
  "images/map_26_RdGy_3.png": {
    "map_nums": "26",
    "scale_name": "RdGy",
    "orientation_code": "3"
  },
  "images/map_26_RdGy_4.png": {
    "map_nums": "26",
    "scale_name": "RdGy",
    "orientation_code": "4"
  },
  "images/map_26_RdBu_1.png": {
    "map_nums": "26",
    "scale_name": "RdBu",
    "orientation_code": "1"
  },
  "images/map_26_RdBu_2.png": {
    "map_nums": "26",
    "scale_name": "RdBu",
    "orientation_code": "2"
  },
  "images/map_26_RdBu_3.png": {
    "map_nums": "26",
    "scale_name": "RdBu",
    "orientation_code": "3"
  },
  "images/map_26_RdBu_4.png": {
    "map_nums": "26",
    "scale_name": "RdBu",
    "orientation_code": "4"
  },
  "images/map_26_RdYlBu_1.png": {
    "map_nums": "26",
    "scale_name": "RdYlBu",
    "orientation_code": "1"
  },
  "images/map_26_RdYlBu_2.png": {
    "map_nums": "26",
    "scale_name": "RdYlBu",
    "orientation_code": "2"
  },
  "images/map_26_RdYlBu_3.png": {
    "map_nums": "26",
    "scale_name": "RdYlBu",
    "orientation_code": "3"
  },
  "images/map_26_RdYlBu_4.png": {
    "map_nums": "26",
    "scale_name": "RdYlBu",
    "orientation_code": "4"
  },
  "images/map_26_RdYlGn_1.png": {
    "map_nums": "26",
    "scale_name": "RdYlGn",
    "orientation_code": "1"
  },
  "images/map_26_RdYlGn_2.png": {
    "map_nums": "26",
    "scale_name": "RdYlGn",
    "orientation_code": "2"
  },
  "images/map_26_RdYlGn_3.png": {
    "map_nums": "26",
    "scale_name": "RdYlGn",
    "orientation_code": "3"
  },
  "images/map_26_RdYlGn_4.png": {
    "map_nums": "26",
    "scale_name": "RdYlGn",
    "orientation_code": "4"
  },
  "images/map_26_Spectral_1.png": {
    "map_nums": "26",
    "scale_name": "Spectral",
    "orientation_code": "1"
  },
  "images/map_26_Spectral_2.png": {
    "map_nums": "26",
    "scale_name": "Spectral",
    "orientation_code": "2"
  },
  "images/map_26_Spectral_3.png": {
    "map_nums": "26",
    "scale_name": "Spectral",
    "orientation_code": "3"
  },
  "images/map_26_Spectral_4.png": {
    "map_nums": "26",
    "scale_name": "Spectral",
    "orientation_code": "4"
  },
  "images/map_26_coolwarm_1.png": {
    "map_nums": "26",
    "scale_name": "coolwarm",
    "orientation_code": "1"
  },
  "images/map_26_coolwarm_2.png": {
    "map_nums": "26",
    "scale_name": "coolwarm",
    "orientation_code": "2"
  },
  "images/map_26_coolwarm_3.png": {
    "map_nums": "26",
    "scale_name": "coolwarm",
    "orientation_code": "3"
  },
  "images/map_26_coolwarm_4.png": {
    "map_nums": "26",
    "scale_name": "coolwarm",
    "orientation_code": "4"
  },
  "images/map_26_bwr_1.png": {
    "map_nums": "26",
    "scale_name": "bwr",
    "orientation_code": "1"
  },
  "images/map_26_bwr_2.png": {
    "map_nums": "26",
    "scale_name": "bwr",
    "orientation_code": "2"
  },
  "images/map_26_bwr_3.png": {
    "map_nums": "26",
    "scale_name": "bwr",
    "orientation_code": "3"
  },
  "images/map_26_bwr_4.png": {
    "map_nums": "26",
    "scale_name": "bwr",
    "orientation_code": "4"
  },
  "images/map_26_seismic_1.png": {
    "map_nums": "26",
    "scale_name": "seismic",
    "orientation_code": "1"
  },
  "images/map_26_seismic_2.png": {
    "map_nums": "26",
    "scale_name": "seismic",
    "orientation_code": "2"
  },
  "images/map_26_seismic_3.png": {
    "map_nums": "26",
    "scale_name": "seismic",
    "orientation_code": "3"
  },
  "images/map_26_seismic_4.png": {
    "map_nums": "26",
    "scale_name": "seismic",
    "orientation_code": "4"
  },
  "images/map_26_berlin_1.png": {
    "map_nums": "26",
    "scale_name": "berlin",
    "orientation_code": "1"
  },
  "images/map_26_berlin_2.png": {
    "map_nums": "26",
    "scale_name": "berlin",
    "orientation_code": "2"
  },
  "images/map_26_berlin_3.png": {
    "map_nums": "26",
    "scale_name": "berlin",
    "orientation_code": "3"
  },
  "images/map_26_berlin_4.png": {
    "map_nums": "26",
    "scale_name": "berlin",
    "orientation_code": "4"
  },
  "images/map_26_managua_1.png": {
    "map_nums": "26",
    "scale_name": "managua",
    "orientation_code": "1"
  },
  "images/map_26_managua_2.png": {
    "map_nums": "26",
    "scale_name": "managua",
    "orientation_code": "2"
  },
  "images/map_26_managua_3.png": {
    "map_nums": "26",
    "scale_name": "managua",
    "orientation_code": "3"
  },
  "images/map_26_managua_4.png": {
    "map_nums": "26",
    "scale_name": "managua",
    "orientation_code": "4"
  },
  "images/map_26_vanimo_1.png": {
    "map_nums": "26",
    "scale_name": "vanimo",
    "orientation_code": "1"
  },
  "images/map_26_vanimo_2.png": {
    "map_nums": "26",
    "scale_name": "vanimo",
    "orientation_code": "2"
  },
  "images/map_26_vanimo_3.png": {
    "map_nums": "26",
    "scale_name": "vanimo",
    "orientation_code": "3"
  },
  "images/map_26_vanimo_4.png": {
    "map_nums": "26",
    "scale_name": "vanimo",
    "orientation_code": "4"
  },
  "images/map_26_gist_earth_1.png": {
    "map_nums": "26",
    "scale_name": "gist",
    "orientation_code": "earth"
  },
  "images/map_26_gist_earth_2.png": {
    "map_nums": "26",
    "scale_name": "gist",
    "orientation_code": "earth"
  },
  "images/map_26_gist_earth_3.png": {
    "map_nums": "26",
    "scale_name": "gist",
    "orientation_code": "earth"
  },
  "images/map_26_gist_earth_4.png": {
    "map_nums": "26",
    "scale_name": "gist",
    "orientation_code": "earth"
  },
  "images/map_26_turbo_1.png": {
    "map_nums": "26",
    "scale_name": "turbo",
    "orientation_code": "1"
  },
  "images/map_26_turbo_2.png": {
    "map_nums": "26",
    "scale_name": "turbo",
    "orientation_code": "2"
  },
  "images/map_26_turbo_3.png": {
    "map_nums": "26",
    "scale_name": "turbo",
    "orientation_code": "3"
  },
  "images/map_26_turbo_4.png": {
    "map_nums": "26",
    "scale_name": "turbo",
    "orientation_code": "4"
  },
  "images/map_27_viridis_1.png": {
    "map_nums": "27",
    "scale_name": "viridis",
    "orientation_code": "1"
  },
  "images/map_27_viridis_2.png": {
    "map_nums": "27",
    "scale_name": "viridis",
    "orientation_code": "2"
  },
  "images/map_27_viridis_3.png": {
    "map_nums": "27",
    "scale_name": "viridis",
    "orientation_code": "3"
  },
  "images/map_27_viridis_4.png": {
    "map_nums": "27",
    "scale_name": "viridis",
    "orientation_code": "4"
  },
  "images/map_27_plasma_1.png": {
    "map_nums": "27",
    "scale_name": "plasma",
    "orientation_code": "1"
  },
  "images/map_27_plasma_2.png": {
    "map_nums": "27",
    "scale_name": "plasma",
    "orientation_code": "2"
  },
  "images/map_27_plasma_3.png": {
    "map_nums": "27",
    "scale_name": "plasma",
    "orientation_code": "3"
  },
  "images/map_27_plasma_4.png": {
    "map_nums": "27",
    "scale_name": "plasma",
    "orientation_code": "4"
  },
  "images/map_27_inferno_1.png": {
    "map_nums": "27",
    "scale_name": "inferno",
    "orientation_code": "1"
  },
  "images/map_27_inferno_2.png": {
    "map_nums": "27",
    "scale_name": "inferno",
    "orientation_code": "2"
  },
  "images/map_27_inferno_3.png": {
    "map_nums": "27",
    "scale_name": "inferno",
    "orientation_code": "3"
  },
  "images/map_27_inferno_4.png": {
    "map_nums": "27",
    "scale_name": "inferno",
    "orientation_code": "4"
  },
  "images/map_27_magma_1.png": {
    "map_nums": "27",
    "scale_name": "magma",
    "orientation_code": "1"
  },
  "images/map_27_magma_2.png": {
    "map_nums": "27",
    "scale_name": "magma",
    "orientation_code": "2"
  },
  "images/map_27_magma_3.png": {
    "map_nums": "27",
    "scale_name": "magma",
    "orientation_code": "3"
  },
  "images/map_27_magma_4.png": {
    "map_nums": "27",
    "scale_name": "magma",
    "orientation_code": "4"
  },
  "images/map_27_cividis_1.png": {
    "map_nums": "27",
    "scale_name": "cividis",
    "orientation_code": "1"
  },
  "images/map_27_cividis_2.png": {
    "map_nums": "27",
    "scale_name": "cividis",
    "orientation_code": "2"
  },
  "images/map_27_cividis_3.png": {
    "map_nums": "27",
    "scale_name": "cividis",
    "orientation_code": "3"
  },
  "images/map_27_cividis_4.png": {
    "map_nums": "27",
    "scale_name": "cividis",
    "orientation_code": "4"
  },
  "images/map_27_Greys_1.png": {
    "map_nums": "27",
    "scale_name": "Greys",
    "orientation_code": "1"
  },
  "images/map_27_Greys_2.png": {
    "map_nums": "27",
    "scale_name": "Greys",
    "orientation_code": "2"
  },
  "images/map_27_Greys_3.png": {
    "map_nums": "27",
    "scale_name": "Greys",
    "orientation_code": "3"
  },
  "images/map_27_Greys_4.png": {
    "map_nums": "27",
    "scale_name": "Greys",
    "orientation_code": "4"
  },
  "images/map_27_Purples_1.png": {
    "map_nums": "27",
    "scale_name": "Purples",
    "orientation_code": "1"
  },
  "images/map_27_Purples_2.png": {
    "map_nums": "27",
    "scale_name": "Purples",
    "orientation_code": "2"
  },
  "images/map_27_Purples_3.png": {
    "map_nums": "27",
    "scale_name": "Purples",
    "orientation_code": "3"
  },
  "images/map_27_Purples_4.png": {
    "map_nums": "27",
    "scale_name": "Purples",
    "orientation_code": "4"
  },
  "images/map_27_Blues_1.png": {
    "map_nums": "27",
    "scale_name": "Blues",
    "orientation_code": "1"
  },
  "images/map_27_Blues_2.png": {
    "map_nums": "27",
    "scale_name": "Blues",
    "orientation_code": "2"
  },
  "images/map_27_Blues_3.png": {
    "map_nums": "27",
    "scale_name": "Blues",
    "orientation_code": "3"
  },
  "images/map_27_Blues_4.png": {
    "map_nums": "27",
    "scale_name": "Blues",
    "orientation_code": "4"
  },
  "images/map_27_Greens_1.png": {
    "map_nums": "27",
    "scale_name": "Greens",
    "orientation_code": "1"
  },
  "images/map_27_Greens_2.png": {
    "map_nums": "27",
    "scale_name": "Greens",
    "orientation_code": "2"
  },
  "images/map_27_Greens_3.png": {
    "map_nums": "27",
    "scale_name": "Greens",
    "orientation_code": "3"
  },
  "images/map_27_Greens_4.png": {
    "map_nums": "27",
    "scale_name": "Greens",
    "orientation_code": "4"
  },
  "images/map_27_Oranges_1.png": {
    "map_nums": "27",
    "scale_name": "Oranges",
    "orientation_code": "1"
  },
  "images/map_27_Oranges_2.png": {
    "map_nums": "27",
    "scale_name": "Oranges",
    "orientation_code": "2"
  },
  "images/map_27_Oranges_3.png": {
    "map_nums": "27",
    "scale_name": "Oranges",
    "orientation_code": "3"
  },
  "images/map_27_Oranges_4.png": {
    "map_nums": "27",
    "scale_name": "Oranges",
    "orientation_code": "4"
  },
  "images/map_27_Reds_1.png": {
    "map_nums": "27",
    "scale_name": "Reds",
    "orientation_code": "1"
  },
  "images/map_27_Reds_2.png": {
    "map_nums": "27",
    "scale_name": "Reds",
    "orientation_code": "2"
  },
  "images/map_27_Reds_3.png": {
    "map_nums": "27",
    "scale_name": "Reds",
    "orientation_code": "3"
  },
  "images/map_27_Reds_4.png": {
    "map_nums": "27",
    "scale_name": "Reds",
    "orientation_code": "4"
  },
  "images/map_27_YlOrBr_1.png": {
    "map_nums": "27",
    "scale_name": "YlOrBr",
    "orientation_code": "1"
  },
  "images/map_27_YlOrBr_2.png": {
    "map_nums": "27",
    "scale_name": "YlOrBr",
    "orientation_code": "2"
  },
  "images/map_27_YlOrBr_3.png": {
    "map_nums": "27",
    "scale_name": "YlOrBr",
    "orientation_code": "3"
  },
  "images/map_27_YlOrBr_4.png": {
    "map_nums": "27",
    "scale_name": "YlOrBr",
    "orientation_code": "4"
  },
  "images/map_27_YlOrRd_1.png": {
    "map_nums": "27",
    "scale_name": "YlOrRd",
    "orientation_code": "1"
  },
  "images/map_27_YlOrRd_2.png": {
    "map_nums": "27",
    "scale_name": "YlOrRd",
    "orientation_code": "2"
  },
  "images/map_27_YlOrRd_3.png": {
    "map_nums": "27",
    "scale_name": "YlOrRd",
    "orientation_code": "3"
  },
  "images/map_27_YlOrRd_4.png": {
    "map_nums": "27",
    "scale_name": "YlOrRd",
    "orientation_code": "4"
  },
  "images/map_27_OrRd_1.png": {
    "map_nums": "27",
    "scale_name": "OrRd",
    "orientation_code": "1"
  },
  "images/map_27_OrRd_2.png": {
    "map_nums": "27",
    "scale_name": "OrRd",
    "orientation_code": "2"
  },
  "images/map_27_OrRd_3.png": {
    "map_nums": "27",
    "scale_name": "OrRd",
    "orientation_code": "3"
  },
  "images/map_27_OrRd_4.png": {
    "map_nums": "27",
    "scale_name": "OrRd",
    "orientation_code": "4"
  },
  "images/map_27_PuRd_1.png": {
    "map_nums": "27",
    "scale_name": "PuRd",
    "orientation_code": "1"
  },
  "images/map_27_PuRd_2.png": {
    "map_nums": "27",
    "scale_name": "PuRd",
    "orientation_code": "2"
  },
  "images/map_27_PuRd_3.png": {
    "map_nums": "27",
    "scale_name": "PuRd",
    "orientation_code": "3"
  },
  "images/map_27_PuRd_4.png": {
    "map_nums": "27",
    "scale_name": "PuRd",
    "orientation_code": "4"
  },
  "images/map_27_RdPu_1.png": {
    "map_nums": "27",
    "scale_name": "RdPu",
    "orientation_code": "1"
  },
  "images/map_27_RdPu_2.png": {
    "map_nums": "27",
    "scale_name": "RdPu",
    "orientation_code": "2"
  },
  "images/map_27_RdPu_3.png": {
    "map_nums": "27",
    "scale_name": "RdPu",
    "orientation_code": "3"
  },
  "images/map_27_RdPu_4.png": {
    "map_nums": "27",
    "scale_name": "RdPu",
    "orientation_code": "4"
  },
  "images/map_27_BuPu_1.png": {
    "map_nums": "27",
    "scale_name": "BuPu",
    "orientation_code": "1"
  },
  "images/map_27_BuPu_2.png": {
    "map_nums": "27",
    "scale_name": "BuPu",
    "orientation_code": "2"
  },
  "images/map_27_BuPu_3.png": {
    "map_nums": "27",
    "scale_name": "BuPu",
    "orientation_code": "3"
  },
  "images/map_27_BuPu_4.png": {
    "map_nums": "27",
    "scale_name": "BuPu",
    "orientation_code": "4"
  },
  "images/map_27_GnBu_1.png": {
    "map_nums": "27",
    "scale_name": "GnBu",
    "orientation_code": "1"
  },
  "images/map_27_GnBu_2.png": {
    "map_nums": "27",
    "scale_name": "GnBu",
    "orientation_code": "2"
  },
  "images/map_27_GnBu_3.png": {
    "map_nums": "27",
    "scale_name": "GnBu",
    "orientation_code": "3"
  },
  "images/map_27_GnBu_4.png": {
    "map_nums": "27",
    "scale_name": "GnBu",
    "orientation_code": "4"
  },
  "images/map_27_PuBu_1.png": {
    "map_nums": "27",
    "scale_name": "PuBu",
    "orientation_code": "1"
  },
  "images/map_27_PuBu_2.png": {
    "map_nums": "27",
    "scale_name": "PuBu",
    "orientation_code": "2"
  },
  "images/map_27_PuBu_3.png": {
    "map_nums": "27",
    "scale_name": "PuBu",
    "orientation_code": "3"
  },
  "images/map_27_PuBu_4.png": {
    "map_nums": "27",
    "scale_name": "PuBu",
    "orientation_code": "4"
  },
  "images/map_27_YlGnBu_1.png": {
    "map_nums": "27",
    "scale_name": "YlGnBu",
    "orientation_code": "1"
  },
  "images/map_27_YlGnBu_2.png": {
    "map_nums": "27",
    "scale_name": "YlGnBu",
    "orientation_code": "2"
  },
  "images/map_27_YlGnBu_3.png": {
    "map_nums": "27",
    "scale_name": "YlGnBu",
    "orientation_code": "3"
  },
  "images/map_27_YlGnBu_4.png": {
    "map_nums": "27",
    "scale_name": "YlGnBu",
    "orientation_code": "4"
  },
  "images/map_27_PuBuGn_1.png": {
    "map_nums": "27",
    "scale_name": "PuBuGn",
    "orientation_code": "1"
  },
  "images/map_27_PuBuGn_2.png": {
    "map_nums": "27",
    "scale_name": "PuBuGn",
    "orientation_code": "2"
  },
  "images/map_27_PuBuGn_3.png": {
    "map_nums": "27",
    "scale_name": "PuBuGn",
    "orientation_code": "3"
  },
  "images/map_27_PuBuGn_4.png": {
    "map_nums": "27",
    "scale_name": "PuBuGn",
    "orientation_code": "4"
  },
  "images/map_27_BuGn_1.png": {
    "map_nums": "27",
    "scale_name": "BuGn",
    "orientation_code": "1"
  },
  "images/map_27_BuGn_2.png": {
    "map_nums": "27",
    "scale_name": "BuGn",
    "orientation_code": "2"
  },
  "images/map_27_BuGn_3.png": {
    "map_nums": "27",
    "scale_name": "BuGn",
    "orientation_code": "3"
  },
  "images/map_27_BuGn_4.png": {
    "map_nums": "27",
    "scale_name": "BuGn",
    "orientation_code": "4"
  },
  "images/map_27_YlGn_1.png": {
    "map_nums": "27",
    "scale_name": "YlGn",
    "orientation_code": "1"
  },
  "images/map_27_YlGn_2.png": {
    "map_nums": "27",
    "scale_name": "YlGn",
    "orientation_code": "2"
  },
  "images/map_27_YlGn_3.png": {
    "map_nums": "27",
    "scale_name": "YlGn",
    "orientation_code": "3"
  },
  "images/map_27_YlGn_4.png": {
    "map_nums": "27",
    "scale_name": "YlGn",
    "orientation_code": "4"
  },
  "images/map_27_PiYG_1.png": {
    "map_nums": "27",
    "scale_name": "PiYG",
    "orientation_code": "1"
  },
  "images/map_27_PiYG_2.png": {
    "map_nums": "27",
    "scale_name": "PiYG",
    "orientation_code": "2"
  },
  "images/map_27_PiYG_3.png": {
    "map_nums": "27",
    "scale_name": "PiYG",
    "orientation_code": "3"
  },
  "images/map_27_PiYG_4.png": {
    "map_nums": "27",
    "scale_name": "PiYG",
    "orientation_code": "4"
  },
  "images/map_27_PRGn_1.png": {
    "map_nums": "27",
    "scale_name": "PRGn",
    "orientation_code": "1"
  },
  "images/map_27_PRGn_2.png": {
    "map_nums": "27",
    "scale_name": "PRGn",
    "orientation_code": "2"
  },
  "images/map_27_PRGn_3.png": {
    "map_nums": "27",
    "scale_name": "PRGn",
    "orientation_code": "3"
  },
  "images/map_27_PRGn_4.png": {
    "map_nums": "27",
    "scale_name": "PRGn",
    "orientation_code": "4"
  },
  "images/map_27_BrBG_1.png": {
    "map_nums": "27",
    "scale_name": "BrBG",
    "orientation_code": "1"
  },
  "images/map_27_BrBG_2.png": {
    "map_nums": "27",
    "scale_name": "BrBG",
    "orientation_code": "2"
  },
  "images/map_27_BrBG_3.png": {
    "map_nums": "27",
    "scale_name": "BrBG",
    "orientation_code": "3"
  },
  "images/map_27_BrBG_4.png": {
    "map_nums": "27",
    "scale_name": "BrBG",
    "orientation_code": "4"
  },
  "images/map_27_PuOr_1.png": {
    "map_nums": "27",
    "scale_name": "PuOr",
    "orientation_code": "1"
  },
  "images/map_27_PuOr_2.png": {
    "map_nums": "27",
    "scale_name": "PuOr",
    "orientation_code": "2"
  },
  "images/map_27_PuOr_3.png": {
    "map_nums": "27",
    "scale_name": "PuOr",
    "orientation_code": "3"
  },
  "images/map_27_PuOr_4.png": {
    "map_nums": "27",
    "scale_name": "PuOr",
    "orientation_code": "4"
  },
  "images/map_27_RdGy_1.png": {
    "map_nums": "27",
    "scale_name": "RdGy",
    "orientation_code": "1"
  },
  "images/map_27_RdGy_2.png": {
    "map_nums": "27",
    "scale_name": "RdGy",
    "orientation_code": "2"
  },
  "images/map_27_RdGy_3.png": {
    "map_nums": "27",
    "scale_name": "RdGy",
    "orientation_code": "3"
  },
  "images/map_27_RdGy_4.png": {
    "map_nums": "27",
    "scale_name": "RdGy",
    "orientation_code": "4"
  },
  "images/map_27_RdBu_1.png": {
    "map_nums": "27",
    "scale_name": "RdBu",
    "orientation_code": "1"
  },
  "images/map_27_RdBu_2.png": {
    "map_nums": "27",
    "scale_name": "RdBu",
    "orientation_code": "2"
  },
  "images/map_27_RdBu_3.png": {
    "map_nums": "27",
    "scale_name": "RdBu",
    "orientation_code": "3"
  },
  "images/map_27_RdBu_4.png": {
    "map_nums": "27",
    "scale_name": "RdBu",
    "orientation_code": "4"
  },
  "images/map_27_RdYlBu_1.png": {
    "map_nums": "27",
    "scale_name": "RdYlBu",
    "orientation_code": "1"
  },
  "images/map_27_RdYlBu_2.png": {
    "map_nums": "27",
    "scale_name": "RdYlBu",
    "orientation_code": "2"
  },
  "images/map_27_RdYlBu_3.png": {
    "map_nums": "27",
    "scale_name": "RdYlBu",
    "orientation_code": "3"
  },
  "images/map_27_RdYlBu_4.png": {
    "map_nums": "27",
    "scale_name": "RdYlBu",
    "orientation_code": "4"
  },
  "images/map_27_RdYlGn_1.png": {
    "map_nums": "27",
    "scale_name": "RdYlGn",
    "orientation_code": "1"
  },
  "images/map_27_RdYlGn_2.png": {
    "map_nums": "27",
    "scale_name": "RdYlGn",
    "orientation_code": "2"
  },
  "images/map_27_RdYlGn_3.png": {
    "map_nums": "27",
    "scale_name": "RdYlGn",
    "orientation_code": "3"
  },
  "images/map_27_RdYlGn_4.png": {
    "map_nums": "27",
    "scale_name": "RdYlGn",
    "orientation_code": "4"
  },
  "images/map_27_Spectral_1.png": {
    "map_nums": "27",
    "scale_name": "Spectral",
    "orientation_code": "1"
  },
  "images/map_27_Spectral_2.png": {
    "map_nums": "27",
    "scale_name": "Spectral",
    "orientation_code": "2"
  },
  "images/map_27_Spectral_3.png": {
    "map_nums": "27",
    "scale_name": "Spectral",
    "orientation_code": "3"
  },
  "images/map_27_Spectral_4.png": {
    "map_nums": "27",
    "scale_name": "Spectral",
    "orientation_code": "4"
  },
  "images/map_27_coolwarm_1.png": {
    "map_nums": "27",
    "scale_name": "coolwarm",
    "orientation_code": "1"
  },
  "images/map_27_coolwarm_2.png": {
    "map_nums": "27",
    "scale_name": "coolwarm",
    "orientation_code": "2"
  },
  "images/map_27_coolwarm_3.png": {
    "map_nums": "27",
    "scale_name": "coolwarm",
    "orientation_code": "3"
  },
  "images/map_27_coolwarm_4.png": {
    "map_nums": "27",
    "scale_name": "coolwarm",
    "orientation_code": "4"
  },
  "images/map_27_bwr_1.png": {
    "map_nums": "27",
    "scale_name": "bwr",
    "orientation_code": "1"
  },
  "images/map_27_bwr_2.png": {
    "map_nums": "27",
    "scale_name": "bwr",
    "orientation_code": "2"
  },
  "images/map_27_bwr_3.png": {
    "map_nums": "27",
    "scale_name": "bwr",
    "orientation_code": "3"
  },
  "images/map_27_bwr_4.png": {
    "map_nums": "27",
    "scale_name": "bwr",
    "orientation_code": "4"
  },
  "images/map_27_seismic_1.png": {
    "map_nums": "27",
    "scale_name": "seismic",
    "orientation_code": "1"
  },
  "images/map_27_seismic_2.png": {
    "map_nums": "27",
    "scale_name": "seismic",
    "orientation_code": "2"
  },
  "images/map_27_seismic_3.png": {
    "map_nums": "27",
    "scale_name": "seismic",
    "orientation_code": "3"
  },
  "images/map_27_seismic_4.png": {
    "map_nums": "27",
    "scale_name": "seismic",
    "orientation_code": "4"
  },
  "images/map_27_berlin_1.png": {
    "map_nums": "27",
    "scale_name": "berlin",
    "orientation_code": "1"
  },
  "images/map_27_berlin_2.png": {
    "map_nums": "27",
    "scale_name": "berlin",
    "orientation_code": "2"
  },
  "images/map_27_berlin_3.png": {
    "map_nums": "27",
    "scale_name": "berlin",
    "orientation_code": "3"
  },
  "images/map_27_berlin_4.png": {
    "map_nums": "27",
    "scale_name": "berlin",
    "orientation_code": "4"
  },
  "images/map_27_managua_1.png": {
    "map_nums": "27",
    "scale_name": "managua",
    "orientation_code": "1"
  },
  "images/map_27_managua_2.png": {
    "map_nums": "27",
    "scale_name": "managua",
    "orientation_code": "2"
  },
  "images/map_27_managua_3.png": {
    "map_nums": "27",
    "scale_name": "managua",
    "orientation_code": "3"
  },
  "images/map_27_managua_4.png": {
    "map_nums": "27",
    "scale_name": "managua",
    "orientation_code": "4"
  },
  "images/map_27_vanimo_1.png": {
    "map_nums": "27",
    "scale_name": "vanimo",
    "orientation_code": "1"
  },
  "images/map_27_vanimo_2.png": {
    "map_nums": "27",
    "scale_name": "vanimo",
    "orientation_code": "2"
  },
  "images/map_27_vanimo_3.png": {
    "map_nums": "27",
    "scale_name": "vanimo",
    "orientation_code": "3"
  },
  "images/map_27_vanimo_4.png": {
    "map_nums": "27",
    "scale_name": "vanimo",
    "orientation_code": "4"
  },
  "images/map_27_gist_earth_1.png": {
    "map_nums": "27",
    "scale_name": "gist",
    "orientation_code": "earth"
  },
  "images/map_27_gist_earth_2.png": {
    "map_nums": "27",
    "scale_name": "gist",
    "orientation_code": "earth"
  },
  "images/map_27_gist_earth_3.png": {
    "map_nums": "27",
    "scale_name": "gist",
    "orientation_code": "earth"
  },
  "images/map_27_gist_earth_4.png": {
    "map_nums": "27",
    "scale_name": "gist",
    "orientation_code": "earth"
  },
  "images/map_27_turbo_1.png": {
    "map_nums": "27",
    "scale_name": "turbo",
    "orientation_code": "1"
  },
  "images/map_27_turbo_2.png": {
    "map_nums": "27",
    "scale_name": "turbo",
    "orientation_code": "2"
  },
  "images/map_27_turbo_3.png": {
    "map_nums": "27",
    "scale_name": "turbo",
    "orientation_code": "3"
  },
  "images/map_27_turbo_4.png": {
    "map_nums": "27",
    "scale_name": "turbo",
    "orientation_code": "4"
  }
};
var map_ids = [
  "02_1",
  "02_2",
  "02_3",
  "02_4",
  "05_1",
  "05_2",
  "05_3",
  "05_4",
  "07_1",
  "07_2",
  "07_3",
  "07_4",
  "10_1",
  "10_2",
  "10_3",
  "10_4",
  "12_1",
  "12_2",
  "12_3",
  "12_4",
  "13_1",
  "13_2",
  "13_3",
  "13_4",
  "15_1",
  "15_2",
  "15_3",
  "15_4",
  "23_1",
  "23_2",
  "23_3",
  "23_4",
  "26_1",
  "26_2",
  "26_3",
  "26_4",
  "27_1",
  "27_2",
  "27_3",
  "27_4"
];
var color_scales = [
  "viridis",
  "plasma",
  "inferno",
  "magma",
  "cividis",
  "Greys",
  "Purples",
  "Blues",
  "Greens",
  "Oranges",
  "Reds",
  "YlOrBr",
  "YlOrRd",
  "OrRd",
  "PuRd",
  "RdPu",
  "BuPu",
  "GnBu",
  "PuBu",
  "YlGnBu",
  "PuBuGn",
  "BuGn",
  "YlGn",
  "PiYG",
  "PRGn",
  "BrBG",
  "PuOr",
  "RdGy",
  "RdBu",
  "RdYlBu",
  "RdYlGn",
  "Spectral",
  "coolwarm",
  "bwr",
  "seismic",
  "berlin",
  "managua",
  "vanimo",
  "gist_earth",
  "turbo"
];