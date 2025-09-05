import React, { useContext } from "react";
import style from "./Footer.module.css";
import "../../assets/styles/global.css";
import { Link } from "react-router-dom";
import SocialMedia from "../socialMedia/SocialMedia";
import { ContactContext } from '../../data/AllProviders/ContactContext'
export default function Footer() {

  const { contact } = useContext(ContactContext);

  return (
    <footer>
      <div className={`${style.container} container`}>
          <img src="/imgs/logo.webp" alt="logo image" loading="lazy" width={300} height={80}/>
        <div className={`${style.footer_section}  ${style.about}`}>
          <h2> وسيط أسيا </h2>
          <p>
            أفضل مكتب استقدام العمالة المنزلية بمعايير دولية ومهنية عالية. نوفر
            أيدى عاملة مميزة ومدربة بحرفية.
            استقدام العمالة المنزلية بكل سهولة وأمان، نعمل باحترافية لتوفير أفضل الكفاءات من مختلف الجنسيات وبشروط واضحة وعقود موثقة
          </p>
        </div>

        <div className={`${style.footer_section}  ${style.links}`}>
          <h3>خدماتنا</h3>
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
          <h3>معلومات التواصل</h3>
          <ul>
            <li>
              العنوان:
              <a href="">   طريق خريص تقاطع شارع عبد الله بن سعود  </a>
            </li>
            <li>
              البريد الإلكتروني:
              <a href="mailto:wasitasia1@gmail.com">wasitasia1@gmail.com</a>
            </li>

            {contact.map((c,i) => (
              <li key={i}>
              {c.role} :
              <a href={`tel:${c.phone}`}>{c.phone}</a>
            </li>
            ))}
          </ul>
        </div>

        <div className={`${style.footer_section}  ${style.external}`}>
          <h3>روابط هامة</h3>
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

        <div className={`${style.footer_section} ${style.social}`}>
          <h3> منصاتنا </h3>
        <SocialMedia />
        </div>

        
      </div>

      <div className={` ${style.end} flex container`}>
        <p>© 2025 جميع الحقوق محفوظة – وسيط أسيا للإستقدام</p>
      </div>
    </footer >
  );
}
