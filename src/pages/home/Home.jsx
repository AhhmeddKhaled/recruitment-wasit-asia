import React from "react";
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
import { FaHardHat, FaUsersCog, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdEngineering, MdWork } from "react-icons/md";
import { BiTransfer } from "react-icons/bi";
import Steps from "./steps/Steps";
import CTASection from "./ctaSection/CTASection";
import Faq from "./faq/FAQ";
import Layout from '../../layout/layout';
export default function Home() {
  return (

    <Layout>

      <section className={` ${style.home} s-padding`}>

        <section className={` ${style.hero} container`}>
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
                link="طلب_إستقدام"
              >
                طلب إستقدام
              </Button>

              <Button variant="outlined" size="hero" startIcon={<BiTransfer />} link="نقل_خدمات">
                نقل خدمات
              </Button>
            </div>
          </div>
          <div className={style.heroImg}>
            <img src="/heroImgs/hero.svg" loading="lazy" alt="hero image" />
          </div>
        </section>

        <About />

        <Steps />

        <Services />

        <CTASection />

        <Faq />

        <Support />

        <Offers />

        <Statistics />

        <Contact />


        <a href="tel:+201008890582" className={style.whatsappIcon} aria-label="whats us">
          <FaWhatsapp className={style.icon} />
        </a>
      </section>
    </Layout>
  );
}
