import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import './App.css';

import theme from "./theme";
import Header from './Header';
import PatientList from './PatientList';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  grid: {
    margin: theme.spacing(0.5),
    width: '100%',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    minHeight: window.innerHeight - theme.spacing(15),
    maxHeight: window.innerHeight - theme.spacing(15),
  },
}));

function App() {

  const classes = useStyles();

  return (
    <ThemeProvider theme={ theme } >
      <div className={ classes.root } >
        <Header />
        <Grid container className={ classes.grid } spacing={ 2 }>
          <Grid item xl={ 4 } xs={ 4 } >
            <Paper className={ classes.paper } >
              <PatientList />
            </Paper>
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
