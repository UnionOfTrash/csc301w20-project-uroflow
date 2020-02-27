#!/usr/bin/env bash

DOCKER=`which docker`
PORT=3000

function run() {
    printf "\e[32m running webapp on $PORT \e[m \n"
    DOCKER run -it --rm -v "$PWD":/usr/src/myapp -w /usr/src/myapp -p $PORT:$PORT node:12 npm run start
}

run