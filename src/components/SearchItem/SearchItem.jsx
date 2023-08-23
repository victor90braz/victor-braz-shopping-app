// @ts-nocheck
import { SearchItemStyle } from "./SearchItemStyles";

const SearchItem = ({ products, setFilteredProducts }) => {
  const handleSearchChange = (e) => {
    const searchQuery = e.target.value.toLowerCase();
    const filteredProducts = products.filter(
      (product) =>
        product.brand.toLowerCase().includes(searchQuery) ||
        product.model.toLowerCase().includes(searchQuery)
    );
    setFilteredProducts(filteredProducts);
  };

  return (
    <SearchItemStyle>
      <h2>View Items</h2>

      <div className="form-inline">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={handleSearchChange}
        />
      </div>
    </SearchItemStyle>
  );
};

export default SearchItem;
