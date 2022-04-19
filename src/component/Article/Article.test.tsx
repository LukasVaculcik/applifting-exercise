import React from "react";
import { render, screen } from "@testing-library/react";
import Article from "./Article";

test("renders", () => {
  render(<Article />);
  //   const linkElement = screen.getByText(/learn react/i);
  //   expect(linkElement).toBeInTheDocument();
});
