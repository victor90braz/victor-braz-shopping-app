import { createSlice } from "@reduxjs/toolkit";

const initialState = (() => {
  const persistedState = localStorage.getItem("__redux_state__");

  return persistedState ? JSON.parse(persistedState).products : [];
})();

const sliceProducts = createSlice({
  name: "products",
  initialState,
  reducers: {
    loadProducts: (state, action) => action.payload,
    loadSingleProduct: (currentData, action) => {
      const addNewData = action.payload;
      return [...currentData, addNewData];
    },
  },
});

export const {
  loadProducts: actionLoadProducts,
  loadSingleProduct: actionloadSingleProduct,
} = sliceProducts.actions;

export default sliceProducts.reducer;
