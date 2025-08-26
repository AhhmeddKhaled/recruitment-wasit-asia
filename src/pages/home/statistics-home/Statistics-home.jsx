import React from "react";
import style from "./Statistics-home.module.css";
import '../../../assets/styles/global.css';
import { FaCheckCircle, FaHandshake , FaClock } from "react-icons/fa";

export default function Statistics() {

    const StatisticsList  = [
        {
            icon: <FaClock className="icon"/>,
            number: 8950,
            name: 'طلبات استقدام'
        },
         {
            icon: <FaCheckCircle className="icon"/>,
            number: 645,
            name: 'عقود تمت بنجاح',
        },
         {
            icon: <FaHandshake className="icon"/>,
            number: 8543,
            name: 'عميل راضي عن الخدمة'
         }
    ]

    return (
        <section className={`${style.statistics} container s-padding`}>
            <header className="header-section flex-center">
                <h2>
                    احصائيات
                </h2>
                <p>
                    احصائيات نفتخر فيها ...
                </p>
            </header>
            <div className={style.Statistics_boxs}>
                {StatisticsList.map((Statistic,i) => (
                    <div className={style.box} key={i}>
                    <span className={style.icon}>
                        {Statistic.icon}
                    </span>
                   <span> {Statistic.number} </span>
                    <span className={style.name}>
                        {Statistic.name}
                    </span>
                </div>
                ))}
            </div>
        </section>
    )
}