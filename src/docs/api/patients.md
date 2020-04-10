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
    "study_id": STUDY_ID or USERNAME,
    "dob": BIRTHDAY,
    "sex": true / false,
    "num_records": >= 0,
    "has_new": true / false,
    "condition": null / SOME_WORDS,
    "createdAt": TIMESTAMP,
    "updatedAt": TIMESTAMP
  }, ...
] -- a list of patients models
```

### ```GET``` / ```get()``` and ```DELETE``` / ```remove()```:

request: ```HOST/patients/USERID```, does not have a body

response:
```json
{
  "id": USERID,
  "study_id": STUDY_ID or USERNAME,
  "dob": BIRTHDAY,
  "sex": true / false,
  "num_records": >= 0,
  "has_new": true / false,
  "condition": null / SOME_WORDS,
  "createdAt": TIMESTAMP,
  "updatedAt": TIMESTAMP
}
```

### ```POST``` / ```create()```:

request:
```json
{
  "study_id": STUDY_ID or USERNAME,
  "dob": BIRTHDAY,
  "sex": true / false, -- optional if sex is male
  "condition": SOME_WORDS -- optional, null by default
}
```

response:
```json
{
  "id": USERID,
  "study_id": STUDY_ID or USERNAME,
  "dob": BIRTHDAY,
  "sex": true / false,
  "num_records": >= 0,
  "has_new": true / false,
  "condition": null / SOME_WORDS,
  "createdAt": TIMESTAMP,
  "updatedAt": TIMESTAMP
}
```

### ```PUT``` / ```update()``` and ```PATCH``` / ```patch()```:

request: ```HOST/patients/USERID```, body same as ```POST``` / ```create()```

response: same as ```POST``` / ```create()```


## Additional Notes:

1. Patient accounts will only receive their own info with ```GET``` / ```find()``` method
2. Patient accounts will receive **400 BadRequest** when visiting ```GET```/```get()``` method with a different ```USERID```
3. For patients creation please use ```POST /patients``` or ```app.service("patients").create()```, this will automatically create a new users model
4. Patients can't create a new patient, this will return an error
5. You are not allowed to patch the ```id``` as well as ```study_id``` field across all accounts
6. ```DELETE``` only for admin accounts
7. ```USERID``` is guaranteed to be identical across patients table and users table
