import React, { useState } from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.primary,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Header() {

  const classes = useStyles();

  const [ groupName, setGroupName ] = useState('SickKids');
  const [ userName, setUserName] = useState('Test');

  return (
    <div className={ classes.root } >
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h5' className={ classes.title } >
            { groupName }
          </Typography>
          <Button color='inherit'>
            { userName }
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
