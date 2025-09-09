import React, { useRef, useState } from "react";
import style from "./Contact-home.module.css";
import '../../../assets/styles/global.css'
import {
  FaUser,
  FaPhoneAlt,
  FaPen,
  FaComment,
  FaPaperPlane,
} from "react-icons/fa";
import Button from "../../../components/button/Button";
import Message from '../../../components/message/Message';
import { handleSend } from "../../../logic/handleSendContact";

export default function Contact() {
  const [name,setName] = useState(''); 
  const [phone,setPhone] = useState(''); 
  const [subject,setSubject] = useState(''); 
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSend({name,phone,subject,message})
  }
  return (
    <section id="contact" className={`${style.login} s-padding`}>
      <div className={` ${style.grid} container`}>
        <div className={style.login_form}>
          <h2> تواصل معنا </h2>
          <form className={style.contact} onSubmit={handleSubmit}>
            {message.message && <Message status={message.status}>{message.message}</Message>}

            {/* Input Name */}
            <div className={style.name}>
              <label htmlFor="name">
                <FaUser /> الأسم كاملاً
              </label>
              <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>

            {/* Input Phone  */}
            <div className={style.phone}>
              <label htmlFor="number">
                <FaPhoneAlt /> رقم الهاتف
              </label>
              <input type="phone" id="number" value={phone} onChange={(e) => setPhone(e.target.value)} required />
            </div>

            {/* Input Subject  */}
            <div className={style.select}>
              <label htmlFor="select">
                <FaComment /> الموضوع
              </label>
              <select id="select" value={subject} onChange={(e) => setSubject(e.target.value)}>
                <option disabled selected value=' '>  </option>
                <option> إستفسار </option>
                <option> خدمة </option>
                <option> شكوي </option>
              </select>
            </div>

            {/* Input Message  */}
            <div className={style.mass}>
              <label htmlFor="mass">
                <FaPen /> أكتب رسالتك
              </label>
              <textarea id="mass" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
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
