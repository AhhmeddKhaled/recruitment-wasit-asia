import React from "react";
import style from "./Footer.module.css";
import "../../assets/styles/global.css";
import { Link } from "react-router-dom";
import SocialMedia from "../socialMedia/SocialMedia";
export default function Footer() {
  return (
    <footer>
      <div className={`${style.container} container`}>
          <img src="/imgs/logo.png" alt="logo image" />
        <div className={`${style.footer_section}  ${style.about}`}>
          <h4> وسيط أسيا </h4>
          <p>
            أفضل مكتب استقدام العمالة المنزلية بمعايير دولية ومهنية عالية. نوفر
            أيدى عاملة مميزة ومدربة بحرفية.
          </p>
        </div>

        <div className={`${style.footer_section}  ${style.links}`}>
          <h4>خدمتنا</h4>
          <ul>
            <li>
              <Link to="/إختيار_العمالة">اختيار العمالة</Link>
            </li>
            <li>
              <Link to="/عن_الإستقدام">تعاقد الاستقدام</Link>
            </li>
            <li>
              <Link to="/وصول_العمالة">وصول العمالة</Link>
            </li>
            <li>
              <Link to="/سياسات_الإستقدام">سياسات الاستقدام</Link>
            </li>
            <li>
              <Link
                to='/articals'>
                المقالات
              </Link>
            </li>
          </ul>
        </div>

        <div className={`${style.footer_section}  ${style.contact}`}>
          <h4>معلومات التواصل</h4>
          <ul>
            <li>
              مدير نقل الخدمات:
              <a href="tel:966555653289">966555653289</a>
            </li>
            <li>
              العنوان:
              <a href="">الشيخ جابر الاحمد، حي المعيزيلة، الرياض</a>
            </li>
            <li>
              البريد الإلكتروني:
              <a href="mailto:iwasitasia1@gmail.com">wasitasia1@gmail.com</a>
            </li>
            <li>
              المبيعات:
              <a href="tel:8003030309">8003030309</a>
            </li>
            <li>
              الشكاوي:
              <a href="tel:8003030309">8003030309</a>
            </li>
            <li>
              سجل تجاري:
              <a href="">1010595382</a>
            </li>
            <li>
              رقم المنشأة
              <a href="">41012064</a>
            </li>
          </ul>
        </div>

        <div className={`${style.footer_section}  ${style.external}`}>
          <h4>روابط هامة</h4>
          <ul>
            <li>
              <a href="https://maroof.sa/" target="_blank">
                منصة معروف
              </a>
            </li>
            <li>
              <a href="https://musaned.com.sa/home" target="_blank">
                مساند
              </a>
            </li>
            <li>
              <a href="https://www.tarafalamal.sa/" target="_blank">
                طرف الأعمال
              </a>
            </li>
          </ul>
        </div>

        
      </div>

      <div className={` ${style.end} flex container`}>
        <p>© 2025 جميع الحقوق محفوظة – وسيط أسيا للإستقدام</p>
        <SocialMedia />
      </div>
    </footer>
  );
}
