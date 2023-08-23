// @ts-nocheck
import ItemList from "../../components/ItemList/ItemList";
import { SearchItem } from "../../components/SearchItem/SearchItem";
import { MainViewStyles } from "./MainViewStyles";

const MainView = () => {
  return (
    <MainViewStyles>
      <SearchItem />
      <ItemList />
    </MainViewStyles>
  );
};

export default MainView;
