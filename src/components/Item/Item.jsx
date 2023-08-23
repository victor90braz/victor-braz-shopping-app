// @ts-nocheck
import { ItemStyle } from "./ItemStyles";

const Item = () => {
  return (
    <ItemStyle>
      <div className="card">
        <img
          src="/images/Apple-iPhone-12.png"
          alt="google"
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title">Brand</h5>
          <div className="card-text">
            <p>Model: model</p>
            <p>Price: price</p>
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
