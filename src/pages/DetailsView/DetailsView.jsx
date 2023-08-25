// @ts-nocheck

import { useEffect, useState } from "preact/hooks";
import { DetailsViewStyles } from "./DetailsViewStyles";
import ItemDescription from "../../components/ItemDescription/ItemDescription";

const DetailsView = () => {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const id = "ZmGrkLRPXOTpxsU4jjAcv";
    const url = `https://itx-frontend-test.onrender.com/api/product/${id}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <DetailsViewStyles>
      {isLoading ? (
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <>
          <h2>Details View</h2>
          <ItemDescription product={product} />
        </>
      )}
    </DetailsViewStyles>
  );
};

export default DetailsView;
