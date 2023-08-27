import { createSlice } from "@reduxjs/toolkit";

const sliceProducts = createSlice({
  name: "products",
  initialState: [],
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
