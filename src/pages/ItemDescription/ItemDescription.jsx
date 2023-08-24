// @ts-nocheck
import { useEffect, useState } from "preact/hooks";
import { ItemDescriptionStyles } from "./ItemDescriptionStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const ItemDescription = () => {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const id = "ZmGrkLRPXOTpxsU4jjAcv";
    const url = `https://itx-frontend-test.onrender.com/api/product/${id}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <ItemDescriptionStyles>
      {isLoading ? (
        <div className="loading">
          <FontAwesomeIcon icon={faSpinner} spin />
        </div>
      ) : product && Object.keys(product).length > 0 ? (
        <div className="card" style="width: 52rem">
          <img
            src={product.imgUrl}
            alt={product.name}
            className="full-width-image"
          />
          <div className="card-body">
            <h5 className="card-title">{product.brand}</h5>
            <ul className="list-group list-group-flush">
              {product.brand && (
                <li className="list-group-item">Marca: {product.brand}</li>
              )}
              {product.model && (
                <li className="list-group-item">Modelo: {product.model}</li>
              )}
              {product.price && (
                <li className="list-group-item">Precio: {product.price}€</li>
              )}
              {product.cpu && (
                <li className="list-group-item">CPU: {product.cpu}</li>
              )}
              {product.ram && (
                <li className="list-group-item">RAM: {product.ram}</li>
              )}
              {product.os && (
                <li className="list-group-item">
                  Sistema Operativo: {product.os}
                </li>
              )}
              {product.screenResolution && (
                <li className="list-group-item">
                  Resolución de pantalla: {product.screenResolution}
                </li>
              )}
              {product.battery && (
                <li className="list-group-item">Batería: {product.battery}</li>
              )}
              {product.cameras && (
                <li className="list-group-item">Cámaras: {product.cameras}</li>
              )}
              {product.dimensions && (
                <li className="list-group-item">
                  Dimensiones: {product.dimensions}
                </li>
              )}
              {product.weight && (
                <li className="list-group-item">Peso: {product.weight}</li>
              )}
            </ul>
            <div className="card-actions">
              <a href="#" className="card-link">
                Action
              </a>
              <a href="#" className="card-link">
                Action
              </a>
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
