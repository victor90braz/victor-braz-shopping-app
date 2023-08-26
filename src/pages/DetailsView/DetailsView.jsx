// @ts-nocheck
import { DetailsViewStyles } from "./DetailsViewStyles";
import ItemDescription from "../../components/ItemDescription/ItemDescription";

const DetailsView = () => {
  return (
    <DetailsViewStyles>
      <>
        <div className="header">
          <h2>Details View</h2>
        </div>
        <ItemDescription />
      </>
    </DetailsViewStyles>
  );
};

export default DetailsView;
