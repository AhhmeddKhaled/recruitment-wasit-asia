import React from "react";
import style from "./RecruitmentPolicy.module.css";
import Layout from "../../layout/layout";
import Contact from "../home/contact-home/Contact-home";
import "../../assets/styles/global.css";
import { FaFilePdf } from "react-icons/fa";
import Button from "../../components/button/Button";
import { Helmet } from "react-helmet-async";

export default function Recruitment_policy() {
    return (
        <>
            <Helmet>
                <title>سياسات الاستقدام | وسيط آسيا</title>
                <meta
                    name="description"
                    content="تعرف على سياسات الاستقدام المعتمدة من وسيط آسيا لضمان حقوق العملاء وسلامة الإجراءات."
                />
                <meta
                    name="keywords"
                    content="سياسات الاستقدام, أنظمة الاستقدام, وسيط آسيا"
                />
            </Helmet>
            <Layout>
                <section className={` ${style.policy} s-padding`}>
                    <section className={` ${style.grid} container `}>
                        <div className={style.policyText}>
                            <h2>
                                <span>
                                    سياسات وقوانين
                                </span>
                                الإستقدام داخل الملكة
                            </h2>
                            <p>
                                الدستور والقانون السعودي وضع أهم المعايير والمفاهيم الخاصة
                                بالعمالة المنزلية, التي تضمن جقوق وواجبات كلًا من العامل وصاحب
                                العمل, وإليك أهم سياسات وقوانين الإستقدام داخل المملكة :
                            </p>

                            <div className={` ${style.pdf}`}>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    size="lg"
                                    startIcon={<FaFilePdf className={style.i} />}
                                >
                                    <a href="./imgs/صاحب_العمل.pdf" download>
                                        {" "}
                                    </a>
                                    حقوق وواجبات صاحب العمل
                                </Button>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    size="lg"
                                    startIcon={<FaFilePdf className={style.i} />}
                                >
                                    <a href="./imgs/العامل.pdf" download>
                                        {" "}
                                    </a>
                                    حقوق وواجبات العمالة المنزلية
                                </Button>

                            </div>
                        </div>
                        <div className={style.img}>
                            <img src="/imgs/سياسات.webp" alt="سياسات الإستقدام" />
                        </div>
                    </section>
                    <Contact />
                </section>
            </Layout>
        </>

    );
}
