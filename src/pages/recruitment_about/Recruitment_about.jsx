import React from "react";
import "./Recruitment_about.css";
import Layout from "../../layout/layout";
import Statistics from "../home/statistics-home/Statistics-home";

export default function Recruitment_about() {

    return (
        <Layout>
            <div className="Recruitment_about">
            <header className="page-header rec-header">
                <div className="container">
                    <h2>
                        تعاقد الإستقدام
                    </h2>
                    <p>
                        الدستور والقانون السعودي وضع أهم المعايير والمفاهيم الخاصة بالعمالة المنزلية, التي تضمن جقوق وواجبات كلًا من العامل وصاحب العمل, وإليك أهم سياسات وقوانين الإستقدام داخل المملكة :
                    </p>
                </div>
            </header>

            <div className="rec-start">
                <div className="container">
                <div className="info">
                    يتم الإتفاق على الراتب بالتنسيق مع صاحب العمل والعمالة المنزلية, كما يتم توضيح كافة الشروط والأجكام للحفاظ على حقوق وواجبات كل الأطراف, والمكتب يقم بصورة دورية بمتابعة الطلب للتأكد من التزام الجميع بالعقد المبرم, كل ما عليك فعله فقط إختيار العمالة المنزلية الملائمة لك.
                </div>
                <div className="img">
                    <img src="/imgs/تعاقد.jpg" alt="" />
                </div>
            </div>
                </div>

            <div className="rec-proc">
                <div className="container">
                <h3> عمليات الإستقدام </h3>
                <div className="rec-grid">
                    <div>
                        <h4>1</h4>
                        <span> تخليص اجراءات الإستقدام </span>
                        <p> يتم المساعدة في تلخيص الإجراءات الخاصة بالعامل</p>
                    </div>
                    <div>
                        <h4>1</h4>
                        <span> تخليص اجراءات الإستقدام </span>
                        <p> يتم المساعدة في تلخيص الإجراءات الخاصة بالعامل</p>
                    </div>
                    <div>
                        <h4>1</h4>
                        <span> تخليص اجراءات الإستقدام </span>
                        <p> يتم المساعدة في تلخيص الإجراءات الخاصة بالعامل</p>
                    </div>
                    <div>
                        <h4>1</h4>
                        <span> تخليص اجراءات الإستقدام </span>
                        <p> يتم المساعدة في تلخيص الإجراءات الخاصة بالعامل</p>
                    </div>
                    <div>
                        <h4>1</h4>
                        <span> تخليص اجراءات الإستقدام </span>
                        <p> يتم المساعدة في تلخيص الإجراءات الخاصة بالعامل</p>
                    </div>
                    <div>
                        <h4>1</h4>
                        <span> تخليص اجراءات الإستقدام </span>
                        <p> يتم المساعدة في تلخيص الإجراءات الخاصة بالعامل</p>
                    </div>
                </div>
                </div>
            <svg xmlns="htpp://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#2D5C7F" fill-Opacity=".5" 
                d="M0,224L1440,0L1440,0L0,0Z"></path> 
                <path fill="#2D5C7F" fill-Opacity=".5" 
                d="M0,32L1440,256L1440,0L0,0Z"></path>
            </svg>
            </div>

            <Statistics />
            </div>
        </Layout>
    )
}