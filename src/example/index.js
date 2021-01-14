import React from "react";
import styles from "./styles.css";

/**
 * @function ExampleComponent React component to test the library.
 * @example <ExampleComponent text="my text" />
 * @param {string} text The text to show.
 */
export function ExampleComponent({ text }) {
  return <div className={styles.example}>Example Component: {text}</div>;
}
