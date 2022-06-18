<template>
  <v-app style="background-color: rgba(44,80,77,0.89)">
    <v-app-bar
      app
      color="#2c504d"
      dark
    >
      <div class="d-flex align-center">
        <h1>Movies Statistics</h1>
      </div>
    </v-app-bar>
    <v-main>
      <v-container>
        <HistogramComponent v-if="popularMovies.length >= 5000"></HistogramComponent>
        <div v-else>
          <v-container>
            <v-progress-circular indeterminate color="white"></v-progress-circular>
          </v-container>
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import HistogramComponent from './components/HistogramComponent';
import {mapActions, mapState} from "vuex";

export default {
  name: 'App',
  components: {
    HistogramComponent,
  },
  computed: {
    ...mapState({
      popularMovies: 'popularMovies',
      genres: 'genres'
    })
  },
  methods: {
    ...mapActions([
      'TMDBpopularMovies', 'TMDBgenres'
    ])
  },
  created() {
    this.TMDBpopularMovies(252)
    this.TMDBgenres()
  },
};
</script>

