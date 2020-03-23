# Authentication API

## Path: ```/authentication```

## Supported HTTP Verbs: ```POST```

## Supported Socket Methods: ```create()```

### ```POST``` / ```create()```:

request:
```json
{
  "strategy": "local", -- a must-included, fixed attribute
  "username": USERNAME,
  "password": PASSWORD
}
```

response:
```json
{
  "accessToken": TOKEN, -- remember to store this in the header
  "authentication": {
    "strategy": "local"
  },
  "user": { -- check docs/models/users.md for the model definition
    "id": USERID,
    "username": USERNAME,
    "role": 0 / 1,
    "initialized": true / false,
    "createdAt": TIMESTAMP,
    "updatedAt": TIMESTAMP
  }
}
```

## Additional Notes:

1. Still figuring out the logout (or the ```remove()``` method in local strategy), it does not work right now and seems like an upstream issue
2. Ther user has to be created before doing authentication, otherwise a **401 NotAuthenticated** error will be sent
3. For other stuff here, check [Feathers Authentication](https://docs.feathersjs.com/api/authentication/)
4. For the definitiond and used of JWT, check [JSON Web Tokens](https://jwt.io/introduction/)
