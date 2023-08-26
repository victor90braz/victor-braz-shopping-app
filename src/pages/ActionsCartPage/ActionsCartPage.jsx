// @ts-nocheck
import ActionsCart from "../../components/ActionsCart/ActionsCart";
import { ActionsCartPageStyles } from "./ActionsCartPageStyles";

const ActionsCartPage = () => {
  return (
    <ActionsCartPageStyles>
      {isLoading ? (
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <>
          <ActionsCart product={product} />
        </>
      )}
    </ActionsCartPageStyles>
  );
};

export default ActionsCartPage;
