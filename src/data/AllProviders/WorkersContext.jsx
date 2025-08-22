import React, { createContext, useState, useEffect } from "react";

export const WorkersContext = createContext();

export function WorkersProvider({ children, type }) {
  const [getWorkers, setGetWorkers] = useState([]);

  useEffect(() => {
    if (!type) return;

    fetch(`http://localhost:5000/api/workers/${type}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("📌 API response:", data);

        // لو السيرفر بيرجع { workers: [...] }
        if (data.workers) {
          setGetWorkers(data.workers);
        } else {
          setGetWorkers(data); // fallback لو Array على طول
        }
      })
      .catch((err) => console.log("❌ Fetch error:", err));
  }, [type]);

  return (
    <WorkersContext.Provider value={{ getWorkers, setGetWorkers, type}}>
      {children}
    </WorkersContext.Provider>
  );
}
