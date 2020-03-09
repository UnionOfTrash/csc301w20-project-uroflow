# Records Model

## Attributes:

| Name      | Type             | Default Value | Nullable |
|:---------:| ----------------:| -------------:|:--------:|
| id        | UUID             | UUIDv4        | No       |
| condition | array of boolean |               | No       |
| pcomment  | text             |               | Yes      |
| ccomment  | text             |               | Yes      |
| user_id   | UUID             |               | No       |
| audio_id  | UUID             |               | No       |
| curve_id  | UUID             |               | Yes      |

### Primary Key: id

### Foreign Keys: user_id, audio_id, curve_id

## Additional Notes:

### Condition:

an array of length 3 fixed
