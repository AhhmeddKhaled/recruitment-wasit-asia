import React, { useContext, useState } from "react";
import style from "./Login.module.css";
import Layout from "../layout/Layout";
import { RiLockPasswordFill, RiMailFill } from "react-icons/ri";
import Button from "../../../frontend/src/components/button/Button";
import { UsersContext } from "../../../shared/context/UsersContext";
import Message from '../../../frontend/src/components/message/Message';

export default function Login() {

  const { login, userId } = useContext(UsersContext);

  const url = `${import.meta.env.VITE_API_URL}/api/auth/login`

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (window.messageTimer) clearTimeout(window.messageTimer);

    try {
      const bodyData = { email, password }

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${userId}`,
        },
        body: JSON.stringify(bodyData),
      });


      const data = await response.json();
      console.log(data);
      console.log(userId);
      
      if (response.ok) {

        login(data);
        setMessage({ message: "تم التسجيل بنجاح!", success: 'success' });
        setEmail("");
        setPassword("");

        setTimeout(() => {
          navigate("/")
        }, 500)
      } else {
        setMessage({
          message: data.message || "حدث خطأ",
          success: 'error'
        })
      }
    } catch (error) {
      setMessage({
        message: "حدث خطأ في الاتصال بالسيرفر",
        success: 'error'
      })
    }

    window.messageTimer = setTimeout(() => {
      setMessage({});
    }, 3000);
  };

  return (
    <Layout>
      <section  className={` ${style.form} flex-center`}>
        <form onSubmit={handleSubmit}>

            <h3>
         قم بتسجيل الدخول
            </h3>
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
               دخول
            </Button>
          </div>

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
