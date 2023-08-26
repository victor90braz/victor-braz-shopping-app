// @ts-nocheck
import { DetailsViewStyles } from "./DetailsViewStyles";
import ItemDescription from "../../components/ItemDescription/ItemDescription";
import { useFetchProduct } from "../../hooks/useFetchProduct";

const DetailsView = ({ id }) => {
  const { data: product, isLoading } = useFetchProduct(id, false);

  return (
    <DetailsViewStyles>
      {isLoading ? (
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <>
          <div className="header">
            <h2>Details View</h2>
          </div>
          <ItemDescription product={product} />
        </>
      )}
    </DetailsViewStyles>
  );
};

export default DetailsView;
