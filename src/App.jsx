import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/home/Home';
import Recruitment_about from './pages/recruitment_about/Recruitment_about';
import Recruitment_request from './pages/Recruitment_request/Recruitment-request';
import Recruitment_policy from './pages/Recruitment_policy/Recruitment_policy';
import Contact_us from './pages/contact_us/Contact_us';
import Articals from './pages/articals/Articals';
import Customer_service from './pages/customer_service/Customer_service';
import Workers_arrival from './pages/workers_arrival/Workers_arrival';
import Login from './pages/login/Login';
import AdminDashboard from './admin/admin_dashboard/AdminDashboard';
import ArticalDetails from './pages/articals/ArticalDetails';
import AllProviders  from './data/AllProviders/AllProviders';
function App() {

  return (
   
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/طلب_إستقدام" element={<Recruitment_request />} />
      <Route path="/نقل_خدمات" element={<Recruitment_request />} />
      <Route path="/إختيار_العمالة" element={<Recruitment_request />} />
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
    </Routes>
  );
}

export default App;
