import React, { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { UsersContext } from "../data/AllProviders/UsersContext";

export default function ProtectRoute({ children, role }) {
  const { user, loading } = useContext(UsersContext);
  const [serverAuth, setServerAuth] = useState(null);

  useEffect(() => {
    const verifyWithServer = async () => {
      if (!user) return;

      try {
        const token = localStorage.getItem("token");
        const res = await fetch("/api/admin-dashboard", {
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
        setServerAuth(false);
      }
    };

    verifyWithServer();
  }, [user]);

  if (loading) return <div>جاري التحقق ...</div>;

  if (!user) return <Navigate to="/login" />;

  if (role && user.role !== role) return <Navigate to="/" />;

  return children;
}
