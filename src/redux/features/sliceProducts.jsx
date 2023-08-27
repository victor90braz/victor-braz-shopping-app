import { createSlice } from "@reduxjs/toolkit";

const sliceProducts = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    loadProducts: (state, action) => action.payload,
    loadSingleProduct: (state, action) => {
      const newProduct = action.payload;
      console.log("newProduct");
      console.log(newProduct);
      return [...state, newProduct];
    },
  },
});

export const {
  loadProducts: actionLoadProducts,
  loadSingleProduct: actionloadSingleProduct,
} = sliceProducts.actions;

export default sliceProducts.reducer;
