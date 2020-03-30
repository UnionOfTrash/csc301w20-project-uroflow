# Patients API

## Path: ```/patients```

## Related Model: [patients](../models/patients.md)

## Supported HTTP Verbs: ```GET```, ```POST```, ```PUT```, ```PATCH```, <del>```DELETE```</del>

## Supported Socket Methods: ```find()```, ```get()```, ```create()```, ```update()```, ```patch()```, <del>```remove()```</del>

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
    "sex": true / false,
    "num_records": >= 0,
    "has_new": true / false,
    "condition": null / SOME_WORDS,
    "createdAt": TIMESTAMP,
    "updatedAt": TIMESTAMP
  }, ...
] -- a list of patients models
```

### ```GET``` / ```get()``` and <del>```DELETE``` / ```remove()```</del>:

request: ```URL/USERID```, does not have a body

response:
```json
{
  "id": USERID,
  "study_id": STUDY_ID,
  "dob": BIRTHDAY,
  "sex": true / false,
  "num_records": >= 0,
  "has_new": true / false,
  "condition": null / SOME_WORDS,
  "createdAt": TIMESTAMP,
  "updatedAt": TIMESTAMP
} -- the model after modified
```

### ```POST``` / ```create()```:

request:
```json
{
  "study_id": STUDY_ID,
  "dob": BIRTHDAY,
  "sex": true / false, -- optional if sex is male
  "condition": SOME_WORDS -- optional, null by default
}
```

response:
```json
{
  "id": USERID,
  "study_id": STUDY_ID,
  "dob": BIRTHDAY,
  "sex": true / false,
  "num_records": >= 0,
  "has_new": true / false,
  "condition": null / SOME_WORDS,
  "createdAt": TIMESTAMP,
  "updatedAt": TIMESTAMP
} -- the created model
```

### ```PUT``` / ```update()``` and ```PATCH``` / ```patch()```:

request: ```URL/USERID```, body same as ```POST``` / ```create()```

response: same as ```POST``` / ```create()```


## Additional Notes:

1. For patients creation please use ```POST /patients``` or ```app.service("patients").create()```, this will automatically create a new users model
2. ```USERID``` is guaranteed to be identical across patients table and users table
3. Same as ```POST``` and ```create()```, hooks will automatically sync username (if changed) to users table. Notice that this sync only applies to username field, which means ***DO NOT CHANGE ID*** anyway
4. Patients can't create a new patient, this will return an error
5. ```DELETE``` and ```remove()``` doesn't work due to db constraints right now
