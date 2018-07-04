import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'reactstrap';
import BarChart from './components/BarChart'

class App extends Component {
  render() {
    return (
        <div className="App">
          <h1>Student Senate Fee Report</h1>
          <p>This page is brought to you by UWEC Student Senate as a collaboration between the Finance and Information Technology Comissions.</p>
          <div class="container">
            <h3>What are Segreated Fees?</h3>
            <p>Segregated fees provide funds for cultural, recreational, and leisure activities and groups that are not funded through other state appropriations. They are intended to contribute to the richness of the university community. Segregated fees are not user fees. </p>
          </div>

          <h2>Segregated Fee Spending by Activity</h2>
          <p><small>Click on the years to compare</small></p>
          <BarChart/>
          // add in the table of the data
        </div>
  );
  }
}

export default App;
