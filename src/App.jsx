import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Recruitment_request from './pages/Recruitment-request/Recruitment-request';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/طلب_إستقدام" element={<Recruitment_request />} />
    </Routes>
  );
}

export default App;
