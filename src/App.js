import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'reactstrap';
import fetch from 'isomorphic-fetch';
import BarChart from './components/BarChart'
import PieChart from './components/PieChart'

import logo from './logo.png'

var barColors = ['#E83E45', '#FEDF03', '#00D49D', '#0085B6']

const getData = () => {
  return fetch('https://3b6gdit4v0.execute-api.us-east-2.amazonaws.com/latest/')
  .then(res => {
    return res.json()
  })
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rawData: null,
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

  filter (type) {
    var updatedLabels = []
    var data2018 = []
    var data2017 = []
    var data2016 = []
    var data2015 = []
    if (type == null) {
      console.log('Reset')
      //console.log(this.state.rawData)
      this.state.rawData.forEach((item) => {
        //console.log(JSON.stringify(item, null, 4))
        updatedLabels.push(item.activity)
        data2018.push(item[2018])
        data2017.push(item[2017])
        data2016.push(item[2016])
        data2015.push(item[2015])
      })


    } else {
      var allocable = type === "allocable"
      this.state.rawData.forEach((item) => {
        var boolVal = item.allocable === "true"
        if (boolVal === allocable) {
          updatedLabels.push(item.activity)
          data2018.push(item[2018])
          data2017.push(item[2017])
          data2016.push(item[2016])
          data2015.push(item[2015])
        }
      })
    }
    // make copy of the state
    let stateCopy = this.state.barChartData

    stateCopy.datasets[0].data = data2018
    stateCopy.datasets[1].data = data2017
    stateCopy.datasets[2].data = data2016
    stateCopy.datasets[3].data = data2015
    stateCopy.labels = updatedLabels

    this.setState({
      barChartData: stateCopy
    })
  }

  componentDidMount() {
    getData().then(res => {
      this.setState({
        rawData: res
      })
      this.filter(null)
    })
  }

  render() {
    const filterAllocable = () => this.filter('allocable')
    const filterNonAllocable = () => this.filter('nonallocable')
    const resetFilter = () => this.filter(null)

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
            <button  type="button" className="btn btn-outline-danger" onClick={resetFilter.bind(this)}>All</button>
            <button type="button" className="btn btn-outline-danger" onClick={filterAllocable.bind(this)}>Allocable</button>
            <button type="button" className="btn btn-outline-danger" onClick={filterNonAllocable.bind(this)}>Non-Allocable</button>
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
