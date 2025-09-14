import React, { useContext } from "react";
import style from "./Support-home.module.css";
import '../../../assets/styles/global.css';
import { MdOutlineEmail } from "react-icons/md";
import { PiPhoneBold } from "react-icons/pi";
import { BsSnapchat } from "react-icons/bs";
import { ContactContext } from '@shared/context/ContactContext'
import HeaderSection from "../../../components/headerSection/HeaderSection";
export default function Support() {

    const { data } = useContext(ContactContext);
    console.log(data);

    return (
        <section className={` ${style.support} s-padding`}>

            <div className="container">

                <HeaderSection title='فريقنا متواجد لدعمك ومساعدتك' paragraph="يمكنك التواصل مع طاقمنا المميز بكل سهولة ويسر" />


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

                            <a href="https://www.snapchat.com/add/wasitasia?share_id=PySKLa_xTui_1BoszDj4Cw&locale=ar_SA@calendar=gregorian;numbers=latn"
                                target="_blanck">
                                <span> wasitasia </span>
                            </a>
                        </div>
                    </div>
                    {data.map((c, i) => (
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
                                <a href={`tel:20${c.phone}`}>
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