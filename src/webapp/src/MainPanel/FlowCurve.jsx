import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Chart from "chart.js";

import Curve from "../MainPanel/Curve";

let flowCurve
let accCurve
let volCurve

export default class FlowCurve extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    chartRef = React.createRef();

    // componentDidMount() {
    //     this.buildChart();
    // }

    // componentDidUpdate() {
    //     this.buildChart();
    // }

    containerStyle = () => {
        return {
            width: '80vw',
            height: '80vh',
            background: 'white',
            padding: '30px 20px 10px 20px',
            borderRadius: '10px',
            display: 'flex',
            flexDirection: 'column'
        }
    }

    chartStyle = () => {
        return {
            width: '40vw',
            height: '40wh'
        }
    }

    getAccelationDataSet = () => {
        const acceleration = []
        for (let i = 0; i < this.props.label.length - 1; i++) {
            const dataPoint = ((this.props.data[i + 1] - this.props.data[i]) / (this.props.label[i + 1] - this.props.label[i]))
            acceleration.push(parseFloat(dataPoint.toFixed(7)))
        }
        return acceleration
    }

    getVolumeDataSet = () => {
        const volume = [0]
        for (let i = 1; i < this.props.label.length - 1; i++) {
            const dataPoint = ((this.props.label[i - 1] + this.props.label[i]) * this.props.data[i]) + volume[i - 1]
            volume.push(parseFloat(dataPoint.toFixed(7)))
        }
        return volume
    }

    // buildChart = () => {
    //     const myChartRef = this.chartRef.current.getContext("2d");
    //     const { data, average, labels } = this.props;

    //     if (typeof flowCurve !== "undefined") flowCurve.destroy();

    //     flowCurve = new Chart(myChartRef, {
    //         type: "line",
    //         data: {
    //             //Bring in data
    //             labels: this.props.label,
    //             datasets: [
    //                 {
    //                     label: "flow",
    //                     data: this.props.data,
    //                     fill: false,
    //                     borderColor: "orange",
    //                     pointBorderWidth: 0,
    //                     pointBorderColor: 'rgba(0,0,0,0)',
    //                     pointBackgroundColor: 'rgba(0,0,0,0)'
    //                 },
    //                 {
    //                     label: 'acceleration',
    //                     data: this.getAccelationDataSet(),
    //                     fill: false,
    //                     borderColor: 'grey',
    //                     pointBorderWidth: 0,
    //                     pointBorderColor: 'rgba(0,0,0,0)',
    //                     pointBackgroundColor: 'rgba(0,0,0,0)'
    //                 },
    //                 {
    //                     label: 'volume',
    //                     data: this.getVolumeDataSet(),
    //                     fill: false,
    //                     borderColor: 'yellow',
    //                     pointBorderWidth: 0,
    //                     pointBorderColor: 'rgba(0,0,0,0)',
    //                     pointBackgroundColor: 'rgba(0,0,0,0)'
    //                 }
    //             ]
    //         },
    //         options: {
    //             responsive: true,
    //             maintainAspectRatio: false,
    //             scales: {
    //                 yAxes: [{
    //                     scaleLabel: {
    //                         display: true,
    //                         labelString: 'Flow Rate (mL/second)'
    //                     },
    //                 }],
    //                 xAxes: [{
    //                     scaleLabel: {
    //                         display: true,
    //                         labelString: 'Time (second)'
    //                     },
    //                     ticks: {
    //                         callback: function(value, index, values) {
    //                             if(value % 1 == 0) {
    //                                 return Math.round(value)
    //                             }               
    //                         }
    //                     }
    //                 }],
    //             }
    //         }
    //     });
    // }
    render() {
        return (
            // <div style={this.containerStyle()}>
            //     {/* <canvas
            //         id="uroflow-curve"
            //         ref={this.chartRef}
            //     /> */}
            //     <div><Curve data = {this.props.data} label = {this.props.label} /></div>
            //     <div><Curve data = {this.props.data} label = {this.props.label} /></div>
            // </div>
            <div style={this.containerStyle()}>
                <Grid container>
                    <Grid style={this.chartStyle()} item xs={6}>
                        <Curve data={this.props.data} label={this.props.label} />
                    </Grid>
                    <Grid style={this.chartStyle()} item xs={6}>
                        <Curve data={this.props.data} label={this.props.label} />
                    </Grid>
                    <Grid style={this.chartStyle()} item xs={6}>
                    <Curve data={this.props.data} label={this.props.label} />
                    </Grid>
                </Grid>
            </div>
        )
    }
}

