import React from "react";
import "./Workers_arrival.css";
import Layout from "../../layout/layout";
import Button from "../../components/button/Button";

export default function Workers_arrival() {
  return (
    <Layout>
      <div className="arrival">
        <header className="page-header arr-header">
          <div className="container">
            <h2>وصول العمالة</h2>
            <p>
              يحرص فريق عمل مكتب وسيط أسيا للاستقدام على توفير السرعة والجودة في
              الأداء، ويقم بالإشراف على وصول العمالة المدربة واستقبالها، <br />وذلك
              بداية من طلب الاستشارة وحتى استلام وثائق الاستقدام وبدء العمل بشكل
              كامل
            </p>
            <Button to='/طلب_إستقدام'>
            طلب إستقدام في ثواني
            </Button>
          </div>
        </header>

        <div className="rec-about">
          <div className="container">
            <div className="info">
              <h3>وصول العمالة</h3>
              <p>
                يحرص فريق عمل مكتب وسيط أسيا للاستقدام على توفير السرعة والجودة
                في الأداء،  ويقم بالإشراف على وصول العمالة المدربة واستقبالها،
                وذلك بداية من طلب الاستشارة وحتى استلام وثائق الاستقدام وبدء
                العمل بشكل كامل
              </p>

              <span>
                يوفر وسيط أسيا  ضمان الاستبدال فى حال التغيب أو رفض العمل
              </span>
            </div>
            <div className="img">
              <img src="/imgs/وصول1.avif" alt="" />
            </div>
          </div>
        </div>

        <div className="rec-about serv">
          <div className="container">
            <div className="img">
              <img src="/imgs/خدمة.jpg" alt="" />
            </div>
            <div className="info">
              <h3>خدمة العملاء</h3>
              <p>
                دائما ما نتبنى أحدث الأساليب والتقنيات للتعامل مع العملاء وضمان
                جودة عالية في الخدمات المقدمة في مكتب  <strong>
                وسيط أسيا
                  </strong> للاستقدام كما
                أننا نوفر جميع الأدوات لدراسة السوق لتطوير وتوفير خدمات ذات جودة
                عالية لاستقدام العمالة المنزلية وللتواصل مع العملاء قبل وبعد
                وصول العمالة المنزلية , نلتزم بشكل تام لخدمة مختلف الاحتياجات
                بمصداقية عالية وشفافية مطلقة حيث أننا نطمح لتجاوز توقعات عملائنا
                وبناء علاقة طويلة المدى مع كافة العملاء لمعرفة كافة احتياجاتهم
                ومتطلباتهم.
              </p>

            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
