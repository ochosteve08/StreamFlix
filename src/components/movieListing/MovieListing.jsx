import {
  getAllMovies,
  getAllShows,
  showError,
} from "../../features/movies/movieSlice";
import { useSelector } from "react-redux";
import "./MovieListing.scss";
import MovieListType from "../movieListType/MovieListType";

function MovieListing() {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  const error = useSelector(showError);
 

  return (
    <div className="movie-wrapper">
      <MovieListType type="Movies" movies={movies} error={error} />
      <MovieListType type="Shows" movies={shows} error={error} />
    </div>
  );
}

export default MovieListing;
