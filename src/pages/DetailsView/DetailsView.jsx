// @ts-nocheck
import { h } from "preact";
import { useState, useEffect } from "preact/hooks"; // Add useState import
import { useDispatch, useSelector } from "react-redux";
import { DetailsViewStyles } from "./DetailsViewStyles";
import ItemDescription from "../../components/ItemDescription/ItemDescription";
import { thunkLoadSingleProduct } from "../../redux/thunks/thunksProducts";
import SpinnersText from "../../modal/SpinnersText";

const DetailsView = ({ id }) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  const productFromStore = useSelector((state) =>
    state.products.find((product) => product.id === id)
  );

  useEffect(() => {
    if (!productFromStore) {
      setIsLoading(true);
      dispatch(thunkLoadSingleProduct(id))
        .then(() => {
          setIsLoading(false);
        })
        .catch(() => {
          setIsLoading(false);
        });
    }
  }, [dispatch, id, productFromStore]);

  return (
    <DetailsViewStyles>
      {isLoading ? (
        <SpinnersText text="Loading..." />
      ) : (
        <>
          <div className="header">
            <h2>Details View</h2>
          </div>
          {productFromStore && <ItemDescription product={productFromStore} />}
        </>
      )}
    </DetailsViewStyles>
  );
};

export default DetailsView;
