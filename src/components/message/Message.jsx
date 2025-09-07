import React from "react";
import style from './Message.module.css';
import '../../assets/styles/global.css';

export default function Message({
    children,
    status
}) {

    return (
        <div className={style.msgParent}>
            <p className={`flex-center ${style.msg} 
        ${status === "success" ? style.success
                    : status === "error" ? style.error
                        : ''}`}>
                {children}
            </p>
        </div>
    )
}