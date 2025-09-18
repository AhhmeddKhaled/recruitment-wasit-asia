import React from "react";
import style from "./Workers_arrival.module.css";
import Layout from "../../layout/layout";
import Button from "../../components/button/Button";
import { FaCheck } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BiArrowToLeft } from "react-icons/bi";
import { Helmet } from "react-helmet-async";

export default function Workers_arrival() {
  return (
    <>
      <Helmet>
        <title>وصول العمالة | وسيط آسيا</title>
        <meta
          name="description"
          content="متابعة وصول العمالة إلى المملكة وضمان استلامها بسهولة مع خدمات وسيط آسيا."
        />
        <meta
          name="keywords"
          content="وصول العمالة, استقدام, وسيط آسيا"
        />
      </Helmet>
      <Layout>
        <section className="s-padding">
          <div className="container">
            <div className={style.arrivalGrid}>
              <div className={style.arrivalInfo}>
                <h2>
                  <span> وصول عمالة</span> سريع وأمن وموثوق
                </h2>
                <p>
                  يحرص فريق عمل مكتب وسيط أسيا للاستقدام على توفير السرعة والجودة في
                  الأداء، ويقم بالإشراف على وصول العمالة المدربة واستقبالها، وذلك
                  بداية من طلب الاستشارة وحتى استلام وثائق الاستقدام وبدء العمل بشكل
                  كامل
                </p>
                <Button variant="contained" size="hero" link="طلب_إستقدام" endIcon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M15.293 3.293 6.586 12l8.707 8.707 1.414-1.414L9.414 12l7.293-7.293-1.414-1.414z" /></svg>}>
                  طلب إستقدام
                </Button>
              </div>
              <div className={style.arrivalImg}>
                <img src="/arrivalImgs/arrival.svg" alt="وصول العمالة" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        <section className={` ${style.customerService} s-padding`}>
          <div className={`container `}>

            <div className={style.customerGrid}>
              <div className={style.info}>
                <h2>
                  <span>
                    خدمة العملاء
                  </span>
                  فريق عمل متكامل في انتظارك
                </h2>
                <ul>
                  <li>
                    <span>
                      <FaCheck size={20} />
                    </span>
                    دائما ما نتبنى أحدث الأساليب والتقنيات للتعامل مع العملاء وضمان
                    جودة عالية في الخدمات المقدمة في مكتب وسيط أسيا للاستقدام.
                  </li>
                  <br />
                  <li>
                    <span>
                      <FaCheck size={20} />
                    </span>
                    كما أننا نوفر جميع الأدوات لدراسة السوق لتطوير وتوفير خدمات ذات جودة
                    عالية لاستقدام العمالة المنزلية وللتواصل مع العملاء قبل وبعد
                    وصول العمالة المنزلية.
                  </li>
                  <br />
                  <li>
                    <span>
                      <FaCheck size={20} />
                    </span>
                    نلتزم بشكل تام لخدمة مختلف الاحتياجات
                    بمصداقية عالية وشفافية مطلقة حيث أننا نطمح لتجاوز توقعات عملائنا
                    وبناء علاقة طويلة المدى مع كافة العملاء لمعرفة كافة احتياجاتهم
                    ومتطلباتهم.
                  </li>
                </ul>

                <div className={style.buttons}>
                  <Button variant="contained" size="lg" endIcon={<MdMessage />} link="tel:25262525" anchor>
                    تواصل مع فريق الدعم
                  </Button>
                  <Button variant="outlined" size="lg" endIcon={<BiArrowToLeft />} link="طلب_إستقدام">
                    طلب إستقدام
                  </Button>
                </div>
              </div>
              <div className={style.customerImg}>
                <img src="/customerImgs/customer.svg" alt="customer image" />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>

  );
}
