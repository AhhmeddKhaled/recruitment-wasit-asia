import React, { useContext, useEffect, useState } from "react";
import style from './LocalWorkers.module.css';
import '../../assets/styles/global.css';
import Button from "../../components/button/Button";
import Layout from "../../layout/layout";
import WorkerInput from "../../components/WorkerInput.jsx/WorkerInput";
import { WorkersContext } from "../../context/WorkersContext";
import { FaCheck } from "react-icons/fa";
import { handleDownload } from "../../utilities/handleDownload";
import Message from "../../components/message/Message";

export default function LocalWorkers() {

    const { localWorkers, fetchWorkers } = useContext(WorkersContext);
    const [message,setMessage] = useState('');

    useEffect(() => {
        fetchWorkers('local');
    }, []);
   useEffect(() => {
    if (!message) return;

    const timer = setTimeout(() => {
      setMessage("");
    }, 3000);

    return () => clearTimeout(timer);
  }, [message]);


    return (
        <Layout>
            <section className={` ${style.localWorkers} s-padding`}>
                <div className={`container`}>
                    <WorkerInput type={'local'} />

                    {localWorkers.length === 0 && <p className={style.not}> لا يوجد عمال بهذه البيانات </p>}
                    <div className={style.workers}>
                        {message.message &&
                        <Message status={message.success}>
                            {message.message}
                        </Message>
                    }
                        {localWorkers.map((worker, i) => (
                            <div className={style.card} key={i}>
                                <div className={style.header}>
                                    <div>
                                        <img src={`/server${worker.cv}`} alt="السيرة الذاتية" className={style.avatar} loading="lazy" />
                                        <h3 className={style.name}>{worker.name}</h3>
                                    </div>
                                    <p className={style.workerNumber}>
                                        رقم العامل: <span>0102103225</span>
                                    </p>
                                </div>

                                <div className={style.details}>
                                    <div className={style.detailRow}>
                                        <span>الجنسية</span>
                                        <span>{worker.nationality
                                        }</span>
                                    </div>
                                    <div className={style.detailRow}>
                                        <span>الديانة</span>
                                        <span>{worker.religion}</span>
                                    </div>
                                    <div className={style.detailRow}>
                                        <span>العمر</span>
                                        <span>{worker.age}</span>
                                    </div>
                                    <div className={style.detailRow}>
                                        <span>الحالة</span>
                                        <span>{worker.maritalStatus}</span>
                                    </div>
                                    <div className={style.detailRow}>
                                        <span>المهارات</span>
                                        <span>
                                            {worker.skills.map((skill, index) => (
                                                <strong key={index}>
                                                    <FaCheck />
                                                    {skill}
                                                </strong>
                                            ))}
                                        </span>
                                    </div>
                                </div>

                                <div className={` ${style.buttons} flex-center`}>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        size="lg"
                                        onClick={() => handleDownload(worker,setMessage)}
                                    >
                                        احجز الآن
                                        <a
                                            href={`http://localhost:5000${worker.cv}`}
                                            download={`http://localhost:5000${worker.cv}`}
                                        >
                                        </a>

                                    </Button>

                                    <Button variant="outlined" color="primary" size="lg">
                                        <a
                                            href={`http://localhost:5000${worker.cv}`}
                                            download={`http://localhost:5000${worker.cv}`}
                                        >
                                        </a>

                                        تنزيل السيرة

                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    )
}