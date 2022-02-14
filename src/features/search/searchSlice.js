import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchTerm: null,
  searchResult:[]
};

const searchSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.recommend = action.payload.recommend;
    },
  },
});

export const { setMovies } = movieSlice.actions;

export const selectTerm = (state) => state.search.searchTerm;
export const selectResult = (state) => state.search.searchResult;

export default searchSlice.reducer;
