// @ts-nocheck
import { DetailsViewStyles } from "./DetailsViewStyles";
import ItemDescription from "../../components/ItemDescription/ItemDescription";
import { useFetchProduct } from "../../hooks/useFetchProduct";
import { useAppSelector } from "../../hooks/store";

const DetailsView = ({ id }) => {
  const { data: product, isLoading } = useFetchProduct(id, false);

  const products = useAppSelector((state) => state.products);
  console.log(products);

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
