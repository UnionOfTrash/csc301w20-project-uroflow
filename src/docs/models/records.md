# Records Model

## Attributes:

| Name         | Type             | Default Value | Nullable |
|:------------:| ----------------:| -------------:|:--------:|
| id           | UUID             | UUIDv4        | No       |
| condition    | array of boolean |               | No       |
| pcomment     | text             |               | Yes      |
| ccomment     | text             |               | Yes      |
| patient_id   | UUID             |               | No       |

### Primary Key: id

### Foreign Keys: patient_id

## Additional Notes:

### Condition:

an array of length 3 fixed \
representing: leak, poop and urgent respectively
