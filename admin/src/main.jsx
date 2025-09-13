import React from "react";
import ReactDOM from "react-dom/client";
import { UserProvider } from "../../frontend/src/context/UsersContext";
import { WorkersProvider } from "../../frontend/src/context/WorkersContext";
import { ArticalsProvider } from "../../frontend/src/context/ArticalsContext";
import ContactProvider from "../../frontend/src/context/ContactContext";
import App from "./App";

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
