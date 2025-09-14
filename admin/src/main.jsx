import React from "react";
import ReactDOM from "react-dom/client";
import { UserProvider } from "@shared/context/UsersContext";
import { WorkersProvider } from "@shared/context/WorkersContext";
import { ArticalsProvider } from "@shared/context/ArticalsContext";
import ContactProvider from "@shared/context/ContactContext";
import App from "./App";
import "../../frontend/src/assets/styles/global.css"

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
