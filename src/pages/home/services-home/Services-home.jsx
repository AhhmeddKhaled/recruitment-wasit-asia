import React from "react";
import style from "./Services-home.module.css";
import "../../../assets/styles/global.css";

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
    <section className={`${style.services} container`}>
      <header className="header-section">
        <h2>خدمات الاستقدام</h2>
        <p>تعرف على الخدمات التي نقدمها للمجتمع ...</p>
      </header>

      <div className={style.services_cards}>
        {services.map((service, index) => (
          <div className={style.card} key={index}>
            <img src={service.logo} alt="logo" />
            <h4 className="m-b-12">{service.title}</h4>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
