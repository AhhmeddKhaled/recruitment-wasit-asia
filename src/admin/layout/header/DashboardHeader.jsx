import React from "react";
import style from './DashboardHeader.module.css';
import '../../../assets/styles/global.css';
import { FiMenu, FiX } from "react-icons/fi";

export default function DashboardHeader() {
    
    return (
        <header className={style.dashboardHeader}>
          <h2>
            لوحة التحكم
          </h2>
        </header>
    );
}