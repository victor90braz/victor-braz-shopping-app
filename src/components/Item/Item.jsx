import { h } from "preact";
import { containerItem, columnStyle, imageItem } from "./ItemStyles";

const Item = () => {
  return (
    <div style={containerItem}>
      <div style={columnStyle}>
        <img src={imageItem.url} alt={imageItem.alt} style={imageItem} />
      </div>

      <div style={columnStyle}>
        <h2>Brand</h2>
        <p>Model: model</p>
        <p>Price: price</p>
      </div>
    </div>
  );
};

export default Item;
