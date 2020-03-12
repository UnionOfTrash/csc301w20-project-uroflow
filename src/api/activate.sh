#!/usr/bin/env bash

### Enviroments
DEV_ENV="api"
DOCKER=`which docker`
OLD_PS1="$PS1"
PS1="\n($DEV_ENV) $PS1"

function setup() {
    printf "\e[32m installing node image \e[m\n"
    $DOCKER pull node:12
    $DOCKER pull postgres:12
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
    printf "\e[32m creating bridged network \e[m\n"
    $DOCKER network create -d bridge uroflow-network
    printf "\e[32m starting database server \e[m\n"
    $DOCKER run -itd --rm --name postgres -v /tmp/uroflow:/var/lib/postgresql/data -p 5432:5432 \
        --network=uroflow-network \
        -e POSTGRES_USER=postgres \
        -e POSTGRES_PASSWORD=uroflow \
        -e POSTGRES_DB=uroflow \
        -e POSTGRES_HOST_AUTH_METHOD=trust \
        postgres:12
    printf "\e[32m wait for 2 sec for database to connect \e\n"
    sleep 2
    printf "\e[32m running api \e[m\n"
    $DOCKER run -it --rm --name api -v "$PWD":/usr/src/myapp -w /usr/src/myapp -p 3010:3010 \
        --network=uroflow-network \
        -e POSTGRES_HOST=postgres \
        -e POSTGRES_DB=uroflow \
        -e POSTGRES_USER=postgres \
        -e POSTGRES_PASSWORD=uroflow \
        node:12 npm $CMD
}

function deactivate() {
    printf "\e[32m removing docker processes \e[m\n"
    $DOCKER kill api
    $DOCKER kill postgres
    printf "\e[32m removing docker network \e[m\n"
    $DOCKER network rm uroflow-network
    PS1="$OLD_PS1"
    unset DEV_ENV DOCKER OLD_PS1
}
