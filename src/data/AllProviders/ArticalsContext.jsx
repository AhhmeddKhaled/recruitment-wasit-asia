import React, {createContext, useState, useEffect} from "react";

export const ArticalsContext = createContext();

export const ArticalsProvider = ({children}) => {
      const [getArticals, setArticals] = useState([]);
    
      useEffect(() => {
        fetch("http://localhost:5000/api/articals")
          .then((res) => res.json())
          .then((data) => setArticals(data))
          .catch((err) => console.log(err))
      }, []);

      return (
        <ArticalsContext.Provider value={{getArticals,setArticals}}>
            {children}
        </ArticalsContext.Provider>
      )
}