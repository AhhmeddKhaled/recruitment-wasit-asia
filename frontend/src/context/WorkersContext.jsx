import React, { createContext, useState } from "react";

export const WorkersContext = createContext();

export function WorkersProvider({ children }) {
  const [localWorkers, setLocalWorkers] = useState([]);
  const [recruitmentWorkers, setRecruitmentWorkers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWorkers = async (endpoint) => {
    if (!endpoint) return;

    setLoading(true);
    setError(null);

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/workers/${endpoint}`);
      const data = await res.json();
      const workersData = data.workers || data;

      if (endpoint.startsWith("local")) {
        setLocalWorkers(workersData);
      } else if (endpoint.startsWith("recruitment")) {
        setRecruitmentWorkers(workersData);
      }
    } catch (err) {
      console.error("❌ Fetch error:", err);
      setError(err.message || "حدث خطأ أثناء جلب البيانات");
    } finally {
      setLoading(false);
    }
  };

  return (
    <WorkersContext.Provider
      value={{
        recruitmentWorkers,
        setRecruitmentWorkers,
        localWorkers,
        setLocalWorkers,
        fetchWorkers,
        loading,
        error,
      }}
    >
      {children}
    </WorkersContext.Provider>
  );
}
