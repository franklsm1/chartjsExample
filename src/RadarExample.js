import React, {Component} from 'react';
import {Radar} from "react-chartjs-2";

export default class RadarExample extends Component {
    get data() {
      return {
        labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
        datasets: [
          {
            label: 'Allocated Time (minutes)',
            backgroundColor: 'rgba(255,0,0,0.2)',
            borderColor: 'red',
            pointBackgroundColor: 'red',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(179,181,198,1)',
            data: [70, 95, 90, 140, 56, 120, 40]
          },
          {
            label: 'Actual Time Spent (minutes)',
            backgroundColor: 'rgba(0,0,255,.2)',
            borderColor: 'blue',
            pointBackgroundColor: 'blue',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(255,99,132,1)',
            data: [130, 150, 125, 19, 96, 20, 100]
          }
        ]
      };
    }

    get options() {
      return {
          title: {
              display: true,
              text: 'Radar Chart of allocated time vs actual time spent'
          }
      };
    }

    render() {
        const data = this.data;
        const options = this.options;

        return (
          <div style={{ width: 700, height: 400 }}>
            <Radar
              data={data}
            	options={options}
            />
          </div>
        );
      }
}
