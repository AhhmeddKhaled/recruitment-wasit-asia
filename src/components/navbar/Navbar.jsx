import React, { useContext, useEffect, useState } from "react";
import "../../assets/styles/global.css";
import style from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { FaChevronDown, FaChevronLeft, FaUser } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import Button from "../button/Button";
import { UsersContext } from '../../context/UsersContext';
import { MdDashboard } from "react-icons/md";
import SocialMedia from "../socialMedia/SocialMedia";
import Container from "../container/Container";
import { handleDropdownToggle } from "../../logic/handleDropdownToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { role, getRole } = useContext(UsersContext);

  const [isAdmin, setIsAdmin] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const width = window.innerWidth;
  window.onscroll = function () {
    setScrollY(window.scrollY);
  }

  useEffect(() => {
    getRole();
    if (role === 'admin') {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  }, [role]);



  return (
    <header className={`${style.navbar} ${scrollY > 50 ? style.scroll : ''}`}>
      <Container classes="flex">
        <div className={style.logo}>
          <img
            src="/imgs/logo.webp"
            alt="لوجو الموقع"
            loading="lazy"
            width={200}
            height={80}
          />
        </div>


        <nav className={` ${isOpen ? style.open : style.close} flex`}>
          <ul className={`${style.links} flex-center `}>

            <li onClick={handleDropdownToggle}><Link to="/">الرئيسية</Link></li>

            <li>
              <span onClick={handleDropdownToggle}>
              خدماتنا
              <FaChevronLeft className={style.icon}  />
              </span>
              <ul className={style.dropdown}>
                <div>
                  <li><Link to="/طلب_إستقدام">طلب استقدام</Link></li>
                  <li><Link to="/نقل_خدمات">طلب نقل خادمين</Link></li>
                </div>
              </ul>
            </li>

            <li>
              <span onClick={handleDropdownToggle}>
              رحلة الاستقدام
              <FaChevronLeft className={style.icon} />
              </span>
              <ul className={style.dropdown}>
                <div>
                  <li><Link to="/عن_الإستقدام">عن الاستقدام</Link></li>
                  <li><Link to="/وصول_العمالة">وصول العمالة</Link></li>
                  <li><Link to="/إختيار_العمالة">اختيار العمالة</Link></li>
                </div>
              </ul>
            </li>

            <li>
              <span onClick={handleDropdownToggle}>
              عن الاستقدام
              <FaChevronLeft className={style.icon} />
              </span>
              <ul className={style.dropdown}>
                <div>
                  <li><Link to="/سياسات_الإستقدام">سياسات الإستقدام</Link></li>
                </div>
              </ul>
            </li>

            <li>
              <span onClick={handleDropdownToggle}>
              الدعم
              <FaChevronLeft className={style.icon} />
              </span>
              <ul className={style.dropdown}>
                <div>
                  <li><Link to="/articals">مقالات تهمك</Link></li>
                  <li><Link to="/تواصل_معنا">تواصل معنا</Link></li>
                  <li><Link to="/خدمة_العملاء">خدمة العملاء</Link></li>
                </div>
              </ul>
            </li>

          </ul>

          <div className={` ${style.btn} flex`}>
            <Button variant="contained" color="primary" size="md" endIcon={<FaUser size={20} />} link="login">
              تسجيل الدخول
            </Button>

            {isAdmin && (
              <Button variant="contained" color="primary" size="md" endIcon={<MdDashboard size={20} />} link="dashboard">
                لوحة التحكم
              </Button>
            )}
            {width < 1200 && <SocialMedia />}
          </div>
        </nav>


        <span className={style.toggle_mobile} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </span>

      </Container>
    </header>
  );
}
