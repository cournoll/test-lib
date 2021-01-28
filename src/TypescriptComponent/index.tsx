import React from 'react';
import { StyledDiv } from './index.styles';

  /** Interface to describe TypescriptComponent props */
export interface TypescriptComponentProps {
  /** A text to show */
  text: string;
  /** Change the border to red */
  highlight?: boolean;
};

/**
 * Component to test the library
 */
export function TypescriptComponent({
  text,
  highlight,
}: TypescriptComponentProps) {
  return (
    <StyledDiv highlight={highlight}>
      Typescript Component text: {text}
    </StyledDiv>
  );
}
