// @ts-nocheck
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

    const existingCartItems =
      JSON.parse(localStorage.getItem("cartItems")) || [];

    const updatedCartItems = [...existingCartItems, responseData];

    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));

    const expirationTimestamp = Date.now() + 3600000;
    localStorage.setItem("cartItemsExpiration", expirationTimestamp.toString());

    dispatch(actionCreateNewProduct(responseData));

    dispatch(revalidateCartItems());
  } catch (error) {
    console.error("Error adding to cart:", error);
    throw error;
  }
};

export const revalidateCartItems = () => async (dispatch) => {
  try {
    const expirationTimestampString = localStorage.getItem(
      "cartItemsExpiration"
    );

    if (expirationTimestampString) {
      const expirationTimestamp = parseInt(expirationTimestampString, 10);

      if (isNaN(expirationTimestamp)) {
        console.error("Invalid expiration timestamp format");
        return;
      }

      if (Date.now() > expirationTimestamp) {
        const existingCartItems =
          JSON.parse(localStorage.getItem("cartItems")) || [];

        const revalidatedCartItems = await performRevalidation(
          existingCartItems
        );

        const newExpirationTimestamp = Date.now() + 3600000;
        localStorage.setItem(
          "cartItemsExpiration",
          newExpirationTimestamp.toString()
        );

        localStorage.setItem("cartItems", JSON.stringify(revalidatedCartItems));
      }
    }
  } catch (error) {
    console.error("Error revalidating cart items:", error);
  }
};
