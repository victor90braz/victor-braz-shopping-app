// @ts-nocheck
import ItemList from "../../components/ItemList/ItemList";
import SearchItem from "../../components/SearchItem/SearchItem";
import SpinnersText from "../../modal/SpinnersText"; // Make sure to adjust the path
import { MainViewStyles } from "./MainViewStyles";
import { useEffect, useState } from "preact/hooks";

const MainView = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const baseUrl = import.meta.env.VITE_SHOPPING_APP_API_BASE_URL;
    const url = `${baseUrl}product/`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error loading products:", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <MainViewStyles>
      {isLoading ? (
        <SpinnersText text="Loading..." />
      ) : (
        <>
          <SearchItem
            products={products}
            setFilteredProducts={setFilteredProducts}
          />

          <ItemList products={filteredProducts} />
        </>
      )}
    </MainViewStyles>
  );
};

export default MainView;
