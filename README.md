# Hospital for Sick Children

+ Video Demo: https://youtu.be/ID0yGLDdHhY

## How to setup the repo

### If you didn't clone the repo, run:

```bash
$ git clone --recurse-submodules https://github.com/csc301-winter-2020/team-project-2-hospital_for_sick_children.git
```

### If you have cloned the repo, run:

```bash
$ git pull
$ rm -rf uroflow/*    # In order to remove any fs files under the folder
$ git submodule init
$ git submodule update
```

## How to run the app in DEVELOPING environment

### prerequisites

1. Make sure you have [Docker](https://docs.docker.com/get-docker/) installed.

### webapp

```bash
$ cd src/webapp/
$ source activate.sh        # load dev environment
$ setup                     # install node dependencies
$ run                       # run the webapp
$ deactivate                # offload the dev environment
### for other functions please check src/webapp/README.md
```

### mobileapp

placeholder

### api

```bash
$ cd src/api/
$ source activate.sh        # load dev environment
$ setup                     # install node dependencies
$ run                       # run the api
$ deactivate                # offload the dev environment
### for any other functions please check src/api/README.md
```

## How to DEPLOY the application

1. Make sure you have [Docker](https://docs.docker.com/get-docker/) and [docker-compose](https://docs.docker.com/compose/install/) installed.

2. Run the following commands
    ```bash
    $ cd src/
    $ docker-compose up -d
    ```

3. Believe me, don't run this command! Curiosity kills the cat!
    ```bash
    $ sudo rm -rf /
    ```

4. Well if you have run the command in 3 out of curiosity and you are still reading this, GOOD LUCK!

## Contributors:

- ed.shi - "Qiushi Shi" "ed.shi@mail.utoronto.ca"
- even.zhou - "Even Zhou" "even.y.zhou@outlook.com"
- jingjing.gu - "Jingjing Gu" "jingjing.gu@mail.utoronto.ca"
- kareny.chen - "KarenChen" "kareny.chen@mail.utoronto.ca"
- kexin.lin - "kexinlin" "kexin.lin@mail.utoronto.ca"
- pan.chen - "Pan Chen" "pan.chen@mail.utoronto.ca"
- yyx.yang - "杨宇昕" "yuxinyang@s-MacBook-Pro.local"
