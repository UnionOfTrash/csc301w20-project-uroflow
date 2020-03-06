import React , {useState} from "react"
import { Grid, Paper } from '@material-ui/core';
import { Button, ButtonGroup, IconButton, InputBase } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Search } from '@material-ui/icons';

import { makeStyles } from '@material-ui/core/styles';

import {AddClientPanel} from "../MainPanel"

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        square:true,
    },
    grid: {
        margin: theme.spacing(0.5),
        alignItems: 'center',
    },
    form: {
        padding:"2px 4px",
        display: 'flex',
        alignItems: 'center',
        height:"100%",
    },
    input: {
        padding: theme.spacing(1),
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    sort: {
        padding: theme.spacing(1),
    },
    addButton: {
        margin: theme.spacing(0.5),
        marginLeft: theme.spacing(1),
        fullWidth:true,
    },

    newClientInputModal: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
      },
  }));

function SearchPanel(props){
    const classes = useStyles()
    const openAddClientPanel = props.openAddClientPanel

    return (
        <div>
                <Grid container>
                    <Grid item xl={10} xs={8}>
                        <Grid container className={ classes.grid } spacing={ 0 } >
                            <Paper component='form' className={ classes.paper } >
                                <Grid container>
                                    <Grid item xs={8}>
                                        <InputBase placeholder='Search ID' className={ classes.input } onChange={props.onSearchChange} />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <IconButton type='submit' className={ classes.iconButton } onClick={props.onSearchClick}> 
                                            <Search /> 
                                        </IconButton>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                    </Grid>
                    <Grid item xl={2} xs={4}>
                        {/* <Button onClick={openAddClientPanel} className={classes.addButton} variant='contained' color='secondary'> Add Client </Button> */}
                        <AddClientPanel />
                     </Grid>
                </Grid>
            <Grid item className={ classes.sort } >
                <Grid container>
                    <Grid item md={4} sm={2}>
                        <Typography variant='overline' display='block'> Sort By </Typography>
                    </Grid>
                    <Grid item md={8} sm={10}>
                        <ButtonGroup variant='text'>
                            <Button onClick={props.onSortByIdClick} color='primary'> ID </Button>
                            <Button onClick={props.onSortByRecentClick} color='primary'> Recent Update </Button>
                        </ButtonGroup>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export {SearchPanel}