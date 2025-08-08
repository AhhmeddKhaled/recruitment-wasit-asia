import React from "react";
import "./Contact_us.css";
import Layout from "../../layout/layout";
import Contact from "../home/contact-home/Contact-home";
import { FaBuilding, FaPhoneAlt, FaRegCommentDots, FaShoppingCart } from "react-icons/fa";

export default function Contact_us() {

    return (

        <Layout>
            <div className="information container">
                <div className="img">
                    <img src="/imgs/contact.webp" alt="" />
                </div>
                <div className="info-contact">
                    <h4> كن علي إتصال</h4>
                    <div>
                        <FaBuilding className="icon" />
                        <div>
                            <h5> عنوان المقر </h5>
                            <a>
                                الشيخ جابر الاحمد الصباح، حي المعيزيلة، الرياض 13231</a>
                        </div>
                    </div>

                    <div>
                        <FaShoppingCart className="icon" />
                        <div>

                            <h5>  المبيعات </h5>
                            <a href="tel:8003030309">
                                8003030309
                            </a>
                        </div>
                    </div>

                    <div>
                        <FaPhoneAlt className="icon" />
                        <div>

                            <h5>  الشاكوى والإقتراحات </h5>
                            <a href="tel:21032425">8003030309
                            </a>
                        </div>
                    </div>

                    <div>
                        <FaRegCommentDots className="icon" />
                        <div>

                            <h5> البريد  الإلكتروني </h5>
                            <a href="mailto:ahmedkhaled7229@gmail.com">wasit_asia@gmail.com</a>
                        </div>
                    </div>
                </div>
            </div>
            <Contact />
        </Layout>
    )
}