import React, {Component} from 'react';
import { Pie } from 'react-chartjs-2';
import fetch from 'isomorphic-fetch';

class PieChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: props.chartData
    }
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: 'top'
  }

  render() {
    return (<div className="chart">
      <Pie data={this.state.chartData} options={{
        legend: {
          display: false,
          position: 'right',
          labels: {
            boxWidth: 40,
            fontColor: '#BDC7C1'
          },
          onClick: null
        },
        elements: {
          arc: {
            borderWidth: 0
          }
        },
        cutoutPercentage: 50,
        tooltips: {
          callbacks: {
            label: function(tooltipItem, data) {
              // get the dataset
              var dataset = data.datasets[0];

              var total = dataset.data.reduce(function(previousValue, currentValue, currentIndex, array) {
                return parseInt(previousValue,10) + parseInt(currentValue, 10);
              })

              var currentValue = dataset.data[tooltipItem.index]

              var percentage = Math.floor(((currentValue/total) * 100) + 0.5)

              return data.labels[tooltipItem.index] + ": " + percentage + "%";
            }
          }
        }
      }}/>
    </div>)
  }
}

export default PieChart;
