import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";


export default function ButtonFill({children}) {
  return (
    <Link className="button fill" to='/'>
        { children }
    </Link>
  );
}
