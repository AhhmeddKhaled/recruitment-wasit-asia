import React, { useState, useEffect } from "react";
import style from "./RecruitmentAbout.module.css";
import Layout from "../../layout/layout";
import Statistics from "../home/statistics-home/Statistics-home";
import '../../assets/styles/global.css';
import { FaCheckCircle } from "react-icons/fa";

export default function Recruitment_about() {
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
  const [progres,setProgres] = useState(0);

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
    <Layout>
      <div className={style.RecruitmentAbout}>
        <header className={`page-header ${style.recHeader} `}>
          <div className={` ${style.row} container `}>
            <h2>تعاقد الإستقدام</h2>
            <p>
              مكتب أسيا للاستقدام يُقدم لك خدمات العمالة المنزلية بأفضل جودة، مع
              مراعاة القوانين والتشريعات المحلية والدولية، فقد تعاون المكتب مع
              عدد كبير من أمهر الخبراء بمكاتب الاستقدام الإقليمية والعالمية، كما
              يلتزم المكتب بالقوانين والتشريعات التي نصت عليها وزارة العمل،
              ووزارة الموارد البشرية والتنمية الاجتماعية، وذلك لتغطية احتياجات
              المواطن السعودي، وللتأكد من أداء العامل المنزلي لواجباته بأفضل
              صورة، وحصوله في المقابل على حقوقه كاملة، وخدمات المكتب تُغطي جميع
              المدن بالمملكة العربية السعودية.{" "}
            </p>
          </div>
        </header>
        <section className='container s-padding'>
          <div className={style.chatBox}>
            <div className={style.progres}>
            <span style={{width: `${progres}%`}}>
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

        <div className={style.recProc}>
          <div className={` ${style.row} container `}>
            <h3> عمليات الإستقدام </h3>
            <div className={style.recGrid}>
              {list.map((box) => (
                <div>
                  <h4> {box.number} </h4>
                  <span> {box.title} </span>
                  <p> {box.disk} </p>
                </div>
              ))}
            </div>
          </div>
          <svg xmlns="htpp://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#2D5C7F"
              fill-Opacity=".5"
              d="M0,224L1440,0L1440,0L0,0Z"
            ></path>
            <path
              fill="#2D5C7F"
              fill-Opacity=".5"
              d="M0,32L1440,256L1440,0L0,0Z"
            ></path>
          </svg>
        </div>

        <Statistics />
      </div>
    </Layout>
  );
}
