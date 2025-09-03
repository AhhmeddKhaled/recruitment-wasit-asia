import React from "react";
import style from "./About-home.module.css";
import { RiTeamFill, RiCustomerService2Fill } from "react-icons/ri";
import { BsFillTabletFill } from "react-icons/bs";
import useInView from "../../../hooks/useInView";

export default function About() {
  const { setRefs } = useInView({ activeClass: style.fade_in, threshold: 0.5 });

  const cards = [
    {
      icon: <RiTeamFill className={style.icon} size={30} />,
      title: "متابعة مستمرة وتطوير شامل",
      text: "نوفر كافة الإمكانيات لمتابعة احتياجات العملاء وتسهيل عملهم بسرعة فائقة. كما نطور خدماتنا بما يتوافق مع نظام العمل السعودي.",
    },
    {
      icon: <BsFillTabletFill className={style.icon} size={30} />,
      title: "خدمات استقدام رقمية متكاملة",
      text: "خطوات بسيطة تفصلك عن استقدام العمالة المنزلية التي تحتاجها. لخدمات استقدام عمالة منزلية بمعايير الجودة العالمية.",
    },
    {
      icon: <RiCustomerService2Fill className={style.icon} size={30} />,
      title: "خدمة عملاء مميزة",
      text: "فريق خدمة العملاء معكم خطوة بخطوة بدءًا من طلب استقدام عمالة منزلية حتى وصول العمالة إليكم.",
    },
  ];

  return (
    <section className={`s-padding ${style.about}`}>
      <div className="container">
        <header className="header-section">
        <h2>خدماتنا </h2>
        </header>
        <div className={style.about_cards}>
          {cards.map((card, i) => (
            <div className={style.card} key={i} ref={(el) => setRefs(el, i)}>
              <span>{card.icon}</span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
