import React, { createContext, useState, useEffect } from "react";

export const  UsersContext = createContext();

export const  UserProvider = ({ children }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
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
    <UsersContext.Provider value={{ user, login, logout }}>
      {children}
    </UsersContext.Provider>
  );
}
