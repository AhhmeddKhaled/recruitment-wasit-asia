import React, { useEffect, useState } from "react";
import style from "./Offers-home.module.css";
import { Link } from "react-router-dom";
import Button from "../../../components/button/Button";
import "../../../assets/styles/global.css";
import {
  FaPhone,
  FaWhatsapp,
  FaTachometerAlt,
  FaShieldAlt,
  FaHeadset,
} from "react-icons/fa";

export default function Offers() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/countries")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <section id="countries" className={` ${style.offers}`}>
      <div className="container">
        <header className="header-section">
          <h2> عروضنا </h2>
          <p> اختر الدولة المناسبة واستمتع بافضل الاسعار </p>
        </header>

        <div className={style.offers_grid}>
          {countries.map((country) => (
            <div className={style.offer_card} key={country._id}>
              <img src={country.flag} alt="flag img" loading="lazy"/>
              <h4> {country.name} </h4>
              <p> {country.description} </p>
              <span> {country.salary} ريال </span>
              <Button variant="contained" size="md">
                <Link to="/طلب_إستقدام"></Link>
                أطلب الأن
              </Button>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
