import React, { useEffect, useState } from "react";
import style from "./Articals.module.css";
import Layout from "../../layout/layout";
import { Link } from "react-router-dom";
import ShareArtical from "./shareArtical";
import '../../assets/styles/global.css';

export default function Articals() {

  const [articals, setArticals] = useState([]);

  const slugify = (title) => {
    return `${title.toLowerCase().replace(/\s+/g, '-')}`;

  }
  useEffect(() => {
    fetch("http://localhost:5000/api/articals")
      .then((res) => res.json())
      .then((data) => setArticals(data))
      .catch((err) => console.log(err))
  }, [])
  return (
    <Layout>
      <header className={style.artical_header}>
        <div className={`container header-section`}>
          <h2> مقالات </h2>
          <p> بعض المقالات والنصائح التي تساعدك في عملية الإستقدام</p>
        </div>
      </header>

      <section className={` ${style.articals_grid} container`}>
        {articals.map(artical => {
          
        return (

        <Link to={`/articals/${slugify(artical.title)}`} key={artical._id}>
          <div className={style.artical}>
            <div className={style.img}>
              <img src={`http://localhost:5000${artical.img}`} alt="img" />
            </div>
            <div className={style.info}>
              <h3> {artical.title} </h3>
              <p>
                {artical.paragraph}
              </p>
              <ShareArtical />
            </div>
          </div>
        </Link>
        )
})}
      </section>
    </Layout>
  );
}
