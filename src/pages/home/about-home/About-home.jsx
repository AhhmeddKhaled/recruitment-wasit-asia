import React from "react";
import style from "./About-home.module.css";
import { RiTeamFill, RiCustomerServiceLine } from "react-icons/ri";
import { MdOutlineVideoLabel } from "react-icons/md";
import "../../../assets/styles/global.css";

export default function About() {
  return (
    <section className={`${style.about} container`}>
  
      <div className={style.about_cards}>
        <div className={style.card}>
          <span>
            {" "}
            <RiTeamFill />{" "}
          </span>
          <h4> المتابعة المستمرة والتطوير الشامل </h4>
          <p>
            {" "}
            نوفر كافة الإمكانيات لمتابعة احتياجات العملاء وتسهيل عملهم بسرعة
            فائقة. كما نطور خدماتنا بما يتوافق مع نظام العمل السعودي.{" "}
          </p>
        </div>

        <div className={style.card}>
          <span>
            {" "}
            <MdOutlineVideoLabel />
          </span>
          <h4> خدمات استقدام رقمية متكامل</h4>
          <p>
            {" "}
            خطوات بسيطة تفصلك عن استقدام العمالة المنزلية التي تحتاجها. 
            لخدمات استقدام عمالة منزلية بمعايير الجودة العالمية.
          </p>
        </div>

        <div className={style.card}>
          <span>
            {" "}
            <RiCustomerServiceLine />{" "}
          </span>
          <h4> خدمة عملاء مميزة</h4>
          <p>
            {" "}
            فريق خدمة العملاء معكم خطوة بخطوة بدءاَ من طلب استقدام عمالة منزلية
            حتى وصول العمالة إليكم.
          </p>
        </div>
      </div>
    </section>
  );
}
