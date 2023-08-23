// @ts-nocheck

import { ItemStyle } from "./ItemStyles";

const Item = ({ product }) => {
  return (
    <ItemStyle>
      <div className="card">
        <div className="image-container">
          <img
            src={product.imgUrl}
            alt={product.name}
            className="card-img-top"
          />
        </div>

        <div className="card-body">
          <h5 className="card-title">{product.brand}</h5>
          <div className="card-text">
            <p>Model: {product.model}</p>
            <p>Price: {product.price}€</p>
          </div>
          <a href="#" className="btn btn-primary">
            Detail
          </a>
        </div>
      </div>
    </ItemStyle>
  );
};

export default Item;
