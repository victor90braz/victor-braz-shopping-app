// @ts-nocheck
import { h } from "preact";
import { LocationProvider, Router, Route } from "preact-iso";
import { Header } from "./components/Header/Header.jsx";
import { NotFound } from "./pages/_404.jsx";
import MainView from "./pages/MainView/MainView";
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
