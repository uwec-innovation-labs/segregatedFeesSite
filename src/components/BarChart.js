import React, { Component } from 'react';
import { HorizontalBar } from 'react-chartjs-2';

class BarChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: [
          "Athletics",
          "Recreation Facilities Improvements",
          "Children's Nature Academy",
          "Children's Nature Academy  (facility)",
          "Counseling Services",
          "Intramurals",
          "Organized Activities  (total fee)",
          "Artist Series",
          "CASE",
          "Club Sports",
          "Flip Side",
          "Forensics",
          "Forum",
          "International Activities",
          "International Films",
          "Music",
          "NOTA",
          "Pow Wow",
          "Spectator",
          "Student Office of Sustainability",
          "Student Organizations",
          "Student Senate General Operations",
          "Readership Program",
          "Legal Services",
          "Theatre",
          "University Activities Commission",
          "Visual Arts",
          "Women's & LGBTQ Resource Center",
          "WUEC Radio",
          "Organized Activities Reserve",
          "Student Health Service",
          "Municipal Services",
          "University Recreation & Sports Facilities",
          "Transit",
          "University Centers",
          "Student Center  (facility)"
        ],
        datasets: [
          {
            label: '2015-16',
            data: [
              109.06,
              3.36,
              12.31,
              19.03,
              25.12,
              24.07,
              134.9,
              5.6,
              0,
              4.59,
              0.5,
              6.94,
              5.93,
              2.13,
              0.56,
              21.47,
              1.34,
              1.12,
              2.02,
              22.39,
              4.52,
              17.17,
              2.24,
              3.02,
              11.08,
              10.52,
              3.25,
              2.13,
              3.25,
              3.13,
              151.14,
              17,
              178.96,
              42,
              218,
              326
            ],
            backgroundColor: '#0085B6'
          }, {
            label: '2016-17',
            data: [
              109.06,
              3.3,
              13,
              18.66,
              25.96,
              22.5,
              131,
              7.26,
              0,
              0,
              0.73,
              7.03,
              6.37,
              2.35,
              0.73,
              22,
              1.35,
              1.12,
              2.01,
              19.78,
              4.53,
              16.64,
              1.68,
              3.91,
              11.28,
              10.49,
              3.69,
              3.02,
              3.35,
              1.68,
              153,
              15,
              185,
              44,
              225,
              326
            ],
            backgroundColor: '#00D49D'
          }, {
            label: '2017-18',
            data: [
              117.45,
              3.27,
              13.65,
              17.82,
              31,
              22.5,
              129,
              7.18,
              0,
              0,
              0.83,
              6.96,
              6.63,
              2.67,
              0,
              20.89,
              1.16,
              1.66,
              1.99,
              20,
              4.85,
              16.02,
              0.88,
              3.09,
              13.26,
              10.94,
              3.2,
              3.31,
              3.48,
              0,
              153,
              12,
              185,
              44,
              235,
              326
            ],
            backgroundColor: '#FEDF03'
          }, {
            label: '2018-19',
            data: [
              124.67,
              3.27,
              13.65,
              17.82,
              33,
              11.5,
              134,
              6.78,
              0,
              7.31,
              0.68,
              6.57,
              6.95,
              2.45,
              0,
              20.53,
              1.08,
              1.47,
              1.82,
              20,
              4.03,
              16.79,
              0,
              2.88,
              12.44,
              10.42,
              3.58,
              3.54,
              3.19,
              1.52,
              155,
              11.5,
              189,
              45,
              245,
              326
            ],
            backgroundColor: '#FF005D'
          }
        ]
      }
    }
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: 'top'
  }

  render() {
    return (<div classname="chart">
      <HorizontalBar data={this.state.chartData} width={400} height={250} options={{
          title: {
            display: this.props.displayTitle,
            text: 'Segregated Fee Spending by Activity'
          },
          legend: {
            display: this.props.displayLegend,
            position: this.props.legendPosition,
            labels: {
              boxWidth: 40
            }
          },
          tooltips: {
            enables: true,
            mode: 'single',
            callbacks: {
              lable: function(tooltipItems, data) {
                return data.datasets[tooltipItems.datasetIndex] + ': $' + tooltipItems.yLable;
              }
            }
          }
        }}/>
    </div>)
  }
}

export default BarChart;
