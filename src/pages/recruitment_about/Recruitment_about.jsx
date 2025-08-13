import React from "react";
import "./Recruitment_about.css";
import Layout from "../../layout/layout";
import Statistics from "../home/statistics-home/Statistics-home";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi"; // سهم لليسار

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
  return (
    <Layout>
      <div className="Recruitment_about">
        <header className="page-header rec-header">
          <div className="container">
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

        <div className="rec-start">
          <div className="container">
            <div className="info">
              <p>
                يتم الإتفاق على الراتب بالتنسيق مع صاحب العمل والعمالة المنزلية,
                كما يتم توضيح كافة الشروط والأجكام للحفاظ على حقوق وواجبات كل
                الأطراف, والمكتب يقم بصورة دورية بمتابعة الطلب للتأكد من التزام
                الجميع بالعقد المبرم, كل ما عليك فعله فقط إختيار العمالة
                المنزلية الملائمة لك.
              </p>
            </div>
            <div className="img">
              <img src="/imgs/تعاقد2.webp" alt="" />
            </div>
          </div>
        </div>

        <div className="rec-proc">
          <div className="container">
            <h3> عمليات الإستقدام </h3>
            <div className="rec-grid">
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
