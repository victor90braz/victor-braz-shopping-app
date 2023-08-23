// @ts-nocheck
import { useEffect, useState } from "preact/hooks";
import { ItemStyle } from "./ItemStyles";

const Item = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const id = "ZmGrkLRPXOTpxsU4jjAcv";
    const url = `https://itx-frontend-test.onrender.com/api/product/${id}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProduct(data);
      });
  }, []);

  return (
    <ItemStyle>
      <div className="card">
        <img src={product.imgUrl} alt={product.name} className="card-img-top" />

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
