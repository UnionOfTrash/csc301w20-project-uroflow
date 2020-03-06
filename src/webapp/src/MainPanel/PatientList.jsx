import React from "react";
import { Button, ButtonGroup } from "@material-ui/core";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell
} from "@material-ui/core";
import { FiberManualRecord } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {
    overflowY: "auto"
  },
  head: {
    padding: theme.spacing(1),
    textAlign: "center"
  },
  grid: {
    margin: theme.spacing(0.5),
    alignItems: "center"
  },
  form: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center"
  },
  input: {
    marginLeft: theme.spacing(1),
<<<<<<< HEAD
    flex: 1
=======
    flex: 1,
    minWidth: '200px'
>>>>>>> cd68f108e482fb6a8d83d7c74c505d468946e98c
  },
  iconButton: {
    padding: 10
  },
  sort: {
    padding: theme.spacing(1)
  }
}));

function PatientList(props) {
  const rows = props.patients;

  const classes = useStyles();

  return (
    <TableContainer className={classes.container}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>StudyId</TableCell>
            <TableCell align="center">RecNum</TableCell>
            <TableCell align="center">New</TableCell>
            <TableCell align="center">Detail</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow hover key={row.studyId}>
              <TableCell component="th" scope="row">
                {" "}
                {row.studyId}{" "}
              </TableCell>
              <TableCell align="center"> {row.numRecord} </TableCell>
              <TableCell align="center">
                {" "}
                <FiberManualRecord
                  onClick={() => alert("click !")}
                  fontSize="small"
                  color={row.hasNew ? "primary" : "disabled"}
                />{" "}
              </TableCell>
              <TableCell align="center">
                <ButtonGroup variant="text">
                  <Button
                    onClick={() => props.onDetailClick(row.studyId)}
                    color="secondary"
                  >
                    {" "}
                    Details{" "}
                  </Button>
                </ButtonGroup>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export { PatientList };
