import { productState } from "../states/productState";
import { createSlice } from "@reduxjs/toolkit";


const productSlice = createSlice({
  name: "product",
  initialState: productState,
  reducers: {
    
    add: (state, action) => {
      return state.map((item) => {
        if (item.id !== action.payload.id) {
          return item;
        }

        return {
          ...item,
          added: true,
          quantity: item.quantity + 1,
        };
      });
    },
    remove: (state, action) => {
      return state.map((item) => {
        if (item.id !== action.payload.id) {
          return item;
        }

        return {
          ...item,
          added: false,
          quantity: item.quantity * 0,
        };
      });
    },
    emptyCart: (state, action) => {
      return state.map((item) => {
        return {
          ...item,
          added: false,
          quantity: item.quantity * 0,
        };
      });
    },
  
    incrementProduct: (state, action) => {
      
      return state.map((item) => {
       
        if (item.id !== action.payload.id) {
          return item;
        }

        
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      });
    },

    
    decrementProduct: (state, action) => {
      
      return state.map((item) => {
        
        if (item.id !== action.payload.id) {
          return item;
        }

        
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      });
    },
  },
});

export default productSlice;
