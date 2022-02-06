import React, { Component } from "react";
import Chart from "react-apexcharts";
import addDays from "date-fns/addDays";

const TrackingChart = ({ habitTrack }) => {
  console.log("habitTrack", habitTrack);

  const chartColor = ["#fc0303", "#fc8003", "#fcfc03", "#2dfc03", "#03fcfc", "#0b03fc", "#ca03fc"];

  const chartHabit = habitTrack
    .filter((habit) => {
      return habit.done === true;
    })
    .map((habit) => {
      return {
        x: "date",
        y: [new Date(habit.date).getTime(), addDays(new Date(habit.date), 1).getTime()],
        fillColor: chartColor[0],
      };
    });
  console.log("chartHabit", chartHabit);

  const state = {
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
        data: chartHabit,
      },
    ],
  };

  return (
    <div className="text-xl">
      <Chart
        options={state.options}
        series={state.series}
        type="rangeBar"
        height="250"
        width="100%"
      />
    </div>
  );
};

export default TrackingChart;
