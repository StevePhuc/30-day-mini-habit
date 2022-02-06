import React, { Component } from "react";
import Chart from "react-apexcharts";

class TrackingChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        title: { text: "Habit Tracking", display: true },
        plotOptions: {
          bar: {
            horizontal: true,
            distributed: true,
            dataLabels: {
              hideOverflowingLabels: false,
            },
          },

          style: {
            colors: ["#f3f4f5", "#fff"],
          },
        },

        xaxis: {
          type: "datetime",
        },

        yaxis: {
          show: false,
        },
        grid: {
          row: {
            colors: ["#f3f4f5", "#fff"],
            opacity: 1,
          },
        },
      },
      series: [
        {
          data: [
            {
              x: "Code",
              y: [new Date("2019-03-02").getTime(), new Date("2019-03-08").getTime()],
              fillColor: "#fc0303",
            },

            {
              x: "Code",
              y: [new Date("2019-03-08").getTime(), new Date("2019-03-16").getTime()],
              fillColor: "#fc8003",
            },
            {
              x: "Code",
              y: [new Date("2019-03-16").getTime(), new Date("2019-03-22").getTime()],
              fillColor: "#fcfc03",
            },
            {
              x: "Code",
              y: [new Date("2019-03-22").getTime(), new Date("2019-04-03").getTime()],
              fillColor: "#2dfc03",
            },
            {
              x: "Code",
              y: [new Date("2019-04-05").getTime(), new Date("2019-04-12").getTime()],
              fillColor: "#03fcfc",
            },
            {
              x: "Code",
              y: [new Date("2019-04-12").getTime(), new Date("2019-04-20").getTime()],
              fillColor: "#0b03fc",
            },

            {
              x: "Code",
              y: [new Date("2019-04-21").getTime(), new Date("2019-04-30").getTime()],
              fillColor: "#ca03fc",
            },
          ],
        },
      ],
    };
  }
  render() {
    return (
      <div className="text-xl">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="rangeBar"
          height="250"
          width="100%"
        />
      </div>
    );
  }
}

export default TrackingChart;
