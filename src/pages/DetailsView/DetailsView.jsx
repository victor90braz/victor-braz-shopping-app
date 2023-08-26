// @ts-nocheck
import { h } from "preact";
import { useSelector } from "react-redux";
import { useRoute } from "preact-iso";

const DetailsView = () => {
  const route = useRoute();
  const id = route.params.id;

  const products = useSelector((state) => state.products);

  const product = products.find((product) => product.id === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
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
              <li className="list-group-item">
                <span>Brand: </span>
                {product.brand}
              </li>
              <li className="list-group-item">
                <span>Model: </span>
                {product.model}
              </li>
              <li className="list-group-item">
                <span>Price: </span>
                {product.price}€
              </li>
              <li className="list-group-item">
                <span>CPU: </span>
                {product.cpu}
              </li>
              <li className="list-group-item">
                <span>RAM: </span>
                {product.ram}
              </li>
              <li className="list-group-item">
                <span>Operating System: </span>
                {product.os}
              </li>
              <li className="list-group-item">
                <span>Screen Resolution: </span>
                {product.screenResolution}
              </li>
              <li className="list-group-item">
                <span>Battery: </span>
                {product.battery}
              </li>
              <li className="list-group-item">
                <span>Cameras: </span>
                {product.cameras}
              </li>
              <li className="list-group-item">
                <span>Dimensions: </span>
                {product.dimensions}
              </li>
              <li className="list-group-item">
                <span>Weight: </span>
                {product.weight}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsView;
