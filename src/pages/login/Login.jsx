import React from "react";
import "./Login.css";
import Layout from "../../layout/layout";

import {
  FaUser,
  FaMapMarkerAlt,
} from "react-icons/fa";

import {RiLockPasswordFill, RiMailFill}  from "react-icons/ri";
import { BiSend } from "react-icons/bi";
import { BsSendCheck } from "react-icons/bs";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Login() {

    const submit = <BiSend />
    return (
        <Layout>
            <div className="form">
                <form>
                    <h2><FaMapMarkerAlt /> تواصل معنا </h2>
                    <div className="name">
                    <label htmlFor="name">  <FaUser className="icon" /> الإسم كاملًا *</label>
                    <input type="text" id="name"/>
                    </div>

                     <div className="email">
                    <label htmlFor="email"><RiMailFill className="icon" /> الإيميل  * </label>
                    <input type="email" id="email"/>
                    </div>

                     <div className="password">
                    <label htmlFor="password"> <RiLockPasswordFill className="icon" /> كلمة السر *  </label>
                    <input type="password" id="password"/>
                    </div>

                    <div className="submit">
                        <button  type="submit" 
                        >

                            إرسال 
                        <BsSendCheck className="icon"/>
                        </button>
                    </div>

                    <div className="login">
                        <p>
                            لديك جساب ؟ <span>  تسجيل الدخول </span>
                        </p>
                    </div>

                    <div className="social">
                        <FaFacebook className="icon" />
                        <FaTwitter className="icon"/>
                        <FaInstagram className="icon"/>
                    </div>
                </form>

            </div>
        </Layout>
    )
}