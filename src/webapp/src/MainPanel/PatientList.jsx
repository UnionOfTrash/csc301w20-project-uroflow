import React, {useState} from 'react';
import { Grid, Paper } from '@material-ui/core';
import { Button, ButtonGroup, IconButton, InputBase } from '@material-ui/core';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell} from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Search, FiberManualRecord } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  container: {
    maxHeight:450
  },
  head: {
    padding: theme.spacing(1),
    textAlign: 'center',
  },
  grid: {
    margin: theme.spacing(0.5),
    alignItems: 'center',
  },
  form: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  sort: {
    padding: theme.spacing(1),
  }
}));

function PatientList(props) {

  const rows = props.patients

  const onDetailClick = (e) => {
    
  }

  const classes = useStyles();

  function DetailButton(props){
    const id = props.id

    const buttonClick = () => {
      props.buttonClick(id)
    }
    return(
      <Button onClick={buttonClick} color='secondary'> Details </Button>
    )
  }

  return (
      <TableContainer className={ classes.container } >
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>StudyId</TableCell>
              <TableCell align="right">RecNum</TableCell>
              <TableCell align="right">New</TableCell>
              <TableCell align="right">Detail</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              rows.map(row => (
                <TableRow hover key={ row.studyId } >
                  <TableCell component='th' scope='row'> { row.studyId } </TableCell>
                  <TableCell align='left'> { row.numRecord } </TableCell>
                  <TableCell align='left'> <FiberManualRecord fontSize='small' color={ row.hasNew ? 'primary' : 'disabled' } /> </TableCell>
                  <TableCell align='right'>
                    <ButtonGroup variant='text'>
                      <DetailButton
                        id={row.studyId}
                        buttonClick={props.onDetailClick}
                      />
                    </ButtonGroup>
                  </TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </TableContainer>
    
  );
}

export {PatientList};
