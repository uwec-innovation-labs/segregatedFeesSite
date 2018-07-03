import React from 'react';
import { Line as LineChart } from 'react-chartjs-2';

function chartData() {
  return {
    labels: ['2015', '2016', '2017', '2018'],
    datasets: [
      {
        type: 'line',
        label: 'Total Cost',
        fillColor: 'rgba(220,220,220,0.2)',
        strokeColor: 'rgba(220,220,220,1)',
        pointColor: 'rgba(220,220,220,1)',
        pointStrokeColor: '#fff',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(220,220,220,1)',
        data: [1260.95, 1271.48, 1454.69, 1459.41],
      }
    ]
  }
}

const options = {
  responsive: true,
  scaleShowGridLines: true,
  scaleGridLineColor: 'rgba(0,0,0,.05)',
  scaleGridLineWidth: 1,
  scaleShowHorizontalLines: true,
  scaleShowVerticalLines: true,
  bezierCurve: true,
  bezierCurveTension: 0,
  pointDot: true,
  pointDotRadius: 4,
  pointDotStrokeWidth: 10,
  pointHitDetectionRadius: 80,
  datasetStroke: true,
  datasetStrokeWidth: 2,
  datasetFill: false,
  displayLegend: true,
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true
      }
    }]
  }
}

const styles = {
  graphContainer: {
    border: '1px solid black',
    padding: '15px'
  }
}

class TotalCost extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      data: chartData()
    }
  }

  render() {
    return (
      <div style={styles.graphContainer}>
        <LineChart data={this.state.data}
          options={options}
          width="600" height="250"/>
      </div>
    )
  }
}

export default TotalCost;
