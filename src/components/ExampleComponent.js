import React from "react";
import styles from "./ExampleComponent.css";

/**
 * ExampleComponent is a component use to test the library.
 *
 * @param {string} text
 */
export default function ExampleComponent({ text }) {
  return <div className={styles.example}>Example Component: {text}</div>;
}
