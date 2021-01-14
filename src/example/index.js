import React from "react";
import styles from "./styles.css";

/**
 * Component example for testing the library.
 *
 * @component
 * @param {string} text The text to show.
 */
export function ExampleComponent({ text }) {
  return <div className={styles.example}>Example Component: {text}</div>;
}
