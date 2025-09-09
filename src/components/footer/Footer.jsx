import React, { useContext } from "react";
import style from "./Footer.module.css";
import "../../assets/styles/global.css";
import { Link } from "react-router-dom";
import SocialMedia from "../socialMedia/SocialMedia";
import { ContactContext } from '../../context/ContactContext'
import Button from "../button/Button";
import useInView from "../../hooks/useInView";
import { MdEmail } from "react-icons/md";
import { FaAddressBook, FaPhone } from "react-icons/fa";
import { BiPhoneCall } from "react-icons/bi";
export default function Footer() {

  const { setRefs } = useInView({
    activeClass: style.animate
  });
  console.log(setRefs.current);

  const { data } = useContext(ContactContext);
  const date = new Date();



  return (
    <footer>
      <div className={`${style.container} container`}>

        <div ref={(el) => setRefs(el, 0)} className={`${style.row}  ${style.links}`}>
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
              <Link
                to='/articals'>
                المقالات
              </Link>
            </li>
            <li>
              <Link to="/سياسات_الإستقدام">سياسات الاستقدام</Link>
            </li>
          </ul>
        </div>

        <div ref={(el) => setRefs(el, 1)} className={`${style.row}  ${style.contact}`}>
          <h3>معلومات التواصل</h3>
          <ul>
            <li>
              <FaAddressBook />
              <a href="">   طريق خريص تقاطع شارع عبد الله بن سعود  </a>
            </li>
            <li>
              <MdEmail />
              <a href="mailto:wasitasia1@gmail.com">wasitasia1@gmail.com</a>
            </li>

            {data.map((c, i) => (
              <li key={i}>
                <FaPhone />                
                {c.role} :
                <a href={`tel:${c.phone}`}>{c.phone}</a>
              </li>
            ))}
          </ul>
        </div>

        <div ref={(el) => setRefs(el, 2)} className={`${style.row}  ${style.external}`}>
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

        <div ref={(el) => setRefs(el, 3)} className={`${style.row} ${style.sendMessage}`}>
          <h3> تواصل معنا </h3>
          <div className={style.form}>
            <input type="text" />
            <Button size="lg">
              إرسال
            </Button>
          </div>
        </div>

      </div>
        <div className={` ${style.copyRight} flex`}>
          <p>© {date.getFullYear()} جميع الحقوق محفوظة – وسيط أسيا للإستقدام</p>
          <SocialMedia />
        </div>
    </footer >
  );
}
