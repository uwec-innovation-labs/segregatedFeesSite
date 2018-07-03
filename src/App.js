import React, {Component} from 'react';
import './App.css';
import BarChart from './components/BarChart'

class App extends Component {
  render() {
    return (<div className="App">
      <h1>Student Senate Fee Report</h1>
      <BarChart/>
    </div>);
  }
}

export default App;
