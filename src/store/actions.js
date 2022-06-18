import Vue from "vue"
import { API_URL } from "@/config/env"

export const TMDBpopularMovies = ({ commit }, pagesNb) => {
    let res = []
    for (let i = 1; i <= pagesNb; i++) {
        Vue.http.get(`${API_URL}/movie/popular?page=${i}`)
            .then(response => {
                response.body.results.forEach(movie => res.push(movie))
            })
    }
    commit("setPopularMovies", res)
}

export const TMDBgenres = ({ commit }) => {
    Vue.http.get(`${API_URL}/genre/movie/list`)
        .then(response => {
            commit("setGenres", response.body.genres)
        })
}

