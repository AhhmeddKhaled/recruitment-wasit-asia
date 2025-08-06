import React from "react";
import "./Recruitment-request.css";
import Layout from "../../layout/layout";
import { Link } from "react-router-dom";
import {
  FaBriefcase,
  FaChartLine,
  FaFlag,
  FaHourglassHalf 
} from "react-icons/fa";
import { GiStarKey  } from "react-icons/gi";

export default function Recruitment_request() {

    return (

        <Layout>
        <div className="Recruitment_request">
            <header>
                <p>
                    <span> </span>
                    <Link to={'/'}> الرئيسية </Link>
                    <span> / </span>
                    <Link to={'/طلب_إستقدام'}> طلب إستقدام  </Link>
                </p>
            </header>
            <div className="cv_inputs container">
                <h3> بحث متقدم </h3>
                <div className="inputs">
                    <div className="input-head">
                        <h4>
                            <FaHourglassHalf className="icon" /> 
                            العمر
                            
                             </h4>
                    <select name="العمر" id="">
                        <option> الكل </option>
                        <option> من 20 إلى 30</option>
                        <option> من 31 إلى 40</option>
                        <option> من 41 إلى 50</option>
                    </select>
                    </div>

                    <div className="input-head">
                        <h4>  <FaBriefcase className="icon"/>المهنة</h4>
                    <select name="المهنة" id="">
                        <option> الكل </option>
                        <option> عامل منزلي </option>
                        <option> عاملة منزلية </option>
                        <option> سائق خاص</option>
                    </select>
                </div>

                    <div className="input-head">
                        <h4> <GiStarKey className="icon" />الديانة </h4>

                       <select name="الديانة" id="">
                        <option> الكل </option>
                        <option> مسلم/ة </option>
                        <option> مسيحي/ة </option>
                    </select>
                    </div>

                    <div className="input-head">
                        <h4> <FaChartLine className="icon"/> الخبرة </h4>
                       <select name="الخبرة" id="">
                        <option> الكل </option>
                        <option> لديه خبرة سابقى</option>
                        <option> قادم جديد</option>
                    </select>
                    </div>

                    <div className="input-head">
                        <h4> <FaFlag className="icon"/> الجنسية </h4>
                        
                       <select name="الجنسية" id="">
                        <option> الكل </option>
                        <option> الهند</option>
                        <option> أثيوبيا </option>
                        <option> كينيا </option>
                        <option> أوغندا </option>
                        <option> الفلبين </option>
                        <option> برولدي </option>
                    </select>
                    </div>
                <div className="send">
                    <button type="submit">
                        تطبيق
                    </button>
                </div>
                </div>
                <div className="all-cv">
                    <div className="cv">
                        <img src="/imgs/cv.jpg" alt="" />
                        <div className="cv-info">
                            <span>
                                الجنسية:
                            </span>
                            <span>
                                المهنة:
                            </span>
                            <span>
                                اليانة:
                            </span>
                            <span>
                                سعر الإستقدام : 
                            </span>
                            <span>
                                الحالة الإجتماعية :
                            </span>
                            <span>
                                الخبرة العملية : 
                            </span>
                            <p> لضمان حقك, لا تم سداد أي رسوم بعد الحجز إلا من خلال وسيط أسيا</p>
                        </div>
                        <div className="cv-bottom">
                            <span> حجز السيرة الذاتية </span>
                            <span> تنزيل السيرة الذاتية </span>
                        </div>
                    </div>


                      <div className="cv">
                        <img src="/imgs/cv.jpg" alt="" />
                        <div className="cv-info">
                            <span>
                                الجنسية:
                            </span>
                            <span>
                                المهنة:
                            </span>
                            <span>
                                اليانة:
                            </span>
                            <span>
                                سعر الإستقدام : 
                            </span>
                            <span>
                                الحالة الإجتماعية :
                            </span>
                            <span>
                                الخبرة العملية : 
                            </span>
                            <p> لضمان حقك, لا تم سداد أي رسوم بعد الحجز إلا من خلال وسيط أسيا</p>
                        </div>
                        <div className="cv-bottom">
                            <span> حجز السيرة الذاتية </span>
                            <span> تنزيل السيرة الذاتية </span>
                        </div>
                    </div>

                      <div className="cv">
                        <img src="/imgs/cv.jpg" alt="" />
                        <div className="cv-info">
                            <span>
                                الجنسية:
                            </span>
                            <span>
                                المهنة:
                            </span>
                            <span>
                                اليانة:
                            </span>
                            <span>
                                سعر الإستقدام : 
                            </span>
                            <span>
                                الحالة الإجتماعية :
                            </span>
                            <span>
                                الخبرة العملية : 
                            </span>
                            <p> لضمان حقك, لا تم سداد رسوم بعد الحجز إلا من خلال وسيط أسيا</p>
                        </div>
                        <div className="cv-bottom">
                            <span> حجز السيرة الذاتية </span>
                            <span> تنزيل السيرة الذاتية </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </Layout>
            
    )
}