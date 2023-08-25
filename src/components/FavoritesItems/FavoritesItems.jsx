// FavoritesItems.jsx
import { h } from "preact";

const FavoritesItems = ({ favoritesItems }) => {
  return (
    <div className="showFavoritesItems">
      <h1>Favorites Items</h1>
      <ul>
        {favoritesItems.map((item, index) => (
          <li key={index}>
            {item.selectedStorage} - {item.selectedColor} - {item.brand} (ID:{" "}
            {item.id})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoritesItems;
