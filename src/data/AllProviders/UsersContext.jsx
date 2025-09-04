import React, { createContext, useState, useEffect } from "react";
export const UsersContext = createContext();

export const UserProvider = ({ children }) => {
  const BASE_URL = "http://localhost:5000/api/auth/";

  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [role, setRole] = useState(null);
  const [token, setToken] =  useState(null)

  useEffect(() => {

    const storedId = localStorage.getItem("userId");
    const storedToken = localStorage.getItem("userToken");
    
    if (storedId) {
      setUserId(storedId);
      setToken(storedToken);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    const fetchUser = async () => {

      if (!userId) return;

      try {
        console.log(token);
        
        const res = await fetch(`${BASE_URL}${userId}`);
        const data = await res.json();
        if (res.ok) {
          setUser(data);
          setRole(data.role);
        } else {
          setUser(null);
        }
      } catch (err) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();

  }, [userId]);


  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("userId", userData._id);
    localStorage.setItem("userToken", userData.token);
  };

  return (
    <UsersContext.Provider value={{ user, userId, login, loading, role, token }}>
      {children}
    </UsersContext.Provider>
  );
};
