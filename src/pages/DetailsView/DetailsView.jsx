// @ts-nocheck

import { h } from "preact";
import { useEffect } from "preact/hooks";
import { useDispatch, useSelector } from "react-redux";
import { DetailsViewStyles } from "./DetailsViewStyles";
import ItemDescription from "../../components/ItemDescription/ItemDescription";
import { thunkLoadSingleProduct } from "../../redux/thunks/thunksProducts";

const DetailsView = ({ id }) => {
  const dispatch = useDispatch();

  const productFromStore = useSelector((state) =>
    state.products.find((product) => product.id === id)
  );

  useEffect(() => {
    if (!productFromStore) {
      dispatch(thunkLoadSingleProduct(id));
    }
  }, [dispatch, id, productFromStore]);

  return (
    <DetailsViewStyles>
      <div className="header">
        <h2>Details View</h2>
      </div>
      {productFromStore && <ItemDescription product={productFromStore} />}
    </DetailsViewStyles>
  );
};

export default DetailsView;
