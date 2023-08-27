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

export const fetchSingleProduct = async (id) => {
  try {
    const baseUrl = import.meta.env.VITE_SHOPPING_APP_API_BASE_URL;
    const url = `${baseUrl}product/${id}`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const productData = await response.json();
    return productData;
  } catch (error) {
    console.error("Error loading product:", error);
    throw error;
  }
};

export const thunkLoadSingleProduct = (id) => async (dispatch) => {
  try {
    const productData = await fetchSingleProduct(id);
    return productData; // Return the fetched product data
  } catch (error) {
    console.error("Error loading products:", error);
    throw error;
  }
};
