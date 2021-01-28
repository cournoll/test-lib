import React from 'react';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { TypescriptComponent } from '.';

describe('ExampleComponent has to contain my text', () => {
  render(<TypescriptComponent text="Create ExampleComponent" />);

  it('is truthy', () => {
    expect(TypescriptComponent).toBeTruthy();
  });

  const textElement = screen.getByText(
    /Typescript Component: Create ExampleComponent/i
  );
  expect(textElement).toBeInTheDocument();
});
