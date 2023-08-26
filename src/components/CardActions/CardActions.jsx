// @ts-nocheck
import { CardActionsStyles } from "./CardActionStyles";
import { useState } from "preact/hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import FavoritesItems from "../FavoritesItems/FavoritesItems";

const CardActions = ({ product }) => {
  const [selectedStorage, setSelectedStorage] = useState("defaultStorage");
  const [selectedColor, setSelectedColor] = useState("defaultColor");
  const [cartItemCount, setCartItemCount] = useState(0);
  const [favoritesItems, setFavoritesItems] = useState([]);

  const handleAddToCart = () => {
    const newItem = {
      selectedStorage,
      selectedColor,
      id: product.id,
      brand: product.brand,
    };

    setFavoritesItems((prevFavoritesItems) => [...prevFavoritesItems, newItem]);

    const responseFromAPI = { cartItemCount: 0 };
    setCartItemCount(responseFromAPI.cartItemCount);
    setCartItemCount(cartItemCount + 1);
  };

  const renderStorageOptions = () => {
    return (
      <>
        <option value="defaultStorage">Select Storage</option>
        {product.options.storages.map((storageOption) => (
          <option key={storageOption.name} value={storageOption.name}>
            {storageOption.name}
          </option>
        ))}
      </>
    );
  };

  const renderColorOptions = () => {
    return (
      <>
        <option value="defaultColor">Select Color</option>
        {product.options.colors.map((colorOption) => (
          <option key={colorOption.code} value={colorOption.code}>
            {colorOption.name}
          </option>
        ))}
      </>
    );
  };

  const handleBackPreviousPage = () => {
    window.location.href = `/`;
  };

  return (
    <CardActionsStyles>
      <div className="container-card-actions">
        <div className="selected-storage">
          <select
            value={selectedStorage}
            onChange={(e) => {
              setSelectedStorage(e.target.value);
            }}
          >
            {renderStorageOptions()}
          </select>
        </div>

        <div className="selected-color">
          <select
            value={selectedColor}
            onChange={(e) => {
              setSelectedColor(e.target.value);
            }}
          >
            {renderColorOptions()}
          </select>
        </div>

        <div className="cart">
          <button
            className="button-style"
            onClick={() =>
              handleAddToCart(
                selectedStorage,
                selectedColor,
                product.id,
                product.brand
              )
            }
          >
            ADD BAG
          </button>
        </div>
      </div>

      <div className="cart-container">
        <div className="cart-icon">
          <FontAwesomeIcon icon={faShoppingCart} />
        </div>
        <div className="cart-count">{cartItemCount}</div>
      </div>

      <FavoritesItems favoritesItems={favoritesItems} />

      <button className="btn btn-primary" onClick={handleBackPreviousPage}>
        <FontAwesomeIcon icon={faArrowLeft} /> Back
      </button>
    </CardActionsStyles>
  );
};

export default CardActions;
