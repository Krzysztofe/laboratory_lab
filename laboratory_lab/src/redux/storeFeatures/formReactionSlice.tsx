import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ModelReaction } from "../../services/apiSlice";

interface ModelInitialState {
  reaction: ModelReaction;
}

const initialState: any = {
  reaction: {
    name: "Ah - ",
    technics: "",
    alcaloids: "",
    selectMilimolles: "--Wybierz--",
    selectReactionCondition: "--Wybierz--",
    solvents: "",
    atmosphere: "",
    startDate: "",
    finishDate: "",
    startTime: "",
    finishTime: "",
  },
};

export const formReactionSlice = createSlice({
  name: "formReaction",
  initialState,
  reducers: {
    handleChange: (state, action: PayloadAction<[string, string]>) => {
      state.reaction = {
        ...state.reaction,
        [action.payload[0]]: action.payload[1],
      };
    },
    handleCleanFormReaction: (state) => {
      state.reaction = initialState.reaction
    },
  },
});

export const { handleChange, handleCleanFormReaction } = formReactionSlice.actions;
export default formReactionSlice.reducer;
