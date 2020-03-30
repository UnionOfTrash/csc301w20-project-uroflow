import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import Curve from "../MainPanel/Curve";

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
    width: '80vw',
    height: '80vh',
    background: 'white',
    padding: '30px 20px 10px 20px',
    borderRadius: '10px',
  },
  stats: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#4eb4da',
    padding: theme.spacing(2),
    borderRadius: '10px',
    justifyContent: 'space-between'
  },
  statsItem: {
    color: 'white'
  }
}));


export default function FlowCurve(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function getDataSet() {
    const rate = []
    const time = []
    for (let i = 0; i < props.label.length; i++) {
      const dataPoint = parseFloat(props.data[i])
      if(!isNaN(dataPoint)) {
        rate.push(parseFloat(dataPoint.toFixed(2)))
        time.push(parseFloat(props.label[i]))
      }
    }
    return [rate, time]
  }

  const dataSet = getDataSet()
  const rate = dataSet[0]
  const time = dataSet[1]

  function getAccelationDataSet() {
    const acceleration = []
    for (let i = 0; i < time.length - 1; i++) {
      const dataPoint = ((rate[i + 1] - rate[i]) / (time[i + 1] - time[i]))
      acceleration.push(parseFloat(dataPoint.toFixed(2)))
      console.log(dataPoint)
    }
    return acceleration
  }

  function getVolumeDataSet() {
    const volume = [0]
    for (let i = 1; i < time.length - 1; i++) {
      const dataPoint = ((time[i] - time[i - 1]) * rate[i]) + volume[i - 1]
      volume.push(parseFloat(dataPoint.toFixed(2)))
    }
    return volume
  }

  const accelerationData = getAccelationDataSet()
  const volumeData = getVolumeDataSet()

  function calculate() {
    let max = 0
    let total = 0
    let startTime = 0
    let endTime = 0
    let maxTime = 0
    let rateAtTwo = 0
    for (let i = 0; i < time.length; i++) {
      total += rate[i]
      if (max < rate[i]) {
        max = rate[i]
        maxTime = time[i]
      }
      if(startTime === 0 && rate[1] <= 0 && rate[i] <= 0 && rate[i + 1] > 0) {
        startTime = time[i]
      }
      if(rate[i - 1] > 0 && rate[i] <= 0) {
        endTime = time[i]
      }
      if(time[i] === startTime + 2) {
        rateAtTwo = rate[i]
      }
    }
    console.log(total)
    console.log(time.length)
    return {
      max: parseFloat(parseFloat(max).toFixed(2)),
      average: parseFloat((total / time.length).toFixed(2)),
      timeInterval: endTime - startTime,
      timeToMax: maxTime - startTime,
      totalVoid: volumeData[volumeData.length - 1],
      rateAtTwo: rateAtTwo
    }
  }

  const stats = calculate()

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} variant="fullWidth" style={{color: 'white'}} >
          <Tab label="Flow Rate" {...a11yProps(0)} />
          <Tab label="Flow Acceleration" {...a11yProps(1)} />
          <Tab label="Volume Voided" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Curve data={rate} label={time} yaxis="Flow Rate (mL/second)" datalabel="flow rate"/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Curve data={accelerationData} label={time} yaxis="Flow Acceleration (mL/second²)" datalabel="flow acceleration"/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Curve data={volumeData} label={time} yaxis="Volume Voided (mL)" datalabel="volume voided" />
      </TabPanel>
      <div className={classes.stats}>
        <div className={classes.statsItem}>Max Flow: {stats.max}mL/sec</div>
        <div className={classes.statsItem}>Average Flow: {stats.average}mL/sec</div>
        <div className={classes.statsItem}>Time Interval: {stats.timeInterval}sec</div>
        <div className={classes.statsItem}>Total Voided: {stats.totalVoid}mL</div>
        <div className={classes.statsItem}>Flow at 2 sec: {stats.rateAtTwo}mL/sec</div>
      </div>
    </div>
  );
}