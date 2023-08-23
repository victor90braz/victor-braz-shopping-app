// @ts-nocheck
import Item from "../Item/Item";
import { ItemListStyles } from "./ItemListStyles";

const ItemList = ({ products }) => {
  return (
    <ItemListStyles>
      {products.map((product) => (
        <Item product={product} key={product.id} />
      ))}
    </ItemListStyles>
  );
};

export default ItemList;
