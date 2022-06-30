<template>
  <v-app style="background-color: rgba(44,80,77,0.89)">
    <v-app-bar
      app
      color="#2c504d"
      dark
    >
      <v-toolbar-title>Movies Statistics</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-row>
          <v-col md="12" sm="6">
            <v-card color="white">
              <v-card-title>
                Distribution des genres sur les {{ popularMovies.length }} films les plus populaires
                <v-spacer></v-spacer>
                <v-toolbar-items>
                  <v-select
                      dense
                      solo
                      :items="sizeSelect"
                      v-model.number="size"
                  ></v-select>
                </v-toolbar-items>
              </v-card-title>
            <HistogramComponent v-if="popularMovies.length >= size" ></HistogramComponent>
            <LoaderComponent v-else></LoaderComponent>
            </v-card>
          </v-col>
          <v-col md="12" sm="6">
            <v-card color="white">
              <v-card-title>
                Évolution de la sortie des films chaque année depuis 1990
              </v-card-title>
            <LinearComponent v-if="moviesReleased.length >= 33"></LinearComponent>
            <LoaderComponent v-else></LoaderComponent>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import HistogramComponent from './components/HistogramComponent';
import LoaderComponent from "@/components/LoaderComponent";
import LinearComponent from "@/components/LinearComponent";

import {mapActions, mapState} from "vuex";

export default {
  name: 'App',
  data: () => {
    return {
      sizeSelect: [
        100, 200, 500, 1000, 2000, 5000, 10000
      ],
      size: 100,
    }
  },
  components: {
    HistogramComponent,LoaderComponent, LinearComponent
  },
  computed: {
    ...mapState({
      popularMovies: 'popularMovies',
      genres: 'genres',
      moviesReleased: 'moviesReleaseByYear'
    })
  },
  watch: {
    size() {
      this.TMDBpopularMovies(this.size/20)
    }
  },
  methods: {
    ...mapActions([
      'TMDBpopularMovies', 'TMDBgenres', 'TMDBdiscover'
    ]),

  },
  created() {
    this.TMDBgenres()
    this.TMDBdiscover()
    this.TMDBpopularMovies(this.size/20)
  },
};
</script>

