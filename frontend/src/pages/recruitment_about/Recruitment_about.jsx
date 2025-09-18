import React, { useState, useEffect } from "react";
import style from "./RecruitmentAbout.module.css";
import Layout from "../../layout/layout";
import Statistics from "../home/statistics-home/Statistics-home";
import '../../assets/styles/global.css';
import { FaArrowLeft, FaCheckCircle } from "react-icons/fa";
import Button from "../../components/button/Button";
import useInView from "@shared/hooks/useInView";
import { Helmet } from "react-helmet-async";

export default function Recruitment_about() {

  const { setRefs } = useInView({
    threshold: .3,
    activeClass: style.animate,
    once: true

  })
  const list = [
    {
      number: 1,
      title: "تخليص اجراءات الاستقدام",
      disk: "يتم المساعدة في تخليص الاجراءات الخاصة بالعامل",
    },
    {
      number: 2,
      title: "السيرة الذاتية",
      disk: "اختر العامل الذي تريدة بناء علي السيرة الذاتية",
    },
    {
      number: 3,
      title: "رسوم الإستقدام",
      disk: "يتم دفع رسوم الاستقدام باستخدام احدي بوابات الدفع",
    },
    {
      number: 4,
      title: "وصول العمالة",
      disk: "تصل العمالة المختارة الي المطار",
    },
    {
      number: 5,
      title: "استلام العمالة",
      disk: "يتم استلام العمالة الخاصة بك في مكتب روافد",
    },
    {
      number: 6,
      title: "ضمان 3 شهور",
      disk: "نضمن لك العمالة لمدة 3 شهور",
    },
  ];

  const messages = [
    { from: "user", text: "💬 عايز أعرف الراتب بيتحدد إزاي؟" },
    { from: "office", text: "💼 يتم الإتفاق على الراتب بالتنسيق مع صاحب العمل والعاملة المنزلية." },

    { from: "user", text: "💬 هل المكتب بيتابع العقد؟" },
    { from: "office", text: "📝 المكتب يتابع الملف دوريًا للتأكد من التزام الجميع بالعقد المبرم." },

    { from: "user", text: "💬 هل فيه شروط إضافية؟" },
    { from: "office", text: "📄 تم توضيح كافة الشروط والأحكام مع الحفاظ على حقوق وواجبات كل الأطراف." },

    { from: "user", text: "💬 طيب بعد كده أعمل إيه؟" },
    { from: "office", text: "✅ كل ما عليك فعله فقط اختيار العاملة المناسبة لك." },
  ];

  const [chat, setChat] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typing, setTyping] = useState(false);
  const [progres, setProgres] = useState(0);

  useEffect(() => {
    if (currentIndex < messages.length) {
      setTyping(true);

      const timer = setTimeout(() => {
        setChat((prev) => [...prev, messages[currentIndex]]);
        setTyping(false);
        setCurrentIndex((prev) => prev + 1);
        setProgres(progres + 100 / messages.length);
        console.log(progres);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

  return (
    <>
      <Helmet>
        <title>عن الاستقدام | وسيط آسيا</title>
        <meta
          name="description"
          content="معلومات شاملة عن خدمات الاستقدام التي يقدمها وسيط آسيا وخطوات الحصول على العمالة المناسبة."
        />
        <meta
          name="keywords"
          content="عن الاستقدام, خدمات الاستقدام, وسيط آسيا"
        />
      </Helmet>
      <Layout>
        <section className={` ${style.RecruitmentAbout} s-padding`}>
          <div className={` ${style.info} container `}>
            <div className={style.text}>
              <h2>تعاقد الإستقدام</h2>
              <p ref={(el) => setRefs(el, 0)} data-content="مكتب أسيا للاستقدام يُقدم لك خدمات العمالة المنزلية بأفضل جودة، مع
              مراعاة القوانين والتشريعات المحلية والدولية، فقد تعاون المكتب مع
              عدد كبير من أمهر الخبراء بمكاتب الاستقدام الإقليمية والعالمية، كما
              يلتزم المكتب بالقوانين والتشريعات التي نصت عليها وزارة العمل،
              ووزارة الموارد البشرية والتنمية الاجتماعية، وذلك لتغطية احتياجات
              المواطن السعودي، وللتأكد من أداء العامل المنزلي لواجباته بأفضل
              صورة، وحصوله في المقابل على حقوقه كاملة، وخدمات المكتب تُغطي جميع
              المدن بالمملكة العربية السعودية.">
                مكتب أسيا للاستقدام يُقدم لك خدمات العمالة المنزلية بأفضل جودة، مع
                مراعاة القوانين والتشريعات المحلية والدولية، فقد تعاون المكتب مع
                عدد كبير من أمهر الخبراء بمكاتب الاستقدام الإقليمية والعالمية، كما
                يلتزم المكتب بالقوانين والتشريعات التي نصت عليها وزارة العمل،
                ووزارة الموارد البشرية والتنمية الاجتماعية، وذلك لتغطية احتياجات
                المواطن السعودي، وللتأكد من أداء العامل المنزلي لواجباته بأفضل
                صورة، وحصوله في المقابل على حقوقه كاملة، وخدمات المكتب تُغطي جميع
                المدن بالمملكة العربية السعودية.
              </p>

              <div className={style.btn}>
                <Button variant="contained" size="lg" link="طلب_إستقدام">
                  طلب إستقدام
                </Button>
                <Button variant="outlined" size="lg" libk="نقل_خدمات">
                  نقل خدمات
                </Button>
              </div>
              <Button variant="text" size="lg" endIcon={<FaArrowLeft />} anchor link="tel:+201008890582">
                تواصل معنا لمزيد  من المعلومات
              </Button>

            </div>
            <div className={style.img}>
              <img src="/imgs/about.svg" alt="من نحن" loading="lazy" />
            </div>
          </div>

          <section className='container s-padding'>
            <div className={style.chatBox}>
              <div className={style.progres}>
                <span style={{ width: `${progres}%` }}>
                </span>
              </div>
              {chat.map((msg, idx) => (
                <div
                  key={idx}
                  className={`${style.message} ${msg.from === "office" ? style.office : style.user
                    }`}
                >
                  {msg.text}
                </div>
              ))}

              {typing && (
                <div className={`${style.message} ${style.office}`}>
                  <span className={style.typing}>...</span>
                </div>
              )}
            </div>

            {currentIndex === messages.length && (
              <div className={style.finalStep}>
                <button className={style.btn}>
                  <FaCheckCircle /> إصدار العقد الآن
                </button>
              </div>
            )}
          </section>

          <section className={` ${style.steps} s-padding`}>
            <div className={` ${style.stepsContainer} container `}>
              <h2> عمليات الإستقدام </h2>
              <div className={style.stepsGrid}>
                {list.map((box) => (
                  <div>
                    <h3> {box.number} </h3>
                    <span> {box.title} </span>
                    <p> {box.disk} </p>
                    <span></span>
                  </div>
                ))}
              </div>
            </div>

          </section>

          <Statistics />
        </section>
      </Layout>
    </>

  );
}
