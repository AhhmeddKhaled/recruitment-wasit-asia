import React, { Suspense, lazy } from "react";

/* Import Style Files */
import style from "./Home.module.css";
import "../../assets/styles/global.css";

/* Import Icons */
import { FiShuffle } from "react-icons/fi";
import { FaHardHat, FaUsersCog, FaWhatsapp } from "react-icons/fa";
import { MdEngineering } from "react-icons/md";
import { BiTransfer } from "react-icons/bi";

/* Import Layout */
import Layout from "../../layout/layout";

/* Lazy Loaded Sections */
const About = lazy(() => import("./about-home/About-home"));
const Services = lazy(() => import("./services-home/Services-home"));
const Support = lazy(() => import("./support-home/Support-home"));
const Statistics = lazy(() => import("./statistics-home/Statistics-home"));
const Contact = lazy(() => import("./contact-home/Contact-home"));
const Steps = lazy(() => import("./steps/Steps"));
const CTASection = lazy(() => import("./ctaSection/CTASection"));
const Faq = lazy(() => import("./faq/FAQ"));
const Offers = lazy(() => import("./offers-home/Offers-home"));

/* Import Components */
import Button from "../../components/button/Button";

export default function Home() {
  return (
    <Layout>
      <section className={` ${style.home}`}>
        {/* Hero Section */}
        <section className={` ${style.hero} container`}>
          <div className={style.heroBackground}>
            <FaHardHat size={45} className={style.icon} />
            <FaUsersCog size={45} className={style.icon} />
            <MdEngineering size={45} className={style.icon} />
          </div>
          <div className={style.hero_text}>
            <h1>
              <span>وسيط أسيا</span> خطوتك نحو الإستقدام
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
              <Button
                variant="outlined"
                size="hero"
                startIcon={<BiTransfer />}
                link="نقل_خدمات"
              >
                نقل خدمات
              </Button>
            </div>
          </div>
          <div className={style.heroImg}>
            <img
              src="/heroImgs/hero.svg"
              alt="صورة الموقع"
              fetchpriority="high"
              decoding="async"
              width={600}
              height={200}
            />
          </div>
        </section>

        {/* Lazy Sections */}
        <Suspense fallback={<div style={{ textAlign: "center" }}>جاري تحميل...</div>}>
          <About />
          <Steps />
          <Services />
          <CTASection />
          <Faq />
          <Support />
          <Offers />
          <Statistics />
          <Contact />
        </Suspense>

        {/* Floating WhatsApp Icon */}
        <a
          href="tel:+201008890582"
          className={style.whatsappIcon}
          aria-label="أيقونة التواصل وتس أب"
        >
          <FaWhatsapp className={style.icon} />
        </a>
      </section>
    </Layout>
  );
}
