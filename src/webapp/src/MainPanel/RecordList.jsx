import React from "react";
import { Grid, SvgIcon } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { Button, ButtonGroup } from "@material-ui/core";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell
} from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Opacity, Warning } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import {
  DateRangePicker,
  DateRange
} from "@matharumanpreet00/react-daterange-picker";
import Modal from "@material-ui/core/Modal";
import Chip from "@material-ui/core/Chip";

import FlowCurve from "../MainPanel/FlowCurve";

import {Service} from '../Service'


function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: "50%",
    left: "50%",
    transform: `translate(-${top}%, -${left}%)`,
    outline: 0
  };
}


const useStyles = makeStyles(theme => ({
  container: {
    height: '100%',
    overflowY: 'auto'
  },
  head: {
    padding: theme.spacing(1),
    textAlign: "center"
  },
  sort: {
    padding: theme.spacing(1)
  },
  grid: {
    alignItems: "center"
  },
  paper: {
    position: "absolute",
    width: "auto",
    backgroundColor: theme.palette.background.paper,
    borderRadius: "2%",
    padding: theme.spacing(2, 4, 3)
  },
  modalheader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  savebtn: {
    height: "auto",
    width: "auto",
    flexDirection: "row-revserse",
    alignItems: "flex-end"
  },
  colflex: {
    display: 'flex',
    flexDirection: 'column',
  },
  cancelbtn: {
    height: "auto",
    width: "auto",
    flexDirection: "row-revserse",
    alignItems: "flex-end"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300
  },
  chips: {
    display: "flex",
    flexWrap: "wrap"
  },
  chip: {
    margin: 2
  },
  noLabel: {
    marginTop: theme.spacing(3)
  },
  icon: {
    margin: theme.spacing(1)
  }
}));

function PatientCommentModal(props) {
  return (
    <Modal
      disableAutoFocus={true}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={props.showPatientComment}
      onClose={() => props.setShowPatientComment(false)}
    >
      <div style={props.modalStyle} className={props.classes.paper}>
        <h3>{props.pComment} </h3>
      </div>
    </Modal>
  );
}

function DoctorCommentModal(props) {
  const useStyles = makeStyles(theme => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: 200
      }
    }
  }));
  const classes = useStyles();

  const [showInput, setShowInput] = React.useState(false);
  const [showSave, setShowSave] = React.useState(false);

  const onSaveClick = () => {
    // console.log(props.cComment);
    setShowSave(false);
    setShowInput(false);
  };

  return (
    <Modal
      disableAutoFocus={true}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={props.showDoctorComment}
      onClose={() => props.setShowDoctorComment(false)}
    >
      <div style={props.modalStyle} className={props.classes.paper}>
        {showInput ? (
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              defaultValue={props.cComment}
              id="outlined-basic"
              label="Comment"
              variant="outlined"
              onChange={e => props.setcComment(e.target.value)}
            />
          </form>
        ) : (
          <h3>{props.cComment} </h3>
        )}

        {showSave ? (
          <Button color="secondary" onClick={onSaveClick}>
            Save Comment
          </Button>
        ) : (
          <Button
            color="secondary"
            onClick={() => {
              setShowInput(true);
              setShowSave(true);
            }}
          >
            Edit Comment
          </Button>
        )}
      </div>
    </Modal>
  );
}

function CondModal(props) {

  const conditions = props.conditions
  const setConditions = props.setConditions

  const onSaveClick = () => {
    props.onConditionSaveClick()
    props.setShowCond(false)
  }

  return (
    <Modal
      disableAutoFocus={true}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={props.showCond}
      onClose={() => props.setShowCond(false)}
    >
      <div style={props.modalStyle} className={props.classes.paper}>
        <div className={props.classes.modalheader}>
          <h2>Select Conditions</h2>
        </div>
        <Grid container>
          <Grid item xl={4} xs={4}>
            <Opacity
              onClick={() => {
                const c1 = conditions[1]
                const c2 = conditions[2]
                conditions[0] === "disabled"
                  ? setConditions(["error", c1, c2])
                  : setConditions(["disabled", c1, c2]);
              }}
              fontSize="large"
              color={conditions[0]}
            />
          </Grid>
          <Grid item xl={4} xs={4}>
            <SvgIcon
              onClick={() => {
                const c0 = conditions[0]
                const c2 = conditions[2]
                conditions[1] === "disabled" ? 
                    setConditions([c0, "error", c2]) : setConditions([c0, "disabled", c2]);
              }}
              fontSize="large"
              color={conditions[1]}
            >
              <path
                d="M11.36 2c-.21 0-.49.12-.79.32C10 2.7 8.85 3.9 8.4 5.1c-.34.9-.35
                                  1.72-.21 2.33c-.56.1-.97.28-1.13.35c-.51.22-1.59 1.18-1.69 2.67c-.03.52.04
                                  1.05.2 1.55c-.66.19-1.04.43-1.07.44c-.32.12-.85.49-1 .69c-.35.4-.58.87-.71
                                  1.37c-.29 1.09-.19 2.33.34 3.33c.29.56.69 1.17 1.13 1.6c1.44 1.48 3.92 2.04
                                  5.88 2.36c2.39.4 4.89.26 7.12-.66c3.35-1.39 4.24-3.63
                                  4.38-4.24c.29-1.39-.07-2.7-.22-3.02c-.22-.46-.58-.93-1.17-1.23c-.4-.25-.75-.38-1.01-.44c.26-.95-.11-1.7-.62-2.26c-.77-.82-1.56-.94-1.56-.94c.26-.5.36-1.1.22-1.68c-.16-.71-.55-1.16-1.06-1.46c-.52-.31-1.16-.46-1.82-.58c-.32-.06-1.65-.25-2.2-1.01c-.45-.62-.46-1.74-.58-2.07c-.05-.13-.12-.2-.26-.2M16
                                  9.61c.07 0 .13.01.19.01c1.43.16 2.45 1.54 2.28 3.07c-.17 1.53-1.47 2.65-2.9
                                  2.49c-1.43-.18-2.45-1.53-2.28-3.07c.16-1.45 1.35-2.55 2.71-2.5m-7.38 0c1.33.04
                                  2.44 1.17 2.54 2.6c.12 1.54-.95 2.87-2.38 2.98h-.01c-1.43.11-2.69-1.05-2.81-2.59c-.11-1.54.96-2.87
                                  2.39-2.98c.09-.01.18-.01.27-.01m.02 1.7c-.04 0-.07 0-.11.01c-.56.07-.96.58-.89
                                  1.13a1 1 0 0 0 1.13.87c.56-.07.96-.58.9-1.13a1.01 1.01 0 0 0-1.03-.88m7.3.02c-.52.02-.94.42-.98.95a1
                                  1 0 0 0 .95 1.06a1.008 1.008 0 1 0 .14-2.01h-.11m-7.23 4.82c.29-.01.55.08.79.13c1.18.22
                                  2.2.25 2.69.25c.49 0 1.5-.03 2.67-.25c.41-.08.88-.25 1.25 0c.48.32.13 1.47-.61 2.25a4.53
                                  4.53 0 0 1-3.31 1.38c-1.78 0-2.86-.91-3.31-1.38c-.74-.78-1.09-1.93-.62-2.25c.14-.09.29-.13.45-.13z"
              />
            </SvgIcon>
          </Grid>
          <Grid item xl={4} xs={4}>
            <Warning
              onClick={() => {
                const c0 = conditions[0]
                const c1 = conditions[1]
                conditions[2] === "disabled"
                  ? setConditions([c0, c1, "error"])
                  : setConditions([c0, c1, "disabled"]);
              }}
              fontSize="large"
              color={conditions[2]}
            />
          </Grid>
        </Grid>
        <div style={{
          "display":"flex",
          "justifyContent":"center"
        }}>
          <Button
            size="large"
            color="primary"
            onClick={onSaveClick}
          >
              Save
          </Button>
        </div>

      </div>
    </Modal>
  );
}

function RecordList(props) {

  const records = props.records

  const [currentRecords, setCurrentRecords] = React.useState(props.records)

  const classes = useStyles();

  const [dateRange, setDateRange] = React.useState({});

  const modalStyle = getModalStyle();
  const [open, setOpen] = React.useState(false);

  const [selectedConditionData, setSelectedConditionData] = React.useState([]);

  const [pComment, setpComment] = React.useState("");
  const [cComment, setcComment] = React.useState("");

  const [showPatientComment, setShowPatientComment] = React.useState(false);
  const [showDoctorComment, setShowDoctorComment] = React.useState(false);
  const [showCond, setShowCond] = React.useState(false);

  const onPatientCommentClick = id => {
    setpComment(records.filter(r => r.id === id)[0].pComment);
    setShowPatientComment(true);
  };

  const onDoctorCommentClick = id => {
    setcComment(records.filter(r => r.id === id)[0].cComment);
    setShowDoctorComment(true);
  };

  const [openGraph, setOpenGraph] = React.useState(false);

  const [label, setLabel] = React.useState([])
  const [data, setData] = React.useState([])

  const handleOpenGraph = (cid) => {

    Service.getCurveData(cid).then(curveData => {
      setLabel(curveData.label)
      setData(curveData.data)
      setOpenGraph(true);
    })

  };

  const handleCloseGraph = () => {
    setOpenGraph(false);
  };

  const [dateRangeRecords, setDateRangeRecords] = React.useState(props.records)

  // followings are for the condition filter
  const [conditionName, setConditionName] = React.useState(["disabled", "disabled", "disabled"]);

  const filterByCondition = (cond, isDelete) => {

    const isleak = (cond[0] === "disabled")? false:true
    const ispoop = (cond[1] === "disabled")? false:true
    const isurgent = (cond[2] === "disabled")? false:true

    const records = isDelete? dateRangeRecords : currentRecords
    // console.log("records : ", records)

    setCurrentRecords(records.filter(r => {
      if (!isleak && !ispoop && !isurgent){
        return true
      }

      if (isleak && ispoop & isurgent){
        return r.condition[0]&&r.condition[1]&&r.condition[2]
      }else if(isleak&&ispoop){
        return r.condition[0]&&r.condition[1]
      }else if(isleak&&isurgent){
        return r.condition[0]&&r.condition[2]
      }else if(ispoop&&isurgent){
        return r.condition[1]&&r.condition[2]
      }else{
        if (isleak){
          return r.condition[0]
        }
        if (ispoop){
          return r.condition[1]
        }
        else{
          return r.condition[2]
        }
      }
    }))
  }

  const filterByDateRange = () => {
    const records = props.records.filter(r => {
      return (dateRange.startDate <= r.time && r.time <= dateRange.endDate)
    })
    setCurrentRecords(records)
    setDateRangeRecords(records)
  }

  const onConditionSaveClick = () => {

    const data = []
    const conditions = ["leak", "poop", "urgent"]
    let id = 0
    conditionName.forEach(e => {
      if (e !== "disabled"){
        data.push({key:id, label: conditions[id]})
      }
      id++;
    });
    setSelectedConditionData(data)
    filterByDateRange()
    filterByCondition(conditionName, false)

  };

  const handleDelete = chipToDelete => () => {

    const chips = selectedConditionData.filter(c => {
      return c.key !== chipToDelete.key
    })

    setSelectedConditionData(chips);

    const cond = []
    for (let id = 0; id < 3; id++){
      if (id === chipToDelete.key){
        cond.push("disabled")
      }else{
        cond.push(conditionName[id])
      }
    }

    setConditionName(cond)

    if (selectedConditionData.length === 0){
      filterByDateRange()
    }else{
      filterByDateRange()
      filterByCondition(cond, true)
    }
  };

  return (
    <>
      <div>
      <Typography variant="overline" display="block">
        Filter By
      </Typography>
      <ButtonGroup variant="text">
        <Button color="primary" onClick={() => setOpen(true)}>
          Date Range
        </Button>
        <Button color="primary" onClick={() => setShowCond(true)}>
          Condition
        </Button>
      </ButtonGroup>

      {selectedConditionData.map(data => {
        return (
          <Chip
            key={data.key}
            label={data.label}
            onDelete={handleDelete(data)}
            className={classes.chip}
          />
        );
      })}

      <div className={classes.modal}>
        <Modal
          disableAutoFocus={true}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={open}
          onClose={() => setOpen(false)}
        >
          <div style={modalStyle} className={classes.paper}>
            <div className={classes.modalheader}>
              <h2>Select Date Range</h2>
              <Button 
                size="large"
                color="primary"
                className={classes.savebtn}
                onClick={() => {
                  setCurrentRecords(props.records)
                  // filterByCondition(conditionName, true);
                  setSelectedConditionData([])
                  setConditionName(["disabled", "disabled", "disabled"])
                  setOpen(false)
                  }}
              >
                Reset
              </Button>

              <Button
                size="large"
                color="primary"
                className={classes.savebtn}
                onClick={() => {
                  if(dateRange.startDate === undefined) {
                    alert("Please select both start date and end date!")
                  }
                  else {
                    filterByDateRange()
                    // filterByCondition(conditionName, true)
                    setSelectedConditionData([])
                    setConditionName(["disabled", "disabled", "disabled"])
                    setOpen(false);
                  }
                }}
              >
                Save
              </Button>
            </div>
            <DateRangePicker
              open={true}
              onChange={range => {
                setDateRange(range)
              }}
              initialDateRange={dateRange}
            />
          </div>
        </Modal>
      </div>
      <div className={classes.modal}>
        <CondModal
          modalStyle={modalStyle}
          classes={classes}
          showCond={showCond}
          setShowCond={setShowCond}
          conditions={conditionName}
          setConditions={setConditionName}
          onConditionSaveClick={onConditionSaveClick}
        />
      </div>
    </div>
      <div className={classes.modal}>
        <PatientCommentModal
          modalStyle={modalStyle}
          classes={classes}
          pComment={pComment}
          showPatientComment={showPatientComment}
          setShowPatientComment={setShowPatientComment}
        />
      </div>

      <div className={classes.modal}>
        <DoctorCommentModal
          modalStyle={modalStyle}
          classes={classes}
          cComment={cComment}
          setcComment={setcComment}
          showDoctorComment={showDoctorComment}
          setShowDoctorComment={setShowDoctorComment}
        />
      </div>

      <TableContainer className={classes.container}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell className={classes.head} colSpan={4}></TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center" style={{minWidth: '15%'}}>Uploaded Time</TableCell>
              <TableCell align="center">Uroflow Preview</TableCell>
              <TableCell align="center" style={{width: '25%'}}>Conditions</TableCell>
              <TableCell align="center">Comments</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentRecords.map(record => (
              <TableRow hover key={record.id}>
                <TableCell align="center"> {record.time.toLocaleDateString()} </TableCell>
                <TableCell align="left">
                  {" "}
                  <Button onClick={() => handleOpenGraph(record.curveId)}>
                    <img
                      src="/flowcurve.png"
                      style={{ maxWidth: "200px" }}
                      alt=""
                    />{" "}
                  </Button>
                  <Modal
                    disableAutoFocus={true}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={openGraph}
                    onClose={handleCloseGraph}
                  >
                    <div style={modalStyle} className={classes.paper}>
                      <FlowCurve label={label} data={data} />
                    </div>
                  </Modal>
                </TableCell>
                <TableCell align="center">
                <Opacity className={classes.icon}
                        fontSize="large"
                        color={record.condition[0] ? "error" : "disabled"}
                      />
                {/* </TableCell>
                <TableCell align="center"> */}
                <SvgIcon className={classes.icon}
                        fontSize="large"
                        color={record.condition[1] ? "error" : "disabled"}
                      >
                        <path
                          d="M11.36 2c-.21 0-.49.12-.79.32C10 2.7 8.85 3.9 8.4 5.1c-.34.9-.35
                                  1.72-.21 2.33c-.56.1-.97.28-1.13.35c-.51.22-1.59 1.18-1.69 2.67c-.03.52.04
                                  1.05.2 1.55c-.66.19-1.04.43-1.07.44c-.32.12-.85.49-1 .69c-.35.4-.58.87-.71
                                  1.37c-.29 1.09-.19 2.33.34 3.33c.29.56.69 1.17 1.13 1.6c1.44 1.48 3.92 2.04
                                  5.88 2.36c2.39.4 4.89.26 7.12-.66c3.35-1.39 4.24-3.63
                                  4.38-4.24c.29-1.39-.07-2.7-.22-3.02c-.22-.46-.58-.93-1.17-1.23c-.4-.25-.75-.38-1.01-.44c.26-.95-.11-1.7-.62-2.26c-.77-.82-1.56-.94-1.56-.94c.26-.5.36-1.1.22-1.68c-.16-.71-.55-1.16-1.06-1.46c-.52-.31-1.16-.46-1.82-.58c-.32-.06-1.65-.25-2.2-1.01c-.45-.62-.46-1.74-.58-2.07c-.05-.13-.12-.2-.26-.2M16
                                  9.61c.07 0 .13.01.19.01c1.43.16 2.45 1.54 2.28 3.07c-.17 1.53-1.47 2.65-2.9
                                  2.49c-1.43-.18-2.45-1.53-2.28-3.07c.16-1.45 1.35-2.55 2.71-2.5m-7.38 0c1.33.04
                                  2.44 1.17 2.54 2.6c.12 1.54-.95 2.87-2.38 2.98h-.01c-1.43.11-2.69-1.05-2.81-2.59c-.11-1.54.96-2.87
                                  2.39-2.98c.09-.01.18-.01.27-.01m.02 1.7c-.04 0-.07 0-.11.01c-.56.07-.96.58-.89
                                  1.13a1 1 0 0 0 1.13.87c.56-.07.96-.58.9-1.13a1.01 1.01 0 0 0-1.03-.88m7.3.02c-.52.02-.94.42-.98.95a1
                                  1 0 0 0 .95 1.06a1.008 1.008 0 1 0 .14-2.01h-.11m-7.23 4.82c.29-.01.55.08.79.13c1.18.22
                                  2.2.25 2.69.25c.49 0 1.5-.03 2.67-.25c.41-.08.88-.25 1.25 0c.48.32.13 1.47-.61 2.25a4.53
                                  4.53 0 0 1-3.31 1.38c-1.78 0-2.86-.91-3.31-1.38c-.74-.78-1.09-1.93-.62-2.25c.14-.09.29-.13.45-.13z"
                        />
                      </SvgIcon>
                {/* </TableCell>
                <TableCell align="left"> */}
                <Warning className={classes.icon}
                        fontSize="large"
                        color={record.condition[2] ? "error" : "disabled"}
                      />
                </TableCell>

                <TableCell align="right">
                  <ButtonGroup variant="text">
                    <Button
                      color="secondary"
                      onClick={() => onPatientCommentClick(record.id)}
                    >
                      {" "}
                      Patient's Comments{" "}
                    </Button>
                    <Button
                      color="secondary"
                      onClick={() => onDoctorCommentClick(record.id)}
                    >
                      {" "}
                      Clinician's Comments{" "}
                    </Button>
                  </ButtonGroup>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export { RecordList };
