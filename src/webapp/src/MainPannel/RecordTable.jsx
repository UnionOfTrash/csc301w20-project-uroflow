import React from "react"
import MUIDataTable from "mui-datatables";
import { Button, SvgIcon, TextField } from "@material-ui/core";
import { Opacity, Warning } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import {
    TableRow,
    TableCell
} from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import FlowCurve from "./FlowCurve";

import {Service} from '../Service'

const classes = makeStyles(theme => ({
    container: {
      height: '100%',
      overflowY: 'auto',
      padding: 0,
    },
    paper: {
      position: "absolute",
      width: "auto",
      backgroundColor: theme.palette.background.paper,
      borderRadius: "2%",
      padding: theme.spacing(2, 4, 3)
    },
    icon: {
      margin: theme.spacing(1)
    }
  }));

const CURVE_URL = "https://uroflow.unionoftra.sh/api/curve/"

const tableTheme = createMuiTheme({
    overrides: {
      MUIDataTable: {
        responsiveScroll: {
            height: '100vh'
        }
      },
      MUIDataTableHeadCell: {
        root: {
          textAlign: 'center',
        },
      }
    }
})
  

class RecordTable extends React.Component{

    constructor(props){
        super(props)
        this.state = {

            records: props.records.map(r => {
                return {
                    id:r.id,
                    time:r.time,
                    leak:r.condition[0]? "yes":"no",
                    poop:r.condition[1]? "yes":"no",
                    urgent:r.condition[2]? "yes":"no",
                    pcomment:r.pcomment,
                    ccomment:r.ccomment,
                    editCComment:false,
                }
            }),

            curveLabel:[],
            curveData:[],
            openGraph:false,
            currentComment:"",
        }
    }


    handleOpenGraph = (cid) => {

        Service.getCurveData(cid).then(curveData => {
          console.log('Results:', curveData)
          this.setState({
              curveData:curveData.data,
              curveLabel:curveData.label,
          }, ()=> {
            this.setState({
                openGraph:true
            })
          })
        })

    };

    handleCloseGraph = () => {
        this.setState({
            openGraph:false
        })
    }

    EditButtonClick = (id, comment) => {


        this.setState({
            records:this.state.records.map(r => {
                        if (r.id === id){
                            r.editCComment = true
                            return r
                        }else{
                            return r
                        }
                    }),
            currentComment:comment
        })
    }

    SaveButtonClick = (id) => {
        const comment = this.state.currentComment

        this.setState({
            records:this.state.records.map(r => {
                if (r.id === id){
                    r.ccomment = comment
                    r.editCComment = false
                    return r
                }else{
                    return r
                }
            })
        }, () => {
            Service.updateCComment(id, comment).then(() => {
                //alert(comment)
                alert("successfully make comment!")
            }).catch(e => alert(e))
        })

    }

    onCommentChange = (e) => {
        const comment = e.target.value
        this.setState({
            currentComment:comment,
        })
    }

    columns = [
        {
            name: "time",
            label: "Uploaded Time",
            options: {
                filter: false,
                sort: true,
            }
        },
        {
            name: "id",
            label: "Uroflow Preview",
            options: {
                filter: false,
                sort: false,
            }
        },
        {
            name: "leak",
            label: "Leak",
            options: {
                filter: true,
                customFilterListOptions: { render: v => `Leak: ${v}` },
                filterOptions: {
                    names: ["yes", "no"]
                },
                sort: false,
            }
        },
        {
            name: "poop",
            label: "Poop",
            options: {
                filter: true,
                customFilterListOptions: { render: v => `Poop: ${v}` },
                filterOptions: {
                    names: ["yes", "no"]
                },
                sort: false,
            }
        },
        {
            name: "urgent",
            label: "Urgent",
            options: {
                filter: true,
                customFilterListOptions: { render: v => `Urgent: ${v}` },
                filterOptions: {
                    names: ["yes", "no"]
                },
                sort: false,
            }
        },
        {
            name: "pcomment",
            label: "Patient Comment",
            options: {
                filter: false,
                sort: false,
            }
        },
        {
            name: "ccomment",
            label: "Clinician Comment",
            options: {
                filter: false,
                sort: false,
            }
        },
        {
            name: "editCComment",
            label: "Edit Comment",
            options: {
                filter: false,
                sort: false,
            }
        }
    ]

    
    options = {
        filterType: "dropdown",
        responsive: "scrollMaxHeight",
        selectableRowsHeader:false,
        print:false,
        download:false,
        viewColumns:false,
        customRowRender: (record, dataIndex, rowIndex) => {

            return (
                <TableRow hover key={rowIndex}>

                    {/* Cell for data index */}
                    <TableCell></TableCell>

                    {/* Cell for the record upload time */}
                    <TableCell> {record[0].toLocaleDateString()} </TableCell>

                    {/* Cell for the thumbnail */}
                    <TableCell>
                    {" "}
                    <Button onClick={() => this.handleOpenGraph(record[1])}>
                        <img
                            src= { CURVE_URL + record[1] +  ".png"}
                            style={{ maxWidth: "200px" }}
                            alt="curve img"
                        />{" "}
                    </Button>
                    </TableCell>

                    {/* Cell for leak */}
                    <TableCell>
                        <Opacity className={classes.icon}
                            fontSize="large"
                            color={record[2]==="yes" ? "error" : "disabled"}
                        />
                    </TableCell>

                    {/* Cell for poop */}
                    <TableCell>
                        <SvgIcon className={classes.icon}
                            fontSize="large"
                            color={record[3]==="yes" ? "error" : "disabled"}
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
                    </TableCell>

                    {/* Cell for Urgent */}
                    <TableCell>
                    <Warning className={classes.icon}
                            fontSize="large"
                            color={record[4]==="yes" ? "error" : "disabled"}
                        />
                    </TableCell>

                    <TableCell> {record[5]} </TableCell>
                    <TableCell>
                        {record[7]? 
                            <TextField defaultValue={this.state.currentComment} id="standard-basic" label="Comment" onChange={this.onCommentChange} />
                            :record[6]}
                    </TableCell>
                    <TableCell>
                        {record[7]?
                            <Button color="primary" onClick={() => this.SaveButtonClick(record[1])}>
                            Save
                            </Button>
                            :
                            <Button color="primary" onClick={() => this.EditButtonClick(record[1], record[6])}>
                            Edit
                            </Button>
                        }
                    </TableCell>
                </TableRow>
            )
        }
    };

    render (){
        return (
            <>
                <Modal
                    disableAutoFocus={true}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.openGraph}
                    onClose={this.handleCloseGraph}
                >
                    <div className={classes.paper}>
                    <FlowCurve label={this.state.curveLabel} data={this.state.curveData} />
                    </div>
                </Modal>
                <ThemeProvider theme={tableTheme}>
                <MUIDataTable
                    className={classes.container}
                    title={"Record List"}
                    data={this.state.records}
                    columns={this.columns}
                    options={this.options}
                />
                </ThemeProvider>
            </>
        )
    }
} 

export default RecordTable;