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

      // If the product doesn't exist, add it to the state
      if (existingProductIndex === -1) {
        state.push(action.payload);
      } else {
        // If the product exists, update its data
        state[existingProductIndex] = action.payload;
      }
    },
  },
});

export const {
  loadProducts: actionLoadProducts,
  loadSingleProduct: actionloadSingleProduct,
} = sliceProducts.actions;

export default sliceProducts.reducer;
