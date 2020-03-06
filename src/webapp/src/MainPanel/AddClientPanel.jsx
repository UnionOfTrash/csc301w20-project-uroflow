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
        marginLeft: theme.spacing(1),
        // fullWidth: true,
        color: 'white'
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
        <div>
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
        </div>
    )
}

export { AddClientPanel }