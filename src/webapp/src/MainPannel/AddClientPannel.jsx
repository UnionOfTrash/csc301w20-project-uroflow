import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import MenuItem from "@material-ui/core/MenuItem";

import { makeStyles } from "@material-ui/core/styles";

const genders = [
  {
    value: true,
    label: "Male"
  },
  {
    value: false,
    label: "Female"
  }
];

const useStyles = makeStyles(theme => ({
  addButton: {
    margin: theme.spacing(0.5),
    marginLeft: theme.spacing(4),
    // fullWidth: true,
    color: "white",
    height: "52px",
    flexGrow: 1,
    flexShrink: 0
  }
}));

function AddClientPannel(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [studyId, setStudyId] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [selectedDate, setSelectedDate] = React.useState("");
  const [condition, setCondition] = React.useState("");

  const addClientHandler = () => {
    const client = {
      study_id: studyId,
      sex: gender,
      dob: selectedDate,
      condition: condition
    }
    props.addNewClientHandler(client).then(() => {
      setStudyId("")
      setGender("")
      setSelectedDate("")
      setCondition("")
      handleClose()
    })

  };

  return (
    <>
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
            label="Condition"
            fullWidth
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
    </>
  );
}

export { AddClientPannel };
