// @ts-nocheck
import { CardActionsStyles } from "./CardActionStyles";
import { useState } from "preact/hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const CardActions = ({ product }) => {
  const [selectedStorage, setSelectedStorage] = useState("defaultStorage");
  const [selectedColor, setSelectedColor] = useState("defaultColor");
  const [cartItemCount, setCartItemCount] = useState(0);

  const handleAddToCart = () => {
    const responseFromAPI = { cartItemCount: 5 };
    setCartItemCount(responseFromAPI.cartItemCount);
  };

  const renderStorageOptions = () => {
    return (
      <>
        <option value="defaultStorage">Select Storage</option>
        {product.options.storages.map((storageOption) => (
          <option key={storageOption.code} value={storageOption.code}>
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

  return (
    <CardActionsStyles>
      <div className="card-actions">
        <div className="container-actions">
          <select
            value={selectedStorage}
            onChange={(e) => setSelectedStorage(e.target.value)}
          >
            {renderStorageOptions()}
          </select>
        </div>
        <div className="container-actions">
          <select
            value={selectedColor}
            onChange={(e) => setSelectedColor(e.target.value)}
          >
            {renderColorOptions()}
          </select>
        </div>
        <div className="container-actions">
          <button className="button-style" onClick={handleAddToCart}>
            Add to Cart
          </button>
          <div className="cart-container">
            <div className="cart-icon">
              <FontAwesomeIcon icon={faShoppingCart} />
            </div>
            <div className="cart-count">{cartItemCount}</div>
          </div>
        </div>
      </div>
    </CardActionsStyles>
  );
};

export default CardActions;
