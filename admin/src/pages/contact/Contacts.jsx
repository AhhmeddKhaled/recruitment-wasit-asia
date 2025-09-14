import React, { useContext, useState } from "react";
import style from './Contact.module.css';
import { ContactContext } from "@shared/context/ContactContext";
import Button from "../../../../frontend/src/components/button/Button";
import Header from "../../layout/header/Header";
import AddContact from "@/pages/contact/addContact/AddContact";
import deleteContact from "@/services/contact/deleteContact";
import Message from "../../../../frontend/src/components/message/Message";

export default function Contact() {

    const { data, setData } = useContext(ContactContext);
    const [openForm, setOpenForm] = useState(false);
    const [message, setMessage] = useState({});
    
    const handleDelete = async (id) => {
        const success = await deleteContact(id);
        if (success) {
            setMessage({ message: "تم حذف الرقم", status: "success" });
            setData(prev => prev.filter(c => c._id !== id));
        } else {
            setMessage({ message: "خطأ في حذف الرقم", status: "error" });
        }

        setTimeout(() => {
            setMessage({})
        }, 3000);
    }


    return (

        <div className={style.contact}>
            <Header heading="أرقام التواصل" button="إضافة مقال" onclick={() => setOpenForm(true)} />
            {message.message && <Message status={message.status}> {message.message} </Message>}
            {openForm && <AddContact setOpenForm={setOpenForm} />}
            {data.length === 0 ?
                <h2 className={style.notContact}>لا توجد أرقام</h2> :
                <table className={style.table}>
                    <thead>
                        <tr>
                            <th>الإسم</th>
                            <th>االرقم</th>
                            <th>الدور</th>
                            <th>إجراءات</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((c, i) => (
                            <tr key={i}>
                            <td>
                            {c?.name}
                            </td>
                                <td>
                                    {c?.phone}
                                    </td>
                                <td>
                                {c?.role}
                                </td>
                                <td>
                                    <Button variant="text" color="danger" size="md" onClick={() => handleDelete(c._id)}>
                                    حذف
                                    </Button>
                                    </td>
                                    </tr>
                                ))}
                    </tbody>
                </table>
            }
        </div>
    );
}