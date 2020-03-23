# Users API

## Path: ```/users```

## Related Model: [users](../models/users.md)

## Supported HTTP Verbs: ```GET```, ```POST```, ```PUT```, ```PATCH```, ```DELETE```

## Supported Socket Methods: ```find()```, ```get()```, ```create()```, ```update()```, ```patch()```, ```remove()```

### ```GET``` / ```find()```:

request:
Does not have a body

response:
```json
[
  {
    "id": USERID,
    "username": USERNAME,
    "role": 0 / 1,
    "initialized": true / false,
    "createdAt": TIMESTAMP,
    "updatedAt": TIMESTAMP
  }, ...
] -- a list of users models
```

### ```GET``` / ```get()``` and ```DELETE``` / ```remove()```:

request: ```?id=USERID```, does not have a body

response:
```json
[
  {
    "id": USERID,
    "username": USERNAME,
    "role": 0 / 1,
    "initialized": true / false,
    "createdAt": TIMESTAMP,
    "updatedAt": TIMESTAMP
  }
] -- though a list, it only contains one users model
```

### ```POST``` / ```create()```:

request:
```json
{
  "username": USERNAME,
  "password": PASSWORD, -- optional
  "role": 0 / 1, -- optional, 0 by default, not recommended
  "initialized": true / false, -- optional, false by default, set to true if password is also sent
}
```

response:
```json
{
  "id": USERID,
  "username": USERNAME,
  "role": 0 / 1,
  "initialized": true / false,
  "createdAt": TIMESTAMP,
  "updatedAt": TIMESTAMP
} -- only a simple users model
```

### ```PUT``` / ```update()``` and ```PATCH``` / ```patch()```:

request: ```?id=USERID```, body same as ```POST``` / ```create()```

response: same as ```POST``` / ```create()```


## Additional Notes:

1. For patients creation please use ```POST /patients``` or ```app.service("patients").create()```, this will automatically create a new users model
