export default function MovieCard({
  id,
  url,
  title,
  genres,
  overview,
  vote_average,
  date,
}) {
  return (
    <div id={id}>
      <img src={`https://image.tmdb.org/t/p/w500${url}`} alt="Poster movie" />
      <h1>
        {title} ({date}){' '}
      </h1>
      <p>User Score: {vote_average} </p>

      {overview && (
        <>
          <h2>Overview</h2>
          <p>{overview}</p>
        </>
      )}
      {genres && (
        <>
          <h2>Genres</h2>
          <p>{genres.map(genre => `${genre.name} `)}</p>
        </>
      )}
    </div>
  );
}
