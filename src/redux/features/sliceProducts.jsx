import { createSlice } from "@reduxjs/toolkit";

const sliceProducts = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    loadProducts: (state, action) => action.payload,
  },
});

export const { loadProducts: actionLoadProducts } = sliceProducts.actions;

export default sliceProducts.reducer;
