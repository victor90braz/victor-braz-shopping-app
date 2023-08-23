// @ts-nocheck
import Item from "../Item/Item";
import { ItemListStyles } from "./ItemListStyles";
import { useEffect, useState } from "preact/hooks";

const ItemList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const url = `https://itx-frontend-test.onrender.com/api/product/`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <ItemListStyles>
      {products.map((product) => (
        <Item product={product} key={product.id} />
      ))}
    </ItemListStyles>
  );
};

export default ItemList;
