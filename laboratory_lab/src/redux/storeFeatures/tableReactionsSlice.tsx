import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModelEditForm {
  [key: string]: any;
  id?: string;
  name?: string;
  alcaloids?: string;
  selectMilimolles?: string | number;
  substract?: string;
  selectReactionCondition?: string;
  solvents?: string;
  startDate?: string;
  finishDate?: string;
  startTime?: string;
  finishTime?: string;
  technics?: string;
  isEdit?: boolean;
}

interface TableReactionsState {
  editedReaction: ModelEditForm;
  printReactions: ModelEditForm[];
  toggleTable: { isOpen: boolean };
}

const initialState: TableReactionsState = {
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
};

export const tableReactionsSlice = createSlice({
  name: "tableReactions",
  initialState,
  reducers: {
    handleChange: (state, action: PayloadAction<[string, any]>) => {
      state.editedReaction = {
        ...state.editedReaction,
        [action.payload[0]]: action.payload[1],
      };
    },

    getReactions: (state, action: PayloadAction<any>) => {
      state.printReactions = action.payload;
    },

    handleEdit: (state, action: PayloadAction<[ModelEditForm[], any]>) => {
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

    handleUpdate: (state, action: PayloadAction<[ModelEditForm[], string]>) => {
      state.printReactions = action.payload[0].map(reaction => {
        return reaction.id === action.payload[1]
          ? { ...reaction, isEdit: true }
          : { ...reaction, isEdit: true };
      });
    },

    handleTableOpen: (state, action: PayloadAction<boolean>) => {
      state.toggleTable.isOpen = action.payload;
    },
  },
});

export const {
  handleChange,
  getReactions,
  handleEdit,
  handleUpdate,
  handleTableOpen,
} = tableReactionsSlice.actions;
export default tableReactionsSlice.reducer;
