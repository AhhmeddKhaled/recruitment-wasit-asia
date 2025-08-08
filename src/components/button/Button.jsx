import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";


export default function Button({to,children}) {
  return (
    <Link className="button" to={to}>
        { children }
    </Link>
  );
}
