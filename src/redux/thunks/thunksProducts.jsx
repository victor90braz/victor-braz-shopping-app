import {
  actionLoadProducts,
  actionCreateNewProduct,
  actionLoadSingleProduct,
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

export const thunkLoadSingleProduct = (id) => async (dispatch) => {
  try {
    const baseUrl = import.meta.env.VITE_SHOPPING_APP_API_BASE_URL;
    const url = `${baseUrl}product/${id}`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const productData = await response.json();

    dispatch(actionLoadSingleProduct(productData));
  } catch (error) {
    console.error("Error loading products:", error);
    throw error;
  }
};

export const thunkAddToCart = (productData) => async (dispatch) => {
  try {
    const baseUrl = import.meta.env.VITE_SHOPPING_APP_API_BASE_URL;
    const url = `${baseUrl}cart`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const responseData = await response.json();

    // Get the existing cart items from local storage
    const existingCartItems =
      JSON.parse(localStorage.getItem("cartItems")) || [];

    // Update cart items with the new item
    const updatedCartItems = [...existingCartItems, responseData];

    // Save the updated cart items back to local storage
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));

    dispatch(actionCreateNewProduct(responseData));
  } catch (error) {
    console.error("Error adding to cart:", error);
    throw error;
  }
};
