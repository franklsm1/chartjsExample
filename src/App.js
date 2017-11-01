import React, {Component} from 'react';
import {Bar} from "react-chartjs";

import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        let options = {
            legend: {display: true},
            title: {
                display: true,
                text: 'Predicted world population (millions) in 2050'
            }
        };
        let data = {
            labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
            datasets: [
                {
                    label: "Population (millions)",
                    fillColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
                    data: [2478, 5267, 734, 784, 433]
                }
            ]
        };
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <Bar data={data} options={options} width="600" height="250"/>
            </div>
        );
    }
}

export default App;