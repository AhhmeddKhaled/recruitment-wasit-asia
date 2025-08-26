import React, { useEffect, useState } from "react";
import style from './Setting.module.css';
import { SlSettings } from "react-icons/sl";
import { IoSunnyOutline } from "react-icons/io5";
import { MdNightsStay } from "react-icons/md";

export default function Setting() {
    const [theem, setTheem] = useState(false)
    const root = document.documentElement;

    window.onload = () => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        applyTheme(savedTheme);
    }
    function applyTheme(theme) {
        if (theme === 'dark') {
            root.style.setProperty('--bg-color', '#121212');
            root.style.setProperty('--text-dark', '#ffffff');
            root.style.setProperty('--shadow-md', '0 4px 12px rgba(0, 132, 255, 0.15)');
            root.style.setProperty('--shadow-lg', '0 4px 16px rgba(0, 132, 255, 0.15)');
        } else {
            root.style.setProperty('--bg-color', '#ffffff');
            root.style.setProperty('--text-dark', '#000000');
            root.style.setProperty('--shadow-md', '0 0 8px rgba(0, 0, 0, 0.1)');
            root.style.setProperty('--shadow-lg', '0 4px 12px rgba(0, 132, 255, 0.15)');

        }
        localStorage.setItem('theme', theme);
    }




    const handleTheem = () => {
        setTheem(!theem)
        const currentTheme = localStorage.getItem('theme') || 'light';
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        applyTheme(newTheme);
    }
    return (
        <section className={style.setting}>
            <input id="setting" type="checkbox" />
            <label htmlFor="setting">
                <SlSettings size={40} className={style.icon} />
            </label>
            <div className={style.box}>
                <div className={style.settingRow}>
                    <span  className={` ${style.theem} ${theem ? style.dark : ''}`} onClick={handleTheem}>
                        {theem ?<MdNightsStay size={24} className={` ${style.icon}`} />:<IoSunnyOutline size={24} className={` ${style.icon}`} />}
                    </span>
                      <ul className={style.colors}>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}