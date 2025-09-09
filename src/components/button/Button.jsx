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
  onClick,
  link,
  anchor = false,
  type = "button",
  rounde
}) {
  const classNames = [
    styles.btn,
    styles[`btn-${variant}`],
    styles[`btn-${color}`],
    styles[`btn-${size}`],
    fullWidth && styles["btn-full"],
    disabled && styles["btn-disabled"],
    rounde && styles["btn-rounde"],
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      {anchor ? (
        <a
          className={classNames}
          onClick={onClick}
          href={link}
          aria-disabled={disabled}
        >
          {startIcon && <span className={styles.icon}>{startIcon}</span>}
          {children}
          {endIcon && <span className={styles.icon}>{endIcon}</span>}
        </a>
      ) : link ? (
        <Link
          className={classNames}
          onClick={onClick}
          to={`/${link}`}
          aria-disabled={disabled}
        >
          {startIcon && <span className={styles.icon}>{startIcon}</span>}
          {children}
          {endIcon && <span className={styles.icon}>{endIcon}</span>}
        </Link>
      ) : (
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
      )}
    </>
  );
}
