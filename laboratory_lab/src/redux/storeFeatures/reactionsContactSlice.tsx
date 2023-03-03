import { createSlice } from "@reduxjs/toolkit";
import useHttp from "../../services/useHTTP";

// const { isLoading, error, sendRequest } = useHttp();

interface modelMesages {
  email: string;
}

const messages: modelMesages[] = [];

export const reactionsContactSlice = createSlice({
  name: "reactionsContact",
  initialState: {
    messages,
  },
  reducers: {
    addMessage: (state, action) => {
    //   state.messages = [...state.messages, { email: action.payload }];


    
      console.log('uuu',state.messages)
    },
  },
//   extraReducers
});

export const { addMessage } = reactionsContactSlice.actions;
export default reactionsContactSlice.reducer;
