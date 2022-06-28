
export const getPopularMovies = (state) => {
    return state.popularMovies
}

export const getGenres = (state) => {
    return state.genres
}

export const getmoviesReleaseByYear = (state) => {
    return state.moviesReleaseByYear
}

export const getMoviesByGenre = (state) => {
    let movieByGenre = []
    state.genres.forEach(genre => {
        movieByGenre.push(state.popularMovies.filter(m => m.genre_ids[0] === genre.id))
    })
    return movieByGenre;
}