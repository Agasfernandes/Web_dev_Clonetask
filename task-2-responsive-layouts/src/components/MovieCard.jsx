export default function MovieCard({ movie, layoutClass }) {
  return (
    <article className={`movie-card ${layoutClass}`}>
      <div className="card-image-wrap">
        <img src={movie.poster} alt={movie.title} />
      </div>
      <div className="card-details">
        <div className="card-text">
          <p>{movie.description}</p>
        </div>
        <button className="watch-btn" type="button">WATCH NOW</button>
      </div>
    </article>
  );
}