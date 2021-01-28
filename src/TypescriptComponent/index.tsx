import React from 'react';
import { StyledDiv } from './index.styles';

export interface TypescriptComponentProps {
  text: string;
  highlight?: boolean;
};

/**
 * Component to test the library
 * @param {string} text A text to show
 * @param {boolean} highlight Change the border to red
 * @example <TypescriptComponent text="my text" />
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
