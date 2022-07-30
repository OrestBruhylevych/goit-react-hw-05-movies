import MoviesList from 'components/MoviesList/MoviesList';
import { useEffect } from 'react';
import { useState } from 'react';
import { getTrending } from '../services/api';

import { Conteiner } from '../components/GlobalStyle';

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrending()
      .then(res => setMovies(res))
      .catch(e => console.log(e));
  }, []);

  return (
    <Conteiner>
      <h2>Trending Movies</h2>

      <MoviesList movies={movies} />
    </Conteiner>
  );
}
