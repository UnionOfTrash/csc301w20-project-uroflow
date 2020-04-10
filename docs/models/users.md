# Users Model

## Attributes:

| Name        | Type    | Default Value | Nullable |
|:-----------:| -------:| -------------:|:--------:|
| id          | UUID    | UUIDv4        | No       |
| username    | string  |               | No       |
| password    | string  |               | Yes      |
| role        | string  | patient       | No       |
| initialized | boolean | false         | No       |

### Primary Key: id

### Unique Keys: username

## Additional Notes:

### Role:

could only be the following:
* "admin"
* "clinician"
* "patient" (by default)

### Initialize:

representing the status of the password field of a users account \
if false the app should pop up a window to help users setup their password
