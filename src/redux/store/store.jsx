// @ts-nocheck
import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "../features/products";

const store = configureStore({
  reducer: {
    products: productsSlice,
  },
});

export default store;
