// admin/src/App.jsx
import React, { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Contact from "@/pages/contact/Contacts";
import AllArticals from "@/pages/articals/allArticals/AllArticals";
import AdminHome from "@/pages/home/Home";
import AllWorkers from "@/pages/workers/allWorkers/AllWorkers";
import AdminRecruimentWorkers from "@/pages/workers/adminRecruimentWorkers/AdminRecruimentWorkers";
import LocalWorker from "./pages/workers/localWorkers/LocalWorkers";
import Login from "./login/Login";
import ProtectRoute from "./utilities/ProtecteRoute";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return <div style={{ textAlign: "center", padding: "50px" }}>جارٍ التحميل...</div>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route element={<ProtectRoute role="admin" />}>
          <Route path="/" element={<AdminHome />}>
            <Route path="articles" element={<AllArticals />} />
            <Route path="contact" element={<Contact />} />
            <Route path="workers" element={<AllWorkers />} />
            <Route path="recruitment" element={<AdminRecruimentWorkers />} />
            <Route path="transfer" element={<LocalWorker />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
