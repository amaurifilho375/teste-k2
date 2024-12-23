import React from "react";
import ProtectedRoute from "../components/PrivateRoute";

const UserPage = ({ token }) => {
  return <ProtectedRoute token={token} isAdmin={true} />;
};

export default UserPage;
