import React from "react";
import style from "./Footer.module.css";
import "../../assets/styles/global.css";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer>
      <div className={`${style.container} container`}>
        <div className={`${style.footer_section}  ${style.about}`}>
          <h4 className="m-b-16 font-b"> وسيط أسيا </h4>
          <p>
            أفضل مكتب استقدام العمالة المنزلية بمعايير دولية ومهنية عالية. نوفر
            أيدى عاملة مميزة ومدربة بحرفية.
          </p>
        </div>

        <div className={`${style.footer_section}  ${style.links}`}>
          <h4 className="m-b-16 font-b">خدمتنا</h4>
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
          <h4 className="m-b-16 font-b">معلومات التواصل</h4>
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
              <a href="mailto:info@rawafdnajd.sa">info@rawafdnajd.sa</a>
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
          <h4 className="m-b-16 font-b">روابط هامة</h4>
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

      <div className={style.copy}>
        <p>© 2025 جميع الحقوق محفوظة – وسيط أسيا للإستقدام</p>
      </div>
    </footer>
  );
}
