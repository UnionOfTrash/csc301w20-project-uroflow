# Hospital for Sick Children

## How to setup the repo

### If you didn't clone the repo, run:

```bash
git clone --recurse-submodules https://github.com/csc301-winter-2020/team-project-2-hospital_for_sick_children.git
```

### If you have cloned the repo, run:

```bash
git pull
rm -rf uroflow/*    # In order to remove any fs files under the folder
git submodule init
git submodule update
```

## How to run the app in DEVELOPING environment

### webapp

```bash
cd src/webapp/
./setup.sh # for setup the app
./run.sh   # for running the app
```

### mobileapp

placeholder

### api

```bash
cd src/api/
source activate.sh      # load dev environment
setup                   # set up node dependencies
run                     # run the api
deactivate              # exit dev environment
### for any other functions please check src/api/README.md
```
