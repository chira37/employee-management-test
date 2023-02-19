import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "./index";

describe("Button", () => {
  it("render", () => {
    render(<Button>Test button</Button>);
    const buttonElement = screen.getByText("Test button");
    expect(buttonElement).toBeInTheDocument;
  });
});
