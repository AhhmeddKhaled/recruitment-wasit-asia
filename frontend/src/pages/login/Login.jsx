import React, { useContext, useState } from "react";
import style from "./Login.module.css";
import Layout from "../../layout/layout";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill, RiMailFill } from "react-icons/ri";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Button from "../../components/button/Button";
import { UsersContext } from "@shared/context/UsersContext";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Message from '../../components/message/Message';
// Play sound utility function
const sound = (src) => {
  const audio = new Audio(src);
  audio.play();
};

export default function Login() {

  const { login, userId } = useContext(UsersContext);

  const location = useLocation();
  const navigate = useNavigate();

  const isLogin = location.pathname === "/login";
  const url = isLogin
    ? `${import.meta.env.VITE_API_URL}/api/auth/login`
    : `${import.meta.env.VITE_API_URL}/api/auth/register`;

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (window.messageTimer) clearTimeout(window.messageTimer);

    try {
      const bodyData = isLogin
        ? { email, password }
        : { email, password, name, phone };

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bodyData),
      });

      const data = await response.json();

      if (response.ok) {

        login(data);
        setMessage({ message: isLogin ? "تم تسجيل الدخول بنجاح!" : "تم التسجيل بنجاح!", success: 'success' });
        setEmail("");
        setPassword("");
        setName("");
        setPhone("")
        sound("/sounds/successed.mp3");

        setTimeout(() => {
          navigate("/")
        }, 500)
      } else {
        setMessage({
          message: data.message || "حدث خطأ",
          success: 'error'
        })
        sound("/sounds/error.mp3");
      }
    } catch (error) {
      setMessage({
        message: "حدث خطأ في الاتصال بالسيرفر",
        success: 'error'
      })
        sound("/sounds/error.mp3");

    }

    window.messageTimer = setTimeout(() => {
      setMessage({});
    }, 3000);
  };

  return (
    <Layout>
      <section id="login" className={` ${style.form} s-padding flex-center`}>
        <form onSubmit={handleSubmit}>
          <div className={` ${style.img} flex-center `}>
            <img src="/imgs/login.svg" alt="صورة تسجيل الدخول" loading="lazy" />
          </div>
          <h3 className="flex-center">{isLogin ? "تسجيل الدخول" : "سجل الأن"}</h3>

          {!isLogin && (
            <>
              <div>
                <label htmlFor="name">
                  <FaUser className={style.icon} /> الإسم كاملًا *
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="phone">
                  <FaUser className={style.icon} />   رقم الهاتف *
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
            </>
          )}

          <div className={style.email}>
            <label htmlFor="email">
              <RiMailFill className={style.icon} /> الإيميل *
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className={style.password}>
            <label htmlFor="password">
              <RiLockPasswordFill className={style.icon} /> كلمة السر *
            </label>
            <input
              type="text"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={8}
              maxLength={16}
            />
          </div>

          <div className={style.submit}>
            <Button variant="contained" color="primary" size="lg" type="submit" fullWidth>
              {isLogin ? "دخول" : "إرسال"}
            </Button>
          </div>

          <div className={style.login}>
            {isLogin ? (
              <p>
                <span>ليس لديك حساب ؟</span>
                <Link to="/register">إنشاء حساب</Link>
              </p>
            ) : (
              <p>
                <span>لديك حساب ؟</span>
                <Link to="/login">تسجيل الدخول</Link>
              </p>
            )}
          </div>

          <SocialMedia />

          {message.message && (
            <Message status={message.success}>
              {message.message}
            </Message>
          )}
        </form>
      </section>
    </Layout>
  );
}
