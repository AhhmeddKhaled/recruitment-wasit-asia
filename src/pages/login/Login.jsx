import React, { useContext, useState } from "react";
import style from "./Login.module.css";
import Layout from "../../layout/layout";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill, RiMailFill } from "react-icons/ri";
import { BsSendCheck } from "react-icons/bs";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Button from "../../components/button/Button";
import { UsersContext } from "../../data/AllProviders/UsersContext";

export default function Login() {

  const { login, user } = useContext(UsersContext);  // استدعاء الـ login من الكونتكست

  const location = useLocation();
  const navigate = useNavigate();

  const isLogin = location.pathname === "/login";
  const url = isLogin
    ? "http://localhost:5000/api/auth/login"
    : "http://localhost:5000/api/auth/register";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (window.messageTimer) clearTimeout(window.messageTimer);

    try {
      const bodyData = isLogin
        ? { email, password }
        : { email, password, name };

      const response = await fetch(url, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          'authorization': `Bearer ${user}`
        },
        body: JSON.stringify(bodyData),
      });

      const data = await response.json();

      if (response.ok) {
        login(data);

        setMessage(isLogin ? "تم تسجيل الدخول بنجاح!" : "تم التسجيل بنجاح!");
        setStatus("success");
        setEmail("");
        setPassword("");
        setName("");

        setTimeout(() => {
          navigate("/")
        },500)
      } else {
        setMessage(data.message || "حدث خطأ");
        setStatus("error");
      }
    } catch (error) {
      setMessage("حدث خطأ في الاتصال بالسيرفر");
      setStatus("error");
    }

    window.messageTimer = setTimeout(() => {
      setMessage("");
      setStatus("");
    }, 3000);
  };

  return (
    <Layout>
      <section className={` ${style.form} s-padding flex-center`}>
        <form onSubmit={handleSubmit}>
          <div className={` ${style.img} flex-center `}>
            <img src="/imgs/login.svg" alt="login image" />
          </div>
          <h2 className="flex-center">{isLogin ? "تسجيل الدخول" : "سجل الأن"}</h2>

          {!isLogin && (
            <div>
              <label htmlFor={style.img}>
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
              <BsSendCheck className={style.icon} />
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

          <div className={` ${style.social} flex-center`}>
            <FaFacebook className={style.icon} size={30} />
            <FaTwitter className={style.icon} size={30} />
            <FaInstagram className={style.icon} size={30} />
          </div>

          {message && (
            <p
              className={` ${style.status} flex-center `}
              style={{
                background: status === "success" ? "green" : "red",

              }}
            >
              {message}
            </p>
          )}
        </form>
      </section>
    </Layout>
  );
}
