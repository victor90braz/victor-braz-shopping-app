import { cardBodyStyle, cardStyle } from "./ItemStyles";

const Item = () => {
  return (
    <div class="card center-text" style={cardStyle}>
      <img
        src="/images/Apple-iPhone-12.png"
        alt="google"
        class="card-img-top"
      />
      <div class="card-body " style={cardBodyStyle}>
        <h5 class="card-title">Brand</h5>
        <p class="card-text">
          Model: model
          <br />
          Price: price
        </p>
        <a href="#" class="btn btn-primary">
          Detail
        </a>
      </div>
    </div>
  );
};

export default Item;
