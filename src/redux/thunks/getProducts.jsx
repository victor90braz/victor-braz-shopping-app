import { useFetchProduct } from "../../hooks/useFetchProduct";
import { updateProducts } from "../features/products"; // Import the action

export const fetchProducts = () => async (dispatch) => {
  try {
    const { data } = await useFetchProduct(null, true);
    dispatch(updateProducts(data)); // Dispatch the action
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};
