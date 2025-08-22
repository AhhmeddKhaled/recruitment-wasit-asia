import React from "react";
import styles from "./Button.module.css";
import { Link } from "react-router-dom";

export default function Button({
  children,
  variant = "contained", 
  color = "primary",      
  size = "md",
  disabled = false,
  startIcon,
  endIcon,
  fullWidth = false,
  type,
  onClick,
}) {
  const classNames = [
    styles.btn,
    styles[`btn-${variant}`],
    styles[`btn-${color}`],
    styles[`btn-${size}`],
    fullWidth ? styles["btn-full"] : "",
  ].join(" ");

  return (
    <button
      className={classNames}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {startIcon && <span className={styles.icon}>{startIcon}</span>}
      {children}
      {endIcon && <span className={styles.icon}>{endIcon}</span>}
    </button>
  );
}
