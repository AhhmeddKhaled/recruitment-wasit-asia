import React from "react";
import style from "./CTASection.module.css";
import Button from "../../../components/button/Button";
import { Link } from "react-router-dom";
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
      <Button variant="contained" color="primary" size="hero" link="tel:+966555872001" anchor>
        تواصل معنا
        <BsWhatsapp />
      </Button>
      </div>
    </section>
  )
}