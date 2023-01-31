
const getMovies = async () => {
  const request = await fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=28272dc13b3c18e92dcc4f45946db6b7');
  const response = await request.json()
  return response.results.slice(0, 4);
}

const getSimilarMovies = async (movie_id) => {
  const request = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/similar?api_key=28272dc13b3c18e92dcc4f45946db6b7`);
  const response = await request.json()
  return response.results.slice(0, 4);
}

const getMovieConfig = async () => {
  const request = await fetch('https://api.themoviedb.org/3/configuration?api_key=28272dc13b3c18e92dcc4f45946db6b7');
  const response = await request.json()
  return response.images;
}

export { getMovies, getMovieConfig, getSimilarMovies }