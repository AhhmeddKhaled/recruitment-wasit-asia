import React, { useContext, useEffect, useRef, useState } from "react";


import style from './adminDashboard.module.css';
import DashboardAside from "../layout/aside/DashboardAside";
import { Outlet } from "react-router-dom";

export default function AdminDashboard() {

  return (
    <main className={style.dashboard}>
      <DashboardAside />
      <div className={style.grid}>
        <section className={style.content}>
          <Outlet />
        </section>
      </div>
    </main>
  );
}
