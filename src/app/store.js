import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../features/user/userSlice'
import movieReducer from '../features/movies/movieSlice'
import searchReducer from '../features/search/searchSlice'

export default configureStore({
  reducer:{
    user:userReducer,
    movie:movieReducer,
    search:searchReducer
  }
})