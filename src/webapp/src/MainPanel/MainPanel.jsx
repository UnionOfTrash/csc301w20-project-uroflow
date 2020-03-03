import React, {useState, useEffect} from 'react';
import { Grid, Paper } from '@material-ui/core';

import {PatientList, RecordList, SearchPanel} from "../MainPanel"

import {Service} from '../Service'


class MainPanel extends React.Component{

    constructor(props){
        super(props)
        this.state={
            allPatients:[],
            currentPatients:[],
            records:[],
            patientId:0,
            searchId:"",
        }
    }

    componentDidMount(){
        Service.getPatients().then(res => {
            this.setState({
                allPatients:res,
                currentPatients:res,
            })
            console.log(res)
        }).catch(e => console.log(e))
    }

    classes = this.props.classes



    onSearchClick = (e) => {
        e.preventDefault();
        const curP = this.state.allPatients.filter(p => {
            const pid = p.studyId.substring(0, this.state.searchId.length)
            return (pid === this.state.searchId)
        })
        this.setState({
            currentPatients:curP
        })

    }

    onSearchChange = (e) => {

        const value = e.target.value
        const patients = this.state.allPatients
        const curPatients = patients.filter(p => {
                console.log(p)
                const pid = p.studyId.substring(0, value.length)
                return (pid === value)
            })

        this.setState({
            searchId:value,
            currentPatients:curPatients,
        })
    }

    onDetailClick = (sid) => {
        
        const id = String(sid)
        Service.getRecords(id).then(res => {
            this.setState({
                records:res
            })
        }).catch(e => console.log(e))
    }

    render(){
        return (
        
            <Grid container className={ this.classes.grid } spacing={ 2 } >
              <Grid item xl={ 4 } xs={ 4 } >
                <Paper className={ this.classes.paper } >
                    <Grid container className={ this.classes.grid }>
    
                        <SearchPanel
                            onSearchClick={this.onSearchClick}
                            onSearchChange={this.onSearchChange}
                        />
    
                        <PatientList 
                            patients={this.state.currentPatients}
                            onDetailClick={this.onDetailClick}
                        />
                    </Grid>
                </Paper>
              </Grid>
              <Grid item xl={ 8 } xs={ 8 } >
                <Paper className={ this.classes.paper } >
                  <RecordList
                    records={this.state.records}
                  />
                </Paper>
              </Grid>
            </Grid>
        )
    }
}


export default MainPanel