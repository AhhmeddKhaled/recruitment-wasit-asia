import React, { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { UsersContext } from "../context/UsersContext";

export default function ProtectRoute({ children, role }) {
  const { user, loading, token } = useContext(UsersContext);
  const [serverAuth, setServerAuth] = useState(null);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const verifyWithServer = async () => {
      if (!user) {
        setServerAuth(false);
        setChecking(false);
        return;
      }

      try {
        if (!token) {
          setServerAuth(false);
          setChecking(false);
          return;
        }

        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/admin-dashboard`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
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

if (!token) return <Navigate to="/login" />;

  return children;
}
