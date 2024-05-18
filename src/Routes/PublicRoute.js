import React from "react";

import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
  const user = localStorage.getItem("user");
  if (user) {
    return true;
  } else {
    return false;
  }
};

const ProtectedRoute = () => {
  const auth = useAuth();
  return auth ? <Navigate to="/Home" /> : <Outlet />;
};

export default ProtectedRoute;
