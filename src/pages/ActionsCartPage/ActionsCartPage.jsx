// @ts-nocheck
import { useEffect, useState } from "preact/hooks";
import ActionsCart from "../../components/ActionsCart/ActionsCart";
import { ActionsCartPageStyles } from "./ActionsCartPageStyles";

const ActionsCartPage = ({ id }) => {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const url = `https://itx-frontend-test.onrender.com/api/product/${id}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        setIsLoading(false);
      });
  }, [id]);

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
