Vue.component("line-chart", {
  extends: VueChartJs.Line,
  props: ["data", "options"],
  mounted() {
    this.renderLineChart();
  },
  computed: {
    chartData: function () {
      return this.data;
    },
  },
  methods: {
    renderLineChart: function () {
      this.renderChart(
        {
          labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
          ],
          datasets: [
            {
              label: "Data One",
              backgroundColor: "#f87979",
              data: this.chartData,
            },
          ],
        },
        { responsive: true, maintainAspectRatio: false }
      );
    },
  },
  watch: {
    data: function () {
      this._chart.destroy();
      //this.renderChart(this.data, this.options);
      this.renderLineChart();
    },
  },
});

var vm = new Vue({
  el: ".app",
  data: {
    dataChart: [10, 39, 10, 40, 39, 20, 10],
  },
  methods: {
    changeData: function () {
      this.dataChart = [6, 6, 3, 5, 5, 6, 7];
    },
  },
});
