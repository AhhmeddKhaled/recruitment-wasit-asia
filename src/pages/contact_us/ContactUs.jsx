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
            <a href="https://www.google.com/maps?q=سيارتنا" target="_blank">الرياض - حي النزهة - الرمز البريدي 13231</a>
          </div>

          <div className={styles.detailBox}>
            <FaPhone className={styles.icon} />
            <a href="tel:">8003030909</a>
          </div>

          <div className={styles.detailBox}>
            <FaEnvelope className={styles.icon} />
            <a href="mailto:wasitasis1@gmail.com">wasitasis1@gmail.com</a>
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
