import React from "react";
import "./About-home.css";
import Button from "../../../components/button/Button";
import { RiTeamFill, RiCustomerServiceLine } from "react-icons/ri";
import { MdOutlineVideoLabel } from "react-icons/md";
import ButtonFill from "../../../components/button/ButtonFill";

export default function About() {
  return (
    <section className="about container">
      <div className="about-us">
        <div className="about-info">
          <h2>من نحن....؟ </h2>
          <p> أهلاً بك في وسيط أسيا </p>
          <p>
            انطلق مكتب
            <span>  وسيط أسيا  </span>
              لخدمات استقدام العمالة المنزلية برؤية عالمية، يقودها الطموح نحو خلق 
            آليات جديدة وسهلة للوصول إلى أيدي عاملة أمينة وعلى قدر عالي من
            الكفاءة وذلك لتقديم حلول الاستقدام لإيجاد العمالة المنزلية الأنسب
            لعملائنا. يعتبر مكتب روافد نجد أفضل مكتب استقدام عمالة منزلية حاصل
            على ترخيص من منصة مساند الحكومية لتوفير خدمات استقدام عمالة منزلية
            بمعايير الجودة العالمية.
          </p>

          <span className="about-Q"> هل لديك سؤال....؟</span>

          <div className="btn">
            <ButtonFill> تواصل معنا </ButtonFill>
            <Button> طلب استقدام </Button>
          </div>

          <span className="end"> </span>
        </div>
        <div className="about-img">
          <img src="/imgs/About.jpg" />
        </div>
      </div>

      <div className="about-cards">
        <div className="card">
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

        <div className="card">
          <span>
            {" "}
            <MdOutlineVideoLabel />
          </span>
          <h4> خدمات استقدام رقمية متكامل</h4>
          <p>
            {" "}
            خطوات بسيطة تفصلك عن استقدام العمالة المنزلية التي تحتاجها.روافد نجد
            لخدمات استقدام عمالة منزلية بمعايير الجودة العالمية.
          </p>
        </div>

        <div className="card">
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
