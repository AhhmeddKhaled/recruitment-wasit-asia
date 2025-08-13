import React, { useEffect, useState } from "react";


export default function AdminDashboard() {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/security/", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("adminToken"), 
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setDashboardData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Error:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="loading">جاري تحميل البيانات...</p>;

  if (!dashboardData) return <p className="error">تعذر تحميل البيانات</p>;

  return (
    <div className="admin-dashboard">
      <h1>لوحة تحكم الأدمن</h1>

      <div className="stats">
        <div className="stat-box">
          <h3>عدد الأدمنات</h3>
          <p>{dashboardData.totalAdmins}</p>
        </div>

        <div className="stat-box">
          <h3>عدد المستخدمين المحظورين</h3>
          <p>{dashboardData.blockedUsers.length}</p>
        </div>
      </div>

      <div className="blocked-users">
        <h2>قائمة المحظورين</h2>
        <ul>
          {dashboardData.blockedUsers.map((user) => (
            <li key={user._id}>{user.email}</li>
          ))}
        </ul>
      </div>

      <div className="logs">
        <h2>آخر الأنشطة الأمنية</h2>
        <ul>
          {dashboardData.recentLogs.map((log) => (
            <li key={log._id}>
              <strong>{log.action}</strong> بواسطة{" "}
              {log.userId?.email || "غير معروف"} -{" "}
              {new Date(log.timestamp).toLocaleString()}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
