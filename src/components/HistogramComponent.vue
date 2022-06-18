<template>
  <v-card color="white">
    <v-card-title>
      Genre repartition of 5 000 most popular movies of all time
    </v-card-title>
    <v-card-text>
      <div id="histogram" style="width: 100%; height: 400px"></div>
    </v-card-text>
  </v-card>
</template>

<script>
  import { mapState, mapGetters  } from 'vuex'
  export default {
    name: 'HistogramComponent',
    data: () => {
      return {
        ro: null,
        myChart: null
      }
    },
    computed: {
      ...mapState({
        popularMovies: 'popularMovies',
        genres: 'genres'
      }),
      ...mapGetters({
        moviesByGenre: 'getMoviesByGenre'
      }),
    },
    methods: {

      drawChart(dataGenre, dataMovies) {
        console.log(dataGenre, dataMovies)
        this.myChart = this.$echarts.init(document.getElementById("histogram"), 'light');
        let option = {
          color: [
            '#b1ded7', '#b07e7e'
          ],
          grid: {
            bottom: 100,
          },
          tooltip: {},
          xAxis: {
            type: 'category',
            data: dataGenre,
            axisLabel: {
              show: true,
              interval: 0,
              rotate: 45,
            },
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              type: 'bar',
              data: dataMovies
            },
          ]
        };
        this.myChart.setOption(option);
      },
    },

    mounted() {
      this.drawChart(this.genres.map(g => g.name), this.moviesByGenre.map(m => m.length));
    },

  }
</script>
