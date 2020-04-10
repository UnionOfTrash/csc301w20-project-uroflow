import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';

import { PatientList, SearchPannel } from "."

import RecordTable from "./RecordTable"

import { Service } from '../Service'


class MainPannel extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            loadPatient: false,
            allPatients: [],
            currentPatients: [],
            records: [],
            patientId: 0,
            searchId: "",
            addClientPannelOpen: false,
            detailRecords: false,
            changeRecords: false,
            hasNewRecChanged: false
        }
    }

    setHasNewRecChanged = (changed) => {
        this.setState({
            hasNewRecChanged: changed
        })
    }

    componentDidMount() {
        Service.getPatients().then(res => {

            const curP = res.sort((a, b) => {
                if (a.has_new && !b.has_new) {
                    return -1
                } else if (!a.has_new && b.has_new) {
                    return 1
                } else {
                    return a.study_id.localeCompare(b.study_id)
                }
            })

            this.setState({
                allPatients: res,
                currentPatients: curP,
                loadPatient: true
            })
            // console.log(res)
        }).catch(e => {
            console.log(e)
            Service.Authentication.logout()
            this.props.setUser({})
            alert(e)
        })
    }

    classes = this.props.classes

    onSearchClick = (e) => {
        e.preventDefault();
        const curP = this.state.allPatients.filter(p => {
            const pid = p.study_id.substring(0, this.state.searchId.length)
            return (pid === this.state.searchId)
        })
        this.setState({
            currentPatients: curP
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
            searchId: value,
            currentPatients: curPatients,
        })
    }

    onSortByIdClick = () => {

        const patients = this.state.currentPatients

        if (this.state.hasNewRecChanged) {

            this.setState({
                loadPatient: false
            })

            Service.getPatients().then(res => {

                const SearchPatients = res.filter(p => {
                    // console.log(p)
                    const value = this.state.searchId
                    const pid = p.study_id.substring(0, value.length)
                    return (pid === value)
                })

                const curP = SearchPatients.sort((a, b) => {
                    return (a.study_id.localeCompare(b.study_id))
                })

                this.setState({
                    allPatients: res,
                    currentPatients: curP,
                    hasNewRecChanged: false,
                    loadPatient: true
                })

            })
        } else {
            const curP = patients.sort((a, b) => {
                return (a.study_id.localeCompare(b.study_id))
            })
            this.setState({
                currentPatients: curP
            })
        }
    }

    onSortByRecentClick = () => {

        const patients = this.state.currentPatients

        if (this.state.hasNewRecChanged) {

            this.setState({
                loadPatient: false
            })

            Service.getPatients().then(res => {

                const SearchPatients = res.filter(p => {
                    const value = this.state.searchId
                    const pid = p.study_id.substring(0, value.length)
                    return (pid === value)
                })

                const curP = SearchPatients.sort((a, b) => {
                    if (a.has_new && !b.has_new) {
                        return -1
                    } else if (!a.has_new && b.has_new) {
                        return 1
                    } else {
                        return a.study_id.localeCompare(b.study_id)
                    }
                })

                this.setState({
                    allPatients: res,
                    currentPatients: curP,
                    hasNewRecChanged: false,
                    loadPatient: true
                })

            })

        }

        const curP = patients.sort((a, b) => {
            if (a.has_new && !b.has_new) {
                return -1
            } else if (!a.has_new && b.has_new) {
                return 1
            } else {
                return a.study_id.localeCompare(b.study_id)
            }
        })

        this.setState({
            currentPatients: curP
        })
    }


    onDetailClick = (pid, hasNew) => {
        this.setState({
            detailRecords: true,
            changeRecords: false
        })

        const id = String(pid)
        Service.getRecords(id).then(res => {
            // console.log(res[0])
            const rec = res.map(r => {
                r.time = new Date(r.updatedAt)
                return r
            })

            this.setState({
                records: rec,
                changeRecords: true
            })

            if (hasNew) {
                Service.updatePatientNewRecord(false, pid)
                    .then(res => {
                        console.log(res)
                        this.setHasNewRecChanged(true)
                    })
            }

        }).catch(e => console.log(e))
    }

    onNewRecordClick = (pid) => {
        Service.updatePatientNewRecord(true, pid).then(res => {
            console.log("update hasNew record successfully")


        }).catch(e => {
            if (e === 401) {
                console.log(e)
                Service.Authentication.logout()
                this.props.setUser({})
            }
        })
    }


    addNewClientHandler = (newClient) => {
        return new Promise((resolve) => {
            Service.addPatient(newClient).then(() => {
                Service.getPatients().then(res => {

                    const curP = res.sort((a, b) => {
                        const aid = parseInt(a.study_id)
                        const bid = parseInt(b.study_id)
                        return (aid - bid)
                    })
                    this.setState({
                        allPatients: res,
                        currentPatients: curP,
                        loadPatient: true
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
        flexDirection: 'column',
    }

    recordPanel = {
        paddingTop: '0',
        paddingLeft: '0',
        display: 'flex',
        flexDirection: 'column',
    }


    render() {
        return (
            <Grid container className={this.classes.grid} spacing={2} >
                <Grid item xl={4} xs={4} >
                    <Paper className={this.classes.paper} style={this.colFlex}>
                        <SearchPannel
                            onSearchClick={this.onSearchClick}
                            onSearchChange={this.onSearchChange}
                            onSortByIdClick={this.onSortByIdClick}
                            onSortByRecentClick={this.onSortByRecentClick}
                            addNewClientHandler={this.addNewClientHandler}
                        />
                        {
                            this.state.loadPatient ? <PatientList
                                patients={this.state.currentPatients}
                                onDetailClick={this.onDetailClick}
                                onNewRecordClick={this.onNewRecordClick}
                            /> :
                                <div style={this.progressStyle()}><CircularProgress /></div>
                        }
                    </Paper>
                </Grid>
                <Grid item xl={8} xs={8} >
                    <Paper className={this.classes.paper2} style={this.recordPanel}>
                        {
                            this.state.detailRecords ?
                                this.state.changeRecords ?
                                    <RecordTable records={this.state.records} />
                                    :
                                    <div style={this.progressStyle()}><CircularProgress /></div>
                                :
                                <div>
                                    <h1>Welcome to Uroflow</h1>
                                </div>
                        }
                    </Paper>
                </Grid>
            </Grid>
        )
    }
}


export default MainPannel