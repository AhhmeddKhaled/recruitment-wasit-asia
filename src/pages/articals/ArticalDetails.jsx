import React, { useEffect, useState } from "react";
import "./Articals.css";
import { useParams } from "react-router-dom";
import ShareArtical from "./shareArtical";
import Header_routes from "../../components/header-routes/Header-routes";

export default function ArticalDetails() {

  const slugify = (title) => {
    return `${title.toLowerCase().replace(/\s+/g, '-')}`;

  }
  
  const { slug } = useParams();

  const title = slug.split('-').splice(0,-1).join(' ');
  const id = slug.split('-').pop();
  
  const [artical, setArtical] = useState({});

  useEffect(() => {

    const fetchArtical = async () => {

      try {
        const res = await fetch(`http://localhost:5000/api/articals`);
        const data = await res.json();
        
        const matched = data.find((a) => slugify(a.title) === slug);
        
        setArtical(matched);
      } 
      catch(err) {
        console.error(err)
      }
    }

    fetchArtical();
  }, [slug]);

  if (!artical || !artical.title) {
    return <p>جاري التحميل...</p>;
  }


  return (
    <>
    <Header_routes />
    <div className="artical-dev">
      
    <div className='artical artical-d'>
      <div className="img">
        <img
          src={`http://localhost:5000${artical.img}`}
          alt={artical.title}
        />
      </div>
      <div className="info">
        <h3>{artical.title}</h3>
        <p>
          {artical.paragraph}
        </p>
        <ShareArtical />
      </div>
    </div>
    </div>
          </>
  );
}
