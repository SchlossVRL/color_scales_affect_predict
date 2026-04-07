#####
# This is a script that lets you specify a column name to remove from the raw data
# The script will download all the files in a data folder, combine them into a single dataframe, remove the specified column, and write out the dataframe to a csv file
#####

required_packages <- c("tidyverse")
new_packages <- required_packages[!(required_packages %in% installed.packages()[,"Package"])]
if(length(new_packages)) install.packages(new_packages)
lapply(required_packages, require, character.only = TRUE)

### what is the name of the column that you want to remove?
worker_id_colname <- "sona_id" #this is the name of the column you want removed
data_dir = '../dot_data' #update for bar_data
project_id = 'dots'
outname <- sprintf("%s_raw_subject_data.csv", project_id)
current_dir <- getwd()

### directory where the raw data is
#data_dir <- file.path(current_dir, data_dir)

## read in all the files in the data dir and combine into single dataframe
files <- list.files(data_dir, full.names = TRUE)
df <- lapply(files, read.csv)
df <- do.call(rbind, df)

### if  worker_id_colname is in the dataframe, remove it
if (worker_id_colname %in% colnames(df)) {
  df <- df %>% select(-worker_id_colname)
}
## write out df to a csv file
write.csv(df, file.path(current_dir, outname), row.names = TRUE, col.names = TRUE)
