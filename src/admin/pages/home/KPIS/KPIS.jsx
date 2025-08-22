import React from "react";
import style from './KPIS.module.css';
import { FaUsers, FaFileAlt, FaBriefcase, FaChartLine, FaArrowUp, FaArrowDown } from "react-icons/fa";

export default function KPIS() {
 const data = [
    {
      title: "الخادمات",
      value: "120",
      icon: <FaUsers className="h-6 w-6 text-blue-600" />,
      change: "+12%",
      positive: true,
    },
    {
      title: "نقل الكفالة",
      value: "45",
      icon: <FaBriefcase className="h-6 w-6 text-green-600" />,
      change: "+5%",
      positive: true,
    },
    {
      title: "المقالات",
      value: "32",
      icon: <FaFileAlt className="h-6 w-6 text-purple-600" />,
      change: "0%",
      positive: null, // لا موجب ولا سالب
    },
    {
      title: "المستخدمين",
      value: "210",
      icon: <FaChartLine className="h-6 w-6 text-orange-600" />,
      change: "-3%",
      positive: false,
    },
  ];

    return (
        <section className={style.kpis}>
                <header className="header-section">
                <h2> إحصائيات </h2>
                </header>
            <div className={style.grid}>
       {data.map((kpi, index) => (
        <div
          key={index}
          className={style.card}
        >
          <div>
            <h3>{kpi.title}</h3>
            <p className={style.value}>{kpi.value}</p>
            {kpi.positive !== null && (
              <p className={` ${style.positive} ${kpi.positive ? style.green : style.red} `} >
                {kpi.positive ? <FaArrowUp /> : <FaArrowDown />}
                {kpi.change}
              </p>
            )}
            {kpi.positive === null && (
              <p>بدون تغيير</p>
            )}
          </div>
          <div className={style.icon}>{kpi.icon}</div>
        </div>
      ))}
            </div>
        </section>
    )
}