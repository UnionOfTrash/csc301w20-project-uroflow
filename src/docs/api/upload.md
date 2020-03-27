# Upload API

## Path: ```/upload```

## Supported HTTP Verbs: ```POST```

## Supported Socket Methods: ```create()```

### ```POST``` / ```create()```:

request:
```json
{
  "uri": UPLOAD_URI -- base64 encoded uri
}
```

response:
```json
{
  "id": UPLOAD_ID,
  "size": SIZE
}
```

## Additional Notes:

1. **TEST PURPOSE ONLY! DO NOT USE IN PRODUCTION ENVIRONMENT!**
2. check more about uri format [here](https://en.wikipedia.org/wiki/Data_URI_scheme)
