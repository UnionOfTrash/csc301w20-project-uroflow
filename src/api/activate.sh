#!/usr/bin/env bash

### Enviroments
DEV_ENV="api"
DOCKER=`which docker`
OLD_PS1="$PS1"
PS1="\n($DEV_ENV) $PS1"

function setup() {
    printf "\e[32m installing node image \e[m\n"
    $DOCKER pull node:12
    printf "\e[32m initializing npm environment \e[m\n"
    $DOCKER run -it --rm -v "$PWD":/usr/src/myapp -w /usr/src/myapp node:12 npm install
}

function add() {
    printf "\e[32m adding package $1 \e[m\n"
    $DOCKER run -it --rm -v "$PWD":/usr/src/myapp -w /usr/src/myapp node:12 npm install $1
}

function remove() {
    printf "\e[32m removing package $1 \e[m\n"
    $DOCKER run -it --rm -v "$PWD":/usr/src/myapp -w /usr/src/myapp node:12 npm uninstall $1
}

function run() {
    if [ -z $1 ]; then
        CMD=start
    else
        CMD=$1
    fi
    printf "\e[32m running on port 3001 \e[m\n"
    $DOCKER run -it --rm -v "$PWD":/usr/src/myapp -w /usr/src/myapp --network host node:12 npm run $CMD
}

function deactivate() {
    PS1="$OLD_PS1"
    unset DEV_ENV DOCKER OLD_PS1
}
