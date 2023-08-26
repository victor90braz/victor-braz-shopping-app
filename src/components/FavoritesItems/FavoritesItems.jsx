// @ts-nocheck
import { h } from "preact";
import { FavoritesItemsStyles } from "./FavoritesItemsStyles";

const FavoritesItems = ({ favoritesItems }) => {
  return (
    <FavoritesItemsStyles>
      <ul className="favorites-list">
        {favoritesItems.map((item, index) => (
          <li key={index} className="favorites-item">
            <div className="favorites-details">
              <span className="favorites-brand">{item.brand}</span>
              <span className="favorites-id">(ID: {item.id})</span>
              <span className="favorites-storage">{item.selectedStorage}</span>
              <span className="favorites-color">{item.selectedColor}</span>
            </div>
          </li>
        ))}
      </ul>
    </FavoritesItemsStyles>
  );
};

export default FavoritesItems;
