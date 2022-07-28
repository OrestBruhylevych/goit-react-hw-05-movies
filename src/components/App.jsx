import { Routes, Route } from 'react-router-dom';

import { GlobalStyle } from './GlobalStyle';
import CastList from './CastList/CastList';
import PagesNavigation from './PagesNavigation/PagesNavigation';
import ReviewsList from './ReviewsList/ReviewsList';
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('../pages/Home'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Movies = lazy(() => import('../pages/Movies'));

export const App = () => {
  return (
    <>
      <PagesNavigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/movies" element={<Movies />} />

          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<CastList />} />
            <Route path="reviews" element={<ReviewsList />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
      <GlobalStyle />
    </>
  );
};
