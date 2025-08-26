import React, { useContext, useEffect, useState } from "react";
import "../../assets/styles/global.css";
import style from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { FaChevronDown, FaChevronLeft, FaUser } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import Button from "../button/Button";
import { UsersContext } from '../../data/AllProviders/UsersContext';
import { MdDashboard } from "react-icons/md";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const { user, loading } = useContext(UsersContext);
  const [isAdmin, setIsAdmin] = useState(false);
  const [checkingAdmin, setCheckingAdmin] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  window.onscroll = function() {
    setScrollY(window.scrollY);
  }

  useEffect(() => {
    
    const checkAdmin = async () => {
      if (!user || !user.token) {
        setIsAdmin(false);
        setCheckingAdmin(false);
        return;
      }

      try {
        const res = await fetch('http://localhost:5000/api/auth/admin-dashboard', {
          headers: { Authorization: `Bearer ${user.token}` }
        });
        setIsAdmin(res.status === 200);
      } catch {
        setIsAdmin(false);
      } finally {
        setCheckingAdmin(false);
      }
    }

    if (!loading) {
      checkAdmin();
    }
  }, [user, loading]);

  const handleDropdownToggle = (menu) => setOpenDropdown(prev => (prev === menu ? null : menu));

  // عرض شاشة انتظار أثناء تحميل user أو التحقق من admin
  if (loading || checkingAdmin) return <div>جار التحميل...</div>;

  return (
    <header className={`${style.navbar} ${scrollY > 50 ? style.scroll : ''} p-t-b-12`}>
      <div className="container flex">
        <div className={style.logo}>
          <img src="/imgs/logo.png" alt="لوجو الموقع" />
        </div>

        <ul className={`${style.links} flex-align ${isOpen ? style.open : style.close}`}>
          <li><Link to="/">الرئيسية</Link></li>

          <li onClick={() => handleDropdownToggle("services")}>
            خدماتنا
            {openDropdown === "services" ? <FaChevronDown className={style.icon} /> : <FaChevronLeft className={style.icon} />}
            {openDropdown === "services" && (
              <ul className={style.dropdown}>
                <li><Link to="/طلب_إستقدام">طلب استقدام</Link></li>
                <li><Link to="/نقل_خدمات">طلب نقل خادمين</Link></li>
              </ul>
            )}
          </li>

          <li onClick={() => handleDropdownToggle("journey")}>
            <div className={style.menuItem}>
              رحلة الاستقدام
              {openDropdown === "journey" ? <FaChevronDown className={style.icon} /> : <FaChevronLeft className={style.icon} />}
            </div>
            {openDropdown === "journey" && (
              <ul className={style.dropdown}>
                <li><Link to="/عن_الإستقدام">عن الاستقدام</Link></li>
                <li><Link to="/وصول_العمالة">وصول العمالة</Link></li>
                <li><Link to="/إختيار_العمالة">اختيار العمالة</Link></li>
              </ul>
            )}
          </li>

          <li onClick={() => handleDropdownToggle("policy")}>
            <div className={style.menuItem}>
              عن الاستقدام
              {openDropdown === "policy" ? <FaChevronDown className={style.icon} /> : <FaChevronLeft className={style.icon} />}
            </div>
            {openDropdown === "policy" && (
              <ul className={style.dropdown}>
                <li><Link to="/سياسات_الإستقدام">سياسات الإستقدام</Link></li>
              </ul>
            )}
          </li>

          <li onClick={() => handleDropdownToggle("support")}>
            الدعم
            {openDropdown === "support" ? <FaChevronDown className={style.icon} /> : <FaChevronLeft className={style.icon} />}
            {openDropdown === "support" && (
              <ul className={style.dropdown}>
                <li><Link to="/articals">مقالات تهمك</Link></li>
                <li><Link to="/تواصل_معنا">تواصل معنا</Link></li>
                <li><Link to="/خدمة_العملاء">خدمة العملاء</Link></li>
              </ul>
            )}
          </li>

          <div className={style.btn}>
          <Button variant="contained" color="primary" size="md" endIcon={<FaUser size={24}/>}>
            <Link to='/login'></Link>
            تسجيل الدخول
          </Button>

          {isAdmin && (
            <Button variant="contained" color="primary" size="md" endIcon={<MdDashboard size={24}/>}>
              <Link to='/dashboard'></Link>
              لوحة التحكم
            </Button>
          )}
          </div>
        </ul>

        <span className={style.toggle_mobile} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </span>
      </div>
    </header>
  );
}
