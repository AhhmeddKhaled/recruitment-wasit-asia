import React from "react";
import style from './DashboardHeader.module.css';
import '../../../assets/styles/global.css';
import { FiMenu, FiX } from "react-icons/fi";

export default function DashboardHeader({openMenu, setOpenMenu}) {
    
    return (
        <header className={style.header}>
                <div className={style.menu}>
                  <input type="checkbox" />
                  <label>
                    {openMenu ? <FiX className={style.icon}
                      onClick={() => setOpenMenu(!openMenu)} /> :
                      <FiMenu
                      className={style.icon}
                      onClick={() => setOpenMenu(!openMenu)}
                      />
                      
                    }
                  </label>
                </div>
              </header>
    );
}