import Home from 'pages/Home';
import MovieDetails from 'pages/MovieDetails';
import Movies from 'pages/Movies';
import { Routes, Route } from 'react-router-dom';

import { GlobalStyle } from './GlobalStyle';
import CastList from './CastList/CastList';
import PagesNavigation from './PagesNavigation/PagesNavigation';
import ReviewsList from './ReviewsList/ReviewsList';

export const App = () => {
  return (
    <>
      <PagesNavigation />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/movies" element={<Movies />} />

        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<CastList />} />
          <Route path="reviews" element={<ReviewsList />} />
        </Route>

        <Route path="*" element={<Home />} />
      </Routes>
      <GlobalStyle />
    </>
  );
};
