import Home from 'pages/Home';
import MovieDetails from 'pages/MovieDetails';
import Movies from 'pages/Movies';
import { Routes, Route, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

export const App = () => {
  return (
    <div>
      <nav>
        <StyledLink to="/"> Home </StyledLink>
        <StyledLink to="/movies"> Movies </StyledLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/movies" element={<Movies />}>
          <Route index element={<div> search movies </div>} />
          <Route path=":movieId" element={<MovieDetails />}>
            <Route path="cast " element={<div>Cast</div>} />
            <Route path="reviews " element={<div>Reviews</div>} />
          </Route>
        </Route>

        <Route path="*" element={<div>home</div>} />
      </Routes>
    </div>
  );
};
