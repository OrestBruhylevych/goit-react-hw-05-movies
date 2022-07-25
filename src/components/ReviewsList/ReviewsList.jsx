import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../../services/api';

export default function ReviewsList() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMovieReviews(movieId).then(res => setReviews(res.results));
  }, [movieId]);

  return reviews.length === 0 ? (
    "We don't have any reviews for this movie."
  ) : (
    <ul>
      {reviews.map(({ author, id, content }) => {
        return (
          <li key={id}>
            <h2>Author: {author}.</h2>
            <p>{content}</p>
          </li>
        );
      })}
    </ul>
  );
}
