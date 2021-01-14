import React from "react";
// import styles from "./styles.css";
import styled from "styled-components";

/**
 * Component to test the library
 * @param {string} text A text to show
 * @example <ExampleComponent text="my text" />
 */
export function ExampleComponent({ text }) {
  // return <div className={styles.example}>Example Component: {text}</div>;
  return <StyledDiv>Example Component: {text}</StyledDiv>;
}

const StyledDiv = styled.div`
  margin: 2em;
  padding: 0.5em;
  border: 2px solid #000;
  font-size: 2em;
  text-align: center;
`;
