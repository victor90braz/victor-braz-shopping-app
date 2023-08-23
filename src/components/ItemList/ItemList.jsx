import Item from "../Item/Item";
import { itemListStyles } from "./ItemListStyles";

const ItemList = () => {
  return (
    <div style={itemListStyles}>
      <Item />
      <Item />
      <Item />
      <Item />
    </div>
  );
};

export default ItemList;
