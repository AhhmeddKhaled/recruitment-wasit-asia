import React from "react";
import style from "./Home.module.css";
import '../../assets/styles/global.css'
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { AiFillMedicineBox } from "react-icons/ai";
import { FiShuffle } from "react-icons/fi";
import About from "./about-home/About-home";
import Offers from "./offers-home/Offers-home";
import Services from "./services-home/Services-home";
import Support from "./support-home/Support-home";
import Statistics from "./statistics-home/Statistics-home";
import Contact from "./contact-home/Contact-home";
import Button, { ButtonFill } from "../../components/button/Button";

export default function Home() {
  return (
    <div className={style.home}>
      <header>
        <Navbar />
      </header>

      <section className={` ${style.hero}  container`}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#2d5c7f" fill-opacity="1" d="M0,320L30,282.7C60,245,120,171,180,160C240,149,300,203,360,202.7C420,203,480,149,540,122.7C600,96,660,96,720,85.3C780,75,840,53,900,42.7C960,32,1020,32,1080,26.7C1140,21,1200,11,1260,42.7C1320,75,1380,149,1410,186.7L1440,224L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>
       
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#2d5c7f" fill-opacity="1" d="M0,288L30,288C60,288,120,288,180,288C240,288,300,288,360,293.3C420,299,480,309,540,309.3C600,309,660,299,720,288C780,277,840,267,900,245.3C960,224,1020,192,1080,165.3C1140,139,1200,117,1260,112C1320,107,1380,117,1410,122.7L1440,128L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path></svg>
        <div className={style.hero_text}>
            <h1> مرحبًا بك في <br />وسيط أسيا  </h1>
            <p className="m-b-16">
              استقدام العمالة المنزلية بكل سهولة وأمان، نعمل باحترافية
              <br />
              لتوفير أفضل الكفاءات من مختلف الجنسيات وبشروط واضحة وعقود موثقة
            </p>

            <div className={style.btns}>
              <button to="/طلب_إستقدام">
                <AiFillMedicineBox className={`${style.btn_icon} m-l-12`} />
              بدء رحلة توظيف بكل سهولة
              </button>
            </div>
        </div>
      </section>

      <About />

      <Services />

      <Support />

      <Offers />

      <Statistics />

      <Contact />

      <Footer />
    </div>
  );
}
