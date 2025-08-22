import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import Recruitment_about from "./pages/recruitment_about/Recruitment_about";
import Recruitment_policy from "./pages/recruitment_policy/RecruitmentPolicy";
import Contact_us from "./pages/contact_us/ContactUs";
import Articals from "./pages/articals/Articals";
import Customer_service from "./pages/customer_service/Customer_service";
import Workers_arrival from "./pages/workers_arrival/Workers_arrival";
import Login from "./pages/login/Login";
import AdminDashboard from "./admin/AdminDashboard/AdminDashboard";
import ArticalDetails from "./pages/articals/ArticalDetails";
import Workers from "./admin/pages/workers/Workers";
import AdminHome from "../src/admin/pages/home/Home";
import AllWorkers from "./admin/pages/workers/allWorkers/AllWorkers";
import RecruimentWorkers from "./admin/pages/workers/recruimentWorkers/RecruimentWorkers";
import AllArticals from "./admin/pages/articals/allArticals/AllArticals";
import LocalWorker from "./admin/pages/workers/localWorkers/LocalWorkers";
import ProtecteRoute from "./logic/ProtecteRoute";
import WorkersRouter from "./logic/WorkersRouter";

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
        <Route path="/admin_dashboard" element={<AdminDashboard />} />
        <Route path="/articals" element={<Articals />} />
        <Route path="/articals/:slug" element={<ArticalDetails />} />

        <Route path="/workers/:type" element={<WorkersRouter />} />
        
        <Route path="/dashboard" 
        element={
          <ProtecteRoute role="admin">
            <AdminDashboard />
          </ProtecteRoute>}>
        
          <Route index element={<AdminHome />} />

          <Route path="جميع_العاملات" element={<Workers />}>
            <Route index element={<AllWorkers />} />
            <Route path='عاملات_الإستقدام' element={<RecruimentWorkers />} />
            <Route path="عاملات_نقل_الكفالة" element={<LocalWorker />} />
          </Route>

          <Route path="المقالات" element={<AllArticals />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
