import React from "react";
import style from "./Steps.module.css";
import useInView from "../../../hooks/useInView";

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

// كومبوننت منفصل للكارت
function StepCard({ step }) {
  const {ref, inView} = useInView({threshold: 0})

  return (
    <div
      ref={ref}
      className={`${style.stepCard} ${inView ? style.animate : ""}`}
    >
      <img src={step.icon} alt="img" />
      <h5 className={style.stepTitle}>{step.title}</h5>
      <p className={style.stepDescription}>{step.description}</p>
      <a href={step.link} className={style.stepButton}>
        {step.buttonText}
      </a>
    </div>
  );
}

export default function Steps() {
  return (
    <section className={`${style.stepsSection} s-padding`}>
      <div className={`${style.stapsContainer} container`}>
        <hedear className="header-section">
        <h2 className={style.sectionTitle}>خطوات الاستقدام</h2>
        </hedear>
        <div className={style.stepsGrid}>
          {stepsData.map((step, index) => (
            <StepCard step={step} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
