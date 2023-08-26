// @ts-nocheck
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MainViewStyles } from "./MainViewStyles";
import SearchItem from "../../components/SearchItem/SearchItem";
import ItemList from "../../components/ItemList/ItemList";
import { thunkLoadProducts } from "../../redux/thunks/thunksProducts";

const MainView = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(thunkLoadProducts());
  }, [dispatch]);

  const products = useSelector((state) => state.products);
  return (
    <MainViewStyles>
      <SearchItem products={products} />
      {products.length === 0 ? (
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <div>
          {products.map((product) => (
            <div key={product.id}>
              <a href={`/details/${product.id}`}>
                <p>{product.name}</p>
              </a>
            </div>
          ))}
          <ItemList products={products} />
        </div>
      )}
    </MainViewStyles>
  );
};

export default MainView;
