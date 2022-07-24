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
      <img
        src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${url}`}
        alt="Poster movie"
        width="340"
      />
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
