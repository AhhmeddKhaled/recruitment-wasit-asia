import React from "react";
import style from './SocialMedia.module.css';
import { FaFacebook } from "react-icons/fa";
import { BsInstagram, BsSnapchat, BsWhatsapp } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

export default function SocialMedia() {

    return (
        <div className={style.social}>
            <a 
            arr="WhatsUp" 
            href="tel:+20 100 889 0582"
            target="_blanck"
            aria-label="موقع سناب شات الخاص بالمكتب"
            > <BsWhatsapp size={30} className={style.icon} /> </a>
            <a 
            arr="Snapchat"
            href="https://www.snapchat.com/add/wasitasia?share_id=PySKLa_xTui_1BoszDj4Cw&locale=ar_SA@calendar=gregorian;numbers=latn"
            target="_blanck"
            aria-label="البريد الإلكتروني الخاص بالمكتب"
            > <BsSnapchat size={30} className={style.icon} /> </a>
            <a 
            arr="Email"
            target="_blanck"
            href="mailto:wasitasia1@gmail.com"
            aria-label="الوتس أب الخاص بالمكتب"
            > <MdEmail size={30} className={style.icon} /> </a>
        </div>
    )
}