import { useState } from "react";
import "./MovieCard.css";

function MovieCard(props) {
  const { isOpen, rating, src, title, description, genre } = props.movieData;
  const [liked, setLiked] = useState(false);

  function handleLikedMovies() {
    setLiked(!liked);
    if (!liked) {
      props.setTotalLikes(props.totalLikes + 1);
    } else {
      props.setTotalLikes(props.totalLikes - 1);
    }
  }
  return (
    <div className="movie-card-container">
      <div className="poster-container">
        {isOpen ? (
          <p className="movie-badge" style={{ backgroundColor: "green" }}>
            Showing
          </p>
        ) : (
          <p className="movie-badge" style={{ backgroundColor: "red" }}>
            Comming Soon
          </p>
        )}
        {(rating > 9.1 && <p className="top-badge">Top</p>) || (
          <p className="top-badge">Avg</p>
        )}
        <img className="movie-poster" src={src} />
      </div>
      <div className="movie-information">
        <h4 className="movie-title">{title}</h4>
        <p className="movie-description">{description}</p>
        <p className="movie-rating">Rating: {rating}/10</p>
        <p className="movie-genre">{genre}</p>
      </div>
      <button onClick={handleLikedMovies}>
        {liked ? "❤️ Liked" : "🤍 Like"}
      </button>
    </div>
  );
}

export default MovieCard;
