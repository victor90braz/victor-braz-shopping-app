// @ts-nocheck
import { useDispatch, useSelector } from "react-redux";
import ActionsCart from "../../components/ActionsCart/ActionsCart";
import { ActionsCartPageStyles } from "./ActionsCartPageStyles";
import { useEffect } from "preact/hooks";
import { thunkLoadSingleProduct } from "../../redux/thunks/thunksProducts";

const ActionsCartPage = ({ id }) => {
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
    <ActionsCartPageStyles>
      <>
        <ActionsCart product={productFromStore} />
      </>
    </ActionsCartPageStyles>
  );
};

export default ActionsCartPage;
