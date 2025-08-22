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
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { MdEngineering, MdWork } from "react-icons/md";
import { BiTransfer } from "react-icons/bi";
import Counter from "../../logic/Counter";

  
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
          <h1> مرحبًا بك في وسيط أسيا  </h1>
          <p>
            استقدام العمالة المنزلية بكل سهولة وأمان، نعمل باحترافية
            لتوفير أفضل الكفاءات من مختلف الجنسيات وبشروط واضحة وعقود موثقة
          </p>
          <ul className={style.future}>
            <li>
              <span>
              <FaUser className={style.icon} size={18} />
                <strong>
                  10,000
                </strong>
              </span>
                عميل سعيد
            </li>
            <li>
              <span>
              <MdWork className={style.icon} size={18} />
                <strong> 10 </strong>
              </span>
                سنوات خبرة  في مجال الإستقدام
            </li>
            <li>
              <span>
              <FaHeadset className={style.icon} size={18} />
                <strong>
                  7/24
                </strong>
              </span>
                خدمة عملاء
            </li>
          </ul>
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

            <Button variant="outlined" color="secondary" size="hero" startIcon={<BiTransfer />}>
              <Link to='نقل_خدمات'></Link>
              نقل خدمات
            </Button>
          </div>
        </div>
        <div className={style.heroImg}>
          <img src="/imgs/hero.png" alt="hero image" />
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#00BBD9" d="M56.6,-56.4C71.4,-41.8,80.2,-20.9,78.8,-1.3C77.5,18.2,66,36.4,51.2,49.7C36.4,63.1,18.2,71.6,-2.3,73.9C-22.9,76.2,-45.7,72.4,-59.2,59.1C-72.7,45.7,-76.9,22.9,-74.5,2.4C-72.2,-18.2,-63.3,-36.3,-49.8,-51C-36.3,-65.6,-18.2,-76.7,1.4,-78.1C20.9,-79.5,41.8,-71,56.6,-56.4Z" transform="translate(100 100)" />
          </svg>
        </div>
        <SocialMedia />
      </section>

      <About />

      <section className={` ${style.numbers} s-padding`}>
        <div className={` ${style.grid} container`}>

        <h2> إنجازات نفتخر بها</h2>
        <ul>
          <li>
            <Counter target={5000} duration={3000} />
          عميل سعيد
          </li>

          <li>
           <Counter target={15} duration={6000} />
        سنين خبرة في مجال الإستقدام 
          </li>

          <li>
         
        <Counter target={100000} duration={3000} />
          عملية إستقدام
          </li>
        </ul>
        </div>
      </section>
      <Services />

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
