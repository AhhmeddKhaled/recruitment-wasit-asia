import React from 'react'
import DashboardAside from './aside/DashboardAside'
import style from './Layout.module.css';

function Layout({children}) {
  return (
    <div className={style.layout}>
      <DashboardAside />
      <main>
      {children}
      </main>
    </div>
  )
}

export default Layout
