#####
# This is a script that lets you specify a column name to remove from the raw data
# The script will download all the files in a data folder, remove the specified column, and rewrite to the csv file
#####

required_packages <- c("tidyverse")
new_packages <- required_packages[!(required_packages %in% installed.packages()[,"Package"])]
if(length(new_packages)) install.packages(new_packages)
lapply(required_packages, require, character.only = TRUE)

### what is the name of the column that you want to remove?
worker_id_colname <- "sona_id" #this is the name of the column you want removed
data_dir = '../bar_data' #update for bar_data
project_id = 'bars' #update for bars
outname <- sprintf("%s_raw_subject_data.csv", project_id)
current_dir <- getwd()

### directory where the raw data is
#data_dir <- file.path(current_dir, data_dir)

## read in all the files in the data dir and combine into single dataframe
files <- list.files(data_dir, full.names = TRUE)

for (f in files) {
  df <- read.csv(f)
  
  # remove column if it exists
  if (worker_id_colname %in% colnames(df)) {
    df <- df %>% select(-worker_id_colname)
  }
  
  # overwrite the original file
  write.csv(df, f, row.names = FALSE)
}