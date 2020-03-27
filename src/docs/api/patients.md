# Patients API

## Path: ```/patients```

## Related Model: [patients](../models/patients.md)

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
    "study_id": STUDY_ID,
    "dob": BIRTHDAY,
    "sex": SEX,
    "num_records": >= 0,
    "has_new": true / false,
    "condition": null / SOME_WORDS,
    "createdAt": TIMESTAMP,
    "updatedAt": TIMESTAMP
  }, ...
] -- a list of patients models
```

### ```GET``` / ```get()``` and ```DELETE``` / ```remove()```:

request: ```?id=USERID```, does not have a body

response:
```json
[
  {
    "id": USERID,
    "study_id": STUDY_ID,
    "dob": BIRTHDAY,
    "sex": SEX,
    "num_records": >= 0,
    "has_new": true / false,
    "condition": null / SOME_WORDS,
    "createdAt": TIMESTAMP,
    "updatedAt": TIMESTAMP
  }
] -- though a list, it only contains one patients model
```

### ```POST``` / ```create()```:

request:
```json
{
  "study_id": STUDY_ID,
  "dob": BIRTHDAY,
  "sex": SEX,
  "condition": SOME_WORDS -- optional, null by default
}
```

response:
```json
{
  "id": USERID,
  "study_id": STUDY_ID,
  "dob": BIRTHDAY,
  "sex": SEX,
  "num_records": >= 0,
  "has_new": true / false,
  "condition": null / SOME_WORDS,
  "createdAt": TIMESTAMP,
  "updatedAt": TIMESTAMP
} -- only a simple patients model
```

### ```PUT``` / ```update()``` and ```PATCH``` / ```patch()```:

request: ```?id=USERID```, body same as ```POST``` / ```create()```

response: same as ```POST``` / ```create()```


## Additional Notes:

1. For patients creation please use ```POST /patients``` or ```app.service("patients").create()```, this will automatically create a new users model
2. ```USERID``` is guaranteed to be identical across patients table and users table
