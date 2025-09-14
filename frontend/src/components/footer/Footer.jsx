import React, { useContext } from "react";
import style from "./Footer.module.css";
import "../../assets/styles/global.css";
import { Link } from "react-router-dom";
import SocialMedia from "../socialMedia/SocialMedia";
import { ContactContext } from '../../../../shared/context/ContactContext'
import Button from "../button/Button";
import useInView from "../../../../shared/hooks/useInView";
import { MdArticle, MdEmail, MdPolicy } from "react-icons/md";
import { FaAddressBook, FaHandshake, FaPhone, FaPlaneArrival } from "react-icons/fa";
import { GrRadialSelected } from "react-icons/gr";
export default function Footer() {

  const { setRefs } = useInView({
    activeClass: style.animate
  });

  const { data } = useContext(ContactContext);
  const date = new Date();



  return (
    <footer>
      <div className={`${style.container} container`}>

        <div ref={(el) => setRefs(el, 0)} className={`${style.row}  ${style.links}`}>
          <h3>خدماتنا</h3>
          <ul>
            <li>
              <Link to="/إختيار_العمالة">
                <GrRadialSelected />
                اختيار العمالة
              </Link>
            </li>
            <li>
              <Link to="/عن_الإستقدام">
                <FaHandshake />
                تعاقد الاستقدام
              </Link>
            </li>
            <li>
              <Link to="/وصول_العمالة">
                <FaPlaneArrival />
                وصول العمالة
              </Link>
            </li>
            <li>
              <Link
                to='/articals'>
                <MdArticle />
                المقالات
              </Link>
            </li>
            <li>
              <Link to="/سياسات_الإستقدام">
                <MdPolicy />
                سياسات الاستقدام
              </Link>
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

            {data?.map((c, i) => (
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
                <img src='/footerImgs/معروف.svg' alt="منصة معروف" width={30} height={30} loading="lazy" />
                منصة معروف
              </a>
            </li>
            <li>
              <a href="https://musaned.com.sa/home" target="_blank">
                <img src='/footerImgs/مساند.webp' alt="منصة مساند" width={30} height={30} loading="lazy" />
                مساند
              </a>
            </li>
            <li>
              <a href="https://www.tarafalamal.sa/" target="_blank">
                <img src='/footerImgs/طرف.svg' alt="منصة طرف" width={30} height={30} loading="lazy" />
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
