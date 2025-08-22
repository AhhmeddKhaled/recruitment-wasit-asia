import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/styles/global.css";
import { UserProvider } from "./data/AllProviders/UsersContext.jsx";
import { WorkersProvider } from "./data/AllProviders/WorkersContext.jsx";
import { ArticalsProvider } from "./data/AllProviders/ArticalsContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <WorkersProvider>
          <ArticalsProvider>
            <App />
          </ArticalsProvider>
      </WorkersProvider>
    </UserProvider>
  </React.StrictMode>
);
