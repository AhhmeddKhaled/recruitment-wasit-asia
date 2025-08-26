import React, { useEffect, useState } from "react";
import style from "./Home.module.css";
import '../../assets/styles/global.css'
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { FiShuffle } from "react-icons/fi";
import About from "./about-home/About-home";
import Offers from "./offers-home/Offers-home";
import Services from "./services-home/Services-home";
import Support from "./support-home/Support-home";
import Statistics from "./statistics-home/Statistics-home";
import Contact from "./contact-home/Contact-home";
import Button from "../../components/button/Button";
import { FaHardHat, FaHeadset, FaTools, FaUser, FaUsersCog, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdEngineering, MdWork } from "react-icons/md";
import { BiTransfer } from "react-icons/bi";
import Steps from "./steps/Steps";
import FAQ from "./faq/Faq";
import CTASection from "./ctaSection/CTASection";

export default function Home() {
  return (
    <div className={style.home}>
      <header>
        <Navbar />
      </header>

      <section className={` ${style.hero} `}>
        <div className={style.heroBackground}>
          <FaHardHat size={45} className={style.icon} />
          <FaUsersCog size={45} className={style.icon} />
          <MdEngineering size={45} className={style.icon} />
        </div>
        <div className={style.hero_text}>
          <h1> <span>وسيط أسيا</span> خطوتك نحو الإستقدام
          </h1>
          <p>
            استقدام العمالة المنزلية بكل سهولة وأمان، نعمل باحترافية
            لتوفير أفضل الكفاءات من مختلف الجنسيات وبشروط واضحة وعقود موثقة
          </p>

          <div className={style.btns}>
            <Button
              variant="contained"
              color="primary"
              size="hero"
              startIcon={<FiShuffle />}
            >
              <Link to='/طلب_إستقدام'></Link>
              طلب إستقدام
            </Button>

            <Button variant="outlined" size="hero" startIcon={<BiTransfer />}>
              <Link to='نقل_خدمات'></Link>
              نقل خدمات
            </Button>
          </div>
        </div>
        <div className={style.heroImg}>
          <img src="/heroImgs/hero.svg" alt="hero image" />
        </div>
      </section>

      <About />

      <Steps />

      <Services />

      <CTASection />
      <FAQ />

      <Support />

      <Offers />

      <Statistics />

      <Contact />

      <Footer />

      <a href="tel:25232322" className={style.whatsappIcon}>
        <FaWhatsapp className={style.icon} />
      </a>
    </div>
  );
}
