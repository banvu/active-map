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
  name: "HmChart",
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
  methods: {},
  data() {
    return {
      toggle_one: 0,
      chartData: {
        labels: ["1", "2", "3", "4", "5", "6", "7"],
        datasets: [
          {
            label: "Value",
            backgroundColor: "#0C66F8",
            borderColor: "#3C82F5",
            // backgroundColor: "#f87979",
            data: [5.1, 5.2, 5.2, 5.4, 5.5, 5.6, 5.9],
            yAxisID: "y",
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
            // title: {
            //   display: true,
            //   fontSize: 11,
            //   text: "Bar",
            //   color: "#3C82F5",
            // },
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
          //   y1: {
          //     type: "linear",
          //     position: "right",
          //     display: true,
          //     grid: {
          //       drawOnChartArea: false,
          //     },
          //     title: {
          //       display: true,
          //       fontSize: 11,
          //       text: "m3/min",
          //       color: "orange",
          //     },
          //     ticks: {
          //       color: "orange",
          //       font: {
          //         weight: "bold",
          //       },
          //     },
          //     suggestedMin: 5,
          //     suggestedMax: 10,
          //   },
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
