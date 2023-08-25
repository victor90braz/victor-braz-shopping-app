import { LocationProvider, Router, Route } from "preact-iso";
import { Header } from "./components/Header/Header.jsx";
import { NotFound } from "./pages/_404.jsx";
import "./style.css";
import DetailsView from "./pages/DetailsView/DetailsView.jsx";

export const App = () => {
  return (
    <LocationProvider>
      <Header />
      <Router>
        <Route path="/" component={DetailsView} />
        <Route default component={NotFound} />
      </Router>
    </LocationProvider>
  );
};
