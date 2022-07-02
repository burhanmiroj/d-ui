const labelsChartLine = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
];
const dataChartLine = {
  labels: labelsChartLine,
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "hsl(252, 82.9%, 67.8%)",
      borderColor: "hsl(252, 82.9%, 67.8%)",
      data: [0, 10, 5, 2, 20, 30, 45],
    },
    {
      label: "Second dataset",
      backgroundColor: "rgb(34, 197, 94)",
      borderColor: "rgb(34, 197, 94)",
      data: [20, 20, 30, 20, 5, 45, 30],
    },
  ],
};

const configLineChart = {
  type: "line",
  data: dataChartLine,
  options: {},
};

let chartLine = new Chart(
  document.getElementById("chartLine"),
  configLineChart
);

// BAR CHART ONE
const dataBarOne = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      label: "My First Dataset",
      data: [20, 10, 5, 2, 20, 30, 45],
      backgroundColor: [
        "rgb(133, 105, 241)",
        "rgb(164, 101, 241)",
        "rgb(101, 143, 241)",
      ],
    },
  ],
};

const configBarOne = {
  type: "bar",
  data: dataBarOne,
  options: {},
};

let chartBarOne = new Chart(
  document.getElementById("chartBarOne"),
  configBarOne
);

// BAR CHART ONE
const dataBarTwo = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      label: "My First Dataset",
      data: [20, 10, 5, 2, 20, 30, 45],
      backgroundColor: [
        "rgb(133, 105, 241)",
        "rgb(164, 101, 241)",
        "rgb(101, 143, 241)",
      ],
    },
    {
      label: "Second Dataset",
      data: [30, 20, 30, 20, 5, 45, 50],
      backgroundColor: [
        "rgb(133, 105, 241)",
        "rgb(164, 101, 241)",
        "rgb(101, 143, 241)",
      ],
    },
  ],
};

const configBarTwo = {
  type: "bar",
  data: dataBarTwo,
  options: {},
};

let chartBarTwo = new Chart(
  document.getElementById("chartBarTwo"),
  configBarTwo
);
