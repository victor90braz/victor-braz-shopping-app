import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/sliceProducts";

const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});

export default store;
