import React from "react";
import "./Recruitment_policy.css";
import Layout from "../../layout/layout";
import Contact from "../home/contact-home/Contact-home";
import { FaFilePdf } from "react-icons/fa";

export default function Recruitment_policy() {

    return (

        <Layout>
            <header className="page-header Recruitment_policy-header">
                <div className="container">
                    <h2>
                        سياسات وقوانين الإستقدام داخل الملكة
                    </h2>
                    <p>
                        الدستور والقانون السعودي وضع أهم المعايير والمفاهيم الخاصة بالعمالة المنزلية, التي تضمن جقوق وواجبات كلًا من العامل وصاحب العمل, وإليك أهم سياسات وقوانين الإستقدام داخل المملكة :
                    </p>

                <div className="pdf">
                    <a 
                    href="./imgs/صاحب_العمل.pdf"
                    download
                    >
                         حقوق وواجبات صاحب العمل
                         <FaFilePdf  className="i"/>
                    </a>
                    <a   href="./imgs/العامل.pdf"
                    download>
                         حقوق وواجبات العمالة المنزلية
                         <FaFilePdf className="i"/>

                    </a>
                </div>
                </div>
            </header>
            <Contact />
        </Layout>
    )
}