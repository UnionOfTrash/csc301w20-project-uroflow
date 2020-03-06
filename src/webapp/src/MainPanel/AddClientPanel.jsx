import React, { useState } from "react"
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import MenuItem from '@material-ui/core/MenuItem';

import { makeStyles } from '@material-ui/core/styles';

const genders = [
    {
        value: 'M',
        label: 'Male',
    },
    {
        value: 'F',
        label: 'Female',
    },
]

const useStyles = makeStyles(theme => ({
    addButton: {
        margin: theme.spacing(0.5),
        marginLeft: theme.spacing(4),
        // fullWidth: true,
        color: 'white',
        height: '52px',
        flexGrow: 1,
        flexShrink: 0,
    },
}))

function AddClientPanel(props) {
    const classes = useStyles()
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [gender, setGender] = React.useState({});

    const handleChange = event => {
        setGender(event.target.value);
    };

    const [selectedDate, setSelectedDate] = React.useState(new Date());

    const handleDateChange = date => {
        setSelectedDate(date);
    };


    return (
        <>
            <Button className={classes.addButton} variant="contained" color="primary" onClick={handleClickOpen}>
                New Patient
        </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add New Patient</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Enter patient information below:
                    </DialogContentText>
                    <TextField autoFocus margin="dense" id="name" label="Study ID" fullWidth />
                    <TextField id="standard-select-gender" select fullWidth label="Gender" value={gender} onChange={handleChange}>
                        {genders.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField id="date" label="Date of Birth" type="date" className={classes.textField} InputLabelProps={{shrink: true,}} fullWidth />
                    <TextField margin="dense" id="name" label="Condition" fullWidth />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
            </Button>
                    <Button onClick={handleClose} color="primary">
                        Add
            </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export { AddClientPanel }


// function rand() {
//     return Math.round(Math.random() * 20) - 10;
// }

// function getModalStyle() {
//     const top = 50
//     const left = 50
//     return {
//         top: `${top}%`,
//         left: `${left}%`,
//         transform: `translate(-${top}%, -${left}%)`,
//         outline: 0
//     };
// }

// const useStyles = makeStyles(theme => ({
//     root: {
//         flexGrow: 1,
//     },
//     paper: {
//         padding: theme.spacing(1),
//         textAlign: 'center',
//         color: theme.palette.text.secondary,
//         square: true,
//     },
//     grid: {
//         margin: theme.spacing(0.5),
//         alignItems: 'center',
//     },
//     form: {
//         padding: "2px 4px",
//         display: 'flex',
//         alignItems: 'center',
//         height: "100%",
//     },
//     input: {
//         padding: theme.spacing(1),
//         marginLeft: theme.spacing(1),
//         flex: 1,
//     },
//     iconButton: {
//         padding: 10,
//     },
//     sort: {
//         padding: theme.spacing(1),
//     },
//     addButton: {
//         margin: theme.spacing(0.5),
//         marginLeft: theme.spacing(1),
//         fullWidth: true,
//     },

//     newClientInputModal: {
//         position: 'absolute',
//         width: 400,
//         backgroundColor: theme.palette.background.paper,
//         border: '2px solid #000',
//         boxShadow: theme.shadows[5],
//         padding: theme.spacing(2, 4, 3),
//     },
// }));

// function AddClientPanel(props) {
//     const classes = useStyles()
    // const [modalStyle] = React.useState(getModalStyle);
    // const close = props.close


    // const [id, setId] = React.useState("");
    // const [studyId, setStudyId] = React.useState("");
    // const [dateOfBirth, setDateOfBirth] = React.useState("");
    // const [gender, setGender] = React.useState("");
    // const [condition, setCondition] = React.useState("");


    // const addClient = () => {
    //     const newClient = {
    //         "id": id,
    //         "studyId": studyId,
    //         "numRecord": 0,
    //         "dob": dateOfBirth,
    //         "hasNew": false,
    //         "gender": gender,
    //         "condition": condition
    //     }
    //     setId("")
    //     setStudyId("")
    //     setDateOfBirth("")
    //     setGender("")
    //     setCondition("")
    //     close()
    //     props.addNewClientHandler(newClient)
    // }

        // <Modal
        //     aria-labelledby="new-client-input-modal-title"
        //     aria-describedby="new-client-input-modal-description"
        //     open={props.openStatus}
        //     onClose={props.close}
        // >
        //     <div style={modalStyle} className={classes.newClientInputModal}>
        //         <h2>Add Client</h2>
        //         {/* <p id="new-client-input-modal-description">
        //                 Please input Id, StudyId, Date of Birth, Gender, and Condition for the new client.
        //             </p> */}

        //         <label htmlFor="id-input">ID</label>
        //         <input
        //             type="text"
        //             name="id-input"
        //             id="id"
        //             value={id}
        //             onChange={e => setId(e.target.value)}
        //         >
        //         </input>

        //         <label htmlFor="study-id-input">Study ID</label>
        //         <input
        //             type="text"
        //             name="study-id-input"
        //             id="study-id"
        //             value={studyId}
        //             onChange={e => setStudyId(e.target.value.replace(/[^\d]/, ''))}
        //         >
        //         </input>

        //         <label htmlFor="date-of-birth-input">Date of Birth</label>
        //         <input
        //             type="date"
        //             name="date-of-birth-input"
        //             id="date-of-birth"
        //             value={dateOfBirth}
        //             onChange={e => setDateOfBirth(e.target.value)}
        //         >
        //         </input>

        //         <label htmlFor="gender-input">Gender</label>
        //         <select id="gender" onChange={e => setGender(e.target.value)}>
        //             <option value="Female"> Female </option>
        //             <option value="Male"> Male </option>
        //         </select>


        //         <label htmlFor="condition-input">Condition</label>
        //         <input
        //             type="text"
        //             name="condition-input"
        //             id="condition"
        //             value={condition}
        //             onChange={e => setCondition(e.target.value)}
        //         >
        //         </input>

        //         <button onClick={addClient}> Submit </button>
        //     </div>
        // </Modal>
