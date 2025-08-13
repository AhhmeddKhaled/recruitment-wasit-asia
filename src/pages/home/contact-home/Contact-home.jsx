import React, { useRef } from "react";
import style from "./Contact-home.module.css";
import '../../../assets/styles/global.css'
import { contactForm } from "../../../future/contactForm";

import {
  FaUser,
  FaPhoneAlt,
  FaPen,
  FaComment,
  FaPaperPlane,   
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Contact() {
  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { success } = await contactForm(form);

    if (success) {
      form.current.reset();
    } else {
      console.error("📛 EmailJS Error:", error);
    }
  };

  return (
    <section className={`${style.login} container`}>
      <div className={style.login_form}>
        <header>
          <h4> تواصل معنا </h4>
          <p>
            فريق الدعم الفنى معك على مدار الساعة لخدمتك وللأجابة عن أسئلتكم
            واستفساراتكم
          </p>
        </header>
        <form className={style.contact} ref={form} onSubmit={handleSubmit}>
          <div className={style.name}>
            <label htmlFor="name">
              {" "}
              <FaUser /> الأسم كاملاً *{" "}
            </label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className={style.phone}>
            <label htmlFor="number">
              {" "}
              <FaPhoneAlt /> رقم الهاتف *{" "}
            </label>
            <input type="phone" id="number" name="phone" required />
          </div>
          <div className={style.select}>
            <label htmlFor="select">
              {" "}
              <FaComment /> الموضوع *{" "}
            </label>
            <select id="select" name="subject">
              <option> إختار </option>
              <option> إستفسار </option>
              <option> خدمة </option>
              <option> شكوي </option>
            </select>
          </div>
          <div className={style.mass}>
            <label htmlFor="mass">
              {" "}
              <FaPen /> أكتب رسالتك *{" "}
            </label>
            <textarea id="mass" name="message"></textarea>

            <div className={style.submit}>
              <button type="submit">
                إرسال
                <FaPaperPlane className={style.icon} />
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className={style.login_map}>
        <img src="/imgs/login.jpg" />
      </div>

      <div className={style.map}>
        <h5>
          {" "}
          يمكنك الوصول إلينا بكل سهولة <FaMapMarkerAlt className={style.icon} />{" "}
        </h5>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d6911.955216966543!2d31.314559358691444!3d29.98007349999999!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2seg!4v1754253445432!5m2!1sar!2seg"
          width="600"
          height="450"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}
