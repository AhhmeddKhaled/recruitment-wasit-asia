import React, { useContext } from "react";
import style from "./Articals.module.css";
import Layout from "../../layout/layout";
import { Link } from "react-router-dom";
import ShareArtical from "./shareArtical";
import '../../assets/styles/global.css';
import { ArticalsContext } from "@shared/context/ArticalsContext";
import { Helmet } from "react-helmet-async";

export default function Articals() {
  const slugify = (title) => {
    return `${title.toLowerCase().replace(/\s+/g, '-')}`;
  }

  const { data } = useContext(ArticalsContext);

  return (
    <>
      <Helmet>
        <title> المقالات | وسيط آسيا</title>
        <meta name="description" content="تعرف على خدمات وسيط آسيا وخبرتنا في الاستقدام." />
        <meta name="keywords" content="وسيط آسيا, استقدام, من نحن" />
      </Helmet>
      <Layout>
        <main className={style.articals}>
          <header className={style.artical_header}>
            <div className={`container header-section flex-center`}>
              <h2> مقالات </h2>
              <p> بعض المقالات والنصائح التي تساعدك في عملية الإستقدام</p>
            </div>
          </header>

          <section className={` ${style.articals_grid} container`}>
            {data.map((artical, i) => {

              return (
                <div className={style.artical} key={i}>
                  <div className={style.img}>
                    <img src={`${import.meta.env.VITE_API_URL}${artical.img}`} alt="img" loading="lazy" />
                  </div>
                  <div className={style.info}>
                    <Link to={`/articals/${slugify(artical.title)}`} key={artical._id}>
                      <h3> {artical.title} </h3>
                    </Link>
                    <p>
                      {artical.paragraph}
                    </p>
                    <ShareArtical />
                  </div>
                </div>
              )
            })}
          </section>
        </main>
      </Layout>
    </>

  );
}
