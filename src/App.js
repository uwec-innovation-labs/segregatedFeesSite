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

const getRandomColor = () => {
  var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
  return randomColor
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rawData: null,
      pieChartData: {
        labels: [],
        datasets: [{
          data: [],
          backgroundColor: [
            '#E83E45',
            '#FEDF03',
            '#00D49D',
            '#0085B6',
            '#9B176A',
            '#B5601B',
            '#7252EC',
            '#E87F00',
            '#789B6E',
            '#3C539B',
            '#9CB51E',
            '#FFFFFF'
          ]
        }]
      },
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
    }
  }

  filter (type) {
    var updatedLabels = []
    var data2018 = []
    var data2017 = []
    var data2016 = []
    var data2015 = []
    var pieColors = []
    if (type == null) {
      //console.log(this.state.rawData)
      this.state.rawData.forEach((item) => {
        //console.log(JSON.stringify(item, null, 4))
        updatedLabels.push(item.activity)
        data2018.push(item[2018])
        data2017.push(item[2017])
        data2016.push(item[2016])
        data2015.push(item[2015])
        pieColors.push(getRandomColor())
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
          pieColors.push(getRandomColor())
        }
      })
    }
    // make copy of the state
    let stateCopy = this.state
    console.log(pieColors)

    // set the bar chart state
    stateCopy.barChartData.datasets[0].data = data2018
    stateCopy.barChartData.datasets[1].data = data2017
    stateCopy.barChartData.datasets[2].data = data2016
    stateCopy.barChartData.datasets[3].data = data2015
    stateCopy.barChartData.labels = updatedLabels

    // set the pie chart state
    stateCopy.pieChartData.labels = updatedLabels
    stateCopy.pieChartData.datasets[0].data = data2018
    stateCopy.pieChartData.datasets[0].backgroundColor = pieColors


    this.setState({
      stateCopy
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
            <BarChart chartData={this.state.barChartData}/>
            <h3 id="percentage">Spending as Percentage of Total</h3>
            <div className="pieHolder">
              <PieChart chartData={this.state.pieChartData}/>
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
