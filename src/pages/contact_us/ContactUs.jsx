import React from "react";
import styles from "./ContactUs.module.css";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import Layout from "../../layout/layout";
import Contact from "../home/contact-home/Contact-home";
import SocialMedia from "../../components/socialMedia/SocialMedia";

const ContactUs = () => {
  return (
    <Layout>
    <section className={` ${styles.contactPage} `}>
      <div className={styles.contactHeader}>
        <h1>تواصل معنا</h1>
        <p>يسعدنا تواصلكم معنا عبر القنوات التالية</p>
      </div>

      <div className={styles.contactContainer}>
        <div className={styles.contactDetails}>
          <div className={styles.detailBox}>
            <FaMapMarkerAlt className={styles.icon} />
            <span>الرياض - حي النزهة - الرمز البريدي 13231</span>
          </div>

          <div className={styles.detailBox}>
            <FaPhone className={styles.icon} />
            <span>8003030909</span>
          </div>

          <div className={styles.detailBox}>
            <FaEnvelope className={styles.icon} />
            <span>wasit_asia@gmail.com</span>
          </div>
        </div>

        {/* العمود الثاني: صورة */}
        <div className={styles.contactIllustration}>
          <img src='/imgs/contact.webp' alt="تواصل معنا" />
        </div>
      </div>

      <SocialMedia />
    </section>
    </Layout>
  );
};

export default ContactUs;
