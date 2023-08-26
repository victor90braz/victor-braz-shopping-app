import { useEffect, useState } from "preact/hooks";

export const useFetchProduct = (id, isList) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const baseUrl = import.meta.env.SHOPPING_APP_API_BASE_URL;

    const url = isList ? `${baseUrl}product/` : `${baseUrl}product/${id}`;

    fetch(url)
      .then((response) => response.json())
      .then((responseData) => {
        setData(responseData);
        setIsLoading(false);
      });
  }, [id, isList]);

  return { data, isLoading };
};
