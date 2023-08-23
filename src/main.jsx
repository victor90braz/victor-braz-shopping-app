import { render } from "preact";
import { App } from "./App";

const domElement = document.querySelector("#app");

render(<App />, domElement);
