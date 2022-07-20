import MoviesList from 'components/MoviesList/MoviesList';
import { useState } from 'react';
import { getTrending } from '../services/api';

const trendingMoviesArray = getTrending();

export default function Home() {
  const [movies, setMovies] = useState([]);

  trendingMoviesArray.then(res => setMovies(res));

  return (
    <>
      <h2>Trending Movies</h2>

      <MoviesList movies={movies} />
    </>
  );
}
