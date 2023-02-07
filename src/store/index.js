import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productSlice";
import variablesSlice from "./slices/variablesSlice";

const store = configureStore({
  reducer: { cart: productSlice.reducer, variables: variablesSlice.reducer },
});

export const selectProducts = (state) => state.cart;
export const selectTotalItems = (state) => state.variables.totalItems;

export const selectTotalAmount = (state) => state.variables.totalAmount;


export const { setTotalItems, setTotalAmount } = variablesSlice.actions;
export const {
  add,
  remove,
  emptyCart,
  incrementProduct,
  decrementProduct,
} = productSlice.actions;
export { productSlice, variablesSlice, store };
