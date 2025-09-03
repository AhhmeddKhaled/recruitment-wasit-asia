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
  anchor = false
}) {
  const classNames = [
    styles.btn,
    styles[`btn-${variant}`],
    styles[`btn-${color}`],
    styles[`btn-${size}`],
    fullWidth ? styles["btn-full"] : "",
  ].join(" ");

  return (
    <>

      {
        anchor ? <a className={classNames} disabled={disabled} onClick={onClick} href={link}>
          {startIcon && <span className={styles.icon}>{startIcon}</span>}
          {children}
          {endIcon && <span className={styles.icon}>{endIcon}</span>}
        </a >
          :
          <Link
            className={classNames}
            disabled={disabled}
            onClick={onClick}
            to={`/${link}`}
          >
            {startIcon && <span className={styles.icon}>{startIcon}</span>}
            {children}
            {endIcon && <span className={styles.icon}>{endIcon}</span>}
          </Link>
      }
    </>
  );
}
