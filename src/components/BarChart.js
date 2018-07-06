import React, {Component} from 'react';
import {HorizontalBar} from 'react-chartjs-2';

class BarChart extends Component {
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

    <HorizontalBar data={this.state.chartData} height={500} options={{
          legend: {
            display: this.props.displayLegend,
            position: this.props.legendPosition,
            labels: {
              boxWidth: 40,
              fontColor: '#BDC7C1'
            }
          },
          tooltips: {
            enables: true,
            callbacks: {
              label: function(tooltipItems, data) {
                return tooltipItems.yLabel + ': $' + tooltipItems.xLabel;
              }
            }
          },
          scales: {
            yAxes: [{
              ticks: {
                fontSize: 12,
                fontColor: '#BDC7C1'
              }
            }]
          }
        }}/>
    </div>)
  }
}

export default BarChart;
