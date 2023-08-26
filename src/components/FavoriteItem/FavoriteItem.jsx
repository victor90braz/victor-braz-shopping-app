// @ts-nocheck
import { h } from "preact";

const FavoriteItem = ({ item }) => {
  return (
    <li className="favorites-item">
      <div className="favorites-details">
        <span className="favorites-id">{item.id}</span>
        <span className="favorites-color">{item.selectedColor}</span>
        <span className="favorites-storage">{item.selectedStorage}</span>
      </div>
    </li>
  );
};

export default FavoriteItem;
