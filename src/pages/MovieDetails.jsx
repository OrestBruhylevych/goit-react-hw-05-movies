import MovieCard from 'components/MovieCard/MovieCard';
import { useState } from 'react';
import { useEffect } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';

import { getMovieDetails } from '../services/api';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    getMovieDetails(movieId).then(res => {
      setMovie(res);
    });
  }, [movieId]);

  console.log(movie);
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

      <div>
        <p>Additional information</p>
        <ul>
          <li>
            <NavLink to="cast">Cast</NavLink>
          </li>
          <li>
            <NavLink to="reviews">Reviews</NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
}
