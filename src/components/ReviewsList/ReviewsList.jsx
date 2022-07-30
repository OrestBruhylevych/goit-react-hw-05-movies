import { Box } from 'components/Box/Box';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../../services/api';
import { ReviewsListItemStyled } from './ReviewsList.styled';

export default function ReviewsList() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMovieReviews(movieId)
      .then(res => setReviews(res.results))
      .catch(e => console.log(e));
  }, [movieId]);

  return reviews.length === 0 ? (
    "We don't have any reviews for this movie."
  ) : (
    <Box as="ul" mt="20px">
      {reviews.map(({ author, id, content }) => {
        return (
          <ReviewsListItemStyled key={id}>
            <h2>Author: {author}.</h2>
            <p>{content}</p>
          </ReviewsListItemStyled>
        );
      })}
    </Box>
  );
}
