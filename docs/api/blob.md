# Blob API

## Path: ```/blob```

## Supported HTTP Verbs: ```GET```, ```POST```

## Supported Socket Methods: ```get```, ```create()```

### ```GET``` / ```get()```:

request: ```HOST/blob/BLOB_ID```, does not have a body

response:
```json
{
  "id": BLOB_ID,
  "uri": URI,
  "size": SIZE
}
```

### ```POST``` / ```create()```:

request:
```json
{
  "uri": BLOB_URI -- base64 encoded uri
}
```

response:
```json
{
  "id": BLOB_ID,
  "size": SIZE
}
```

## Additional Notes:

1. Only clinicians and admin accounts are allowed to use this service
2. check more about uri format [here](https://en.wikipedia.org/wiki/Data_URI_scheme)
