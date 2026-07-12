import React, { useContext } from "react";
import { existUserContext } from "./context/UserContext";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoutes() {

  const { existUser } = useContext(existUserContext);

  if (existUser!==null) return <Outlet />;
  return <Navigate to={"/login"}/>;
}

export default ProtectedRoutes;
