import { LocationProvider, Router, Route } from "preact-iso";

import { Header } from "./components/Header/Header.jsx";
import { NotFound } from "./pages/_404.jsx";
import "./style.css";
import MainView from "./pages/MainView/MainView.jsx";

export const App = () => {
  return (
    <LocationProvider>
      <Header />

      <main>
        <Router>
          <Route path="/" component={MainView} />
          <Route default component={NotFound} />
        </Router>
      </main>
    </LocationProvider>
  );
};
