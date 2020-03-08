# Users Model

## Attributes:

| Name        | Type    | Default Value | Nullable |
|:-----------:| -------:| -------------:|:--------:|
| id          | UUID    | UUIDv4        | No       |
| username    | string  |               | No       |
| password    | string  |               | Yes      |
| role        | integer | 0             | No       |
| initialized | boolean | false         | No       |

### Primary Key: id

### Unique Keys: username

## Additional Notes:

### Role:

0 -- patient \
1 -- clinician \
using integer for space saving and future modifiability

### Initialize:

true -- has been initialized \
false -- the other way \
if false the app should pop up a window to help users setup their password
