import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";


/* صفحات المستخدم */
import Home from "./pages/home/Home";
import Recruitment_about from "./pages/recruitment_about/Recruitment_about";
import Recruitment_policy from "./pages/recruitment_policy/RecruitmentPolicy";
import Articals from "./pages/articals/Articals";
import Customer_service from "./pages/customer_service/Customer_service";
import Workers_arrival from "./pages/workers_arrival/Workers_arrival";
import Contact_us from "./pages/contact_us/ContactUs";
import ArticalDetails from "./pages/articals/ArticalDetails";
import WorkersRouter from "./logic/WorkersRouter";
import Login from "./pages/login/Login";
import ProtecteRoute from "./logic/ProtecteRoute";


/* صفحات الإدارة */
import AdminDashboard from "./admin/AdminDashboard/AdminDashboard";
import AdminHome from "../src/admin/pages/home/Home";
import AllArticals from "./admin/pages/articals/allArticals/AllArticals";
import AdminWorkersRouter from "./logic/AdminWorkersRouter";
import Contact from "./admin/pages/contact/Contacts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/عن_الإستقدام" element={<Recruitment_about />} />
        <Route path="/سياسات_الإستقدام" element={<Recruitment_policy />} />
        <Route path="/تواصل_معنا" element={<Contact_us />} />
        <Route path="/خدمة_العملاء" element={<Customer_service />} />
        <Route path="/وصول_العمالة" element={<Workers_arrival />} />
        <Route path="/register" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/articals" element={<Articals />} />
        <Route path="/articals/:slug" element={<ArticalDetails />} />

        <Route path="/:type" element={<WorkersRouter />} />
        
        <Route path="/dashboard" 
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
