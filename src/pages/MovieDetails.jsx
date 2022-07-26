import { BackLink } from 'components/BackLink/BackLink';
import { Box } from 'components/Box/Box';
import { Conteiner } from 'components/GlobalStyle';
import MovieCard from 'components/MovieCard/MovieCard';
import { useState } from 'react';
import { useEffect } from 'react';
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';

import { getMovieDetails } from '../services/api';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

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
    <Conteiner>
      <BackLink to={backLinkHref}>Back</BackLink>

      <MovieCard
        id={id}
        url={backdrop_path}
        title={title}
        genres={genres}
        overview={overview}
        vote_average={vote_average}
        date={release_date}
      />

      <Box p={4} border="1px solid black">
        <p>Additional information</p>
        <ul>
          <li>
            <NavLink to="cast" state={{ from: location.state.from }}>
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink to="reviews" state={{ from: location.state.from }}>
              Reviews
            </NavLink>
          </li>
        </ul>
      </Box>
      <Outlet />
    </Conteiner>
  );
}
