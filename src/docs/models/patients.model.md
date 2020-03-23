# Patients Model

## Attributes:

| Name        | Type      | Default Value | Nullable |
|:-----------:| ---------:| -------------:|:--------:|
| id          | UUID      |               | No       |
| study_id    | string    |               | No       |
| dob         | date_only |               | No       |
| sex         | string    |               | No       |
| num_records | integer   | 0             | No       |
| has_new     | boolean   | false         | No       |
| condition   | text      |               | Yes      |

### Primary Key: id

### Unique Keys: study_id

### Foreign Keys: id

## Additional Notes:

### Sex:

sex could either be "Male" or "Female"

### Num_Records:

will be updated every time a new record is added to the database

### Has_New:

will be changed to true if a new record id added \
triggered false when any clinician has viewed the record
