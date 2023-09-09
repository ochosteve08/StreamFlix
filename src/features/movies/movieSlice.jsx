import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "../../common/api/MovieApi";
import { API_KEY } from "../../common/api/MovieApiKey";

export const fetchAsyncMovies = createAsyncThunk(
  "movie/fetchAsyncMovies",
  async (search) => {
    try {
      const response = await API_URL.get(
        `?apikey=${API_KEY}&s=${search}&type=movie`
      );

      return response.data.Search;
    } catch (error) {
      if (error.isAxiosError && error.message === "Network Error") {
        throw new Error("Network Error");
      }
    
    throw new Error(error);
    }
  }
);

export const fetchAsyncMovieOrShowDetails = createAsyncThunk(
  "movie/fetchAsyncMovieDetails",
  async (id) => {
    try {
      const response = await API_URL.get(
        `?apikey=${API_KEY}&i=${id}&Plot=full`
      );
      return response.data;
    } catch (error) {
      // console.log(error);
      return error.message;
    }
  }
);

export const fetchAsyncShows = createAsyncThunk(
  "movie/fetchAsyncShows ",
  async (search) => {
    try {
      const response = await API_URL.get(
        `?apikey=${API_KEY}&s=${search}&type=series`
      );

      return response.data.Search;
    } catch (error) {
      // console.log(error);
      return error.message;
    }
  }
);

const initialState = {
  movies: [],
  shows: [],
  showOrMovie: [],
  isLoading: false,
  error: "",
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    addMovies(state, action) {
      state.movies = action.payload;
    },
    removeMovieOrShow(state) {
      state.showOrMovie = [];
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchAsyncMovies.fulfilled]: (state, action) => {
      state.isLoading = false;

      state.movies = action.payload;
    },
    [fetchAsyncMovies.rejected]: (state, action) => {
    
      state.isLoading = false;
      state.error = action.error.message;
    },
    [fetchAsyncShows.fulfilled]: (state, action) => {
      state.isLoading = false;

      state.shows = action.payload;
    },
    [fetchAsyncMovieOrShowDetails.fulfilled]: (state, action) => {
      state.isLoading = false;

      state.showOrMovie = action.payload;
    },
  },
});

export const getAllMovies = (state) => state.movie.movies;
export const getAllShows = (state) => state.movie.shows;
export const getShowOrMovie = (state) => state.movie.showOrMovie;
export const showIsLoading = (state) => state.movie.isLoading;
export const showError = (state) => state.movie.error;
export const { addMovies, removeMovieOrShow } = movieSlice.actions;
export default movieSlice.reducer;
