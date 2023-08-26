// @ts-nocheck
import { DetailsViewStyles } from "./DetailsViewStyles";
import ItemDescription from "../../components/ItemDescription/ItemDescription";
import { useDispatch, useSelector } from "react-redux";
import { thunkLoadSingleProduct } from "../../redux/thunks/thunksProducts";

const DetailsView = ({ id }) => {
  const dispatch = useDispatch();

  dispatch(thunkLoadSingleProduct(id));

  const products = useSelector((state) => state.products);

  const product = products.find((product) => product.id === id);

  return (
    <DetailsViewStyles>
      <>
        <div className="header">
          <h2>Details View</h2>
        </div>

        <ItemDescription product={product} />
      </>
    </DetailsViewStyles>
  );
};

export default DetailsView;
