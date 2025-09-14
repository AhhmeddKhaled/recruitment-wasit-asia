import React, { useContext } from "react";
import styles from "./ContactUs.module.css";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import Layout from "../../layout/layout";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { ContactContext } from "@shared/context/ContactContext";

const ContactUs = () => {

  const { data } = useContext(ContactContext);

  return (
    <Layout>
    <section id="ditails" className={` ${styles.contactPage} `}>
      <div className={styles.contactHeader}>
        <h1>تواصل معنا</h1>
        <p>يسعدنا تواصلكم معنا عبر القنوات التالية</p>
      </div>

      <div className={styles.contactContainer}>
        <div className={styles.contactDetails}>
          <div className={styles.detailBox}>
            <FaMapMarkerAlt className={styles.icon} />
            <a href="https://www.google.com/maps?q=سيارتنا" target="_blank"> طريق خريص تقاطع شارع عبد الله بن سعود </a>
          </div>

          {data.map((c,i) => (
            <div className={styles.detailBox} key={i}>
            <FaPhone className={styles.icon} />
            <a href={`tel:${c.phone}`}> {c.role} : {c.phone}</a>
          </div>
          ))}

          <div className={styles.detailBox}>
            <FaEnvelope className={styles.icon} />
            <a href="mailto:wasitasis1@gmail.com">wasitasis1@gmail.com</a>
          </div>
        </div>

        {/* العمود الثاني: صورة */}
        <div className={styles.contactIllustration}>
          <img src='/imgs/contact.webp' alt="تواصل معنا" loading="lazy"/>
        </div>
      </div>

      <SocialMedia />
    </section>
    </Layout>
  );
};

export default ContactUs;
