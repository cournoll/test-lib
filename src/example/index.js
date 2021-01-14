/**
 * Example module.
 * @module web-cloud-frontend-commons/example
 */
import React from "react";
import styles from "./styles.css";

/**
 * @function ExampleComponent React component to test the library.
 * @param {string} text The text to show.
 * @example <ExampleComponent text="my text" />
 */
export function ExampleComponent({ text }) {
  return <div className={styles.example}>Example Component: {text}</div>;
}
