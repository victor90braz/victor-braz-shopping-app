// @ts-nocheck
import { ActionsCartStyles } from "./ActionsCartStyles";
import CardActions from "../CardActions/CardActions";
import { ItemImage } from "../ItemImage/ItemImage";

const ActionsCart = ({ product }) => {
  return (
    <ActionsCartStyles>
      {product && Object.keys(product).length > 0 ? (
        <div className="card">
          <div className="container-body">
            <h2 className="product-brand">{product.brand}</h2>
            <div className="image-container">
              <ItemImage
                src={product.imgUrl}
                alt={product.name}
                className="card-img-top"
              />
            </div>
            <CardActions product={product} />
          </div>
        </div>
      ) : (
        <div>No product data available.</div>
      )}
    </ActionsCartStyles>
  );
};

export default ActionsCart;
