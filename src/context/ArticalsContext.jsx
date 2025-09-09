import React, { createContext, useState, useEffect } from "react";
import { useFetchData } from "../hooks/useFetchData";

export const ArticalsContext = createContext();

export const ArticalsProvider = ({ children }) => {
  const BASE_URL = 'http://localhost:5000/api/articals';
  const { data, setData , dataLength } = useFetchData(BASE_URL);

  return (
    <ArticalsContext.Provider value={{ data, setData, dataLength }}>
      {children}
    </ArticalsContext.Provider>
  )
}