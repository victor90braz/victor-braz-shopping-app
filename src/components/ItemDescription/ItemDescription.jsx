// @ts-nocheck
import { useState } from "preact/hooks";
import { ItemDescriptionStyles } from "./ItemDescriptionStyles";

const ItemDescription = ({ product }) => {
  const [selectedStorage, setSelectedStorage] = useState("defaultStorage");
  const [selectedColor, setSelectedColor] = useState("defaultColor");
  const [cartItemCount, setCartItemCount] = useState(0);

  const handleAddToCart = () => {
    const responseFromAPI = { cartItemCount: 5 };
    setCartItemCount(responseFromAPI.cartItemCount);
  };

  return (
    <ItemDescriptionStyles>
      {product && Object.keys(product).length > 0 ? (
        <div className="card">
          <div className="container-image">
            <img
              src={product.imgUrl}
              alt={product.name}
              className="full-width-image"
            />
          </div>

          <div className="container-body">
            <div className="card-body">
              <ul className="list-group list-group-flush">
                {product.brand && (
                  <li className="list-group-item">Brand: {product.brand}</li>
                )}
                {product.model && (
                  <li className="list-group-item">Model: {product.model}</li>
                )}
                {product.price && (
                  <li className="list-group-item">Price: {product.price}€</li>
                )}
                {product.cpu && (
                  <li className="list-group-item">CPU: {product.cpu}</li>
                )}
                {product.ram && (
                  <li className="list-group-item">RAM: {product.ram}</li>
                )}
                {product.os && (
                  <li className="list-group-item">
                    Operating System: {product.os}
                  </li>
                )}
                {product.screenResolution && (
                  <li className="list-group-item">
                    Screen Resolution: {product.screenResolution}
                  </li>
                )}
                {product.battery && (
                  <li className="list-group-item">
                    Battery: {product.battery}
                  </li>
                )}
                {product.cameras && (
                  <li className="list-group-item">
                    Cameras: {product.cameras}
                  </li>
                )}
                {product.dimensions && (
                  <li className="list-group-item">
                    Dimensions: {product.dimensions}
                  </li>
                )}
                {product.weight && (
                  <li className="list-group-item">Weight: {product.weight}</li>
                )}
              </ul>
            </div>

            <div className="card-actions">
              <div className="container-actions">
                <select
                  value={selectedStorage}
                  onChange={(e) => setSelectedStorage(e.target.value)}
                >
                  <option value="defaultStorage">Select Storage</option>
                  <option value="storageOption1">Storage Option 1</option>
                  <option value="storageOption2">Storage Option 2</option>
                </select>
              </div>
              <div className="container-actions">
                <select
                  value={selectedColor}
                  onChange={(e) => setSelectedColor(e.target.value)}
                >
                  <option value="defaultColor">Select Color</option>
                  <option value="colorOption1">Color Option 1</option>
                  <option value="colorOption2">Color Option 2</option>
                </select>
              </div>
              <div className="container-actions">
                <button onClick={handleAddToCart}>Add to Cart</button>
                <p>Products in Cart: {cartItemCount}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>No product data available.</div>
      )}
    </ItemDescriptionStyles>
  );
};

export default ItemDescription;
