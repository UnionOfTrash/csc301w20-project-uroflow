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

function AddClientPanel(props){
    const classes = useStyles()
    const [modalStyle] = React.useState(getModalStyle);
    const close = props.close


    const [id, setId] = React.useState("");
    const [studyId, setStudyId] = React.useState("");
    const [dateOfBirth, setDateOfBirth] = React.useState("");
    const [gender, setGender] = React.useState("");
    const [condition, setCondition] = React.useState("");
    

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
        close()
        props.addNewClientHandler(newClient)
    }
    return (
            <Modal
            aria-labelledby="new-client-input-modal-title"
            aria-describedby="new-client-input-modal-description"
            open={props.openStatus}
            onClose={props.close}
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
                    onChange={e => setStudyId(e.target.value.replace(/[^\d]/,''))}
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
    )
}

export {AddClientPanel}