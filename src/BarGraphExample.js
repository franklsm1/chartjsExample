import React, {Component} from 'react';
import {Bar} from "react-chartjs-2";

export default class BarGraphExample extends Component {
    get data() {
      return {
          labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
          datasets: [
              {
                  label: "Population (millions)",
                  backgroundColor: "blue",
                  data: [2478, 5267, 734, 784, 433]
              }
          ]
      };
    }

    get options() {
      return {
          title: {
              display: true,
              text: 'Predicted world population (millions) in 2050'
          },
          legend: {
            display: false
         }
      };
    }

    render() {
        const data = this.data;
        const options = this.options;

        return (
          <div style={{ width: 600, height: 400 }}>
            <Bar
              data={data}
            	options={options}
            />
          </div>
        );
      }
}
