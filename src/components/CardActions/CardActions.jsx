// @ts-nocheck
import { CardActionsStyles } from "./CardActionStyles";
import { useState } from "preact/hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

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

  const handleBackPreviousPage = () => {
    window.location.href = `/`;
  };

  return (
    <CardActionsStyles>
      <div className="container-card-actions">
        <div className="selected-storage">
          <select
            value={selectedStorage}
            onChange={(e) => setSelectedStorage(e.target.value)}
          >
            {renderStorageOptions()}
          </select>
        </div>

        <div className="selected-color">
          <select
            value={selectedColor}
            onChange={(e) => setSelectedColor(e.target.value)}
          >
            {renderColorOptions()}
          </select>
        </div>

        <div className="cart">
          <button className="button-style" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>

      <div className="cart-container">
        <div className="cart-icon">
          <FontAwesomeIcon icon={faShoppingCart} />
        </div>
        <div className="cart-count">{cartItemCount}</div>
      </div>

      <button className="btn btn-primary" onClick={handleBackPreviousPage}>
        <FontAwesomeIcon icon={faArrowLeft} /> Back
      </button>
    </CardActionsStyles>
  );
};

export default CardActions;
