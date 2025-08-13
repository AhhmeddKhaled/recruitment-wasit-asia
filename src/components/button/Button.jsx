import React from "react";
import style from "./Button.module.css";
import { Link } from "react-router-dom";


export default function Button({to,children}) {
  return (
    <Link className={style.button} to={to}>
        { children }
    </Link>
  );
}


export function ButtonFill({to,children}) {
  return (
    <Link className={` ${style.button} ${style.fill} `} to={to}>
        { children }
    </Link>
  );
}


