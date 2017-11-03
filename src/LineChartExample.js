import React, {Component} from 'react';
import {Line} from "react-chartjs-2";

export default class LineChartExample extends Component {

    randomValue = () => Math.round(Math.random() * 100);
    randomData = (numOfValues) => {
      let data = [];
      for (let i = 0; i < numOfValues; i++) {
        data.push(this.randomValue());
      }
      return data;
    }

    get data() {
      return {
          labels: [ "January", "February", "March", "April", "May", "June", "July" ],
          datasets: [
              {
                  label: "First Dataset",
                  data: this.randomData(7),
                  backgroundColor: "rgba(255,0,0,.5)"
              },
              {
                  label: "Second dataset",
                  data: this.randomData(7),
                  backgroundColor: "rgba(0,255,0,.5)"
              },
              {
                  hidden: true,
                  label: 'hidden dataset',
                  data: this.randomData(7),
                  backgroundColor: "rgba(0,0,255,.5)"
              }
          ]
      };
    }

    get options() {
      return {
          title: {
              display: true,
              text: 'Random Line Chart'
          },
          tooltips: {
              mode: 'label'
          }
      };
    }

    render() {
        const data = this.data;
        const options = this.options;

        return (
          <div style={{ width: 600, height: 400 }}>
            <Line
              data={data}
            	options={options}
            />
          </div>
        );
      }
}
