// @ts-nocheck
import ItemList from "../../components/ItemList/ItemList";
import SearchItem from "../../components/SearchItem/SearchItem";
import { useFetchProduct } from "../../hooks/useFetchProduct";
import { MainViewStyles } from "./MainViewStyles";

const MainView = () => {
  const {
    data: products,
    isLoading,
    setData: setFilteredProducts,
  } = useFetchProduct(null, true);

  return (
    <MainViewStyles>
      <SearchItem
        products={products}
        setFilteredProducts={setFilteredProducts}
      />
      {isLoading ? (
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <>
          {products.map((product) => (
            <div key={product.id}>
              <a href={`/details/${product.id}`}>
                <p>{product.name}</p>
              </a>
            </div>
          ))}
          <ItemList products={products} />
        </>
      )}
    </MainViewStyles>
  );
};

export default MainView;
