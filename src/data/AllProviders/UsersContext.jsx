import React, { createContext, useState, useEffect } from "react";

export const UsersContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedId = localStorage.getItem("userId");
    if (storedId) {
      try {
        const parsedId = JSON.parse(storedId);
        setUserId(parsedId);
      } catch {
        setUserId(storedId);
      }
    }
    setLoading(false);
  }, []);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("userId", userData._id);
    setUserId(userData._id);
  };

  return (
    <UsersContext.Provider value={{ user, userId, login, loading }}>
      {children}
    </UsersContext.Provider>
  );
};
