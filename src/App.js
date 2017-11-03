import React, {Component} from 'react';
import LineChartExample from "./LineChartExample";
import BarGraphExample from "./BarGraphExample";
import DoughnutExample from "./DoughnutExample";
import RadarExample from "./RadarExample";

import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                </header>
                <div style={{display: "inline-block"}}>
                  <BarGraphExample/>
                  <LineChartExample/>
                  <DoughnutExample/>
                  <RadarExample/>
                </div>
            </div>
        );
    }
}

export default App;
