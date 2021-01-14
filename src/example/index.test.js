import React from "react";
import renderer from "react-test-renderer";
import { ExampleComponent } from ".";

describe("ExampleComponent", () => {
  renderer.create(<ExampleComponent text="Create ExampleComponent" />);
  it("is truthy", () => {
    expect(ExampleComponent).toBeTruthy();
  });
  const textElement = screen.getByText(
    /Example Component: Create ExampleComponent/i
  );
  expect(textElement).toBeInTheDocument();
});
