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

    // Assuming the response data contains the updated count value in the cart.
    const responseData = await response.json();
    const updatedCount = responseData.count;

    // You can dispatch actions to update the cart or handle the response accordingly.
    // For example, you might want to refresh the cart data after adding a product.

    // Dispatch the action to update the products store with the new product
    dispatch(actionCreateNewProduct(responseData));

    // You can dispatch an action to update the cart count in your Redux store.
    // Example: dispatch(actionUpdateCartCount(updatedCount));
  } catch (error) {
    console.error("Error adding to cart:", error);
    throw error;
  }
};
