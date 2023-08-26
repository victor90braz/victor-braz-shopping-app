// Create a custom hook for fetching data
import { useEffect, useState } from "preact/hooks";

export const useFetchProduct = (id) => {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const url = `https://itx-frontend-test.onrender.com/api/product/${id}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        setIsLoading(false);
      });
  }, [id]);

  return { product, isLoading };
};
