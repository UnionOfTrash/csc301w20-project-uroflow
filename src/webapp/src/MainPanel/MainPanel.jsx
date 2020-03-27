import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';

import {PatientList, RecordList, SearchPanel} from "../MainPanel"

import {Service} from '../Service'


class MainPanel extends React.Component{

    constructor(props){
        super(props)
        this.state={
            loadPatient:false,
            allPatients:[],
            currentPatients:[],
            records:[],
            patientId:0,
            searchId:"",
            addClientPanelOpen: false,
            detailRecords:false,
            changeRecords:false
        }
    }

    componentDidMount(){
        Service.getPatients().then(res => {

            const curP = res.sort((a, b) => (parseInt(a.study_id)-parseInt(b.study_id)))

            this.setState({
                allPatients:res,
                currentPatients:curP,
                loadPatient:true
            })

            // console.log(res)
        }).catch(e => console.log(e))
    }

    classes = this.props.classes

    onSearchClick = (e) => {
        e.preventDefault();
        const curP = this.state.allPatients.filter(p => {
            const pid = p.study_id.substring(0, this.state.searchId.length)
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
                // console.log(p)
                const pid = p.study_id.substring(0, value.length)
                return (pid === value)
            })

        this.setState({
            searchId:value,
            currentPatients:curPatients,
        })
    }

    onSortByIdClick = () => {
        const curP = this.state.currentPatients.sort((a, b) => {
            const aid = parseInt(a.study_id)
            const bid = parseInt(b.study_id)
            return (aid-bid)
        })

        this.setState({
            currentPatients:curP
        })
    }

    onSortByRecentClick = () => {

        const curP = this.state.currentPatients.sort((a,b) => {
            const aid = parseInt(a.study_id)
            const bid = parseInt(b.study_id)
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
        this.setState({
            detailRecords:true,
            changeRecords:false
        })

        const id = String(sid)
        Service.getRecords(id).then(res => {
            // console.log(res[0])
            const rec = res.map(r => {
                r.time = new Date(r.updatedAt)
                return r
            })

            this.setState({
                records:rec,
                changeRecords:true
            })
        }).catch(e => console.log(e))
    }



    addNewClientHandler = (newClient) => {
        return new Promise((resolve) => {
            Service.addPatient(newClient).then(() => {
                Service.getPatients().then(res => {

                    const curP = res.sort((a, b) => {
                        const aid = parseInt(a.study_id)
                        const bid = parseInt(b.study_id)
                        return (aid-bid)
                    })
                    this.setState({
                        allPatients:res,
                        currentPatients:curP,
                        loadPatient:true
                    })
                }).catch(e => console.log(e))
                resolve("success")
            }).catch(() => alert("The Study ID already exists."))
        })
    }

    progressStyle = () => {
        return {
            display: 'flex',
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            position: 'relative',
            top: '50px'
        }
    }

    colFlex = {
            display: 'flex',
            flexDirection: 'column'
        }
    

    render(){
        return (
            <Grid container className={ this.classes.grid } spacing={ 2 } >
              <Grid item xl={ 4 } xs={ 4 } >
                <Paper className={ this.classes.paper } style={this.colFlex}>
                        <SearchPanel
                            onSearchClick={this.onSearchClick}
                            onSearchChange={this.onSearchChange}
                            onSortByIdClick={this.onSortByIdClick}
                            onSortByRecentClick={this.onSortByRecentClick}
                            addNewClientHandler={this.addNewClientHandler}
                        /> 
                        {
                            this.state.loadPatient? <PatientList 
                                                        patients={this.state.currentPatients}
                                                        onDetailClick={this.onDetailClick}
                                                    />:
                                                    <div style={this.progressStyle()}><CircularProgress /></div>
                        }
                </Paper>
              </Grid>
              <Grid item xl={ 8 } xs={ 8 } >
                <Paper className={ this.classes.paper } style={this.colFlex}>
                    {
                        this.state.detailRecords? 
                            this.state.changeRecords?<RecordList records={this.state.records}/>: <div style={this.progressStyle()}><CircularProgress /></div>
                            :
                            <div style={{marginTop:"80px"}}>
                                    <h1>Welcome to Uroflow</h1>
                            </div>
                    }
                </Paper>
              </Grid>
            </Grid>
        )
    }
}


export default MainPanel