import React, { useEffect, useRef } from "react";
import style from "./Services-home.module.css";
import "../../../assets/styles/global.css";
import { FaCheck } from "react-icons/fa";
import Button from "../../../components/button/Button";
import { Link } from "react-router-dom";

export default function Services() {

  const services = [
    {
      title: "سياسات الاستقدام",
      description:
        "الالتزام بقوانين نظام الاستقدام الجديد بالسعودية حفاظًا على حقوق وواجبات كلًا من صاحب البيت والعاملة المنزلية.",
      img: "/imgs/سياسات.jpg",
      logo: "imgs/logo.png",
    },
    {
      title: "اختيار العمالة",
      description:
        "إتمام إجراءات استقدام العمالة المنزلية واختيار السير الذاتية عبر منصة مساند.",
      img: "/imgs/اختيار.webp",
      logo: "imgs/logo.png",
    },
    {
      title: "تعاقد الاستقدام",
      description: "دفع رسوم الاستقدام وإصدار العقد عبر منصة مساند.",
      img: "/imgs/2تعاقد.webp",
      logo: "imgs/logo.png",
    },
    {
      title: "وصول العمالة",
      description: "استقبال العمالة المنزلية من المطار المحلي الى المكتب.",
      img: "/imgs/تعاقد.webp",
      logo: "imgs/logo.png",
    },
  ];

  return (
    <section className={style.services}>
      <div className="container">
        <header className="header-section flex-center">
          <h2>خدمات الاستقدام</h2>
          <p>تعرف على الخدمات التي نقدمها للمجتمع ...</p>
        </header>

        <div className={style.services_cards}>
          {services.map((service, index) => (
            <div className={style.card} key={index}>
              <img src={service.logo} alt="logo" />
              <h4>{service.title}</h4>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      <section className={` ${style.panner} s-padding`}>
        <div className={` ${style.grid} flex container`}>
          <div className={style.info}>
            <h2 className={style.hero}>وسيط أسيا</h2>
            <ul className={style.list}>
              <li>
               <FaCheck />
                إستقدام من جميع الدول
              </li>
              <li>
               <FaCheck />
                أسعار مناسبة
              </li>
              <li>
               <FaCheck />
                سرعة في نقل الكفالة
              </li>
                <li>
               <FaCheck />
              ضمان الحقوق
              </li>
                <li>
               <FaCheck />
               الشفافية في التعامل
              </li>
            </ul>

            <div className={style.action}>
              <Button variant="contained" color="primary" size="lg">
                <Link to='./طلب_إستقدام'></Link>
                طلب إستقدام
              </Button>
              <Button variant="outlined" color="primary" size="lg">
                <Link to='./نقل_خدمات'></Link>
                نقل خدمات
              </Button>
            </div>
          </div>

          <div className={style.img}>
            <img src="/imgs/سياسات.jpg" alt="panner image" />
          </div>
        </div>
      </section>
    </section>
  );
}
