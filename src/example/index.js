import React from "react";
import styles from "./styles.css";

/**
 * Component to test the library
 * @param {object} props Component props
 * @param {string} props.text A text to show
 * @return A simple div with text
 * @example <ExampleComponent text="my text" />
 */
export function ExampleComponent({ text }) {
  return <div className={styles.example}>Example Component: {text}</div>;
}
