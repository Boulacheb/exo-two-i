<template>
    <v-card-text>
      <div id="linear" style="width: 100%; height: 400px"></div>
    </v-card-text>
</template>

<script>
import { mapState} from "vuex";

export default {
  name: "LinearComponent",
  computed: {
    ...mapState({
      moviesByYear: "moviesReleaseByYear"
    }),
  },
  methods: {
    drawChart(dataYear, dataNumber) {
      console.log(dataYear, dataNumber)
      this.myChart = this.$echarts.init(document.getElementById("linear"), 'light');
      let option = {
        color: [
          '#b1ded7'
        ],
        grid: {
          bottom: 100,
        },
        tooltip: {},
        xAxis: {
          type: 'category',
          data: dataYear,
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            type: 'line',
            data: dataNumber
          },
        ]
      };
      this.myChart.setOption(option);
    },
  },

  mounted() {
    this.drawChart(this.moviesByYear.map(g => g.year), this.moviesByYear.map(m => m.released));
  },
}
</script>

<style scoped>

</style>