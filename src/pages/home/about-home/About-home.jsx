import React from "react";
import style from "./About-home.module.css";
import { RiTeamFill, RiCustomerService2Fill } from "react-icons/ri";
import { BsFillTabletFill } from "react-icons/bs";

export default function About() {
  return (
    <section className={` ${style.about}`}>
      <div className="container">
      <div className={style.about_cards}>
        <div className={style.card}>
          <span>
            {" "}
            <RiTeamFill className={style.icon} size={30}/>{" "}
          </span>
          <h4> متابعة مستمرة وتطوير شامل </h4>
          <p>
            {" "}
            نوفر كافة الإمكانيات لمتابعة احتياجات العملاء وتسهيل عملهم بسرعة
            فائقة. كما نطور خدماتنا بما يتوافق مع نظام العمل السعودي.{" "}
          </p>
        </div>

        <div className={style.card}>
          <span>
            {" "}
            <BsFillTabletFill className={style.icon} size={30}/>
          </span>
          <h4> خدمات استقدام رقمية متكامل</h4>
          <p>
            {" "}
            خطوات بسيطة تفصلك عن استقدام العمالة المنزلية التي تحتاجها. لخدمات
            استقدام عمالة منزلية بمعايير الجودة العالمية.
          </p>
        </div>

        <div className={style.card}>
          <span>
            {" "}
            <RiCustomerService2Fill className={style.icon} size={30}/>{" "}
          </span>
          <h4> خدمة عملاء مميزة</h4>
          <p>
            {" "}
       فريق خدمة العملاء معكم خطوة بخطوة  <br />  بدءاَ من طلب استقدام عمالة منزلية
              <br /> 
            حتى وصول العمالة إليكم.

          </p>
        </div>
      </div>
      </div>
    </section>
  );
}
