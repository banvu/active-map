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
import { Doughnut as LineChartGenerator } from "vue-chartjs/legacy";

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  //   Plugin,
} from "chart.js";

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

export default {
  name: "DonutChart",
  components: {
    LineChartGenerator,
  },
  props: {
    chartId: {
      type: String,
      default: "doughnut-chart",
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
        labels: ["VueJs", "EmberJs", "ReactJs", "AngularJs"],
        datasets: [
          {
            backgroundColor: ["#41B883", "#E46651", "#00D8FF", "#DD1B16"],
            data: [40, 20, 80, 10],
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
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
