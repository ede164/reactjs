import { variablesState } from "../states/variablesState";
import { createSlice } from "@reduxjs/toolkit";


const variablesSlice = createSlice({
  name: "variables",
  initialState: variablesState,
  reducers: {
   
    setTotalItems: (state, action) => {
      state.totalItems = action.payload;
    },
    
    setTotalAmount: (state, action) => {
      state.totalAmount = action.payload;
    },
  },
});

export default variablesSlice;
