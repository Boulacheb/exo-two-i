import Vue from "vue"
import { API_URL } from "@/config/env"

export const TMDBpopularMovies = ({ commit }, pagesNb) => {
    let res = []
    for (let i = 1; i <= pagesNb; i++) {
        Vue.http.get(`${API_URL}/movie/popular?language=fr-FR&page=${i}`)
            .then(response => {
                response.body.results.forEach(movie => res.push(movie))
            })
    }
    commit("setPopularMovies", res)
}

export const TMDBgenres = ({ commit }) => {
    Vue.http.get(`${API_URL}/genre/movie/list?language=fr-FR`)
        .then(response => {
            commit("setGenres", response.body.genres)
        })
}

export const TMDBdiscover = ({ commit }) => {
    let res = []
    for (let i = 1990; i <= 2022; i++) {
    Vue.http.get(`${API_URL}/discover/movie?primary_release_year=${i}`)
        .then(response => {
            res.push({
                'year': i,
                'released': response.body.total_results
            })
        })
    }
    console.log(res)
    commit("setmoviesReleaseByYear", res)
}