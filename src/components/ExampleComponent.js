import React from "react";
import styles from "./ExampleComponent.css";

export default function ExampleComponent({ text }) {
  return <div className={styles.example}>Example Component: {text}</div>;
}
