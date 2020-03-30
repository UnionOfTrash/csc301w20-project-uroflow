# Patients Model

## Attributes:

| Name        | Type      | Default Value | Nullable |
|:-----------:| ---------:| -------------:|:--------:|
| id          | UUID      | UUIDv4        | No       |
| study_id    | string    |               | No       |
| dob         | date_only |               | No       |
| sex         | boolean   | true          | No       |
| num_records | integer   | 0             | No       |
| has_new     | boolean   | false         | No       |
| condition   | text      |               | Yes      |

### Primary Key: id

### Unique Keys: study_id

## Additional Notes:

### Sex:

true -- Male
false -- Female
