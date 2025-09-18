import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/styles/global.css";
import { UserProvider } from "@shared/context/UsersContext.jsx";
import { WorkersProvider } from "@shared/context/WorkersContext.jsx";
import { ArticalsProvider } from "@shared/context/ArticalsContext.jsx";
import ContactProvider from "@shared/context/ContactContext.jsx";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <WorkersProvider>
        <ArticalsProvider>
          <ContactProvider>
            <HelmetProvider>
              <App />
            </HelmetProvider>
          </ContactProvider>
        </ArticalsProvider>
      </WorkersProvider>
    </UserProvider>
  </React.StrictMode>
);
