import React from "react";
import useTheme from "../../hooks/useTheme";
import styles from "./Button.module.css";

const Button = (props) => {
  const { children, disabled = false } = props;
  const { theme } = useTheme();

  return (
    <button
      {...props}
      className={`${styles.button} ${theme}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
