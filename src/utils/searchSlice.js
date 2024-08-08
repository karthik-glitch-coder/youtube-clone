import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheResults: (state, actions) => {
      //here we do merge of two objects (payload(which comes from Suggestions)+empty object(initialState of searchSlice))
      state = Object.assign(state, actions.payload);
    },
  },
});

export const { cacheResults } = searchSlice.actions;
export default searchSlice.reducer;
