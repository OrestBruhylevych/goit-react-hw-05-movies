import Home from 'pages/Home';
import MovieDetails from 'pages/MovieDetails';
import Movies from 'pages/Movies';
import { Routes, Route, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import CastList from './CastList/CastList';
import ReviewsList from './ReviewsList/ReviewsList';

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

        <Route path="/movies" element={<Movies />} />

        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<CastList />} />
          <Route path="reviews" element={<ReviewsList />} />
        </Route>

        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};
