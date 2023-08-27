// @ts-nocheck
import { h, render } from "preact";
import { App } from "./App";
import { Provider } from "react-redux";
import store from "./redux/store/store";

const domElement = document.querySelector("#app");

render(
  <Provider store={store}>
    <App />
  </Provider>,
  domElement
);
