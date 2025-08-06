import React from "react";
import "./Services-home.css";

export default function Services() {

    const services = [
  {
    title: "سياسات الاستقدام",
    description:
      "الالتزام بقوانين نظام الاستقدام الجديد بالسعودية حفاظًا على حقوق وواجبات كلًا من صاحب البيت والعاملة المنزلية.",
    img: '/imgs/سياسات.jpg',
    logo: "imgs/logo.png"
  },
  {
    title: "اختيار العمالة",
    description:
      "إتمام إجراءات استقدام العمالة المنزلية واختيار السير الذاتية عبر منصة مساند.",
    img: '/imgs/اختيار.webp',
    logo: "imgs/logo.png"
  },
  {
    title: "تعاقد الاستقدام",
    description:
      "دفع رسوم الاستقدام وإصدار العقد عبر منصة مساند.",
    img: '/imgs/تعاقد.jpg',
    logo: "imgs/logo.png"
  },
  {
    title: "وصول العمالة",
    description:
      "استقبال العمالة المنزلية من المطار المحلي الى المكتب.",
    img: '/imgs/وصول.jpg',
    logo: "imgs/logo.png"
  }
];

    return (
        <section className="services container">
            <header className="header-section">
                <h2>خدمات الاستقدام </h2>
                <p> تعرف علي الخدمات التي نقدمها للمجتمع ... </p>
            </header>
            <div className="services-cards">
                {services.map(service => (

                    <div className="card">
                    <div className="front">
                        <img src={service.img} alt={service.title} />
                        <h4> {service.title} </h4>
                    </div>
                    <div className="back">
                        <img src={service.logo} alt="logo" />
                        <h4> {service.title}  </h4>
                        <p> {service.description} </p>  
                    </div>
                </div>
                ))}
            </div>
        </section>
    )
}