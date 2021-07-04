import React from "react";
import styles from "./button.module.css";

const Button = ({ children, onClick, ...props }) => {
  return (
    <button type="button" onClick={onClick} className={styles.btn} {...props}>
      {children}
    </button>
  );
};

export default Button;
