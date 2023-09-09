import { useParams } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import { useEffect } from "react";
import { FaStar, FaThumbsUp, FaVideo, FaHourglass } from "react-icons/fa";
import {
  getShowOrMovie,
  fetchAsyncMovieOrShowDetails,
  removeMovieOrShow,
} from "../../features/movies/movieSlice";
import './MovieDetail.scss'

function MovieDetail() {
  const dispatch = useDispatch();
  const { imdbID } = useParams();
 
  const data = useSelector(getShowOrMovie);
 
  useEffect(()=>{

    dispatch(fetchAsyncMovieOrShowDetails(imdbID));
    return (()=>{
      dispatch(removeMovieOrShow())
    })
  },[dispatch,imdbID])

  return (
    <section className="movie-section">
    {Object.keys(data).length === 0 ? <div>loading......</div> :      
        <>
          
          <div className="section-left">
            <div className="movie-title">{data.Title}</div>
            <div className="movie-rating">
              <span>
                IMDB Rating <FaStar className="star" /> : {data.imdbRating}
              </span>
              <span>
                Votes <FaThumbsUp className="thumbs-up" />: {data.imdbVotes}
              </span>
              <span>
                Runtime <FaVideo className="file" />: {data.Runtime}
              </span>
              <span>
                Year of Release <FaHourglass className="time" />: {data.Year}
              </span>
            </div>
            <div className="movie-plot">
              <strong>Plot:</strong> {data.Plot}
            </div>
            <div className="movie-info">
              <div>
                <span>Director: </span>
                <span>{data.Director}</span>
              </div>
              <div>
                <span>Stars:</span>
                <span>{data.Actors}</span>
              </div>
              <div>
                <span>Genres:</span>
                <span>{data.Genre}</span>
              </div>
              <div>
                <span>Languages: </span>
                <span>{data.Language}</span>
              </div>
              <div>
                <span>Awards:</span>
                <span>{data.Awards}</span>
              </div>
            </div>
          </div>
          <div className="section-right">
            <img src={data.Poster} alt={data.Title} />
          </div>
        </>
      }
    </section>
  );
}

export default MovieDetail;
