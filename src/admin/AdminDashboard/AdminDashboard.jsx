import React, { useContext, useEffect, useRef, useState } from "react";
import "../../assets/styles/global.css";


import style from './AdminDashboard.module.css';
import DashboardAside from "../layout/aside/DashboardAside";
import DashboardHeader from "../layout/header/DashboardHeader";
import { Outlet } from "react-router-dom";

export default function AdminDashboard() {

  return (
    <main className={style.dashboard}>
      <DashboardAside/>

      <div className={style.grid}>
      <DashboardHeader/>
      <section className={style.content}>
        <Outlet />
      </section>
      </div>
    </main>
  );
}
