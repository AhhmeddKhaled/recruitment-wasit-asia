import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaChevronLeft } from "react-icons/fa";
import "./Navbar.css";
import { FiMenu, FiX } from "react-icons/fi";
import Button from "../button/Button";
import ButtonFill from "../button/ButtonFill";

export default function Navbar() {
  const [hovered, setHovered] = useState(null);
  const [isOpen, setIsopen] = useState(false);

  const handleMouseEnter = (menu) => setHovered(menu);
  const handleMouseLeave = () => setHovered(null);

  return (
    <header className="navbar">
      <div className="navbar-container container">
        <div className="logo">
          <img src="/imgs/logo.png" alt="لوجو الموقع" />
        </div>

        <ul className={`nav-links ${isOpen ? "open" : "close"}`}>
            <li>
            <Link to="/">الرئيسية</Link>
            </li>

        

          <li
            className="nav-link"
            onMouseEnter={() => handleMouseEnter("services")}
            onMouseLeave={handleMouseLeave}
          >
            خدماتنا
            {hovered === "services" ? (
              <FaChevronDown className="icon" />
            ) : (
              <FaChevronLeft className="icon" />
            )}
            <ul>
              <li>
                <Link to="/طلب_إستقدام">طلب استقدام</Link>
              </li>

              <li>
                <Link to="/طلب_إستقدام">طلب نقل خادمين</Link>
              </li>
            </ul>
          </li>

          <li
            className="nav-item"
            onMouseEnter={() => handleMouseEnter("journey")}
            onMouseLeave={handleMouseLeave}
          >
            رحلة الاستقدام
            {hovered === "journey" ? (
              <FaChevronDown className="icon" />
            ) : (
              <FaChevronLeft className="icon" />
            )}
              <ul>
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
            
          </li>

          <li
            className="nav-item"
            onMouseEnter={() => handleMouseEnter("policy")}
            onMouseLeave={handleMouseLeave}
          >
            عن الاستقدام
            {hovered === "policy" ? (
              <FaChevronDown className="icon" />
            ) : (
              <FaChevronLeft className="icon" />
            )}
              <ul>
                <li>
                  <Link to="/سياسات_الإستقدام">سياسات الإستقدام</Link>
                </li>
              </ul>
          </li>

          <li
            className="nav-item"
            onMouseEnter={() => handleMouseEnter("support")}
            onMouseLeave={handleMouseLeave}
          >
            الدعم
            {hovered === "support" ? (
              <FaChevronDown className="icon" />
            ) : (
              <FaChevronLeft className="icon" />
            )}
            
              <ul>
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
            
          </li>

          <ButtonFill to="/register">تسجيل الدخول</ButtonFill>
        </ul>

        <span className="toggle-mobile" onClick={() => setIsopen(!isOpen)}>
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </span>
      </div>
    </header>
  );
}
