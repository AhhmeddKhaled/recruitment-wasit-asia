import React, { useState } from "react";
import style from './DashboardAside.module.css';
import { Link } from "react-router-dom";
import { FaChevronDown, FaChevronLeft, FaHome, FaPlaneDeparture } from "react-icons/fa";
import { GrTransaction, GrUserWorker } from "react-icons/gr";
import { MdArticle, MdMenu, MdOutlineKeyboardDoubleArrowLeft, MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import { RiDashboardFill, RiFunctionAddFill } from "react-icons/ri";
import { FiX } from "react-icons/fi";

export default function DashboardAside() {

    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => { setOpenMenu(!openMenu); }

    return (
        <aside className={openMenu ? style.show : ""}>
            <header>
                <span>
                    {openMenu ? <MdOutlineKeyboardDoubleArrowRight className={style.iconRight} size={48} onClick={toggleMenu}/>
                    :<MdOutlineKeyboardDoubleArrowLeft className={style.iconLeft} size={48} onClick={toggleMenu} />}
                </span>
              
                <RiDashboardFill className={style.icon} size={48}/>
            </header>
            <ul className={style.mainList}>
                <li>
                    <Link to="/dashboard/">
                        الرئيسية
                        <FaHome size={30} />
                    </Link>
                </li>

                <li>
                    <Link to="/dashboard/جميع_العاملات">
                        جميع العاملات
                    <GrUserWorker size={30} />
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/عاملات_الإستقدام"> 
                    عاملات الإستقدام
                    <FaPlaneDeparture size={30} />
                     </Link>

                </li>
                <li>
                    <Link to="/dashboard/نقل_خدمات"> 
                    عاملات نقل الكفالة
                    <GrTransaction size={30} />
                     </Link>
                </li>

                <li>
                    <Link to="/dashboard/المقالات">  
                     المقالات
                    <MdArticle size={30} />
                       </Link>

                </li>
                <li>
                    <Link to="/dashboard/إضافة_مقال">  
                    إضافة مقال
                    <RiFunctionAddFill size={30} />
                      </Link>
                </li>
                <li>
                    <Link to="/dashboard/حذف_مقال">  
                    حذف مقال
                    <AiFillDelete size={30} />
                      </Link>

                </li>
            </ul>
        </aside>
    );
}