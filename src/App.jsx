// @ts-nocheck
import { h } from "preact";
import { LocationProvider, Router, Route } from "preact-iso";
import { Header } from "./components/Header/Header.jsx";
import { NotFound } from "./pages/_404.jsx";
import MainView from "./pages/MainView/MainView";
import ActionsCartPage from "./pages/ActionsCartPage/ActionsCartPage.jsx";
import DetailsView from "./pages/DetailsView/DetailsView.jsx";
import { thunkLoadProducts } from "./redux/thunks/thunksProducts.jsx";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(thunkLoadProducts());
  }, [dispatch]);

  return (
    <LocationProvider>
      <Header />
      <main>
        <Router>
          <Route path="/" component={MainView} />
          <Route path="/details/:id" component={DetailsView} />
          <Route path="/cart/:id" component={ActionsCartPage} />
          <Route default component={NotFound} />
        </Router>
      </main>
    </LocationProvider>
  );
};
