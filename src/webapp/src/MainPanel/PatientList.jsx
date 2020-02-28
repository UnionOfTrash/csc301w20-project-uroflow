import React, {useState} from 'react';
import { Grid, Paper } from '@material-ui/core';
import { Button, ButtonGroup, IconButton, InputBase } from '@material-ui/core';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell} from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Search, FiberManualRecord } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  container: {
    maxHeight: window.innerHeight - theme.spacing(16),
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

  const [rows, setRows] = useState(props.patients)

  const [patient, setPatient] = useState(0)

  const [searchId, setSearchId] = useState("")

  const onSearchClick = (e) => {

    e.preventDefault();
    
    setRows(props.patients.filter(p => {
      const pid = p.id.substring(0, searchId.length)
      return (pid === searchId)
    }))

  }

  const onSearchChange = (e) => {

    const value = e.target.value

    setSearchId(value)

    setRows(props.patients.filter(p => {
      console.log(p)
      const pid = p.id.substring(0, value.length)
      console.log(pid+ ":" + searchId)
      return (pid === value)
    }))

  }



  const classes = useStyles();

  return (
    <TableContainer className={ classes.container } >
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell className={ classes.head } colSpan={ 4 } >
              <Grid container className={ classes.grid } spacing={ 1 } >
                <Grid item xl={ 2 } xs={ 2 } >
                  <Button variant='contained' color='secondary'> Add </Button>
                </Grid>
                <Grid item xl={ 6 } xs={ 6 } >
                  <Paper component='form' className={ classes.form } >
                    <InputBase placeholder='Search ID' className={ classes.input } onChange={onSearchChange} />
                    <IconButton type='submit' className={ classes.iconButton } onClick={onSearchClick}> <Search /> </IconButton>
                  </Paper>
                </Grid>
                <Grid item className={ classes.sort } xl={ 4 } xs={ 4 } >
                  <Typography variant='overline' display='block'> Sort By </Typography>
                  <ButtonGroup variant='text'>
                    <Button color='primary'> ID </Button>
                    <Button color='secondary'> Recent Update </Button>
                  </ButtonGroup>
                </Grid>
              </Grid>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            rows.map(row => (
              <TableRow hover key={ row.id } >
                <TableCell component='th' scope='row'> { row.id } </TableCell>
                <TableCell align='left'> { row.num } </TableCell>
                <TableCell align='left'> <FiberManualRecord fontSize='small' color={ row.recentUpdate ? 'primary' : 'disabled' } /> </TableCell>
                <TableCell align='right'>
                  <ButtonGroup variant='text'>
                    <Button color='secondary'> Details </Button>
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
