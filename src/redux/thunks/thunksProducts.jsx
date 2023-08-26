import {
  actionLoadProducts,
  actionloadSingleProduct,
} from "../features/sliceProducts";

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

export const thunkLoadSingleProduct = (productId) => async (dispatch) => {
  try {
    const baseUrl = import.meta.env.VITE_SHOPPING_APP_API_BASE_URL;
    const url = `${baseUrl}product/${productId}`;

    const response = await fetch(url);
    const product = await response.json();

    console.log("Fetched product:", product);

    dispatch(actionloadSingleProduct(product));
  } catch (error) {
    console.error("Error loading product:", error);
  }
};
