import React, {useState, useEffect} from 'react';
import { Grid, Paper } from '@material-ui/core';

import {PatientList, RecordList, SearchPanel, AddClientPanel} from "../MainPanel"

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
            addClientPanelOpen: false
        }
    }

    componentDidMount(){
        Service.getPatients().then(res => {

            const curP = res.sort((a, b) => {
                const aid = parseInt(a.studyId)
                const bid = parseInt(b.studyId)
                return (aid-bid)
            })
            this.setState({
                allPatients:res,
                currentPatients:curP,
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

    onSortByIdClick = () => {
        const curP = this.state.currentPatients.sort((a, b) => {
            const aid = parseInt(a.studyId)
            const bid = parseInt(b.studyId)
            return (aid-bid)
        })

        this.setState({
            currentPatients:curP
        })
    }

    onSortByRecentClick = () => {

        const curP = this.state.currentPatients.sort((a,b) => {
            const aid = parseInt(a.studyId)
            const bid = parseInt(b.studyId)
            if(a.hasNew && !b.hasNew){
                return -1
            }else if (!a.hasNew && b.hasNew){
                return 1
            }else{
                return aid-bid
            }
        })

        this.setState({
            currentPatients:curP
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



    addNewClientHandler = (newClient) => {
        // Backend...
        const newPatientList = [...this.state.currentPatients, newClient]

        this.setState({currentPatients: newPatientList}, function () {
            this.onSortByIdClick()
        });
    }

    openAddClientPanel = () => {
        this.setState({
            addClientPanelOpen: true
        })
    }

    closeAddClientPanel = () => {
        this.setState({
            addClientPanelOpen: false
        })
    }

    render(){
        return (
            <Grid container className={ this.classes.grid } spacing={ 2 } >
                <AddClientPanel
                openStatus={this.state.addClientPanelOpen}
                close={this.closeAddClientPanel}
                addNewClientHandler={this.addNewClientHandler}
                >
                </AddClientPanel>
              <Grid item xl={ 4 } xs={ 4 } >
                <Paper className={ this.classes.paper } >
                    <Grid container className={ this.classes.grid }>
                        <SearchPanel
                            onSearchClick={this.onSearchClick}
                            onSearchChange={this.onSearchChange}
                            onSortByIdClick={this.onSortByIdClick}
                            onSortByRecentClick={this.onSortByRecentClick}
                            addClientPanelOpen={this.state.addClientPanelOpen}
                            openAddClientPanel={this.openAddClientPanel}
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