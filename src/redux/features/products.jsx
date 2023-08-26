import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../../data";

const productsSlice = createSlice({
  name: "products",
  initialState: data,
  reducers: {},
});

export default productsSlice.reducer;
