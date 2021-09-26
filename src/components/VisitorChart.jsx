import React from "react";
import { Line } from "react-chartjs-2";
import "../styles/components/visitorchart.css"

class VisitorChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: [0,3,6,9,12,15,18,21,24,27,30],
        datasets: [
          {
            label: "Tento měsíc",
            data: [45,50,42,38,60,89,130,95,24,86,60],
            borderColor: "#33c5edc7",
            backgroundColor: "#33c5edc7",
            tension: 0.5,
            fill: true,
          },
          {
            label: "Minulý měsíc",
            data: [60,69,72,50,60,78,99,120,45,65,74],
            borderColor: "#0ab17b",
            backgroundColor: "#0ab17b",
            tension: 0.5,
            fill:true
          }
        ]
      }
    };
  }

  render() {
    return (
      <div className="visitor-chart">
        <Line height={250} width={600} data={this.state.chartData} options= {{ 
          plugins: {
            title: {
              display: true,
              position: "top",
              text: "Statistika návštěvnosti"
            }
          }
        }} />
      </div>
    );
  }
}

export default VisitorChart;
