import { render, screen } from "@testing-library/preact";
import MainView from "./MainView";

test("renders the Home component", () => {
  render(<MainView />);
  const headingElement = screen.getByText(/LIST VIEW/i);
  expect(headingElement).toBeTruthy();
});
