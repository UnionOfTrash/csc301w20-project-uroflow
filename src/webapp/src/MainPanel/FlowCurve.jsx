import React, { Component } from 'react'
import Chart from "chart.js";

let flowCurve

export default class FlowCurve extends Component {

    constructor(props){
        super(props)

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
            width: '80vw',
            height: '80vh',
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
                labels: this.props.label,
                datasets: [
                    {
                        label: "flow",
                        data: this.props.data,
                        fill: false,
                        borderColor: "orange"
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false
              }
        });
    }
    render() {
        return (
            <>
                <canvas
                    id="uroflow-curve"
                    ref={this.chartRef}
                />
            </>
        )
    }
}

