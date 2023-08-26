// @ts-nocheck
import { h } from "preact";
import { FavoritesItemsStyles } from "./FavoritesItemsStyles";
import FavoriteItem from "../../components/FavoriteItem/FavoriteItem";

const FavoritesItems = ({ favoritesItems }) => {
  return (
    <FavoritesItemsStyles>
      <ul className="favorites-list">
        {favoritesItems.map((item, index) => (
          <FavoriteItem key={index} item={item} />
        ))}
      </ul>
    </FavoritesItemsStyles>
  );
};

export default FavoritesItems;
