import Chart from "react-apexcharts";
import addDays from "date-fns/addDays";

const TrackingChart = ({ habitTrack }) => {
  console.log("habitTrack", habitTrack);

  habitTrack = [
    {
      date: "2022-02-06",
      done: true,
    },
    {
      date: "2022-02-07",
      done: true,
    },
    {
      date: "2022-02-08",
      done: true,
    },
    {
      date: "2022-02-09",
      done: true,
    },
    {
      date: "2022-02-10",
      done: true,
    },
    {
      date: "2022-02-11",
      done: true,
    },
    {
      date: "2022-02-12",
      done: true,
    },
    {
      date: "2022-02-13",
      done: true,
    },
    {
      date: "2022-02-14",
      done: true,
    },
    {
      date: "2022-02-15",
      done: true,
    },
    {
      date: "2022-02-16",
      done: true,
    },
    {
      date: "2022-02-17",
      done: true,
    },
    {
      date: "2022-02-18",
      done: true,
    },
    {
      date: "2022-02-19",
      done: true,
    },
    {
      date: "2022-02-20",
      done: true,
    },
    {
      date: "2022-02-21",
      done: true,
    },
    {
      date: "2022-02-22",
      done: true,
    },
    {
      date: "2022-02-23",
      done: true,
    },
    {
      date: "2022-02-24",
      done: true,
    },
    {
      date: "2022-02-25",
      done: true,
    },
    {
      date: "2022-02-26",
      done: true,
    },
    {
      date: "2022-02-27",
      done: true,
    },
    {
      date: "2022-02-28",
      done: true,
    },
    {
      date: "2022-02-29",
      done: true,
    },
    {
      date: "2022-02-30",
      done: true,
    },
  ];

  const chartColor = ["#fc0303", "#fc8003", "#fcfc03", "#2dfc03", "#03fcfc", "#0b03fc", "#ca03fc"];

  const chartHabit = habitTrack
    .filter((habit) => {
      return habit.done === true;
    })
    .map((habit, index) => {
      return {
        x: "date",
        y: [new Date(habit.date).getTime(), addDays(new Date(habit.date), 1).getTime()],
        fillColor: chartColor[Math.floor(index / 4)],
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
