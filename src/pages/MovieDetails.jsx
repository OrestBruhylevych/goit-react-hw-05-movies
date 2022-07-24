import MovieCard from 'components/MovieCard/MovieCard';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieDetails } from '../services/api';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    getMovieDetails(movieId).then(res => {
      setMovie(res);
    });
  }, [movieId]);

  const {
    id,
    backdrop_path,
    title,
    genres,
    overview,
    vote_average,
    release_date,
  } = movie;

  return (
    <>
      <MovieCard
        id={id}
        url={backdrop_path}
        title={title}
        genres={genres}
        overview={overview}
        vote_average={vote_average}
        date={release_date}
      />
    </>
  );
}
