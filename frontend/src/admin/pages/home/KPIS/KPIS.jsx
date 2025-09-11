import React, { useContext, useEffect, useState } from "react";
import style from './KPIS.module.css';
import { FaUsers, FaFileAlt, FaBriefcase, FaChartLine } from "react-icons/fa";
import { WorkersContext } from "../../../../context/WorkersContext";
import { ArticalsContext } from "../../../../context/ArticalsContext";

export default function KPIS() {

  const { recruitmentWorkers, localWorkers, fetchWorkers } = useContext(WorkersContext);
  const { dataLength } = useContext(ArticalsContext);
  const [users,setUsers] = useState([]);

  useEffect(() => {
    const getData = async () => {
      fetchWorkers('recruitmentWorkers');
      fetchWorkers('localWorkers');

      try {
        const res = await fetch('http://localhost:5000/api/auth');
        setUsers(await res.json());
      } catch (err) {
        console.error(err);
      }
    };

    getData();
  }, []);

  const Data = [
    {
      title: "إستقدام",
      value: recruitmentWorkers.length,
      icon: <FaUsers size={24}/>,
    },
    {
      title: "كفالة",
      value: localWorkers.length,
      icon: <FaBriefcase size={24}/>,
    },
    {
      title: "المقالات",
      value: dataLength,
      icon: <FaFileAlt size={24}/>,
    },
    {
      title: "المستخدمين",
      value: users.length,
      icon: <FaChartLine size={24}/>,
    },
  ];

  return (
    <section className={style.kpis}>
      <header className="header-section">
        <h2> إحصائيات </h2>
      </header>
      <div className={style.grid}>
        {Data.map((kpi, index) => (
          <div
            key={index}
            className={style.card}
          >
            <div>
              <h3>{kpi.title}</h3>
              <p className={style.value}>{kpi.value}</p>

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