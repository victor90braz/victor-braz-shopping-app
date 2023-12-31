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
    createNewProduct: (state, action) => {
      const newProduct = action.payload;
      return [...state, newProduct];
    },
  },
});

export const {
  loadProducts: actionLoadProducts,
  loadSingleProduct: actionLoadSingleProduct,
  createNewProduct: actionCreateNewProduct,
} = sliceProducts.actions;

export default sliceProducts.reducer;
