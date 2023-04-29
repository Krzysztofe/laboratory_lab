import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ModelReaction } from "../../services/apiSlice";

interface TableReactionInitialsState {
  editedReaction: ModelReaction;
  printReactions: ModelReaction[];
  toggleTable: { isOpen: boolean };
  requestState: {
    edit: { isLoading: boolean; isError: boolean };
    delete: { isLoading: boolean; isError: boolean };
    id: string;
  };
}

const initialState: TableReactionInitialsState = {
  editedReaction: {
    id: "",
    name: "",
    technics: "",
    alcaloids: "",
    selectMilimolles: "",
    substract: "",
    selectReactionCondition: "",
    solvent: "",
    atmosphere: "",
    startDate: "",
    finishDate: "",
    startTime: "",
    finishTime: "",
    isEdit: false,
  },
  printReactions: [],
  toggleTable: { isOpen: true },
  requestState: {
    edit: { isLoading: false, isError: false },
    delete: {
      isLoading: false,
      isError: false,
    },
    id: "",
  },
};

export const tableReactionsSlice = createSlice({
  name: "tableReactions",
  initialState,
  reducers: {
    handleChange: (
      state,
      action: PayloadAction<{ name: string; value: string }>
    ) => {
      state.editedReaction = {
        ...state.editedReaction,
        [action.payload.name]: action.payload.value,
      };
    },

    getReactions: (state, action: PayloadAction<any>) => {
      const reactions = action.payload
        ? Object.keys(action.payload).map(key => ({
            id: key,
            name: action.payload[key].name,
            solvent: action.payload[key].solvent,
            technics: action.payload[key].technics,
            alcaloids: action.payload[key].alcaloids,
            selectMilimolles: action.payload[key].selectMilimolles,
            selectReactionCondition:
              action.payload[key].selectReactionCondition,
            atmosphere: action.payload[key].atmosphere,
            startDate: action.payload[key].startDate,
            finishDate: action.payload[key].finishDate,
            startTime: action.payload[key].startTime,
            finishTime: action.payload[key].finishTime,
            isEdit: action.payload[key].isEdit,
          }))
        : [];

      state.printReactions = reactions;
    },

    handleEdit: (
      state,
      action: PayloadAction<{
        printReactions: ModelReaction[];
        reactionId: string;
      }>
    ) => {
      state.printReactions = action.payload.printReactions.map(reaction => {
        return reaction.id === action.payload.reactionId
          ? { ...reaction, isEdit: true }
          : { ...reaction, isEdit: false };
      });

      const getEditedReaction = state.printReactions?.find(reaction => {
        return reaction.id === action.payload.reactionId;
      });
      if (getEditedReaction) {
        state.editedReaction = getEditedReaction;
      }
    },

    handleUpdate: state => {
      state.printReactions = state.printReactions.map(reaction => {
        return { ...reaction, isEdit: false };
      });
    },

    handleCleanEditForm: state => {
      state.editedReaction = { ...state.editedReaction, isEdit: false };
    },
    handleTableOpen: (state, action: PayloadAction<boolean>) => {
      state.toggleTable.isOpen = action.payload;
    },
    handleEidtisLoading: (state, action: PayloadAction<boolean>) => {
      state.requestState.edit.isLoading = action.payload;
    },
    handleEidtIsError: (state, action: PayloadAction<boolean>) => {
      state.requestState.edit.isError = action.payload;
    },
    handleRequestStateId: (state, action: PayloadAction<string>) => {
      state.requestState.id = action.payload;
    },
    handleHttpRequest: (
      state,
      action: PayloadAction<{
        editIsLoading: boolean;
        editIsError: boolean;
        deleteIsLoading: boolean;
        deleteIsError: boolean;
      }>
    ) => {
      state.requestState.edit.isLoading = action.payload.editIsLoading;
      state.requestState.edit.isError = action.payload.editIsError;
      state.requestState.delete.isLoading = action.payload.deleteIsLoading;
      state.requestState.delete.isError = action.payload.deleteIsError;
    },
  },
});

export const {
  handleChange,
  getReactions,
  handleEdit,
  handleUpdate,
  handleCleanEditForm,
  handleTableOpen,
  handleEidtisLoading,
  handleEidtIsError,
  handleRequestStateId,
  handleHttpRequest,
} = tableReactionsSlice.actions;
export default tableReactionsSlice.reducer;
