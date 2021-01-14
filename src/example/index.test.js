import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { ExampleComponent } from "../../dist/example/index";

describe("ExampleComponent has to contain my text", () => {
  render(<ExampleComponent text="Create ExampleComponent" />);

  it("is truthy", () => {
    expect(ExampleComponent).toBeTruthy();
  });

  const textElement = screen.getByText(
    /Example Component: Create ExampleComponent/i
  );
  expect(textElement).toBeInTheDocument();
});
