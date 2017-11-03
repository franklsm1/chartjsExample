import React, { Component } from 'react';
import { Doughnut } from "react-chartjs-2";

export default class DoughnutExample extends Component {
  get data() {
    return {
      labels: [
        'Red',
        'Green',
        'Blue'
      ],
      datasets: [{
        data: [300, 50, 100],
        backgroundColor: [
          'red',
          'green',
          'blue'
        ],
        hoverBackgroundColor: [
          'indianred',
          'lightgreen',
          'steelblue'
        ]
      }]
    };
  }

  get options() {
    return {
      title: {
        display: true,
        text: 'Random Doughnut View'
      }
    };
  }

  render() {
    const data = this.data;
    const options = this.options;

    return (
      <div style={{ width: 700, height: 400 }}>
        <Doughnut
          data={data}
          options={options}
        />
      </div>
    );
  }
}
