import React, { useState } from "react";
import style from './DashboardAside.module.css';
import { Link } from "react-router-dom";
import { FaChevronDown, FaChevronLeft } from "react-icons/fa";

export default function DashboardAside({ openMenu }) {

    const [OpenDropdown, setOpenDropdown] = useState('');

    const handleDropdownToggle = (menu) => {
        setOpenDropdown((prev) => (prev === menu ? null : menu));
    }

    return (
        <aside className={openMenu ? style.show : ""}>
            <ul className={style.mainList}>
                <li>
                    <Link to="/dashboard/"> الرئيسية </Link>
                </li>
                <li onClick={() => handleDropdownToggle('العاملات')}>
                    العاملات
                     {OpenDropdown === "العاملات" ? (
                                  <FaChevronDown className={style.icon} />
                                ) : (
                                  <FaChevronLeft className={style.icon} />
                                )}
                    {OpenDropdown === 'العاملات' &&
                        <ul>
                            <li>
                                <Link to="/dashboard/جميع_العاملات"> جميع العاملات</Link>
                            </li>
                            <li>
                                <Link to="/dashboard/جميع_العاملات/عاملات_الإستقدام"> عاملات الإستقدام </Link>
                            </li>
                            <li>
                                <Link to="/dashboard/جميع_العاملات/عاملات_نقل_الكفالة"> عاملات نقل الكفالة </Link>
                            </li>
                        </ul>
                    }
                </li>
                <li onClick={() => handleDropdownToggle('المقالات')}>
                    المقالات
                     {OpenDropdown === "المقالات" ? (
              <FaChevronDown className={style.icon} />
            ) : (
              <FaChevronLeft className={style.icon} />
            )}
                    {OpenDropdown === 'المقالات' &&
                        <ul>
                            <li>
                                <Link to="/dashboard/المقالات">  حميع المقالات  </Link>
                            </li>
                            <li>
                                <Link to="/dashboard/إضافة_مقال">  إضافة مقال  </Link>
                            </li>
                            <li>
                                <Link to="/dashboard/حذف_مقال">  حذف مقال  </Link>
                            </li>
                        </ul>
                    }
                </li>
            </ul>
        </aside>
    );
}