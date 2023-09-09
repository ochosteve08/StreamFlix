/* eslint-disable react/prop-types */
import "../movieListing/MovieListing.scss";
import MovieCard from "../movieCard/MovieCard";

const MovieListType = ({ movies, type, error }) => {
  return (
    <>
      <div className="movie-list">
        <h2>{type}</h2>
        <div className="movie-container">
          {error ? (
            <div className="error-message">{error}</div>
          ) : Array.isArray(movies) && movies.length ? (
            <>
              {movies
                ?.filter((movie) => movie.Poster !== "N/A")
                .map((movie) => (
                  <MovieCard key={movie.imdbID} movie={movie} />
                ))}
            </>
          ) : (
            <div>No movies to display</div>
          )}
        </div>
      </div>
    </>
  );
};

export default MovieListType;
