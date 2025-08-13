import React, { createContext, useState, useEffect } from "react";

export const WorkersContext = createContext();

export function WorkersProvider({ children }) {
  const [getWorkers, setGetWorkers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/workers")
      .then((res) => res.json())
      .then((data) => setGetWorkers(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <WorkersContext.Provider value={{ getWorkers, setGetWorkers }}>
      {children}
    </WorkersContext.Provider>
  );
}
