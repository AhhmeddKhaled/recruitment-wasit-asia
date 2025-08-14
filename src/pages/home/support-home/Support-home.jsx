import React from "react";
import "./Support-home.css";
import { FaWhatsapp, FaPhone  } from 'react-icons/fa'; 

export default function Support() {

    const contact = [
        {
            name: "أ.مصطفي حسين",
            phone: "0102103225",
            whatsup: "0102103225"
        },
          {
            name: "أ.مصطفي حسين",
            phone: "0102103225",
            whatsup: "0102103225"
        },
          {
            name: "أ.مصطفي حسين",
            phone: "0102103225",
            whatsup: "0102103225"
        },
          {
            name: "أ.مصطفي حسين",
            phone: "0102103225",
            whatsup: "0102103225"
        }
    ]
    return (
        <section className="support container">
            <header className="header-section">
                <h2>
                    خدمة العملاء والمبيعات
                </h2>
                <p>
                    يمكنك التواصل مع طاقمنا المميز بكل سهولة ويسر
                </p>
            </header>

            <div className="support-cards">
                {contact.map((contact, i) => (
                    <div className="support-card" key={i}>
                <div className="support-img">
                    <img src="/imgs/support.webp" alt="support img" />
                </div>
                <div>
                    <h3>
                        {contact.name}
                    </h3>
                </div>
                <div className="contact-icons">
                    <a href={contact.whatsup} >
                    <FaWhatsapp  color="green" className="icon"/>
                    </a>

                    <a href={contact.phone}>
                    <FaPhone   color="blue" className="icon"/>
                    </a>
                </div>
            </div>
))}
            </div>
        </section>
    )
}