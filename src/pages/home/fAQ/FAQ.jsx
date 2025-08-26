import React, { useState } from "react";
import style from "./FAQ.module.css";
import { FaPlus, FaMinus } from "react-icons/fa";
import Button from "../../../components/button/Button";
import { Link } from "react-router-dom";

const faqData = [
    {
        question: "ما هي المستندات المطلوبة للاستقدام؟",
        answer: "عادةً نحتاج إلى الهوية الوطنية، سجل الأسرة، وبعض المستندات الخاصة بالمهنة المطلوبة."
    },
    {
        question: "كم تستغرق عملية الاستقدام؟",
        answer: "تختلف المدة حسب الدولة والمهنة، لكنها غالبًا بين 30 إلى 90 يوم."
    },
    {
        question: "هل يمكن تتبع الطلب؟",
        answer: "نعم، يمكنك متابعة حالة طلبك عبر لوحة التحكم الخاصة بك."
    },
    {
        question: "هل توجد ضمانات على العمالة المستقدمة؟",
        answer: "نقدم فترة تجربة وضمان استبدال في حال عدم المطابقة للشروط."
    }
];

export default function Faq() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className={` ${style.faqSection} s-padding`}>
            <div className={` container ${style.faqContainer}`}>
                <header className="header-section">
                    <h2 className={style.sectionTitle}>الأسئلة الشائعة</h2>
                </header>
                <div className={style.faqList}>
                    {faqData.map((item, index) => (
                        <div key={index} className={style.faqItem}>
                            <button
                                className={`${style.faqQuestion} ${activeIndex === index ? style.active : ""}`}
                                onClick={() => toggleFAQ(index)}
                            >
                                <span>{item.question}</span>
                                {activeIndex === index ? (
                                    <FaMinus className={style.icon} size={30}/>
                                ) : (
                                    <FaPlus className={style.icon} size={30}/>
                                )}
                            </button>
                            {activeIndex === index && (
                                <p className={style.faqAnswer}>{item.answer}</p>
                            )}
                        </div>
                    ))}

                    <div className={style.faqButton}>
                    <Button variant="contained" color="primary" size="hero">
                        <Link to="/تواصل_معنا"></Link>
                        إسأل وسيط أسيا
                    </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
