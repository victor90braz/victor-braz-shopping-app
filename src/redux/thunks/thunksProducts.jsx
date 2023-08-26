import { actionLoadProducts } from "../features/sliceProducts";

export const thunkLoadProducts = () => async (dispatch) => {
  try {
    const baseUrl = import.meta.env.VITE_SHOPPING_APP_API_BASE_URL;
    const url = `${baseUrl}product/`;

    const response = await fetch(url);
    const products = await response.json();

    dispatch(actionLoadProducts(products));
  } catch (error) {
    console.error("Error loading products:", error);
  }
};
