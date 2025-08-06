import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";


export default function Button({children}) {
  return (
    <Link className="button" to='/'>
        { children }
    </Link>
  );
}
