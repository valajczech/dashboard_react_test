import React from "react";
import { Doughnut } from "react-chartjs-2";
import "../styles/components/devicechart.css"

class DeviceChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: ["Počítač", "Mobil", "Tablet"],
        datasets: [
          {
            label: "%",
            data: [52, 27, 21],
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(54, 162, 235)",
              "rgb(255, 205, 86)",
            ],
          },
        ],
      },
    };
  }
  render() {
    return (
      <div className="device-chart">
        <Doughnut
          height={300}
          width={600}
          data={this.state.chartData}
          options={{
            plugins: {
              title: {
                display: true,
                position: "top",
                text: "Podíl zařízení za poslední měsíc",
              },
              legend: {
                display: true,
                position: "right",
              },
            },
            maintainAspectRatio: false,
          }}
        />
      </div>
    );
  }
}

export default DeviceChart;
