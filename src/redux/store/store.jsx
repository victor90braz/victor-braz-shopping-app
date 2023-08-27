import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import productsReducer from "../features/sliceProducts";

const persistanceLocalStorageMiddleware = (store) => (next) => (action) => {
  next(action);
  localStorage.setItem("__redux__state", JSON.stringify(store.getState()));
};

const store = configureStore({
  reducer: {
    products: productsReducer,
  },
  middleware: [thunkMiddleware, persistanceLocalStorageMiddleware],
});

export default store;
