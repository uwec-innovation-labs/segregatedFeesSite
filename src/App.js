import React, {Component} from 'react';
import { StickyContainer, Sticky } from 'react-sticky';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'reactstrap';
import BarChart from './components/BarChart'

import logo from './logo.png'

class App extends Component {
  render() {
    return (
        <div className="App" height="100%">
          <img src={logo} alt="logo"/>
          <h2>UWEC Segregated Fee Report</h2>
          <div className="container">
            <div className="content">
              <h3>What are Segreated Fees?</h3>
              <p>Segregated fees provide funds for cultural, recreational, and leisure activities and groups that are not funded through other state appropriations. They are intended to contribute to the richness of the university community. Segregated fees are not user fees. </p>
            </div>
            <h3>Segregated Fee Spending by Activity</h3>
            <p><small>Click on the years to compare</small></p>
            <BarChart/>
          </div>
          <footer className="navbar-fixed-bottom">
            <div className="container footer">
              <p><small>This page is brought to you by UWEC Student Senate as a collaboration between the Finance and Information Technology Comissions.</small></p>
            </div>
          </footer>
        </div>

  );
  }
}

export default App;
