import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function ShareArtical({ articleUrl }) {
  return (
    <div style={{ marginTop: "30px", textAlign: "center" }}>
      <h3>شارك المقال</h3>

      {/* فيسبوك */}
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(articleUrl)}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{ margin: "0 10px", fontSize: "30px", color: "#1877F2" }}
      >
        <FaFacebook />
      </a>

      {/* تويتر */}
      <a
        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(articleUrl)}&text=شوفوا المقال ده`}
        target="_blank"
        rel="noopener noreferrer"
        style={{ margin: "0 10px", fontSize: "30px", color: "#1DA1F2" }}
      >
        <FaTwitter />
      </a>

      {/* إنستجرام */}
      <a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ margin: "0 10px", fontSize: "30px", color: "#E4405F" }}
      >
        <FaInstagram />
      </a>
    </div>
  );
}
