import React, { useState } from "react";
import style from "./Services-home.module.css";
import "../../../assets/styles/global.css"
import { FaArrowLeft,FaArrowRight } from 'react-icons/fa';

export default function Services() {

  const [scroll, setScroll] = useState(0);
  const [active, setActive] = useState(false);

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
    img: '/imgs/2تعاقد.webp',
    logo: "imgs/logo.png"
  },
  {
    title: "وصول العمالة",
    description:
      "استقبال العمالة المنزلية من المطار المحلي الى المكتب.",
    img: '/imgs/تعاقد.webp',
    logo: "imgs/logo.png"
  },
];

    return (
        <section className={` ${style.services}  container`}>
            <header className='header-section'>
                <h2>خدمات الاستقدام </h2>
                <p> تعرف علي الخدمات التي نقدمها للمجتمع ... </p>
            </header>
              <FaArrowLeft className={` ${style.left} ${scroll === 1920 && style.hide}`} onClick={() => {
                  scroll == (640 * 3) ? setScroll(scroll) : setScroll(scroll + 640)
                }} />
            <div className={style.services_cards}>
              <div className={style.scroll} style={{
                transform: `translateX(${scroll}px)`
              }}>
                {services.map((service,index) => (
                  <div className={style.card} key={index}>
                        <img src={service.logo} alt="logo" />
                        <h4 className="m-b-12"> {service.title}  </h4>
                        <p> {service.description} </p>  
                </div>
                ))}
                </div>

            </div>
                <FaArrowRight className={` ${style.right} ${scroll ===  0 && style.hide}`} onClick={() => {
                  scroll == 0 ? setScroll(scroll) : setScroll(scroll - 640)
                }} />
                <div className={style.bullits}>

                  {services.map((key,index) => (
                    <span 
                    className={active === index ? style.active : ''}
                    key={index}
                    onClick={() => {
                      setScroll(640 * index)
                      setActive(index)
                    }}
                  ></span>
                ))}                 
                </div>
        </section>
    )
}