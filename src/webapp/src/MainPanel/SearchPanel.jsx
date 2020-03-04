import React , {useState} from "react"
import { Grid, Paper } from '@material-ui/core';
import { Button, ButtonGroup, IconButton, InputBase } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import Modal from '@material-ui/core/Modal';


import { makeStyles } from '@material-ui/core/styles';
function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
  
function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

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
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);



    const [id, setId] = React.useState("");
    const [studyId, setStudyId] = React.useState("");
    const [dateOfBirth, setDateOfBirth] = React.useState("");
    const [gender, setGender] = React.useState("");
    const [condition, setCondition] = React.useState("");

    const handleOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };

    const addClient = () => {
        const newClient = {
            "id": id,
            "studyId": studyId, 
            "numRecord": 0,
            "dob": dateOfBirth,
            "hasNew": false,
            "gender": gender,
            "condition": condition
        }
        setId("")
        setStudyId("")
        setDateOfBirth("")
        setGender("")
        setCondition("")
        handleClose()
        props.addNewClient(newClient)
    }
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
                        <Modal
                        aria-labelledby="new-client-input-modal-title"
                        aria-describedby="new-client-input-modal-description"
                        open={open}
                        onClose={handleClose}
                        >
                            <div style={modalStyle} className={classes.newClientInputModal}>
                                <h2>Add Client</h2>
                                <p id="new-client-input-modal-description">
                                    Please input Id, StudyId, Date of Birth, Gender, and Condition for the new client.
                                </p>

                                <label htmlFor="id-input">ID</label>
                                <input 
                                type="text" 
                                name="id-input" 
                                id="id" 
                                value={id} 
                                onChange={e => setId(e.target.value)}
                                >
                                </input>

                                <label htmlFor="study-id-input">Study ID</label>
                                <input 
                                type="text" 
                                name="study-id-input" 
                                id="study-id" 
                                value={studyId} 
                                onChange={e => setStudyId(e.target.value)}
                                >
                                </input>

                                <label htmlFor="date-of-birth-input">Date of Birth</label>
                                <input 
                                type="date" 
                                name="date-of-birth-input" 
                                id="date-of-birth" 
                                value={dateOfBirth} 
                                onChange={e => setDateOfBirth(e.target.value)}
                                >
                                </input>

                                <label htmlFor="gender-input">Gender</label>
                                <select id="gender" onChange={e => setGender(e.target.value)}>
                                    <option value="Female"> Female </option>
                                    <option value="Male"> Male </option>
                                </select>


                                <label htmlFor="condition-input">Condition</label>
                                <input 
                                type="text" 
                                name="condition-input" 
                                id="condition" 
                                value={condition} 
                                onChange={e => setCondition(e.target.value)}
                                >
                                </input>

                                <button onClick={addClient}> Submit </button>
                            </div>
                        </Modal>
                        <Button onClick={handleOpen} className={classes.addButton} variant='contained' color='secondary'> Add Client </Button>
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
                            <Button onClick={props.onSortByRecentClick} color='secondary'> Recent Update </Button>
                        </ButtonGroup>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export {SearchPanel}