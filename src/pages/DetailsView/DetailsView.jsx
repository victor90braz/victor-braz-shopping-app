// @ts-nocheck
import { useEffect, useState } from "preact/hooks";
import { DetailsViewStyles } from "./DetailsViewStyles";
import ItemDescription from "../../components/ItemDescription/ItemDescription";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const DetailsView = ({ id }) => {
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

  const handleBackPreviousPage = () => {
    window.location.href = `/`;
  };

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
          <button className="btn btn-primary" onClick={handleBackPreviousPage}>
            <FontAwesomeIcon icon={faArrowLeft} /> Back
          </button>
        </>
      )}
    </DetailsViewStyles>
  );
};

export default DetailsView;
