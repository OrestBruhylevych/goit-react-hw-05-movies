import { NavLink } from 'react-router-dom';

export default function MoviesListItem({ title = 'No movie title', id }) {
  return (
    <li id={id}>
      <NavLink to={`/movies/${id}`}>{title}</NavLink>
    </li>
  );
}
