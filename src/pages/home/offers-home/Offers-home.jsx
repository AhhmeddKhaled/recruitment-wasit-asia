import React, { useEffect, useState } from "react";
import style from "./Offers-home.module.css";
import { Link } from "react-router-dom";
import "../../../assets/styles/global.css";
import {
  FaPhone,
  FaWhatsapp,
  FaCheck,
  FaTachometerAlt,
  FaShieldAlt,
  FaHeadset,
} from "react-icons/fa";

export default function Offers() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/countries")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <section className={` ${style.offers}`}>
      <div className="container">
        <header className="header-section">
          <h2> عروضنا </h2>
          <p> اختر الدولة المناسبة واستمتع بافضل الاسعار </p>
        </header>

        <div className={style.offers_grid}>
          {countries.map((country) => (
            <div className={style.offer_card} key={country._id}>
              <img src={country.flag} alt="" />
              <h4> {country.name} </h4>
              <p> {country.description} </p>
              <span> {country.salary} ريال </span>
              <Link to="/"> أطلب الأن </Link>
            </div>
          ))}
        </div>
      </div>
      <div className={` ${style.why}`}>
        <div className={style.container}>
          <h2 className="font-b">لماذا تختار وسيط أسيا ؟</h2>
          <p>
            في وسيط آسيا، نحرص على أن تحصل على أفضل خدمة استقدام في أسرع وقت
            وبأعلى درجات الأمان. <br />فريقنا ملتزم بالشفافية التامة، وضمان حقوقك من
            بداية الطلب حتى وصول العمالة إليك.{" "}
          </p>

          <div className={ style.future}>
            <span>
               <FaTachometerAlt className={style.icon} />
               سرعة الإنجاز
               
               </span>
            <span>
               <FaHeadset className={style.icon} />
              
               دعم على مدار الساعة</span>
            <span>
               <FaShieldAlt className={style.icon} />
              
               ضمان الحقوق</span>
          </div>
            <Link className={` ${style.link} m-t-16`} to="./طلب_إستقدام">إحجز استقدامك</Link>
          <div className={` ${style.contact} m-t-16`}>
            <a href="">
              تواصل  عبر وتس أب
              <FaWhatsapp className={style.icon} />
            </a>
            <a href="">
              تواصل  عبر الهاتف
              <FaPhone className={style.icon} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
