// @ts-nocheck
import { ItemDescriptionStyles } from "./ItemDescriptionStyles";

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
                  <li className="list-group-item">
                    Batería: {product.battery}
                  </li>
                )}
                {product.cameras && (
                  <li className="list-group-item">
                    Cámaras: {product.cameras}
                  </li>
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
            </div>

            <div className="card-actions">
              <div className="container-actions">
                <button>Delete</button>
                <button>Delete</button>
                <button>Delete</button>
              </div>
              <div className="container-actions">
                <button>Delete</button>
                <button>Delete</button>
              </div>
              <div className="container-actions">
                <button>Delete</button>
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