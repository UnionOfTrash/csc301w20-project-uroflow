import React, { Component } from 'react'
import Chart from "chart.js";

let flowCurve

export default class FlowCurve extends Component {
    chartRef = React.createRef();

    componentDidMount() {
        this.buildChart();
    }

    componentDidUpdate() {
        this.buildChart();
    }

    containerStyle = () => {
        return {
            width: '50vw',
            height: '50vh',
            background: 'white',
            padding: '30px 20px 10px 20px',
            borderRadius: '10px',    
        }
    }

    buildChart = () => {
        const myChartRef = this.chartRef.current.getContext("2d");
        const { data, average, labels } = this.props;

        if (typeof flowCurve !== "undefined") flowCurve.destroy();

        flowCurve = new Chart(myChartRef, {
            type: "line",
            data: {
                //Bring in data
                labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
                datasets: [
                    {
                        label: "flow",
                        data: [0, 0.13, 0.13, 8.26, 14.09, 14.95, 17.23, 11.85, 2.10, 13.76, 42.70, 20.78, 21.89, 13.76, 1.74, 20.58, 23.45, 9.27, 0.49, 0, 0],
                        fill: false,
                        borderColor: "orange"
                    }
                ]
            },
        });
    }
    render() {
        return (
            <div style={this.containerStyle()}>
                <canvas
                    id="uroflow-curve"
                    ref={this.chartRef}
                />
            </div>
        )
    }
}

