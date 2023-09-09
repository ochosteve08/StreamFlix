import {configureStore} from '@reduxjs/toolkit'
import movieReducer from '../features/movies/movieSlice'

const store = configureStore({
    reducer:{
        movie: movieReducer,
    }
});


export default store;