// @ts-nocheck
import { useEffect, useState } from "preact/hooks";
import ItemList from "../../components/ItemList/ItemList";
import SearchItem from "../../components/SearchItem/SearchItem";
import { MainViewStyles } from "./MainViewStyles";

const MainView = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const url = `https://itx-frontend-test.onrender.com/api/product/`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <MainViewStyles>
      <SearchItem
        products={products}
        setFilteredProducts={setFilteredProducts}
      />

      {isLoading ? (
        <div class="spinner-border text-primary" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      ) : (
        <ItemList products={filteredProducts} />
      )}
    </MainViewStyles>
  );
};

export default MainView;
