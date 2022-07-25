import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieCredits } from '../../services/api';

export default function CastList() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getMovieCredits(movieId).then(({ cast }) => setCast(cast));
  }, [movieId]);

  return (
    <ul>
      {cast.map(({ character, id, name, profile_path }) => {
        return (
          <li key={id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${profile_path}`}
              alt="photo_profile"
            />
            <p>{name}</p>
            <p>Character: {character}</p>
          </li>
        );
      })}
    </ul>
  );
}
