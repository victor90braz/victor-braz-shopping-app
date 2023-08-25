// @ts-nocheck
import { ItemImage } from "../ItemImage/ItemImage";
import { ItemStyle } from "./ItemStyles";

const Item = ({ product }) => {
  const priceContent =
    product.price === 0 ? "Not Available" : `${product.price}€`;

  const handleDetailClick = () => {
    window.location.href = `/details/${product.id}`;
  };

  const handleActionCart = () => {
    window.location.href = `/cart/${product.id}`;
  };

  return (
    <ItemStyle>
      <div className="card">
        <div className="image-container">
          <ItemImage
            src={product.imgUrl}
            alt={product.name}
            className="card-img-top"
          />
        </div>

        <div className="card-body">
          <h5 className="card-title">{product.brand}</h5>
          <div className="card-text">
            <p>Model: {product.model}</p>
            <p>Price: {priceContent}</p>
          </div>

          <div className="action-container">
            <button className="btn btn-primary" onClick={handleDetailClick}>
              DETAILS
            </button>
            <button className="btn btn-primary" onClick={handleActionCart}>
              ADD BAG
            </button>
          </div>
        </div>
      </div>
    </ItemStyle>
  );
};

export default Item;
