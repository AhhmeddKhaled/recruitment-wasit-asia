import React, { useContext, useState } from "react";
import style from './AddContact.module.css';
import Button from "../../../../../frontend/src/components/button/Button";
import { FiX } from "react-icons/fi";
import { addContact } from "../../../services/contact/addContact";
import { ContactContext } from "@shared/context/ContactContext";
import Message from '../../../../../frontend/src/components/message/Message';

export default function AddContact({ setOpenForm }) {

    const [phone, setPhone] = useState('');
    const [role, setRole] = useState('');
    const [message, setMessage] = useState({});
    const { data, setData } = useContext(ContactContext)


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newContact = await addContact({ phone, role });
            setData([...data,newContact]);
            setMessage({ message: "تم إضافة الرقم بنجاح", success: "success" });
            setOpenForm(false);
        } catch (err) {
            setMessage({ message: err.message || "خطأ في إضافة الرقم", success: "error" });
        }


        setTimeout(() => setMessage(''), 3000);
    };

    return (
        <div className={style.layer}>
            <form className={style.addContact} onSubmit={handleSubmit}>
                {message.message && <Message status={message.success}>{message.message}</Message>}
                <div>
                    <FiX size={30} onClick={() => setOpenForm(false)} />
                </div>

                {/* Input Phone  */}
                <div className={style.phone}>
                    <label htmlFor="phone">
                        الرقم
                    </label>
                    <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} id="phone" required />
                </div>

                {/* Input Role */}
                <div className={style.role} >
                    <select value={role} onChange={(e) => setRole(e.target.value)} required>
                        <option value="" disabled>اختر الدور</option>
                        <option value="الإدارة">الإدارة</option>
                        <option value="خدمة العملاء">حدمة العملاء</option>
                        <option value="الشكاوي">الشكاوي</option>
                    </select>
                </div>

                {/* Send Data */}
                <div className={style.submit}>
                    <Button variant="contained" type="submit" fullWidth>
                        إضافة
                    </Button>
                </div>
            </form>
        </div>
    )
}