import React from "react";
import "./Home.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Button from "../../components/button/Button";
import ButtonFill  from "../../components/button/ButtonFill";
import { AiFillMedicineBox } from "react-icons/ai";
import { FiShuffle } from "react-icons/fi";
import About from "./about-home/About-home";
import Offers from "./offers-home/Offers-home";
import Login from "./login-home/Login-home";
import Services from "./services-home/Services-home";
import Support from "./support-home/Support-home";
import Statistics from "./statistics-home/Statistics-home";
export default function Home() {
  return (
    <div className="home">
      <header>
        <Navbar />
      </header>

      <section className="hero-section">
        <div className="hero-text">
          <p>وسيط أسيا للإستقدام </p>

          <h1>
            استقدام العمالة المنزلية بكل سهولة وأمان نعمل باحترافية
            <br />
            لتوفير أفضل الكفاءات من مختلف الجنسيات وبشروط واضحة وعقود موثقة
          </h1>

          <div className="btns">
            <Button>
              <AiFillMedicineBox className="btn-icon" />
              طلب استقدام
            </Button>

            <ButtonFill>
              <FiShuffle className="btn-icon" />
              طلب نقل خدمات
            </ButtonFill>
          </div>
        </div>
      </section>

      <About />

      <Services />

      <Support />
      
      <Offers />

      <Statistics />

      <Login />
      
      <Footer />
    </div>
  );
}
