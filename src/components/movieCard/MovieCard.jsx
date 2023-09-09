/* eslint-disable react/prop-types */
import './MovieCard.scss'
import { Link } from 'react-router-dom';

const MovieCard = ({movie}) => {
  return (
    <Link to={`/movie/${movie.imdbID}`}>
      <div className="card-item">
        <div className="card-top">
          <img src={movie.Poster} alt={movie.Title} />
        </div>
        <div className="cart-bottom">
          <div className="card-info">
            <h4>{movie.Title}</h4>
            <p>
              <strong>Date Released :</strong> {movie.Year}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default MovieCard