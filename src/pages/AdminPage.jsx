import React from "react";
import ProtectedRoute from "../components/ProtectedRoute";

const UserPage = ({ token }) => {
  return <ProtectedRoute token={token} isAdmin={true} />;
};

export default UserPage;
