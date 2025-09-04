import React, { useEffect, useState } from "react";
import style from "./Offers-home.module.css";
import Button from "../../../components/button/Button";
import "../../../assets/styles/global.css";

export default function Offers() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/countries");
        if (!res.ok) throw new Error("فشل تحميل البيانات");
        const data = await res.json();
        setCountries(data);
      } catch (err) {
        console.error("Error fetching countries:", err);
        setError("حدث خطأ أثناء تحميل البيانات");
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  if (loading) {
    return (
      <section className={style.offers}>
        <div className="container">
          <p>جاري تحميل الدول...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className={style.offers}>
        <div className="container">
          <p>{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section id="countries" className={style.offers}>
      <div className="container">
        <header className="header-section">
          <h2>عروضنا</h2>
          <p>اختر الدولة المناسبة واستمتع بأفضل الأسعار</p>
        </header>

        <div className={style.offers_grid}>
          {countries.map((country) => (
            <div className={style.offer_card} key={country._id}>
              <img
                src={country.flag}
                alt={`علم ${country.name}`}
                loading="lazy"
                width="80"
                height="80"
              />
              <h4>{country.name}</h4>
              <p>{country.description}</p>
              <span>{country.salary} ريال</span>
              <Button variant="contained" size="md" link="طلب_إستقدام">
                أطلب الآن
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
