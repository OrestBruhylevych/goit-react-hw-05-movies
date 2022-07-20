import axios from 'axios';

const API_KEY = 'ab9c2583cd1a2f86525b45efd67b53f1';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export async function getTrending() {
  try {
    const response = await axios.get(`/trending/all/day?api_key=${API_KEY}`);
    const trendingMoviesArray = response.data.results;
    return trendingMoviesArray;
  } catch (error) {
    console.error(error);
  }
}

export async function getMovieDetails(id) {
  try {
    const response = await axios.get(
      `/movie/${id}?api_key=${API_KEY}&language=en-US`
    );
    const movieDetails = response.data;
    return movieDetails;
  } catch (error) {
    console.error(error);
  }
}

export async function getMovieCredits(id) {
  try {
    const response = await axios.get(
      `/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
    );
    const movieCredits = response.data;
    return movieCredits;
  } catch (error) {
    console.error(error);
  }
}

export async function getMovieReviews(id) {
  try {
    const response = await axios.get(
      `movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    );
    const movieReviews = response.data;
    return movieReviews;
  } catch (error) {
    console.error(error);
  }
}
