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
    "role": ROLE,
    "initialized": true / false,
    "createdAt": TIMESTAMP,
    "updatedAt": TIMESTAMP
  }, ...
] -- a list of users models
```

### ```GET``` / ```get()``` and ```DELETE``` / ```remove()```:

request: ```HOST/users/USERID```, does not have a body

response:
```json
{
  "id": USERID,
  "username": USERNAME,
  "role": ROLE,
  "initialized": true / false,
  "createdAt": TIMESTAMP,
  "updatedAt": TIMESTAMP
}
```

### ```POST``` / ```create()```:

request:
```json
{
  "username": USERNAME,
  "password": PASSWORD, -- optional
  "role": ROLE,
  "initialized": true / false -- optional, false by default, set to true if password is also sent
}
```

response:
```json
{
  "id": USERID,
  "username": USERNAME,
  "role": ROLE,
  "initialized": true / false,
  "createdAt": TIMESTAMP,
  "updatedAt": TIMESTAMP
}
```

### ```PUT``` / ```update()``` and ```PATCH``` / ```patch()```:

request: ```HOST/users/USERID```, body same as ```POST``` / ```create()```

response: same as ```POST``` / ```create()```


## Additional Notes:

1. For patient accounts using ```GET```/```find()``` method, they will only receive users information about themselves
2. For clinician accounts using ```GET```/```find()``` method, they will only receive all patients information
3. Patient accounts will receive **400 BadRequest** when visiting ```GET```/```get()``` method with a different ```USERID```
4. ```POST``` only accepts creating new admin accounts and clinician accounts, and only can be used by admin accounts
5. For patients creation please use ```POST /patients``` or ```app.service("patients").create()```, this will automatically create a new users model
6. You are not allowed to patch the ```id``` as well as ```username``` across all accounts
7. ```DELETE``` only for admin accounts
