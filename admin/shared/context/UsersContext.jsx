import React, { createContext, useState, useEffect } from "react";
import {jwtDecode}  from 'jwt-decode';

export const UsersContext = createContext();

export const UserProvider = ({ children }) => {
  const BASE_URL = `${import.meta.env.VITE_API_URL}/api/auth/`;

  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [role, setRole] = useState(null);

  const storedId = localStorage.getItem("userId");
  const token = localStorage.getItem("userToken");
  const decode = token ? jwtDecode(token) : null;

  useEffect(() => {
    if (storedId) {
      setUserId(storedId);
    }
    setLoading(false);
    console.log(userId);
    
  }, []);

  useEffect(() => {
    const fetchUser = async () => {

      if (!userId) return;

      try {
        const res = await fetch(`${BASE_URL}${userId}`);
        const data = await res.json();
        if (res.ok) {
          setUser(data);
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

  const getRole = async () => {
    setRole(decode.role);
  }

  return (
    <UsersContext.Provider value={{ user, userId, login, loading, role, token, getRole }}>
      {children}
    </UsersContext.Provider>
  );
};
