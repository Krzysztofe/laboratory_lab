import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ModelReaction } from "../../services/apiSlice";

interface ModelInitialState {
  reaction: ModelReaction;
}

const initialState: ModelInitialState = {
  reaction: {
    name: "Ah - ",
    technics: "",
    alcaloids: "",
    selectMilimolles: "--Wybierz--",
    selectReactionCondition: "--Wybierz--",
    solvent: "",
    atmosphere: "",
    startDate: "",
    finishDate: "",
    startTime: "",
    finishTime: "",
    isEdit: false,
  },
};

export const formReactionSlice = createSlice({
  name: "formReaction",
  initialState,
  reducers: {
    handleChange: (state, action: PayloadAction<{name:string, value:string}>) => {
      state.reaction = {
        ...state.reaction,
        [action.payload.name]: action.payload.value,
      };
    },
    handleCleanFormReaction: (state) => {
      state.reaction = initialState.reaction
    },
  },
});

export const { handleChange, handleCleanFormReaction } = formReactionSlice.actions;
export default formReactionSlice.reducer;
