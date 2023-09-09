import { useEffect } from "react";
import MovieListing from "../../components/movieListing/MovieListing";
import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSlice";



function Home() {

  const dispatch = useDispatch();
  
  
const search = "iron man";
const searchShow= 'friends'
  useEffect(() => {
   
    dispatch(fetchAsyncMovies(search));
    dispatch(fetchAsyncShows(searchShow));  
  
  }, [dispatch]);

  return (
    <section>
      <div className="banner-img"></div>
      <MovieListing  />
      <div></div>
    </section>
  );
}

export default Home;
