import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/products"; // Import the reducer

const store = configureStore({
  reducer: {
    products: productsReducer, // Use the reducer here
  },
});
export default store;
