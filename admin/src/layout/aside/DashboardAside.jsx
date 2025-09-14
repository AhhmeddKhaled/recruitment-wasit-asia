// admin/src/components/DashboardAside/DashboardAside.jsx
import React, { useState } from "react";
import style from './DashboardAside.module.css';
import { Link } from "react-router-dom";
import { FaHome, FaPlaneDeparture } from "react-icons/fa";
import { GrTransaction, GrUserWorker } from "react-icons/gr";
import { MdArticle, MdMenu, MdOutlineKeyboardDoubleArrowLeft, MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { RiDashboardFill } from "react-icons/ri";
import { BiSolidContact } from "react-icons/bi";

export default function DashboardAside() {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => { setOpenMenu(!openMenu); };

  return (
    <aside className={openMenu ? style.show : ""}>
      <header>
        <span>
          {openMenu ? (
            <MdOutlineKeyboardDoubleArrowRight 
              className={style.iconRight} 
              size={48} 
              onClick={toggleMenu}
            />
          ) : (
            <MdOutlineKeyboardDoubleArrowLeft 
              className={style.iconLeft} 
              size={48} 
              onClick={toggleMenu}
            />
          )}
        </span>
        <RiDashboardFill className={style.icon} size={48} />
      </header>

      <ul className={style.mainList}>
        {/* ✅ الرئيسية */}
        <li>
          <Link to="/">
            الرئيسية
            <FaHome size={30} />
          </Link>
        </li>

        {/* ✅ جميع العاملات → أصبح /workers */}
        <li>
          <Link to="/workers">
            جميع العاملات
            <GrUserWorker size={30} />
          </Link>
        </li>

        {/* ✅ عاملات الإستقدام → أصبح /recruitment */}
        <li>
          <Link to="/recruitment">
            عاملات الإستقدام
            <FaPlaneDeparture size={30} />
          </Link>
        </li>

        {/* ✅ نقل الكفالة → أصبح /transfer */}
        <li>
          <Link to="/transfer">
            عاملات نقل الكفالة
            <GrTransaction size={30} />
          </Link>
        </li>

        {/* ✅ المقالات → أصبح /articles */}
        <li>
          <Link to="/articles">
            المقالات
            <MdArticle size={30} />
          </Link>
        </li>

        {/* ✅ التواصل → أصبح /contact */}
        <li>
          <Link to="/contact">
            التواصل
            <BiSolidContact size={30} />
          </Link>
        </li>
      </ul>
    </aside>
  );
}