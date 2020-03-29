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
            width: '40vw',
            height: '40vh',
            // background: 'white',
            // padding: '30px 20px 10px 20px',
            // borderRadius: '10px',
        }
    }

    buildChart = () => {
        const myChartRef = this.chartRef.current.getContext("2d");
        const { data, average, labels } = this.props;

        if (typeof curve !== "undefined") curve.destroy();

        curve = new Chart(myChartRef, {
            type: "line",
            data: {
                //Bring in data
                labels: this.props.label,
                datasets: [
                    {
                        label: "flow",
                        data: this.props.data,
                        fill: false,
                        borderColor: "orange",
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
                            labelString: 'Flow Rate (mL/second)'
                        },
                    }],
                    xAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'Time (second)'
                        },
                        ticks: {
                            callback: function (value, index, values) {
                                // if (value === 1.0) {
                                //     return value
                                // }
                                if (value === 15.0) {
                                    return value
                                } else {
                                    return null
                                }
                            }
                        }
                    }],
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
                    style={{width: '40vw', height: '40vh'}}
                />
            </div>
        )
    }
}

