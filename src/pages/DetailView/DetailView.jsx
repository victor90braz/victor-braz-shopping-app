// @ts-nocheck

import { useEffect, useState } from "preact/hooks";
import { DetailViewStyles } from "./DetailViewStyles";
import ItemDescription from "../../components/ItemDescription/ItemDescription";

const DetailView = () => {
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
    <DetailViewStyles>
      <h2>Detail View</h2>
      {isLoading ? (
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <ItemDescription product={product} />
      )}
    </DetailViewStyles>
  );
};

export default DetailView;
