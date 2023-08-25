import { LocationProvider, Router, Route } from "preact-iso";
import { Header } from "./components/Header/Header.jsx";
import { NotFound } from "./pages/_404.jsx";
import "./style.css";
import DetailView from "./pages/DetailView/DetailView.jsx";

export const App = () => {
  return (
    <LocationProvider>
      <Header />
      <Router>
        <Route path="/" component={DetailView} />
        <Route default component={NotFound} />
      </Router>
    </LocationProvider>
  );
};
