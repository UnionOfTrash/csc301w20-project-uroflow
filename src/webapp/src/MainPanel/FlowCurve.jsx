import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </div>
  );
  }



// import React, { Component } from 'react'
// import Grid from '@material-ui/core/Grid'
// import Chart from "chart.js";

// import AppBar from '@material-ui/core/AppBar';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';

// import Curve from "../MainPanel/Curve";


// let flowCurve
// let accCurve
// let volCurve

// function TabPanel(props) {
//     const { children, value, index, ...other } = props;

//     return (
//         <Typography
//             component="div"
//             role="tabpanel"
//             hidden={value !== index}
//             id={`simple-tabpanel-${index}`}
//             aria-labelledby={`simple-tab-${index}`}
//             {...other}
//         >
//             {value === index && <Box p={3}>{children}</Box>}
//         </Typography>
//     );
// }

// TabPanel.propTypes = {
//     children: PropTypes.node,
//     index: PropTypes.any.isRequired,
//     value: PropTypes.any.isRequired,
// };

// function a11yProps(index) {
//     return {
//         id: `simple-tab-${index}`,
//         'aria-controls': `simple-tabpanel-${index}`,
//     };
// }

// export default class FlowCurve extends Component {

//     constructor(props) {
//         super(props)
//         this.state = {
//             value: 0
//         }
//     }

//     handleChange = (event, newValue) => {
//         setValue(newValue);
//     }

//     chartRef = React.createRef();

//     // componentDidMount() {
//     //     this.buildChart();
//     // }

//     // componentDidUpdate() {
//     //     this.buildChart();
//     // }

//     containerStyle = () => {
//         return {
//             width: '80vw',
//             height: '80vh',
//             background: 'white',
//             padding: '30px 20px 10px 20px',
//             borderRadius: '10px',
//             display: 'flex',
//             flexDirection: 'column'
//         }
//     }

//     chartStyle = () => {
//         return {
//             width: '40vw',
//             height: '40wh'
//         }
//     }

//     getAccelationDataSet = () => {
//         const acceleration = []
//         for (let i = 0; i < this.props.label.length - 1; i++) {
//             const dataPoint = ((this.props.data[i + 1] - this.props.data[i]) / (this.props.label[i + 1] - this.props.label[i]))
//             acceleration.push(parseFloat(dataPoint.toFixed(7)))
//         }
//         return acceleration
//     }

//     getVolumeDataSet = () => {
//         const volume = [0]
//         for (let i = 1; i < this.props.label.length - 1; i++) {
//             const dataPoint = ((this.props.label[i - 1] + this.props.label[i]) * this.props.data[i]) + volume[i - 1]
//             volume.push(parseFloat(dataPoint.toFixed(7)))
//         }
//         return volume
//     }

//     // buildChart = () => {
//     //     const myChartRef = this.chartRef.current.getContext("2d");
//     //     const { data, average, labels } = this.props;

//     //     if (typeof flowCurve !== "undefined") flowCurve.destroy();

//     //     flowCurve = new Chart(myChartRef, {
//     //         type: "line",
//     //         data: {
//     //             //Bring in data
//     //             labels: this.props.label,
//     //             datasets: [
//     //                 {
//     //                     label: "flow",
//     //                     data: this.props.data,
//     //                     fill: false,
//     //                     borderColor: "orange",
//     //                     pointBorderWidth: 0,
//     //                     pointBorderColor: 'rgba(0,0,0,0)',
//     //                     pointBackgroundColor: 'rgba(0,0,0,0)'
//     //                 },
//     //                 {
//     //                     label: 'acceleration',
//     //                     data: this.getAccelationDataSet(),
//     //                     fill: false,
//     //                     borderColor: 'grey',
//     //                     pointBorderWidth: 0,
//     //                     pointBorderColor: 'rgba(0,0,0,0)',
//     //                     pointBackgroundColor: 'rgba(0,0,0,0)'
//     //                 },
//     //                 {
//     //                     label: 'volume',
//     //                     data: this.getVolumeDataSet(),
//     //                     fill: false,
//     //                     borderColor: 'yellow',
//     //                     pointBorderWidth: 0,
//     //                     pointBorderColor: 'rgba(0,0,0,0)',
//     //                     pointBackgroundColor: 'rgba(0,0,0,0)'
//     //                 }
//     //             ]
//     //         },
//     //         options: {
//     //             responsive: true,
//     //             maintainAspectRatio: false,
//     //             scales: {
//     //                 yAxes: [{
//     //                     scaleLabel: {
//     //                         display: true,
//     //                         labelString: 'Flow Rate (mL/second)'
//     //                     },
//     //                 }],
//     //                 xAxes: [{
//     //                     scaleLabel: {
//     //                         display: true,
//     //                         labelString: 'Time (second)'
//     //                     },
//     //                     ticks: {
//     //                         callback: function(value, index, values) {
//     //                             if(value % 1 == 0) {
//     //                                 return Math.round(value)
//     //                             }               
//     //                         }
//     //                     }
//     //                 }],
//     //             }
//     //         }
//     //     });
//     // }
//     render() {
//         return (
//             // <div style={this.containerStyle()}>
//             //     {/* <canvas
//             //         id="uroflow-curve"
//             //         ref={this.chartRef}
//             //     /> */}
//             //     <div><Curve data = {this.props.data} label = {this.props.label} /></div>
//             //     <div><Curve data = {this.props.data} label = {this.props.label} /></div>
//             // </div>
//             <div style={this.containerStyle()}>
//                 <AppBar position="static">
//                     <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
//                         <Tab label="Item One" {...a11yProps(0)} />
//                         <Tab label="Item Two" {...a11yProps(1)} />
//                         <Tab label="Item Three" {...a11yProps(2)} />
//                     </Tabs>
//                 </AppBar>
//                 <TabPanel value={value} index={0}>
//                     Item One
//                 </TabPanel>
//                 <TabPanel value={value} index={1}>
//                     Item Two
//                 </TabPanel>
//                 <TabPanel value={value} index={2}>
//                     Item Three
//                 </TabPanel>
//                 {/* <Grid container>
//                     <Grid style={this.chartStyle()} item xs={6}>
//                         <Curve data={this.props.data} label={this.props.label} />
//                     </Grid>
//                     <Grid style={this.chartStyle()} item xs={6}>
//                         <Curve data={this.props.data} label={this.props.label} />
//                     </Grid>
//                     <Grid style={this.chartStyle()} item xs={6}>
//                     <Curve data={this.props.data} label={this.props.label} />
//                     </Grid>
//                 </Grid> */}
//             </div>
//         )
//     }
// }

