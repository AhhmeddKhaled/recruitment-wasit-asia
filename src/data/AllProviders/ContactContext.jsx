import React, {useState,createContext, useEffect} from "react";

export const ContactContext = createContext();

export default function ContactProvider({children}) {
    const [contact,setContact] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/contact")
        .then(res => res.json())
        .then(data => setContact(data))
        .catch(err => console.log(err))
    },[]);

    

    return (
        <ContactContext.Provider value={{contact,setContact}}>
            {children}
        </ContactContext.Provider>
    )
}