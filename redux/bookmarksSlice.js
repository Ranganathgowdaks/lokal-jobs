import { createSlice } from "@reduxjs/toolkit";

const bookmarksSlice = createSlice({
  name: "bookmarks",
  initialState: [],
  reducers: {
    addBookmark: (state, action) => {
      const exists = state.find((job) => job.id === action.payload.id);
      if (!exists) state.push(action.payload);
    },
    removeBookmark: (state, action) => {
      return state.filter((job) => job.id !== action.payload);
    },
    setBookmarks: (state, action) => {
      return action.payload;
    },
  },
});

export const { addBookmark, removeBookmark, setBookmarks } =
  bookmarksSlice.actions;
export default bookmarksSlice.reducer;
