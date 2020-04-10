#!/usr/bin/env bash

### Enviroments
DEV_ENV="webapp"
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
        CMD="run start"
    else
        CMD=$1
    fi
    printf "\e[32m running $DEV_ENV \e[m\n"
    $DOCKER run -it --rm --name webapp -v "$PWD":/usr/src/myapp -w /usr/src/myapp -p 3000:3000 node:12 npm $CMD
}

function deactivate() {
    printf "\e[32m removing docker processes \e[m\n"
    $DOCKER kill webapp
    PS1="$OLD_PS1"
    unset DEV_ENV DOCKER OLD_PS1
}
