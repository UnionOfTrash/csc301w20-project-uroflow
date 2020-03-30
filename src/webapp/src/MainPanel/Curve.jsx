import React, { Component } from 'react'
import Chart from "chart.js";

let curve

export default class Curve extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    chartRef = React.createRef();

    componentDidMount() {
        this.buildChart();
    }

    componentDidUpdate() {
        this.buildChart();
    }

    containerStyle = () => {
        return {
            width: '100%',
            minHeight: '55vh',
            // background: 'white',
            // padding: '30px 20px 10px 20px',
            // borderRadius: '10px',
        }
    }

    buildChart = () => {
        const myChartRef = this.chartRef.current.getContext("2d");

        if (typeof curve !== "undefined") curve.destroy();

        curve = new Chart(myChartRef, {
            type: "line",
            data: {
                //Bring in data
                labels: this.props.label,
                datasets: [
                    {
                        // label: "flow",
                        label: this.props.datalabel,
                        data: this.props.data,
                        fill: false,
                        borderColor: "#4eb4da",
                        pointBorderWidth: 0,
                        pointBorderColor: 'rgba(0,0,0,0)',
                        pointBackgroundColor: 'rgba(0,0,0,0)'
                    },
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    yAxes: [{
                        scaleLabel: {
                            display: true,
                            // labelString: 'Flow Rate (mL/second)'
                            labelString: this.props.yaxis
                        },
                    }],
                    xAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'Time (second)'
                        },
                        ticks: {
                            stepSize: 1,
                            beginAtZero: true,
                        }
                    }],
                },
                legend: {
                    display: false,
                },
                tooltips: {
                    displayColors: false
                }
            }
        });
    }
    render() {
        return (
            <div
                style={this.containerStyle()}
            >
                <canvas
                    id="uroflow-curve"
                    ref={this.chartRef}
                />
            </div>
        )
    }
}

