// @ts-nocheck
// DetailsView.jsx
import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import { useDispatch } from "react-redux";
import { DetailsViewStyles } from "./DetailsViewStyles";
import ItemDescription from "../../components/ItemDescription/ItemDescription";
import { thunkLoadSingleProduct } from "../../redux/thunks/thunksProducts";

const DetailsView = ({ id }) => {
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [productLoaded, setProductLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const productData = await dispatch(thunkLoadSingleProduct(id));
        setProduct(productData);
        setProductLoaded(true);
      } catch (error) {
        console.error("Error loading product:", error);
      }
    })();
  }, [id, dispatch]);

  return (
    <DetailsViewStyles>
      <div className="header">
        <h2>Details View</h2>
      </div>
      {productLoaded && <ItemDescription product={product} />}
    </DetailsViewStyles>
  );
};

export default DetailsView;
