import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import MenuItem from "@material-ui/core/MenuItem";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from "@material-ui/pickers";

import { makeStyles } from "@material-ui/core/styles";

const genders = [
  {
    value: "M",
    label: "Male"
  },
  {
    value: "F",
    label: "Female"
  }
];

const useStyles = makeStyles(theme => ({
  addButton: {
    margin: theme.spacing(0.5),
    marginLeft: theme.spacing(1),
    // fullWidth: true,
    color: "white"
  }
}));

function AddClientPanel(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  const [studyId, setStudyId] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [selectedDate, setSelectedDate] = React.useState("");
  const [condition, setCondition] = React.useState("");

  const addClientHandler = () => {
    const client = {
      studyId: studyId,
      gender: gender,
      selectedDate: selectedDate,
      condition: condition
    };
    setStudyId("");
    setGender("");
    setSelectedDate("");
    setCondition("");
    props.addNewClientHandler(client);
    handleClose();
  };

  return (
    <div>
      <Button
        className={classes.addButton}
        variant="contained"
        color="primary"
        onClick={handleClickOpen}
      >
        New Patient
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add New Patient</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter patient information below:
          </DialogContentText>
          <TextField
            value={studyId}
            autoFocus
            margin="dense"
            id="name"
            label="Study ID"
            fullWidth
            onChange={e => setStudyId(e.target.value)}
          />
          <TextField
            value={gender}
            id="standard-select-gender"
            select
            fullWidth
            label="Sex"
            value={gender}
            onChange={e => setGender(e.target.value)}
          >
            {genders.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            value={selectedDate}
            id="date"
            label="Date of Birth"
            type="date"
            className={classes.textField}
            InputLabelProps={{ shrink: true }}
            fullWidth
            onChange={e => setSelectedDate(e.target.value)}
          />

          <TextField
            value={condition}
            margin="dense"
            id="name"
            label="Notes"
            fullWidth
            multiline
            onChange={e => setCondition(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={addClientHandler} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export { AddClientPanel };
