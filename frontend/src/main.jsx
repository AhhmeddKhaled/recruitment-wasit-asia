import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/styles/global.css";
import { UserProvider } from "./context/UsersContext.jsx";
import { WorkersProvider } from "./context/WorkersContext.jsx";
import { ArticalsProvider } from "./context/ArticalsContext.jsx";
import ContactProvider from "./context/ContactContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <WorkersProvider>
          <ArticalsProvider>
            <ContactProvider>
            <App />
            </ContactProvider>
          </ArticalsProvider>
      </WorkersProvider>
    </UserProvider>
  </React.StrictMode>
);
