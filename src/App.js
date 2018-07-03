import React, {Component} from 'react';
import './App.css';
import BarChart from './components/BarChart'
import TotalCost from './components/TotalCost'

class App extends Component {
  render() {
    return (
        <div className="App">
          <h1>Student Senate Fee Report</h1>
          <p>This page is brought to you by UWEC Student Senate as a collaboration between the Finance and Information Technology Comissions.</p>
          <h2>Segregated Fee Spending by Activity</h2>
          <BarChart/>
          <TotalCost/>
        </div>
  );
  }
}

export default App;
