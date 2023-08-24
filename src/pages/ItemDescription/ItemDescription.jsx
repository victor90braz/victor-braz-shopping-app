// @ts-nocheck
import { useEffect, useState } from "preact/hooks";
import { ItemDescriptionStyles } from "./ItemDescriptionStyles";
import { ItemImage } from "../../components/ItemImage/ItemImage";

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
      <div class="card" style="width: 52rem">
        <img
          src={product.imgUrl}
          alt={product.name}
          className="full-width-image"
        />
        <div class="card-body">
          <h5 class="card-title">{product.brand}</h5>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Marca: {product.brand}</li>
            <li class="list-group-item">Modelo: {product.model}</li>
            <li class="list-group-item">Precio: {product.price}€</li>
            <li class="list-group-item">CPU: {product.cpu}</li>
            <li class="list-group-item">RAM: {product.ram}</li>
            <li class="list-group-item">Sistema Operativo: {product.os}</li>
            <li class="list-group-item">
              Resolución de pantalla: {product.screenResolution}
            </li>
            <li class="list-group-item">Batería: {product.battery}</li>
            <li class="list-group-item">Cámaras: {product.cameras}</li>
            <li class="list-group-item">Dimensiones: {product.dimensions}</li>
            <li class="list-group-item">Peso: {product.weight}</li>
          </ul>
          <div class="card-actions">
            <a href="#" class="card-link">
              Action
            </a>
            <a href="#" class="card-link">
              Action
            </a>
          </div>
        </div>
      </div>
    </ItemDescriptionStyles>
  );
};

export default ItemDescription;
