import React, { useContext, useState } from "react";
import style from './AddContact.module.css';
import Button from "../../../../components/button/Button";
import { FiX } from "react-icons/fi";
import { addContact } from "../../../services/contact/addContact";
import { ContactContext } from "../../../../data/AllProviders/ContactContext";
import Message  from '../../../../components/message/Message';

export default function AddContact({setOpenForm}) {

    const [name,setName] = useState('');
    const [phone,setPhone] = useState('');
    const [message,setMessage] = useState({});
    const { contact , setContact } =  useContext(ContactContext)

   
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const newContact = await addContact({ name, phone });
    setContact([...contact, newContact]);
    setName("");
    setPhone("");
    setMessage({message: "تم إضافة الرقم بنجاح",success: "success"})

    setTimeout(() => {
        setOpenForm(false)
    }, 3000);
  } catch (err) {
    setMessage({message: "خطأ في إضافة الرقم ",success: "success"});
  }
};
    return (
        <div className={style.layer}>
        <form className={style.addContact} onSubmit={handleSubmit}>
            {message.message && <Message status={message.success}>{message.message}</Message>}
            <div>
                <FiX size={30} onClick={() => setOpenForm(false)} />
            </div>
            <div  className={style.name}>
                <label htmlFor="name">
                    الإسم
                </label>
                <input type="text" name={name} onChange={(e) => setName(e.target.value)} id="name" required/>
            </div>
             <div className={style.phone}> 
                <label htmlFor="phone">
                    الرقم
                </label>
                <input type="text" name={phone} onChange={(e) => setPhone(e.target.value)} id="name" required/>
            </div>
             <div className={style.submit}>
                <Button variant="contained" submit fullWidth>
                    إضافة 
                </Button>
            </div>
        </form>
        </div>
    )
}