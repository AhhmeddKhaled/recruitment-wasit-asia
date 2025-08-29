import React, { useContext, useState } from "react";
import style from './Contact.module.css';
import { ContactContext } from "../../../data/AllProviders/ContactContext";
import Button from "../../../components/button/Button";
import Header from "../../layout/header/Header";
import AddContact from "./addContact/AddContact";
import deleteContact from "../../services/contact/deleteContact";
import Message from "../../../components/message/Message";

export default function Contact() {

    const { contact, setContact } = useContext(ContactContext);
    const [openForm, setOpenForm] = useState(false);
    const [message,setMessage] = useState({});
    


    const handleDelete = async (id) => {
    const success = await deleteContact(id);
    if (success) {
        setMessage({message: "تم حذف الرقم",status: "success"});
        setContact(prev => prev.filter(c => c._id !== id));
    } else {
        setMessage({message: "خطأ في حذف الرقم",status: "error"});
        console.log(id);
        
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
            {contact.length === 0 ?
             <h2 className={style.notContact}>لا توجد أرقام</h2> :
            <table>
                <thead>
                    <tr>
                        <th>الإسم</th>
                        <th>االرقم</th>
                        <th>الدور</th>
                        <th>إجراءات</th>
                    </tr>
                </thead>
                <tbody>
                    {contact.map((c,i) => (
                        <tr key={i}>
                            <td>
                                {c.name}
                            </td>
                            <td>
                                {c.phone}
                            </td>
                            <td>
                                {c.role}
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