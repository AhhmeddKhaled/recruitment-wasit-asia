import React, { useContext, useEffect } from "react";
import style from "./Support-home.module.css";
import '../../../assets/styles/global.css';
import { MdOutlineEmail } from "react-icons/md";
import { PiPhoneBold } from "react-icons/pi";
import { BsSnapchat } from "react-icons/bs";
import { ContactContext } from '../../../data/AllProviders/ContactContext'
export default function Support() {

    const { contact } = useContext(ContactContext);

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
                        <div className={style.card}>
                            <div>
                                <span>
                                    <MdOutlineEmail size={30} />                           
                                </span>
                                <h3>
                                    تواصل معنا عبر الإيميل
                                </h3>
                                <p>
                                    ساعات العمل: الأحد - الخميس: 8 صباحًا إلى 8 مساءً | السبت: 8 صباحًا إلى 8 مساءً
                                </p>
                            </div>
                            <div className={style.contact}>
                                <a href='mailto:wasitasia1@gmail.com'>
                                    <span> wasitasia1@gmail.com </span>
                                </a>
                            </div>
                        </div>
                         <div className={style.card}>
                            <div>
                                <span>
                                    <BsSnapchat size={30} />                           
                                </span>
                                <h3>
                                    تواصل معنا عبر سناب
                                </h3>
                                <p>
                                    ساعات العمل: الأحد - الخميس: 8 صباحًا إلى 8 مساءً | السبت: 8 صباحًا إلى 8 مساءً
                                </p>
                            </div>
                            <div className={style.contact}>
                              
                                <a href=''>
                                    <span> wasit_LD </span>
                                </a>
                            </div>
                        </div>
                    {contact.map((c, i) => (
                        <div className={style.card} key={i}>
                            <div>
                                <span>
                                    <PiPhoneBold size={30} />                           
                                </span>
                                <h3>
                                    إتصل بنا
                                </h3>
                                <p>
                                    ساعات العمل: الأحد - الخميس: 8 صباحًا إلى 8 مساءً | السبت: 8 صباحًا إلى 8 مساءً
                                </p>
                            </div>
                            <div className={style.contact}>
                                <span>
                                    قسم : {c.role}
                                </span>
                                <a href={c.phone}>
                                    <span> الهاتف : {c.phone} </span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}