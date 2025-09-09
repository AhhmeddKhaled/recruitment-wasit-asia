import React from "react";
import style from './SocialMedia.module.css';
import { FaFacebook } from "react-icons/fa";
import { BsInstagram, BsSnapchat, BsWhatsapp } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { BiLocationPlus } from "react-icons/bi";

export default function SocialMedia() {

    return (
        <div className={style.social}>
            <a
                aria-label="موقع سناب شات الخاص بالمكتب"
                arr="WhatsUp"
                href="tel:+20 100 889 0582"
                target="_blanck"
            > <BsWhatsapp size={24} className={style.icon} /> </a>
            <a
                arr="Snapchat"
                href="https://www.snapchat.com/add/wasitasia?share_id=PySKLa_xTui_1BoszDj4Cw&locale=ar_SA@calendar=gregorian;numbers=latn"
                target="_blanck"
                aria-label="البريد الإلكتروني الخاص بالمكتب"
            > <BsSnapchat size={24} className={style.icon} /> </a>
            <a
                arr="Email"
                target="_blanck"
                href="mailto:wasitasia1@gmail.com"
                aria-label="الوتس أب الخاص بالمكتب"
            > <MdEmail size={24} className={style.icon} /> </a>
            <a arr="Location" href="https://www.google.com/maps?q=سيارتنا" target="_blank" color="red">
                <BiLocationPlus size={24} />
            </a>
        </div>
    )
}