// @ts-nocheck
import { useState } from "preact/hooks";
import { ItemDescriptionStyles } from "./ItemDescriptionStyles";

const ItemDescription = ({ product }) => {
  const [selectedStorage, setSelectedStorage] = useState("defaultStorage"); // Cambia "defaultStorage" por la opción predeterminada si es diferente
  const [selectedColor, setSelectedColor] = useState("defaultColor"); // Cambia "defaultColor" por la opción predeterminada si es diferente
  const [cartItemCount, setCartItemCount] = useState(0);

  const handleAddToCart = () => {
    // Aquí deberías hacer la llamada al API para agregar el producto a la cesta
    // Usarías selectedStorage y selectedColor para enviar la información necesaria

    // Supongamos que obtienes el número de productos en la cesta como respuesta del API
    const responseFromAPI = { cartItemCount: 5 }; // Ejemplo de respuesta del API

    // Actualizar el contador de productos en la cesta con la respuesta del API
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
                <select
                  value={selectedStorage}
                  onChange={(e) => setSelectedStorage(e.target.value)}
                >
                  <option value="defaultStorage">
                    Selecciona Almacenamiento
                  </option>
                  <option value="storageOption1">
                    Opción de Almacenamiento 1
                  </option>
                  <option value="storageOption2">
                    Opción de Almacenamiento 2
                  </option>
                </select>
              </div>
              <div className="container-actions">
                <select
                  value={selectedColor}
                  onChange={(e) => setSelectedColor(e.target.value)}
                >
                  <option value="defaultColor">Selecciona Color</option>
                  <option value="colorOption1">Opción de Color 1</option>
                  <option value="colorOption2">Opción de Color 2</option>
                </select>
              </div>
              <div className="container-actions">
                <button onClick={handleAddToCart}>Añadir a la Cesta</button>
                <p>Productos en la cesta: {cartItemCount}</p>
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
