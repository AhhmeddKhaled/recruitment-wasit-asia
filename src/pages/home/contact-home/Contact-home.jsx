import React, { useRef } from "react";
import style from "./Contact-home.module.css";
import '../../../assets/styles/global.css'
import { contactForm } from "../../../data/contactForm";;
import {
  FaUser,
  FaPhoneAlt,
  FaPen,
  FaComment,
  FaPaperPlane,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Button from "../../../components/button/Button";

export default function Contact() {
  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { success } = await contactForm(form);

    if (success) {
      form.current.reset();
    } else {
      console.error("📛 EmailJS Error:");
    }
  };

  return (
    <section className={`${style.login} s-padding`}>

      <div className={` ${style.grid} container`}>
        <div className={style.login_form}>
        <h2> تواصل معنا </h2>
          <form className={style.contact} ref={form} onSubmit={handleSubmit}>
            <div className={style.name}>
              <input type="text" id="name" name="name" required />
              <label htmlFor="name">
                <FaUser /> الأسم كاملاً
              </label>
            </div>

            <div className={style.phone}>
              <input type="phone" id="number" name="phone" required />
              <label htmlFor="number">
                {" "}
                <FaPhoneAlt /> رقم الهاتف
              </label>
            </div>

            <div className={style.select}>
              <select id="select" name="subject">
                <option disabled selected value={' '}>  </option>
                <option> إستفسار </option>
                <option> خدمة </option>
                <option> شكوي </option>
              </select>
              <label htmlFor="select">
                {" "}
                <FaComment /> الموضوع
              </label>
            </div>

            <div className={style.mass}>
              <textarea id="mass" name="message"></textarea>

              <label htmlFor="mass">
                {" "}
                <FaPen /> أكتب رسالتك
              </label>
            </div>
            <div className={style.submit}>
              <Button
                fullWidth
                type="submit"
                variant="contained"
                color="primary"
                size="lg"
                endIcon={<FaPaperPlane className={style.icon} />
                }>
                إرسال
              </Button>
            </div>
          </form>
        </div>
        <div className={style.login_map}>
          <img src="/imgs/contact.svg" />
        </div>

      </div>
      <div className={` ${style.map} m-t-16 m-b-16 container`}>
        <h5>
          {" "}
          يمكنك الوصول إلينا بكل سهولة <FaMapMarkerAlt className={style.icon} />{" "}
        </h5>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.603302434449!2d46.80751092512391!3d24.7404958500483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f01eefec9bbb9%3A0x578ad66b7f81f0c!2z2LPZitin2LHYqtmG2Kc!5e0!3m2!1sar!2seg!4v1755955179466!5m2!1sar!2seg" allowfullscreen="" loading="lazy"></iframe>
      </div>
    </section>
  );
}
