import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ModelReaction } from "../../services/apiSlice";

interface TableReactionInitialsState {
  editedReaction: ModelReaction;
  printReactions: ModelReaction[];
  toggleTable: { isOpen: boolean };
  editRequestState: {
    editIsLoading: boolean;
    editIsError: boolean;
    deleteIsLoading: boolean;
    deleteIsError: boolean;
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
    solvents: "",
    startDate: "",
    finishDate: "",
    startTime: "",
    finishTime: "",
    isEdit: true,
  },
  printReactions: [],
  toggleTable: { isOpen: true },
  editRequestState: {
    editIsLoading: false,
    editIsError: false,
    deleteIsLoading: false,
    deleteIsError: false,
    id: "",
  },
};

export const tableReactionsSlice = createSlice({
  name: "tableReactions",
  initialState,
  reducers: {
    handleChange: (state, action: PayloadAction<[string, string]>) => {
      state.editedReaction = {
        ...state.editedReaction,
        [action.payload[0]]: action.payload[1],
      };
    },

    getReactions: (state, action: PayloadAction<any>) => {
      const reactions = action.payload
        ? Object.keys(action.payload).map(key => ({
            id: key,
            name: action.payload[key].name.trim(),
            technics: action.payload[key].technics,
            alcaloids: action.payload[key].alcaloids,
            selectMilimolles: action.payload[key].selectMilimolles,
            substract: action.payload[key].substract,
            selectReactionCondition:
              action.payload[key].selectReactionCondition,
            solvents: action.payload[key].solvents,
            startDate: action.payload[key].startDate,
            finishDate: action.payload[key].finishDate,
            startTime: action.payload[key].startTime,
            finishTime: action.payload[key].finishTime,
            isEdit: action.payload[key].isEdit,
          }))
        : [];

      state.printReactions = reactions;
    },

    handleEdit: (state, action: PayloadAction<[ModelReaction[], string]>) => {
      state.printReactions = action.payload[0].map(reaction => {
        return reaction.id === action.payload[1]
          ? { ...reaction, isEdit: false }
          : { ...reaction, isEdit: true };
      });

      const getEditedReaction = state.printReactions?.find(reaction => {
        return reaction.id === action.payload[1];
      });
      if (getEditedReaction) {
        state.editedReaction = getEditedReaction;
      }
    },

    handleUpdate: (state, action: PayloadAction<[ModelReaction[], string]>) => {
      state.printReactions = action.payload[0].map(reaction => {
        return reaction.id === action.payload[1]
          ? { ...reaction, isEdit: true }
          : { ...reaction, isEdit: true };
      });
    },

    handleCleanEditForm: state => {
      state.editedReaction = initialState.editedReaction;
    },
    handleTableOpen: (state, action: PayloadAction<boolean>) => {
      state.toggleTable.isOpen = action.payload;
    },
    handleEidtisLoading: (state, action: PayloadAction<boolean>) => {
      state.editRequestState.editIsLoading = action.payload;
    },
    handleEidtIsError: (state, action: PayloadAction<boolean>) => {
      state.editRequestState.editIsError = action.payload;
    },
    handleEidtId: (state, action: PayloadAction<string>) => {
      state.editRequestState.id = action.payload;
    },
    handleHttpRequest: (state, action: PayloadAction<[boolean, boolean, boolean, boolean]>) => {
      state.editRequestState = {
        ...state.editRequestState,
        editIsLoading: action.payload[0],
        editIsError: action.payload[1],
        deleteIsLoading: action.payload[2],
        deleteIsError: action.payload[3],
      };
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
  handleEidtId,
  handleHttpRequest,
} = tableReactionsSlice.actions;
export default tableReactionsSlice.reducer;
