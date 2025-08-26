import React from "react";
import style from './SocialMedia.module.css';
import { FaFacebook } from "react-icons/fa";
import { BsInstagram, BsSnapchat } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

export default function SocialMedia() {

    return (
         <div className={style.social}>
          <span arr="Facebook"> <FaFacebook size={20} className={style.icon}/> </span>
          <span arr="Snapchat"> <BsSnapchat size={20} className={style.icon}/> </span>
          <span arr="Instagram"> <BsInstagram size={20} className={style.icon}/> </span>
          <span arr="Email"> <MdEmail size={20} className={style.icon}/> </span>
        </div>
    )
}