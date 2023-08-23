// @ts-nocheck
import ItemList from "../../components/ItemList/ItemList";
import SearchItem from "../../components/SearchItem/SearchItem";
import { MainViewStyles } from "./MainViewStyles";
import { useEffect, useState } from "preact/hooks";

const MainView = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const url = `https://itx-frontend-test.onrender.com/api/product/`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <MainViewStyles>
      <SearchItem setSearchQuery={setSearchQuery} />
      <ItemList products={products} searchQuery={searchQuery} />
    </MainViewStyles>
  );
};

export default MainView;
