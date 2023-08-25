// @ts-nocheck
import { CardActionsStyles } from "./CardActionStyles";
import { useState } from "preact/hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const CardActions = () => {
  const [selectedStorage, setSelectedStorage] = useState("defaultStorage");
  const [selectedColor, setSelectedColor] = useState("defaultColor");
  const [cartItemCount, setCartItemCount] = useState(0);

  const handleAddToCart = () => {
    const responseFromAPI = { cartItemCount: 5 };
    setCartItemCount(responseFromAPI.cartItemCount);
  };

  return (
    <CardActionsStyles>
      <div className="card-actions">
        <div className="container-actions">
          <select
            value={selectedStorage}
            onChange={(e) => setSelectedStorage(e.target.value)}
          >
            <option value="defaultStorage">Select Storage</option>
            <option value="storageOption1">16GB Storage</option>
            <option value="storageOption2">32GB Storage</option>
            <option value="storageOption3">64GB Storage</option>
          </select>
        </div>
        <div className="container-actions">
          <select
            value={selectedColor}
            onChange={(e) => setSelectedColor(e.target.value)}
          >
            <option value="defaultColor">Select Color</option>
            <option value="colorOption1">Red</option>
            <option value="colorOption2">Blue</option>
            <option value="colorOption3">Green</option>
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
