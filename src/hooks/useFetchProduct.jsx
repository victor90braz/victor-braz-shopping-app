import { useEffect, useState } from "preact/hooks";

export const useFetchProduct = (id, isList) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const url = isList
      ? "https://itx-frontend-test.onrender.com/api/product/"
      : `https://itx-frontend-test.onrender.com/api/product/${id}`;

    fetch(url)
      .then((response) => response.json())
      .then((responseData) => {
        setData(responseData);
        setIsLoading(false);
      });
  }, [id, isList]);

  return { data, isLoading };
};
