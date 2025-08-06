import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container container">

        <div className="footer-section about">
          <h3> وسيط أسيا  </h3>
          <p>
            أفضل مكتب استقدام العمالة المنزلية بمعايير دولية ومهنية عالية.
            نوفر أيدى عاملة مميزة ومدربة بحرفية.
          </p>
        </div>

        <div className="footer-section links">
          <h4>خدمتنا</h4>
          <ul>
            <li>اختيار العمالة</li>
            <li>تعاقد الاستقدام</li>
            <li>وصول العمالة</li>
            <li>سياسات الاستقدام</li>
            <li>مركز المساعدة</li>
            <li>الأسئلة الشائعة</li>
            <li>المقالات</li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h4>معلومات التواصل</h4>
          <p><strong>مدير نقل الخدمات:</strong> 966555653289</p>
          <p><strong>العنوان:</strong> الشيخ جابر الاحمد، حي المعيزيلة، الرياض</p>
          <p><strong>البريد الإلكتروني:</strong> info@rawafdnajd.sa</p>
          <p><strong>المبيعات:</strong> 8003030309</p>
          <p><strong>الشكاوي:</strong> 8003030309</p>
          <p><strong>سجل تجاري:</strong> 1010595382</p>
          <p><strong>رقم المنشأة:</strong> 41012064</p>
        </div>

        <div className="footer-section external">
          <h4>روابط هامة</h4>
          <ul>
            <li><a href="https://maroof.sa/" target="_blank">منصة معروف</a></li>
            <li><a href="https://musaned.com.sa/home" target="_blank">مساند</a></li>
            <li><a href="https://www.tarafalamal.sa/" target="_blank">طرف الأعمال</a></li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2025 جميع الحقوق محفوظة – وسيط أسيا للإستقدام</p>
      </div>
    </footer>
  );
}
