import {createSlice } from '@reduxjs/toolkit';


const initialState = {
  recommend:null
}

const movieSlice = createSlice({
  name:'movie',
  initialState,
  reducers:{
    setMovies: (state, action) => {
      state.recommend = action.payload.recommend
    }
  }
})

export  const {setMovies} = movieSlice.actions;

export const selectRecommend = (state) => state.movie.recommends;

export default movieSlice.reducer