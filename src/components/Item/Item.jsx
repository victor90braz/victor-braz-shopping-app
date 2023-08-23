import { h } from "preact";
import { cardBodyStyle, cardStyle, highlight } from "./ItemStyles";
const Item = () => {
  return (
    <div class="card" style={cardStyle}>
      <img
        src="/images/Apple-iPhone-12.png"
        alt="google"
        class="card-img-top"
      />
      <div class="card-body" style={cardBodyStyle}>
        <h5 class="card-title">Brand</h5>
        <div class="card-text">
          <p style={highlight}>Model: model</p>
          <p style={highlight}>Price: price</p>
        </div>
        <a href="#" class="btn btn-primary">
          Detail
        </a>
      </div>
    </div>
  );
};

export default Item;
