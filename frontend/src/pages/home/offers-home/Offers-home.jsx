import React from "react";
import useInView from "../../../hooks/useInView";
import style from "./Offers-home.module.css";
import Button from "../../../components/button/Button";
import { useFetchData } from "../../../hooks/useFetchData";
import Container from "../../../components/container/Container";
import HeaderSection from "../../../components/headerSection/HeaderSection";

export default function Offers() {
  const { data } = useFetchData("http://localhost:5000/api/countries");

  const { setRefs } = useInView({
    threshold: 0.3,
    onEnter: data,
  });

  return (
    <section
      id="countries"
      className={style.offers}
      ref={(el) => setRefs(el, 0)}
    >
      <Container>

        {/* Header Component  */}
        <HeaderSection title='عروضنا' paragraph='اختر الدولة المناسبة واستمتع بأفضل الأسعار' />

        <div className={style.offers_grid}>
          {data.length > 0 ? (
            data.map((country) => (
              <div className={style.offer_card} key={country._id}>
                <div className={style.cardImg}>
                <img
                  src={country.flag}
                  alt="علم الدولة"
                  loading="lazy"
                  width="60"
                  height="60"
                  />
                  </div>
                <div className={style.text}>
                <h4>{country.name}</h4>
                <p>{country.description}</p>
                <span>{country.salary} ريال</span>
                <Button variant="contained" size="md" link="طلب_إستقدام">
                  أطلب الآن
                </Button>
                </div>
              </div>
            ))
          ) : (
            <p style={{ textAlign: "center" }}>جاري التحميل...</p>
          )}
        </div>
      </Container>
    </section>
  );
}
