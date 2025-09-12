import React from "react";
import style from './DashboardHeader.module.css';
import Button from "../../../frontend/src/components/button/Button";
import { BiPlus } from "react-icons/bi";

export default function Header({heading, button, onclick }) {
    
    return (
        <header className={style.dashboardHeader}>
          <h2>
            {heading}
          </h2>
          <Button variant="contained" size="lg" endIcon={<BiPlus size={30}/>} onClick={onclick}>
            {button}
          </Button>
        </header>
    );
}