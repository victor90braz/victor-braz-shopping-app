// @ts-nocheck
// @ts-nocheck
import { h } from "preact";
import { LocationProvider, Router, Route } from "preact-iso";
import { Header } from "./components/Header/Header.jsx";
import { NotFound } from "./pages/_404.jsx";
<<<<<<< HEAD
import "./style.css";
import MainView from "./pages/MainView/MainView";
import DetailsView from "./pages/DetailsView/DetailsView";
=======
import MainView from "./pages/MainView/MainView";
>>>>>>> 34766f9396cc6e99e8bb1cbb7cd8038c21277e2c
import ActionsCartPage from "./pages/ActionsCartPage/ActionsCartPage.jsx";
import DetailsView from "./pages/DetailsView/DetailsView.jsx";

export const App = () => {
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
