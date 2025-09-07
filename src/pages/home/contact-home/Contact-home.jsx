import React, { useRef, useState } from "react";
import style from "./Contact-home.module.css";
import '../../../assets/styles/global.css'
import { contactForm } from "../../../data/contactForm";;
import {
  FaUser,
  FaPhoneAlt,
  FaPen,
  FaComment,
  FaPaperPlane,
} from "react-icons/fa";
import Button from "../../../components/button/Button";
import Message from '../../../components/message/Message';

export default function Contact() {
  const form = useRef();
  const [message, setMessage] = useState({
    message: '',
    status: "success",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { success } = await contactForm(form);

    if (success) {
      form.current.reset();
      setMessage({
        message: 'تم الإرسال بنجاح',
        status: "success",
      })
    } else {
      setMessage({
        message: 'خطأ في الإرسال, تأكد من البيانات',
        status: "error"
      })
      console.error("📛 EmailJS Error:");
    }

    setTimeout(() => {
      setMessage('')
    }, 3000);
  };

  return (
    <section id="contact" className={`${style.login} s-padding`}>
      <div className={` ${style.grid} container`}>
        <div className={style.login_form}>
          <h2> تواصل معنا </h2>
          <form className={style.contact} ref={form} onSubmit={handleSubmit}>
            {message.message && <Message status={message.status}>{message.message}</Message>}
            <div className={style.name}>
              <label htmlFor="name">
                <FaUser /> الأسم كاملاً
              </label>
              <input type="text" id="name" name="name" required />
            </div>

            <div className={style.phone}>
              <label htmlFor="number">
                {" "}
                <FaPhoneAlt /> رقم الهاتف
              </label>
              <input type="phone" id="number" name="phone" required />
            </div>

            <div className={style.select}>
              <label htmlFor="select">
                {" "}
                <FaComment /> الموضوع
              </label>
              <select id="select" name="subject">
                <option disabled selected value=' '>  </option>
                <option> إستفسار </option>
                <option> خدمة </option>
                <option> شكوي </option>
              </select>
            </div>

            <div className={style.mass}>
              <label htmlFor="mass">
                {" "}
                <FaPen /> أكتب رسالتك
              </label>
              <textarea id="mass" name="message"></textarea>
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
        <div className={style.contactImg}>
          <img src="/contactImgs/contact.svg" alt=" صورة التواصل" loading="lazy" />
        </div>

      </div>
      <div className={` ${style.map} m-t-16 m-b-16 container`}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.603302434449!2d46.80751092512391!3d24.7404958500483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f01eefec9bbb9%3A0x578ad66b7f81f0c!2z2LPZitin2LHYqtmG2Kc!5e0!3m2!1sar!2seg!4v1755955179466!5m2!1sar!2seg"
          loading="lazy"
          title="خريطة مكتب وسيط أسيا للإستقدام"
        ></iframe>
      </div>
    </section>
  );
}
