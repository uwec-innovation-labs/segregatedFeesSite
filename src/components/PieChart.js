import React, {Component} from 'react';
import { Pie } from 'react-chartjs-2';
import fetch from 'isomorphic-fetch';

class PieChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      chartData: {
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
    }
  }

  /**
  * For this pie chart take the top 9 and lump the rest as "Others"
  **/
  componentDidMount() {
    fetch('https://3b6gdit4v0.execute-api.us-east-2.amazonaws.com/latest/')
    .then(res => {
      return res.json();
    }).then(data => {
      // extract the data for each year and the activity list
      var other = 0;

      data.pop();

      for (var i = 0; i < data.length; i++) {
        if (i < 11) {
          this.state.chartData.labels.push(data[i].activity);
          this.state.chartData.datasets[0].data.push(data[i][2018]);
        } else {
          other += parseInt(data[i][2018], 10)
          if (i === data.length - 1) {
            this.state.chartData.labels.push('Others')
            this.state.chartData.datasets[0].data.push(other)
          }
        }
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
