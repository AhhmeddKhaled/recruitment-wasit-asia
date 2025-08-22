import React, { createContext, useState, useEffect } from "react";

export const  UsersContext = createContext();

export const  UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }

    setLoading(false)
  }, []);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <UsersContext.Provider value={{ user, login, logout, loading}}>
      {children}
    </UsersContext.Provider>
  );
}
