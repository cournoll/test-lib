import React from "react";
import styles from "./styles.css";

/**
 * Component to test the library
 * @param {string} text A text to show
 * @example <ExampleComponent text="my text" />
 */
export function ExampleComponent({ text }) {
  return <div className={styles.example}>Example Component: {text}</div>;
}
