import React, { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import ProtecteRoute from "../../frontend/src/utilities/ProtecteRoute";


/* صفحات الإدارة */
import AdminWorkersRouter from "../../frontend/src/utilities/AdminWorkersRouter";
import Spinner from "../../frontend/src/components/spinner/Spinner";
import Contact from '../pages/contact/Contacts'
import AllArticals from '../pages/articals/allArticals/AllArticals';
import AdminDashboard from '../AdminDashboard/AdminDashboard'
import AdminHome from '../pages/home/Home';

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <BrowserRouter>
      <Routes>
         <Route path="/" 
        element={
          <ProtecteRoute role="admin">
            <AdminDashboard />
          </ProtecteRoute>}>
        
          <Route index element={<AdminHome />} />

            <Route path=":type" element={<AdminWorkersRouter />} />

          <Route path="المقالات" element={<AllArticals />} />
          <Route path="التواصل" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
