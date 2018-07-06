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

  filterNonAllocable(e) {
    // TO-DO replace with API call sourced from data.csv
    var allocables = [
      'Music',
      'Student Office of Sustainability',
      'Student Senate General Operations',
      'Theatre',
      'Intramurals',
      'University Activities Commission',
      'Club Sports',
      'Forum',
      'Artist Series',
      'Forensics',
      'Student Organizations',
      'Visual Arts',
      'Women\'s & LGBTQ Resource Center',
      'Athletics / Recreation Facilities Improvements',
      'UWEC Radio',
      'Legal Services',
      'International Activities',
      'Spectator',
      'Organized Activities Reserve',
      'Pow Wow',
      'NOTA',
      'Flip Side',
      'International Films',
      'Readership Program',
      'CASE'
    ]
    fetch('https://3b6gdit4v0.execute-api.us-east-2.amazonaws.com/latest/v0')
    .then(res => {
      return res.json();
    }).then(data => {
      // clear the state
      this.state.barChartData.labels = [];
      this.state.barChartData.datasets[3].data = []
      this.state.barChartData.datasets[2].data = []
      this.state.barChartData.datasets[1].data = []
      this.state.barChartData.datasets[0].data = []

      // extract the data for each year and the activity list
      for (var i = 0; i < data.length - 1; i++) {
        this.state.barChartData.labels.push(data[i].activity)
        this.state.barChartData.datasets[3].data.push(data[i][2015])
        this.state.barChartData.datasets[2].data.push(data[i][2016])
        this.state.barChartData.datasets[1].data.push(data[i][2017])
        this.state.barChartData.datasets[0].data.push(data[i][2018])
      }
      
      for (var i = 0; i < allocables.length; i++) {
        var index = this.state.barChartData.labels.indexOf(allocables[i]);
        if (index > -1) {
          console.log("Found a match for " + allocables[i])
          // pop off label, 2015, 2016, 2017, 2018
          console.log('Removing label' + this.state.barChartData.labels.splice(index, 1));
          this.state.barChartData.datasets.forEach((dataset) => {
            console.log("Removing " + dataset.data.splice(index, 1) + " dataset.");
          })
        } else {
          console.log(allocables[i] + " didn't match " + this.state.barChartData.labels[index])
        }
      }
      this.setState({ isLoaded: true });
    })

}

  filterAllocable(e) {
    // TO-DO replace with API call sourced from data.csv
    var nonallocables = [
      'Davies Student Center',
      'University Centers',
      'University Recreation & Sports Facilities',
      'Student Health Service',
      'Text Rental',
      'Athletics',
      'Municipal Services',
      'Transit',
      'Counseling Services',
      'Children\'s Nature Academy',
      'Children\'s Nature Academy Building'
    ]
    fetch('https://3b6gdit4v0.execute-api.us-east-2.amazonaws.com/latest/v0')
    .then(res => {
      return res.json();
    }).then(data => {
      // clear the state
      this.state.barChartData.labels = [];
      this.state.barChartData.datasets[3].data = []
      this.state.barChartData.datasets[2].data = []
      this.state.barChartData.datasets[1].data = []
      this.state.barChartData.datasets[0].data = []

      // extract the data for each year and the activity list
      for (var i = 0; i < data.length - 1; i++) {
        this.state.barChartData.labels.push(data[i].activity)
        this.state.barChartData.datasets[3].data.push(data[i][2015])
        this.state.barChartData.datasets[2].data.push(data[i][2016])
        this.state.barChartData.datasets[1].data.push(data[i][2017])
        this.state.barChartData.datasets[0].data.push(data[i][2018])
      }

      for (var i = 0; i < nonallocables.length; i++) {
        var index = this.state.barChartData.labels.indexOf(nonallocables[i]);
        if (index > -1) {
          console.log("Found a match for " + nonallocables[i])
          // pop off label, 2015, 2016, 2017, 2018
          console.log('Removing label' + this.state.barChartData.labels.splice(index, 1));
          this.state.barChartData.datasets.forEach((dataset) => {
            console.log("Removing " + dataset.data.splice(index, 1) + " dataset.");
          })
        } else {
          console.log(nonallocables[i] + " didn't match " + this.state.barChartData.labels[index])
        }
      }
      this.setState({ isLoaded: true });
      // now construct the datasets with data
      this.setState({ isLoaded: true })
    })

}

  getBarChartData() {
    // AJAX call
    fetch('https://3b6gdit4v0.execute-api.us-east-2.amazonaws.com/latest/v0')
    .then(res => {
      return res.json();
    }).then(data => {
      // clear the state
      this.state.barChartData.labels = [];
      this.state.barChartData.datasets[3].data = []
      this.state.barChartData.datasets[2].data = []
      this.state.barChartData.datasets[1].data = []
      this.state.barChartData.datasets[0].data = []

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
            <button  type="button" className="btn btn-outline-danger" onClick={this.getBarChartData.bind(this)}>All</button>
            <button type="button" className="btn btn-outline-danger" onClick={this.filterAllocable.bind(this)}>Allocable</button>
            <button type="button" className="btn btn-outline-danger" onClick={this.filterNonAllocable.bind(this)}>Non-Allocable</button>
            <p><small>Click on the years to compare</small></p>
            <BarChart redraw={true} chartData={this.state.barChartData}/>
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
