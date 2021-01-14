import React from "react";
import styles from "./styles.css";

/**
 * Component test the library.
 *
 * @component
 * @example <ExampleComponent text="my text" />
 */
export function ExampleComponent({ text }) {
  return <div className={styles.example}>Example Component: {text}</div>;
}
