// @ts-nocheck
import Item from "../Item/Item";
import { ItemListStyles } from "./ItemListStyles";

const ItemList = ({ products, searchQuery }) => {
  const filteredProducts = products.filter((product) =>
    product.model.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ItemListStyles>
      {filteredProducts.map((product) => (
        <Item product={product} key={product.id} />
      ))}
    </ItemListStyles>
  );
};

export default ItemList;
