import { render, screen } from "@testing-library/preact";
import { Home } from "./index.jsx";

test("renders the Home component", () => {
  render(<Home />);
  const headingElement = screen.getByText(/Shopping App/i);
  expect(headingElement).toBeTruthy();
});
