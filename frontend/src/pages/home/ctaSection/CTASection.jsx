import React from "react";
import style from "./CTASection.module.css";
import Button from "../../../components/button/Button";
import { BsWhatsapp } from "react-icons/bs";

export default function CTASection() {

  return (
    <section className={` ${style.ctaSection}`}>
      <div className={` ${style.grid} container flex-center`}>
      <h2>
        إستقدام سريع مع <span> وسيط أسيا</span>
      </h2>
      <p className={style.ctaText}>
        نحن في  وسيط آسيا نلتزم بتقديم أفضل خدمات الاستقدام بسرعة وأمان لتلبية احتياجاتك.
        <br /> اختَر العامل المناسب لك بخطوات بسيطة وسهلة.
      </p>
<<<<<<< HEAD
      <Button variant="contained" color="primary" size="hero" link="https://wa.me/+966555872001" anchor>
=======
      <Button variant="contained" color="primary" size="hero" link="tel:00966555872001" anchor>
>>>>>>> 7e696bd02a3f4c1ec89f3676a6a31094aa2cc82e
        تواصل معنا
        <BsWhatsapp />
      </Button>
      </div>
    </section>
  )
}
