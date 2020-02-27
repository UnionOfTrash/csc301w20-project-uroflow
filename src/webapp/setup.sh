#!/usr/bin/env bash

DOCKER=`which docker`

function setup_docker() {
    printf "\e[32m installing node image... \e[m \n"
    DOCKER pull node:12
}

function setup_webapp() {
    printf "\e[32m initializing react environment... \e[m \n"
    printf "\e[31m ignore any warnings about fsevents, that doesn't matter \e[m \n"
    DOCKER run -it --rm -v "$PWD":/usr/src/myapp -w /usr/src/myapp node:12 npm install
}

setup_docker
setup_webapp