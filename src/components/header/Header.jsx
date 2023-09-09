
import { Link } from "react-router-dom"
import user from '../../assets/user.png'
import logo from '../../assets/logo.png'
import {FaSearch} from 'react-icons/fa';
import './Header.scss'
import { useState } from "react";
import {useDispatch }from 'react-redux'
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSlice";


function Header() {
  const [search,setSearch]= useState('');
  const dispatch = useDispatch();

  const submitHandler = (event)=>{
    event.preventDefault();
    if (search === '') return alert("please enter a search value");
     dispatch(fetchAsyncMovies(search));
     dispatch(fetchAsyncShows(search));
     setSearch("");  
   
  }
  return (
    <nav>
      <div className="header">
        <div className="logo">
          <Link to={"/"}>
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="search-bar">
          <form onSubmit={submitHandler}>
            <input
              type="text"
              value={search}
              placeholder="search Movies or Shows"
              onChange={(event) => setSearch(event.target.value)}
            />
            <button type="submit">
              <FaSearch />
            </button>
          </form>
        </div>

        <div className="user-image">
          <img src={user} alt="user" />
        </div>
      </div>
      <div className="mobile-search-bar">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={search}
            placeholder="search Movies or Shows"
            onChange={(event) => setSearch(event.target.value)}
          />
          <button type="submit">
            <FaSearch />
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Header