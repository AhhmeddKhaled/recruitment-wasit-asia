import React, {useState,createContext, useEffect} from "react";
import { useFetchData } from "../hooks/useFetchData";

export const ContactContext = createContext();

export default function ContactProvider({children}) {
    const BASE_URL = 'http://localhost:5000/api/contact';

    const {data,setData} = useFetchData(BASE_URL);


    return (
        <ContactContext.Provider value={{data,setData}}>
            {children}
        </ContactContext.Provider>
    )
}