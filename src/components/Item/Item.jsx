// @ts-nocheck
import { ItemImage } from "../ItemImage/ItemImage";
import { ItemStyle } from "./ItemStyles";

const Item = ({ product }) => {
  const priceContent =
    product.price === 0 ? "Not Available" : `${product.price}€`;

  const handleDetailClick = () => {
    window.location.href = `/details/${product.id}`;
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
          <button className="btn btn-primary" onClick={handleDetailClick}>
            Detail
          </button>
          <button className="btn btn-primary" onClick={handleDetailClick}>
            Actions
          </button>
        </div>
      </div>
    </ItemStyle>
  );
};

export default Item;
