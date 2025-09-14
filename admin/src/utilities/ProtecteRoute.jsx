import React, { useContext, useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UsersContext } from "../../../shared/context/UsersContext";

export default function ProtectRoute({ role }) {
  const { user, loading, token } = useContext(UsersContext);
  const [serverAuth, setServerAuth] = useState(null);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const verifyWithServer = async () => {
      if (!user || !token) {
        setServerAuth(false);
        setChecking(false);
        return;
      }

      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/admin-dashboard`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (res.status === 200) {
          setServerAuth(true);
        } else {
          setServerAuth(false);
        }
      } catch (err) {
        console.error(err);
        setServerAuth(false);
      } finally {
        setChecking(false);
      }
    };

    verifyWithServer();
  }, [user, token]);

  if (loading || checking) return <div>جاري التحقق...</div>;

  if (!token || !serverAuth) return <Navigate to="/login" />;

  // هنا بيتعرض كل الـ routes اللي جواه
  return <Outlet />;
}
