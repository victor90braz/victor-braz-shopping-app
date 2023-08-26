import { createSlice } from "@reduxjs/toolkit";

const sliceProducts = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    loadProducts: (state, action) => action.payload,
    loadSingleProduct: (state, action) => {
      const existingProductIndex = state.findIndex(
        (product) => product.id === action.payload.id
      );

      if (existingProductIndex === -1) {
        // If the product doesn't exist, add it to the state
        return [...state, action.payload];
      } else {
        // If the product exists, update its data
        const newState = [...state];
        newState[existingProductIndex] = action.payload;
        return newState;
      }
    },
  },
});

export const {
  loadProducts: actionLoadProducts,
  loadSingleProduct: actionloadSingleProduct,
} = sliceProducts.actions;

export default sliceProducts.reducer;
