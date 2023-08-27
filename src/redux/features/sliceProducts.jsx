import { createSlice } from "@reduxjs/toolkit";

const sliceProducts = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    loadProducts: (state, action) => action.payload,
    loadSingleProduct: (state, action) => [...state, action.payload],
  },
});

export const {
  loadProducts: actionLoadProducts,
  loadSingleProduct: actionloadSingleProduct,
} = sliceProducts.actions;

export default sliceProducts.reducer;
