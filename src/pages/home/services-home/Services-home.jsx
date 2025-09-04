import React, { useEffect, useRef } from "react";
import style from "./Services-home.module.css";
import "../../../assets/styles/global.css";
import { FaArrowLeft } from "react-icons/fa";
import Button from "../../../components/button/Button";
import { Link } from "react-router-dom";

export default function Services() {

  const services = [
    {
      title: "سياسات الاستقدام",
      description:
        "الالتزام بقوانين نظام الاستقدام الجديد بالسعودية حفاظًا على حقوق وواجبات كلًا من صاحب البيت والعاملة المنزلية.",
      number: 1,
      btn: "معرفة المزيد",
    },
    {
      title: "اختيار العمالة",
      description:
        "إتمام إجراءات استقدام العمالة المنزلية واختيار السير الذاتية عبر منصة مساند.",
      number: 2,
      btn: "معرفة المزيد",
    },
    {
      title: "تعاقد الاستقدام",
      description: "دفع رسوم الاستقدام وإصدار العقد عبر منصة مساند.",
      number: 3,
      btn: "معرفة المزيد",
    },
    {
      title: "وصول العمالة",
      description: "استقبال العمالة المنزلية من المطار المحلي الى المكتب.",
      number: 4,
      btn: "معرفة المزيد",
    },
  ];

  return (
    <section className={` ${style.services} s-padding`}>
      <div className="container">

        <section className={style.servicesGrid}>
          <div className={style.servicesCards}>
            <header className="header-section flex-center">
              <h2>خدمات الاستقدام</h2>
              <p>تعرف على الخدمات التي نقدمها للمجتمع ...</p>
            </header>
            {services.map((service, index) => (
              <div className={style.card} key={index}>
                <span> {service.number} </span>
                <strong>{service.title}</strong>
                <p>{service.description}</p>
                <Button variant="text" size="md" endIcon={<FaArrowLeft className={style.icon}/>} link="#contact" anchor>
                  {service.btn}
                </Button>
              </div>
            ))}

          </div>

          <div className={style.servicesImg}>
            <img src="/servicesImgs/service.svg" alt="صورة الخدمات" loading="lazy"/>
          </div>
        </section>
      </div>
    </section>
  );
}
