import React from "react";
import style from "./Support-home.module.css";
import '../../../assets/styles/global.css';
import { FaWhatsapp, FaPhone } from 'react-icons/fa';

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
        <section className={` ${style.support} s-padding`}>

            <div className="container">

                <header className='header-section flex-center'>
                    <h2>
                        خدمة العملاء والمبيعات
                    </h2>
                    <p>
                        يمكنك التواصل مع طاقمنا المميز بكل سهولة ويسر
                    </p>
                </header>

                <div className={style.support_cards}>
                    {contact.map((contact, i) => (
                        <div className={style.support_card} key={i}>
                            <div className={style.support_img}>
                                <img src="/imgs/support.webp" alt="support img" />
                            </div>
                            <div>
                                <h3>
                                    {contact.name}
                                </h3>
                            </div>
                            <div className={style.contact_icons}>
                                <a href={contact.whatsup} >
                                    <FaWhatsapp color="green" className={style.icon} />
                                </a>

                                <a href={contact.phone}>
                                    <FaPhone color="blue" className={style.icon} />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}