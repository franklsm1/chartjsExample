import React, {Component} from 'react';
import {Line} from "react-chartjs-2";

export default class LineChartExample extends Component {

    randomColorFactor = () => Math.round(Math.random() * 255);
    randomScalingFactor = () => Math.round(Math.random() * 100);
    randomColor = (opacity) => 'rgba(' + this.randomColorFactor() + ',' + this.randomColorFactor() + ',' + this.randomColorFactor() + ',' + (opacity || '.3') + ')';
    render() {
        const data = {
            labels: [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July"
            ],
            datasets: [
                {
                    label: "My First dataset",
                    data: [
                        this.randomScalingFactor(),
                        this.randomScalingFactor(),
                        this.randomScalingFactor(),
                        this.randomScalingFactor(),
                        this.randomScalingFactor(),
                        this.randomScalingFactor(),
                        this.randomScalingFactor()
                    ],
                    backgroundColor: this.randomColor(0.5),
                    fill: false,
                    borderDash: [5, 5]
                }, {
                    hidden: true,
                    label: 'hidden dataset',
                    data: [
                        this.randomScalingFactor(),
                        this.randomScalingFactor(),
                        this.randomScalingFactor(),
                        this.randomScalingFactor(),
                        this.randomScalingFactor(),
                        this.randomScalingFactor(),
                        this.randomScalingFactor()
                    ],
                    backgroundColor: this.randomColor(0.5)
                }, {
                    label: "My Second dataset",
                    data: [
                        this.randomScalingFactor(),
                        this.randomScalingFactor(),
                        this.randomScalingFactor(),
                        this.randomScalingFactor(),
                        this.randomScalingFactor(),
                        this.randomScalingFactor(),
                        this.randomScalingFactor()
                    ],
                    backgroundColor: this.randomColor(0.5)
                }
            ]
        };

        const options = {
            responsive: true,
            title: {
                display: true,
                text: 'Chart.js Line Chart'
            },
            tooltips: {
                mode: 'label'
            },
            hover: {
                mode: 'dataset'
            }
        };

        for (let dataset of data.datasets) {
            dataset.backgroundColor = this.randomColor(0.5)
        }

        return <Line data={data} options={options}/>;
    }
}
