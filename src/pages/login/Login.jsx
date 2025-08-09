import React, { useState } from "react";
import "./Login.css";
import Layout from "../../layout/layout";
import { FaUser, FaMapMarkerAlt } from "react-icons/fa";
import { RiLockPasswordFill, RiMailFill } from "react-icons/ri";
import { BsSendCheck } from "react-icons/bs";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Login() {
  const location = useLocation();
  const navigate = useNavigate();
  
  const isLogin = location.pathname === '/login';
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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bodyData),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        setMessage(isLogin ? "تم تسجيل الدخول بنجاح!" : "تم التسجيل بنجاح!");
        setStatus("success");
        setEmail("");
        setPassword("");
        setName("");

        if (isLogin) {
          // تحويل حسب الرول
          if (data.role === "admin") {
            navigate("/admin/dashboard");
          } else {
            navigate("/");
          }
        } else {
          // بعد التسجيل الناجح يحوله للوجين
          navigate("/login");
        }

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
      <div className="form">
        <form onSubmit={handleSubmit}>
          <h2>
            <FaMapMarkerAlt /> {isLogin ? "تسجيل الدخول" : "تواصل معنا"}
          </h2>

          {!isLogin && (
            <div className="name">
              <label htmlFor="name">
                <FaUser className="icon" /> الإسم كاملًا *
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

          <div className="email">
            <label htmlFor="email">
              <RiMailFill className="icon" /> الإيميل *
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="password">
            <label htmlFor="password">
              <RiLockPasswordFill className="icon" /> كلمة السر *
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={8}
              maxLength={16}
            />
          </div>

          <div className="submit">
            <button type="submit">
              {isLogin ? "دخول" : "إرسال"}
              <BsSendCheck className="icon" />
            </button>
          </div>

          <div className="login">
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

          <div className="social">
            <FaFacebook className="icon" />
            <FaTwitter className="icon" />
            <FaInstagram className="icon" />
          </div>

          {message && (
            <p
              className="status"
              style={{
                background: status === "success" ? "green" : "red",
                color: "#fff",
                padding: "8px",
                borderRadius: "5px",
                fontWeight: "bold",
                marginTop: "10px",
              }}
            >
              {message}
            </p>
          )}
        </form>
      </div>
    </Layout>
  );
}
