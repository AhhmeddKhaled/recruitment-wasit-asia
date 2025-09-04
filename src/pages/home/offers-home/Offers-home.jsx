import React, { useState } from "react";
import useInView from "../../../hooks/useInView";
import style from "./Offers-home.module.css";
import Button from "../../../components/button/Button";

export default function Offers() {
  const [countries, setCountries] = useState([]);

  const fetchCountries = () => {
    fetch("http://localhost:5000/api/countries")
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((err) => console.error(err));
  };

  const { setRefs } = useInView({
    threshold: 0,
    onEnter: fetchCountries,
  });

  return (
    <section
      id="countries"
      className={style.offers}
      ref={(el) => setRefs(el, 0)}
    >
      <div className="container">
        <header className="header-section">
          <h2> عروضنا </h2>
          <p> اختر الدولة المناسبة واستمتع بأفضل الأسعار </p>
        </header>

        <div className={style.offers_grid}>
          {countries.length > 0 ? (
            countries.map((country) => (
              <div className={style.offer_card} key={country._id}>
                <img
                  src={country.flag}
                  alt="علم الدولة"
                  loading="lazy"
                  width="100"
                  height="100"
                />
                <h4>{country.name}</h4>
                <p>{country.description}</p>
                <span>{country.salary} ريال</span>
                <Button variant="contained" size="md" link="طلب_إستقدام">
                  أطلب الآن
                </Button>
              </div>
            ))
          ) : (
            <p style={{ textAlign: "center" }}>جاري التحميل...</p>
          )}
        </div>
      </div>
    </section>
  );
}
