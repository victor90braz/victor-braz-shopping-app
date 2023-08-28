// @ts-nocheck
import { h } from "preact";
import { FavoriteItemStyles } from "./FavoriteItemStyle";

const FavoriteItem = ({ item }) => {
  return (
    <FavoriteItemStyles>
      <li className="favorites-item">
        <div className="favorites-details">
          <span className="favorites-id">{item.id}</span>
          <span className="favorites-color">{item.colorCode}</span>
          <span className="favorites-storage">{item.storageCode}</span>
        </div>
      </li>
    </FavoriteItemStyles>
  );
};

export default FavoriteItem;
