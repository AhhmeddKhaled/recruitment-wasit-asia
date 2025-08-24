import React, { useContext, useEffect, useRef, useState } from "react";
import "../../assets/styles/global.css";
import style from './AdminDashboard.module.css';
import DashboardAside from "../layout/aside/DashboardAside";
import DashboardHeader from "../layout/header/DashboardHeader";
import { Outlet } from "react-router-dom";

export default function AdminDashboard() {

  /* aside state */
  const [openMenu, setOpenMenu] = useState(false);


  return (
    <main className={style.dashboard}>
      <DashboardAside openMenu={openMenu} />

      <div className={style.grid}>
      <DashboardHeader openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <section className={style.content}>
        <Outlet />
      </section>
      </div>
    </main>
  );
}
