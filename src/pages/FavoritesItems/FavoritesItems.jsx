// @ts-nocheck
import FavoriteItem from "../../components/FavoriteItem/FavoriteItem";
import { FavoritesItemsStyles } from "./FavoritesItemsStyles";

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
