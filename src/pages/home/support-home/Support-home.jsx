import React from "react";
import style from "./Support-home.module.css";
import '../../../assets/styles/global.css';
import { MdOutlineEmail } from "react-icons/md";
import { PiPhoneBold } from "react-icons/pi";
import { BsSnapchat } from "react-icons/bs";

export default function Support() {

    const contact = [
        {
            icon: <MdOutlineEmail size={30}/>,
            name: 'تواصل معنا عبر الإيميل',
            text: "ساعات العمل: الأحد - الخميس: 8 صباحًا إلى 8 مساءً | السبت: 8 صباحًا إلى 8 مساءً الإتاحة: 24/7",
            contact: "wasitasia1@gmail.com"
        },
        {
            icon: <PiPhoneBold size={30}/>,
            name: "إتصل بنا",
            text: "ساعات العمل: الأحد - الخميس: 8 صباحًا إلى 8 مساءً | السبت: 8 صباحًا إلى 8 مساءً الإتاحة: 24/7",
            contact: "0102103225"
        },
        {
            icon: <BsSnapchat size={30}/>,
            name: "تواصل معنا عبر سناب  شات",
            text: "ساعات العمل: الأحد - الخميس: 8 صباحًا إلى 8 مساءً | السبت: 8 صباحًا إلى 8 مساءً الإتاحة: 24/7",
            contact: "wasit_ld"
        },

    ]
    return (
        <section className={` ${style.support} s-padding`}>

            <div className="container">

                <header className='header-section flex-center'>
                    <h2>
                       فريقنا متواجد لدعمك ومساعدتك
                    </h2>
                    <p>
                        يمكنك التواصل مع طاقمنا المميز بكل سهولة ويسر
                    </p>
                </header>

                <div className={style.support_cards}>
                    {contact.map((contact, i) => (
                        <div className={style.card} key={i}>
                            <div>
                                <span>
                                    {contact.icon}
                                </span>
                                <h3>
                                    {contact.name}
                                </h3>
                                <p>
                                    {contact.text}
                                </p>
                            </div>
                            <div className={style.contact}>
                                <a href={contact.phone}>
                                    <span> {contact.contact} </span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}