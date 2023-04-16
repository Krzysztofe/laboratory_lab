import { createSlice } from "@reduxjs/toolkit";

export const navHomeSlice = createSlice({
  name: "navHome",
  initialState: {
    isOpen: false,
  },
  reducers: {
    handleToggleNav: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { handleToggleNav } = navHomeSlice.actions;
export default navHomeSlice.reducer;
