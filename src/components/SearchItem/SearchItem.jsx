// @ts-nocheck
import { SearchItemStyle } from "./SearchItemStyles";

const SearchItem = ({ setSearchQuery }) => {
  return (
    <SearchItemStyle>
      <h2>View Items</h2>

      <div className="form-inline">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
    </SearchItemStyle>
  );
};

export default SearchItem;
