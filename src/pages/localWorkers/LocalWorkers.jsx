import React from "react";
import style from './LocalWorkers.module.css';
import '../../assets/styles/global.css';
import Button from "../../components/button/Button";
import Layout from "../../layout/layout";
import WorkerInput from "../../components/WorkerInput.jsx/WorkerInput";

export default function LocalWorkers() {

    return (
        <Layout>
            <section className="s-padding">
                <div className="container">

                    <WorkerInput />
                    <div className={style.card}>
                        <div className={style.header}>
                            <div>
                                <img src="/imgs/logo.png" alt="" className={style.avatar} />
                                <h3 className={style.name}>Ahmed</h3>
                            </div>
                            <p className={style.workerNumber}>
                                رقم العامل: <span>0102103225</span>
                            </p>
                        </div>

                        <div className={style.details}>
                            <div className={style.detailRow}>
                                <span>الجنسية</span>
                                <span>مصري</span>
                            </div>
                            <div className={style.detailRow}>
                                <span>الديانة</span>
                                <span>مسلم</span>
                            </div>
                            <div className={style.detailRow}>
                                <span>العمر</span>
                                <span>25</span>
                            </div>
                            <div className={style.detailRow}>
                                <span>رقم الجواز</span>
                                <span>01025222</span>
                            </div>
                        </div>

                        <div className={` ${style.buttons} flex-center`}>
                            <Button variant="contained" color="primary" size="lg">احجز الآن</Button>

                            <Button variant="outlined" color="primary" size="lg">تنزيل السيرة</Button>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}