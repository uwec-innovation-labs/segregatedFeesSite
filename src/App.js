import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'reactstrap';
import fetch from 'isomorphic-fetch';
import BarChart from './components/BarChart'
import PieChart from './components/PieChart'

import logo from './logo.png'

var barColors = ['#E83E45', '#FEDF03', '#00D49D', '#0085B6']

class App extends Component {
  constructor() {
    super();
    this.state = {
      rawData: {},
      barChartData: {
        labels: [],
        datasets: [
          {
            label: '2018-2019',
            data: [],
            backgroundColor: barColors[0]
          },
          {
            label: '2017-2018',
            data: [],
            backgroundColor: barColors[1],
            hidden: true
          },
          {
            label: '2016-2017',
            data: [],
            backgroundColor: barColors[2],
            hidden: true
          },
          {
            label: '2015-2016',
            data: [],
            backgroundColor: barColors[3],
            hidden: true
          },
        ]},
      pieChartData: {}
    }
  }

  updateBarChart() {

  }

  filterAllocable() {
    var allocables = ['Student Senate General Operations']

    for (var i = 0; i < this.state.barChartData; i++) {

    }
  }

  getBarChartData() {
    // AJAX call
    fetch('https://3b6gdit4v0.execute-api.us-east-2.amazonaws.com/latest/v0')
    .then(res => {
      return res.json();
    }).then(data => {
      // extract the data for each year and the activity list
      for (var i = 0; i < data.length - 1; i++) {
        this.state.barChartData.labels.push(data[i].activity)
        this.state.barChartData.datasets[3].data.push(data[i][2015])
        this.state.barChartData.datasets[2].data.push(data[i][2016])
        this.state.barChartData.datasets[1].data.push(data[i][2017])
        this.state.barChartData.datasets[0].data.push(data[i][2018])
      }
      // now construct the datasets with data
      this.setState({ isLoaded: true })
    })
  }

  componentWillMount() {
    this.getBarChartData();
  }

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
            <button onClick={null}>All</button>
            <button>Allocable</button>
            <button>Non-Allocable</button>
            <p><small>Click on the years to compare</small></p>
            <BarChart chartData={this.state.barChartData}/>
            <h3 id="percentage">Spending as Percentage of Total</h3>
            <div className="pieHolder">
              <PieChart/>
            </div>
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
