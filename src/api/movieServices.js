const API_KEY = '123456789';

const URL_BASE =`http://www.omdbapi.com/?apikey=${API_KEY}`;

export function getMovies (movie)  {
    return fetch(`${URL_BASE}&s=${movie}`)
    .then(res => res.json())
}

export function getMovieById (id)  {
  return fetch(`${URL_BASE}&i=${id}`)
  .then(res => res.json())
}
