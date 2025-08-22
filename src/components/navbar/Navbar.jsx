import React, { useState } from "react";
import "../../assets/styles/global.css";
import style from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { FaChevronDown, FaChevronLeft } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import Button from "../button/Button";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdownToggle = (menu) => {
    setOpenDropdown((prev) => (prev === menu ? null : menu));
  };

  return (
    <header className={`${style.navbar} p-t-b-12`}>
      <div className="container flex">
        <div className={style.logo}>
          <img src="/imgs/logo.png" alt="لوجو الموقع" />
        </div>

        <ul
          className={`${style.links} flex-align ${isOpen ? style.open : style.close
            }`}
        >
          <li>
            <Link to="/">الرئيسية</Link>
          </li>
          <li onClick={() => handleDropdownToggle("services")}>
            خدماتنا
            {openDropdown === "services" ? (
              <FaChevronDown className={style.icon} />
            ) : (
              <FaChevronLeft className={style.icon} />
            )}
            {openDropdown === "services" && (
              <ul className={style.dropdown}>
                <li>
                  <Link to="/طلب_إستقدام">طلب استقدام</Link>
                </li>
                <li>
                  <Link to="/نقل_خدمات">طلب نقل خادمين</Link>
                </li>
              </ul>
            )}
          </li>
          <li onClick={() => handleDropdownToggle("journey")}>
            <div className={style.menuItem}>
              رحلة الاستقدام
              {openDropdown === "journey" ? (
                <FaChevronDown className={style.icon} />
              ) : (
                <FaChevronLeft className={style.icon} />
              )}
            </div>
            {openDropdown === "journey" && (
              <ul className={style.dropdown}>
                <li>
                  <Link to="/عن_الإستقدام">عن الاستقدام</Link>
                </li>
                <li>
                  <Link to="/وصول_العمالة">وصول العمالة</Link>
                </li>
                <li>
                  <Link to="/إختيار_العمالة">اختيار العمالة</Link>
                </li>
              </ul>
            )}
          </li>
          <li onClick={() => handleDropdownToggle("policy")}>
            <div className={style.menuItem}>
              عن الاستقدام
              {openDropdown === "policy" ? (
                <FaChevronDown className={style.icon} />
              ) : (
                <FaChevronLeft className={style.icon} />
              )}
            </div>
            {openDropdown === "policy" && (
              <ul className={style.dropdown}>
                <li>
                  <Link to="/سياسات_الإستقدام">سياسات الإستقدام</Link>
                </li>
              </ul>
            )}
          </li>
          <li onClick={() => handleDropdownToggle("support")}>
            الدعم
            {openDropdown === "support" ? (
              <FaChevronDown className={style.icon} />
            ) : (
              <FaChevronLeft className={style.icon} />
            )}
            {openDropdown === "support" && (
              <ul className={style.dropdown}>
                <li>
                  <Link to="/articals">مقالات تهمك</Link>
                </li>
                <li>
                  <Link to="/تواصل_معنا">تواصل معنا</Link>
                </li>
                <li>
                  <Link to="/خدمة_العملاء">خدمة العملاء</Link>
                </li>
              </ul>
            )}
          </li>

          <Button
            variant="contained"
            color="primary"
            size="lg"
          >
            تسجيل الدخول
            <Link to='/login'>
            </Link>

          </Button>
        </ul>

        <span
          className={style.toggle_mobile}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </span>
      </div>
    </header>
  );
}
