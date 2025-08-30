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
        getColor()
    }

    // Set Theem
    function applyTheme(theme) {
        if (theme === 'dark') {
            root.style.setProperty('--bg-color', '#121212');
            root.style.setProperty('--text-dark', '#ffffff');
            root.style.setProperty('--shadow-sm', '0 4px 8px hsl(from var(--primary) h s l / .1)');
            root.style.setProperty('--shadow-md', '0 4px 12px hsl(from var(--primary) h s l / .1)');
            root.style.setProperty('--shadow-lg', '0 4px 16px hsl(from var(--primary) h s l / .1)');
        } else {
            root.style.setProperty('--bg-color', '#ffffff');
            root.style.setProperty('--text-dark', '#000000');
            root.style.setProperty('--shadow-sm', '0 4px 4px rgba(0, 0, 0, 0.1)');
            root.style.setProperty('--shadow-md', '0 4px 8px rgba(0, 0, 0, 0.1)');
            root.style.setProperty('--shadow-lg', '0 4px 12px rgba(0,0,0, 0.1)');

        }
        localStorage.setItem('theme', theme);
    }

    // Set Brand Color
    function setColor(color, darkColor) {
        localStorage.setItem('brandColor', color);
        localStorage.setItem('darkBrandColor', darkColor);
        getColor()
    }

    // get Brand Color
    function getColor() {
        const color = localStorage.getItem("brandColor");
        const darkColor = localStorage.getItem("darkBrandColor");
        root.style.setProperty('--primary', color);
        root.style.setProperty('--primary-dark', darkColor);
    }

    // Handle Theem
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
                    <span className={` ${style.theem} ${theem ? style.dark : ''}`} onClick={handleTheem}>
                        {theem ? <MdNightsStay size={24} className={` ${style.icon}`} /> : <IoSunnyOutline size={24} className={` ${style.icon}`} />}
                    </span>
                    <ul className={style.colors}>
                        <li onClick={() => setColor("#3898ec", "#004da0")}></li>
                        <li onClick={() => setColor("#154D71", "#0e3550")}></li>
                        <li onClick={() => setColor("#FF9B00", "#cc7a00")}></li>
                        <li onClick={() => setColor("#EA2264", "#b81a4e")}></li>
                        <li onClick={() => setColor("#4caf50", "#388e3c")}></li>

                    </ul>
                </div>
            </div>
        </section>
    )
}