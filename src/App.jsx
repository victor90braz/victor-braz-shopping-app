import { LocationProvider, Router, Route } from "preact-iso";
import { Header } from "./components/Header/Header.jsx";
import { NotFound } from "./pages/_404.jsx";
import ItemDescription from "./pages/ItemDescription/ItemDescription.jsx";

export const App = () => {
  return (
    <LocationProvider>
      <Header />
      <Router>
        <Route path="/" component={ItemDescription} />
        <Route default component={NotFound} />
      </Router>
    </LocationProvider>
  );
};
