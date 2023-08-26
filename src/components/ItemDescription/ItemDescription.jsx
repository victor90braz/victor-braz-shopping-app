// @ts-nocheck
import { h } from "preact";
import { ItemDescriptionStyles } from "./ItemDescriptionStyles";
import CardActions from "../CardActions/CardActions";

const ItemDescription = ({ product }) => {
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
                  <li className="list-group-item">
                    <span>Brand: </span>
                    {product.brand}
                  </li>
                )}
                {product.model && (
                  <li className="list-group-item">
                    <span>Model: </span>
                    {product.model}
                  </li>
                )}
                {product.price && (
                  <li className="list-group-item">
                    <span>Price: </span>
                    {product.price}€
                  </li>
                )}
                {product.cpu && (
                  <li className="list-group-item">
                    <span>CPU: </span>
                    {product.cpu}
                  </li>
                )}
                {product.ram && (
                  <li className="list-group-item">
                    <span>RAM: </span>
                    {product.ram}
                  </li>
                )}
                {product.os && (
                  <li className="list-group-item">
                    <span>Operating System: </span>
                    {product.os}
                  </li>
                )}
                {product.screenResolution && (
                  <li className="list-group-item">
                    <span>Screen Resolution: </span>
                    {product.screenResolution}
                  </li>
                )}
                {product.battery && (
                  <li className="list-group-item">
                    <span>Battery: </span>
                    {product.battery}
                  </li>
                )}
                {product.cameras && (
                  <li className="list-group-item">
                    <span>Cameras: </span>
                    {product.cameras}
                  </li>
                )}
                {product.dimensions && (
                  <li className="list-group-item">
                    <span>Dimensions: </span>
                    {product.dimensions}
                  </li>
                )}
                {product.weight && (
                  <li className="list-group-item">
                    <span>Weight: </span>
                    {product.weight}
                  </li>
                )}
              </ul>
            </div>

            <CardActions product={product} />
          </div>
        </div>
      ) : (
        <div>No product data available.</div>
      )}
    </ItemDescriptionStyles>
  );
};

export default ItemDescription;
