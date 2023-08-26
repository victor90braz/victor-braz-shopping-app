// @ts-nocheck
import { DetailsViewStyles } from "./DetailsViewStyles";
import ItemDescription from "../../components/ItemDescription/ItemDescription";

const DetailsView = () => {
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
