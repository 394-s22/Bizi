import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders search button", () => {
  render(<App />);
  const button = screen.getByText(/Let's Go/i);
  expect(button).toBeInTheDocument();
});
