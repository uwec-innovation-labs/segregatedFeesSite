import React, {Component} from 'react';
import {HorizontalBar} from 'react-chartjs-2';

class BarChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: [
          "Student Center  (facility)",
          "University Centers",
          "University Recreation & Sports Facilities",
          "Student Health Service",
          "Text Rental",
          "Organized Activities  (total fee)",
          "Athletics",
          "Transit",
          "Counseling Services",
          "Music",
          "Student Office of Sustainability",
          "Children's Nature Academy  (facility)",
          "Student Senate General Operations",
          "Children's Nature Academy",
          "Theatre",
          "Intramurals",
          "Municipal Services",
          "University Activities Commission",
          "Club Sports",
          "Forum",
          "Artist Series",
          "Forensics",
          "Student Organizations",
          "Visual Arts",
          "Women's & LGBTQ Resource Center",
          "Athletics / Recreation Facilities Improvements",
          "WUEC Radio",
          "Legal Services",
          "International Activities",
          "Spectator",
          "Organized Activities Reserve",
          "Pow Wow",
          "NOTA",
          "Flip Side",
          "International Films",
          "Readership Program",
          "CASE"
        ],
        datasets: [
          {
            label: '2018-19',
            data: [
              326,
              245,
              189,
              155,
              150,
              134,
              124.67,
              45,
              33,
              20.53,
              20,
              17.82,
              16.79,
              13.65,
              12.44,
              11.5,
              11.5,
              10.42,
              7.31,
              6.95,
              6.78,
              6.57,
              4.03,
              3.58,
              3.54,
              3.27,
              3.19,
              2.88,
              2.45,
              1.82,
              1.52,
              1.47,
              1.08,
              0.68,
              0,
              0,
              0
            ],
            backgroundColor: '#FF005D'
          },
          {
            label: '2017-18',
            data: [
              326,
              235,
              185,
              153,
              165,
              129,
              117.45,
              44,
              31,
              20.89,
              20,
              17.82,
              16.02,
              13.65,
              13.26,
              22.5,
              12,
              10.94,,
              6.63,
              7.18,
              6.96,
              4.85,
              3.2,
              3.31,
              3.27,
              3.48,
              3.09,
              2.67,
              1.99,
              0,
              1.66,
              1.16,
              0.83,
              0,
              0.88,
              0
            ],
            backgroundColor: '#FEDF03'
          },
          {
            label: '2016-17',
            data: [
              326,
              225,
              185,
              153,
              180,
              131,
              109.06,
              44,
              25.96,
              22,
              19.78,
              18.66,
              16.64,
              13,
              11.28,
              22.5,
              15,
              10.49,,
              6.37,
              7.26,
              7.03,
              4.53,
              3.69,
              3.02,
              3.3,
              3.35,
              3.91,
              2.35,
              2.01,
              1.68,
              1.12,
              1.35,
              0.73,
              0.73,
              1.68,
              0
            ],
            backgroundColor: '#00D49D'
          }, 
          {
            label: '2015-16',
            data: [
              326,
              218,
              178.96,
              151.14,
              200,
              134.9,
              109.06,
              42,
              25.12,
              21.47,
              22.39,
              19.03,
              17.17,
              12.31,
              11.08,
              24.07,
              17,
              10.52,,
              5.93,
              5.6,
              6.94,
              4.52,
              3.25,
              2.13,
              3.36,
              3.25,
              3.02,
              2.13,
              2.02,
              3.13,
              1.12,
              1.34,
              0.5,
              0.56,
              2.24,
              4.59
            ],
            backgroundColor: '#0085B6'
          },
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
