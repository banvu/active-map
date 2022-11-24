<template>
  <v-container dark fluid>
    <LineChartGenerator
      :chart-options="chartOptions"
      :chart-data="chartData"
      :chart-id="chartId"
      :styles="styles"
      :width="width"
      :height="height"
      :plugin="plugins"
      class="white--text background px-5"
    >
    </LineChartGenerator>

    <v-btn-toggle class="red" v-model="toggle_one" mandatory>
      <v-btn class="g-btn" active-class="g-select" @click="LiveData()">
        Live Data</v-btn
      >
      <!-- <v-btn @click="change('2')"> 1D</v-btn> -->
      <v-btn class="g-btn" active-class="g-select" @click="show1DData()">
        1D</v-btn
      >
      <v-btn class="g-btn" active-class="g-select" @click="show3DData()">
        3D</v-btn
      >
    </v-btn-toggle>
  </v-container>
</template>

<script>
import { Line as LineChartGenerator } from "vue-chartjs/legacy";

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement
);

export default {
  name: "LineChart",
  components: {
    LineChartGenerator,
  },
  props: {
    chartId: {
      type: String,
      default: "line-chart",
    },
    datasetIdKey: {
      type: String,
      default: "label",
    },
    width: {
      type: Number,
      default: 400,
    },
    height: {
      type: Number,
      default: 215,
    },
    cssClasses: {
      default: "",
      type: String,
    },
    styles: {
      type: Object,
      default: () => {},
    },
    plugins: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    LiveData() {
      this.chartData = {
        labels: ["1", "2", "3", "4", "5", "6", "7"],
        datasets: [
          {
            label: "Current Line Pressure (bar)",
            backgroundColor: "#0C66F8",
            borderColor: "#3C82F5",
            // backgroundColor: "#f87979",
            data: [5.1, 5.2, 5.2, 5.4, 5.5, 5.6, 5.9],
            yAxisID: "y",
          },
          {
            label: "Current Volume Flow (m3/min)",
            backgroundColor: "#FFA500",
            borderColor: "orange",
            data: [7, 8, 8, 9, 7, 6, 8],
            borderWidth: 1,
            yAxisID: "y1",
          },
        ],
      };
      this.chartOptions = this.$data.chartOptions;
      // this.chartOptions = {
      //   responsive: true,
      //   maintainAspectRatio: false,
      //   elements: {
      //     point: {
      //       radius: 3,
      //       hitRadius: 4,
      //       hoverRadius: 6,
      //     },
      //   },
      //   plugins: {
      //     title: {
      //       display: false,
      //     },
      //   },
      //   scales: {
      //     x: {
      //       grid: {
      //         color: "rgba(128, 128, 128, 0.3)",
      //       },
      //     },
      //     y: {
      //       display: true,
      //       grid: {
      //         color: "rgba(128, 128, 128, 0.3)",
      //       },
      //       title: {
      //         display: true,
      //         fontSize: 11,
      //         text: "Bar",
      //         color: "#3C82F5",
      //       },
      //       ticks: {
      //         color: "#3C82F5",
      //         font: {
      //           weight: "bold",
      //         },
      //       },
      //       //Change here to modify the limit of axis
      //       // suggestedMin: 3,
      //       // suggestedMax: 10,
      //     },
      //     y1: {
      //       type: "linear",
      //       position: "right",
      //       display: true,
      //       // suggestedMin: 3,
      //       // suggestedMax: 10,
      //       // only want the grid lines for one axis to show up
      //       // grid line settings
      //       grid: {
      //         drawOnChartArea: false,
      //       },
      //       title: {
      //         display: true,
      //         fontSize: 11,
      //         text: "m3/min",
      //         color: "orange",
      //       },
      //       ticks: {
      //         color: "orange",
      //         font: {
      //           weight: "bold",
      //         },
      //       },
      //     },
      //   },
      // };
    },
    show1DData() {
      // this.chartOptions.plugins.title.text = "Clicked";
      this.chartData = {
        labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        datasets: [
          {
            label: "Current Line Pressure (bar)",
            backgroundColor: "#0C66F8",
            borderColor: "#3C82F5",
            // backgroundColor: "#f87979",
            data: [70, 20, 12, 39, 100, 40, 95, 80, 80, 20, 12, 101],
            yAxisID: "y",
          },
          {
            label: "Current Volume Flow (m3/min)",
            backgroundColor: "#FFA500",
            borderColor: "orange",
            data: [20, 12, 50, 59, 20, 49, 70, 60, 50, 30, 20, 30],
            borderWidth: 1,
            yAxisID: "y1",
          },
        ],
      };
      this.chartOptions = this.$data.chartOptions;
    },
    show3DData() {
      this.chartData = {
        labels: [
          0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
          20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
          37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
        ],
        datasets: [
          {
            label: "Current Line Pressure (bar)",
            backgroundColor: "#0C66F8",
            borderColor: "#3C82F5",
            // backgroundColor: "#f87979",
            data: [
              70, 20, 12, 39, 100, 40, 95, 80, 80, 20, 12, 101, 200, 15, 20, 25,
              29, 50, 56, 54, 63, 70, 20, 12, 39, 100, 40, 95, 80, 80, 20, 12,
              101, 200, 15, 20, 25, 29, 50, 56, 54, 63, 70, 20, 12, 39, 100, 40,
              95, 80, 80,
            ],
            yAxisID: "y",
          },
          {
            label: "Current Volume Flow (m3/min)",
            backgroundColor: "#FFA500",
            borderColor: "orange",
            data: [
              20, 12, 50, 59, 20, 49, 70, 60, 50, 30, 20, 30, 90, 100, 105, 240,
              30, 20, 20, 12, 50, 59, 20, 49, 70, 60, 50, 30, 20, 30, 90, 100,
              105, 240, 30, 20, 20, 12, 50, 59, 20, 49, 70, 60, 50, 30, 20, 30,
              90, 100, 105,
            ],
            borderWidth: 1,
            yAxisID: "y1",
          },
        ],
      };
      this.chartOptions = this.$data.chartOptions;
    },
  },
  data() {
    return {
      toggle_one: 0,
      chartData: {
        labels: ["1", "2", "3", "4", "5", "6", "7"],
        datasets: [
          {
            label: "Current Line Pressure (bar)",
            backgroundColor: "#0C66F8",
            borderColor: "#3C82F5",
            // backgroundColor: "#f87979",
            data: [5.1, 5.2, 5.2, 5.4, 5.5, 5.6, 5.9],
            yAxisID: "y",
          },
          {
            label: "Current Volume Flow (m3/min)",
            backgroundColor: "#FFA500",
            borderColor: "orange",
            data: [7, 8, 8, 9, 7, 6, 8],
            borderWidth: 1,
            yAxisID: "y1",
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        elements: {
          point: {
            radius: 3,
            hitRadius: 4,
            hoverRadius: 6,
          },
        },
        plugins: {
          title: {
            display: false,
          },
        },
        scales: {
          x: {
            grid: {
              color: "rgba(128, 128, 128, 0.3)",
            },
          },
          y: {
            display: true,
            grid: {
              color: "rgba(128, 128, 128, 0.3)",
            },
            title: {
              display: true,
              fontSize: 11,
              text: "Bar",
              color: "#3C82F5",
            },
            ticks: {
              maxTicksLimit: 20,
              color: "#3C82F5",
              font: {
                weight: "bold",
              },
            },
            //Change here to modify the limit of axis
            suggestedMin: 4.5,
            suggestedMax: 6.5,
          },
          y1: {
            type: "linear",
            position: "right",
            display: true,
            grid: {
              drawOnChartArea: false,
            },
            title: {
              display: true,
              fontSize: 11,
              text: "m3/min",
              color: "orange",
            },
            ticks: {
              color: "orange",
              font: {
                weight: "bold",
              },
            },
            suggestedMin: 5,
            suggestedMax: 10,
          },
        },
      },
    };
  },
  mounted() {
    // this.renderChart(this.chartData, this.chartOptions);
  },
  // watch: {
  //   datasets(data) {
  //     this.chart.data.datasets = data;
  //     this.chart.update();
  //   },
  //   chart() {
  //     this.$data._chart.update();
  //   },
  // },
};
</script>

<style lang="scss">
.g-select {
  color: #ffffff !important;
  // background: #3c82f5;
}
.g-btn {
  opacity: 1 !important;
  background: #1e293c !important;
  // border-color: #0f172b !important ;
}
</style>
