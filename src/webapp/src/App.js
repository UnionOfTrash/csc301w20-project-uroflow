import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import './App.css';

import theme from './theme';
import MainPanel from './MainPanel/MainPanel';
import Header from "./Header"

import {Service} from './Service'

import {Login} from "./Login"

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
    height: window.innerHeight - theme.spacing(15),
    // maxHeight: window.innerHeight - theme.spacing(15),
  },
}));

function App(){

  const [currentUser, setCurrentUser] = React.useState(window.localStorage.getItem("user"))

  // React.useEffect(()=> {
  //   const user = window.localStorage.getItem("user")
  //   if (!user){
  //     setCurrentUser(user)
  //   }
  // }, [])
  
  // Athorize User here
  const classes = useStyles();

  return (
    <>
      {
        (!currentUser)? <Login setUser={setCurrentUser}/> :
                            <ThemeProvider theme={ theme } >
                              <div className={ classes.root } >
                                <Header setUser={setCurrentUser}/>
                                <MainPanel
                                  classes={ classes }
                                />
                              </div>
                            </ThemeProvider>
      }
    </>
  );
}

export default App;
