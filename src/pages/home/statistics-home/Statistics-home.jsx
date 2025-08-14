import React from "react";
import "./Statistics-home.css";
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
        <section className="statistics  container">
            <header className="header-section">
                <h2>
                    احصائيات
                </h2>
                <p>
                    احصائيات نفتخر فيها ...
                </p>
            </header>
            <div className="Statistics-boxs">
                {StatisticsList.map((Statistic,i) => (

                    <div className="box" key={i}>
                    <span className="icon">
                        {Statistic.icon}
                    </span>
                    <span className="number">
                        {Statistic.number}
                    </span>
                    <span className="name">
                        {Statistic.name}
                    </span>
                </div>
                ))}
            </div>
        </section>
    )
}