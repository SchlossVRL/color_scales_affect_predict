#####
# This is a script that cleans and preprocesses the raw experiment data
# The script will:
# - exclude participants who miss more than 2 of the 11 ishihara plates, answer yes to eithe color vision check, or completed the experiment on a device other than a computer
# - write a csv listing excluded participant ids, total participants collected, the number of participants excluded, and final number of participants called: 'exclusion.csv'
# - write a csv with demographic information for participants included in data analysis
# - rename inconsistent columns names and make sure they are tidy friendly
# - use the image_id value to specify the condition columns to match the stimProp data frame
# - normalize the ratings to range from 0 to 1 
# The script will write out to a "clean" csv of the all the participant data
#####

required_packages <- c("tidyverse", "jsonlite", "purrr")
new_packages <- required_packages[!(required_packages %in% installed.packages()[,"Package"])]
if(length(new_packages)) install.packages(new_packages)
lapply(required_packages, require, character.only = TRUE)

#get current working directory
current_dir <- getwd()

#read in data 
df <-  read_csv("bars_raw_subject_data.csv") # dots for dot plot experiment, bars for bar plot experiment

#color vision exclusion ########################################################

# select ishihara plate and color vision question trials
survey <- df %>% 
  filter(trial_type == "survey-multi-choice")


ishihara <- df %>% 
  filter(ishihara_plate %in% c(0,1,2,3,4,5,6,7,8,9,10))

# clean json structure
survey <- survey %>% 
  mutate(response = map(response, fromJSON)) %>%
  unnest_wider(response)

ishihara <- ishihara %>% 
  mutate(response = map(response, fromJSON)) %>%
  unnest_wider(response)

#exclude logic
exclude_ids_survey <- survey %>%
  filter(
    colorDifficulty != "No" |
      colorBlind != "No" |
      device != "Computer"
  ) %>%
  distinct(subject_id) %>%
  pull(subject_id)


exclude_ids_ishihara <- ishihara %>% 
  #count number of incorrect responses per participant
  group_by(subject_id) %>%
  summarise(incorrect_count = sum(number != correct_response, na.rm = TRUE)) %>%
  #keep participants with more than 2 incorrect responses
  filter(incorrect_count > 2) %>%
  pull(subject_id)


#append exclusion lists
exclude_ids <- unique(c(exclude_ids_survey, exclude_ids_ishihara))

#create exclusion df
exclusions <- tibble(
  excluded_subjects = list(exclude_ids),  
  total_subjects = n_distinct(df$subject_id),               
  n_excluded = length(exclude_ids),                         
  final_subjects = n_distinct(df$subject_id) - length(exclude_ids)  
)

#write to csv
write_csv(exclusions, "bars_exclusions.csv")


#remove excluded participants from main analysis data

df <- df %>%
  filter(!subject_id %in% exclude_ids)


#create demographics data ######################################################
dem <- df %>% 
  filter(trial_type == "survey-text")

# clean json structure
dem <- dem %>% 
  mutate(response = map(response, fromJSON)) %>%
  unnest_wider(response)

#tidy friendly column name
dem <- dem %>% 
  rename(
    Race_ethnicity = 'Race/ethnicity'
  )

dem <- dem %>% 
  select(subject_id, Age, Gender, Race_ethnicity)


#write to csv
write_csv(dem, "bars_demographics.csv")

#clean main data ###############################################################

#filter to only include ratings trials
df <- df %>% 
  filter((is.na(practiceTrial) | practiceTrial == FALSE) & trial_type == "html-slider-response")

df <- df %>% 
  rename(
    image_id = texture_id
  )

df <- df %>% 
  select(subject_id, concept, image_id, response)


#extract info into separate columns
df <- df %>%
  mutate(filename = basename(image_id)) %>%  # remove the folder path
  extract(
    col = filename,
    into = c("SubjNum", "Emotion", "AssocCond", "Version", "Palette", "ColorOrder", "YOrder", "plot"),
    regex = "(\\d+)_([A-Za-z]+)_([a-z]+_[a-z]+)_(\\d+)_([A-Za-z0-9]+)_([a-z]+)_([a-z]+)_([a-z]+)\\.png"
  ) %>%
  mutate(Emotion = str_to_lower(Emotion))

df$response <- as.numeric(df$response)

#normalize response to range between 0 and 1
df <- df %>%
  mutate(response = ((response + 200) * 1)/400)

#remove conflicted trials
df <- df%>%
  filter(!grepl("conflicted", image_id))

#write to csv
write_csv(df, "bars_data_clean.csv")
