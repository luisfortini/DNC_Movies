import axios from 'axios'

const BASE_URL = 'https://api.themoviedb.org/4'
const API_KEY = 'c830f28ae9095930e4c4d7165ac77ea3'

const withBaseUrl = path => `${BASE_URL}${path}?api_key=${API_KEY}`

export class MovieService {
  static getMovies() {
    return axios(withBaseUrl('movie/popular'))
  }

  static getMovieDetails(id){
    return axios(withBaseUrl(`movie/${id}`))
  }

  static searchMovies(movie){
    return axios(withBaseUrl("search/movie") + `&query=${movie}`)
  }
}
