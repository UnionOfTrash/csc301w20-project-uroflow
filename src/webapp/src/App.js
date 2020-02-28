import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import './App.css';

import theme from "./theme";
import Header from './Header';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  grid: {
    marginTop: theme.spacing(0.5),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    minHeight: window.innerHeight - theme.spacing(15),
  },
}));

function App() {

  const classes = useStyles();

  return (
    <ThemeProvider theme={ theme }>
      <div className={ classes.root } >
        <Header />
        <Grid container className={ classes.grid } spacing={ 3 } >
          <Grid item xl={ 4 } xs={ 4 } >
            <Paper className={ classes.paper } > Patient Column </Paper>
          </Grid>
          <Grid item xl={ 8 } xs={ 8 } >
            <Paper className={ classes.paper } > Record Column </Paper>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
}

export default App;
