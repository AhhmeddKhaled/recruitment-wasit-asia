import React from "react";
import style from "./Steps.module.css";
import useInView from "@shared/hooks/useInView";

const stepsData = [
  {
    icon: "/stepsImgs/country.svg",
    title: "اختيار الدولة والمهنة",
    description: "حدد الدولة والمهنة التي ترغب في استقدام العمالة منها.",
    buttonText: "المزيد",
    link: "#countries"
  },
  {
    icon: "/stepsImgs/request.svg",
    title: "رفع طلب الاستقدام",
    description: "املأ بيانات الطلب وارفع المستندات المطلوبة.",
    buttonText: "تقديم الطلب",
    link: "#contact"
  },
  {
    icon: "/stepsImgs/done.svg",
    title: "الموافقة والمراجعة",
    description: "يتم مراجعة الطلب والمستندات من قبل الإدارة.",
    buttonText: "التفاصيل",
    link: "#ditails"
  },
  {
    icon: "/stepsImgs/visa.svg",
    title: "إصدار التأشيرة والسفر",
    description: "بعد الموافقة، يتم إصدار التأشيرة واستقدام العامل.",
    buttonText: "تتبع الطلب",
    link: "#login"
  },
  {
    icon: "/stepsImgs/success.svg",
    title: "الوصول والاستلام",
    description: "يصل العامل ويتم تسليمه للعميل مع جميع الوثائق.",
    buttonText: "التفاصيل",
    link: "#arrival"
  }
];

export default function Steps() {
  const { setRefs } = useInView({
    activeClass: style.animate,
    threshold: 1,
    once: true,
  });

  return (
    <section className={`${style.stepsSection} s-padding`}>
      <div className={`${style.stapsContainer} container`}>
        <header className="header-section">
          <h2 className={style.sectionTitle}>خطوات الاستقدام</h2>
        </header>
        <div className={style.stepsGrid}>
          {stepsData.map((step, index) => (
            <div
              key={index}
              ref={(el) => setRefs(el, index)}
              className={`${style.stepCard}`}
            >

              {/* Img  */}
              <div className={style.img}>
              <img src={step.icon} alt={step.title} loading="lazy" />
              </div>

              {/* Text  */}
              <div className={style.text}>
              <h3 className={style.stepTitle}>{step.title}</h3>
              <p className={style.stepDescription}>{step.description}</p>
              <a href={step.link} className={style.stepButton}>
                {step.buttonText}
              </a>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
