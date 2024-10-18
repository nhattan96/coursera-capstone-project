import App from "./App";
import { render, screen } from "@testing-library/react";

test("Render Hero Section", () => {
  render(<App />);

  const hero = screen.getByTestId("title-hero");
  expect(hero).toBeInTheDocument();
});
