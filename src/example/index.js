import React from "react";
import styles from "./styles.css";

/**
 * @function ExampleComponent Component to test the library
 * @param {object} props Component props
 * @param {string} props.text A text to show
 * @example <ExampleComponent text="my text" />
 */
export function ExampleComponent({ text }) {
  return <div className={styles.example}>Example Component: {text}</div>;
}
