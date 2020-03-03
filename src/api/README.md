# API

> Uroflow APIs v0.0.1

## About

This project uses [Feathers](http://feathersjs.com). An open source web framework for building modern real-time applications.

## Getting Started

1. Make sure you have [Docker](https://docs.docker.com/get-docker/) installed.

2. Activate develop scripts
    ```bash
    cd /path/to/api
    source activate.sh
    ```

3. Install node dependencies
    ```bash
    setup
    ```

4. Run the application
    ```bash
    run
    ```

5. To exit the developing environment
    ```bash
    deactivate
    ```

### Extra Functions

6. To add new npm packages
    ```bash
    add PACKAGE_NAME
    ```

7. To remove npm packages
    ```bash
    remove PACKAGE_NAME
    ```

## Testing

Simply run `npm test` and all your tests in the `test/` directory will be run.

## Scaffolding

Feathers has a powerful command line interface. Here are a few things it can do:

```
$ npm install -g @feathersjs/cli          # Install Feathers CLI

$ feathers generate service               # Generate a new Service
$ feathers generate hook                  # Generate a new Hook
$ feathers help                           # Show all commands
```

## Help

For more information on all the things you can do with Feathers visit [docs.feathersjs.com](http://docs.feathersjs.com).
