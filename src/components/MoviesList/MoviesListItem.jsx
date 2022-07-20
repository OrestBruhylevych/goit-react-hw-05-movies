export default function MoviesListItem({ title = 'No movie title', id }) {
  return <li id={id}>{title}</li>;
}
