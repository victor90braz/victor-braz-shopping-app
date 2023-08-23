// @ts-nocheck
import { SearchItemStyle } from "./SearchItemStyles";

export function SearchItem() {
  return (
    <SearchItemStyle>
      <h2>View Item</h2>

      <div class="form-inline">
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
      </div>
    </SearchItemStyle>
  );
}
