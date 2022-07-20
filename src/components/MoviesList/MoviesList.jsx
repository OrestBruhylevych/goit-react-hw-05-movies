import MoviesListItem from './MoviesListItem';

export default function MoviesList({ movies }) {
  const moviesItem = movies.map(movie => {
    const { id, title } = movie;

    return <MoviesListItem key={id} id={id} title={title} />;
  });

  return <ol>{moviesItem}</ol>;
}
