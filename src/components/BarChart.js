import React, {Component} from 'react';
import {HorizontalBar} from 'react-chartjs-2';

var colors = ['#FF005D', '#FEDF03', '#00D49D', '#0085B6']

class BarChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      chartData: {
        labels: [],
        datasets: [
          {
            label: '2018-2019',
            data: [],
            backgroundColor: colors[0]
          },
          {
            label: '2017-2018',
            data: [],
            backgroundColor: colors[1],
            hidden: true
          },
          {
            label: '2016-2017',
            data: [],
            backgroundColor: colors[2],
            hidden: true
          },
          {
            label: '2015-2016',
            data: [],
            backgroundColor: colors[3],
            hidden: true
          },
        ]
      },
    }
  }

  componentDidMount() {
    fetch('https://3b6gdit4v0.execute-api.us-east-2.amazonaws.com/latest/v0')
    .then(res => {
      return res.json();
    }).then(data => {

      console.log(data);
      // extract the data for each year and the activity list
      for (var i = 0; i < data.length - 1; i++) {
        console.log('adding ' + data[i].activity)
        this.state.chartData.labels.push(data[i].activity)
        this.state.chartData.datasets[3].data.push(data[i][2015])
        this.state.chartData.datasets[2].data.push(data[i][2016])
        this.state.chartData.datasets[1].data.push(data[i][2017])
        this.state.chartData.datasets[0].data.push(data[i][2018])
      }

      // now construct the datasets with data
      this.setState({ isLoaded: true })

    })
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: 'top'
  }

  render() {
    return (<div className="chart">
      {this.state.isLoaded ? <HorizontalBar data={this.state.chartData} width={400} height={250} options={{
          legend: {
            display: this.props.displayLegend,
            position: this.props.legendPosition,
            labels: {
              boxWidth: 40
            }
          },
          tooltips: {
            enables: true,
            callbacks: {
              label: function(tooltipItems, data) {
                console.log("TooltipItems: %O", tooltipItems);
                console.log("DATA: %O", data);
                return tooltipItems.yLabel + ': $' + tooltipItems.xLabel;
              }
            }
          }
        }}/>
      : <div>Loading data...</div> }
    </div>)
  }
}

export default BarChart;
