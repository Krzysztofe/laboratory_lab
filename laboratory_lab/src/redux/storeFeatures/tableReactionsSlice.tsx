import { createSlice, PayloadAction  } from "@reduxjs/toolkit";


interface ModelToggleTable {
  isOpen: boolean;
}
const toggleTable: ModelToggleTable = {
  isOpen: true,
};

export const tableReactionsSlice = createSlice({
  name: "tableReactions",
  initialState: {
    toggleTable,
  },
  reducers: {
    handleOpen: (state, action: PayloadAction<boolean>) => {
      state.toggleTable.isOpen = action.payload;
    },
  },
});

export const { handleOpen } = tableReactionsSlice.actions;
export default tableReactionsSlice.reducer;
