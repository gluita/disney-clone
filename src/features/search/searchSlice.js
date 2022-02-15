import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchTerm: "",
  movies:[]
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchedMovies: (state, action) => {
      state.searchTerm = action.payload.searchTerm;
      state.movies = action.payload.movies
    },
  },
});

export const { setSearchedMovies } = searchSlice.actions;


export default searchSlice.reducer;
