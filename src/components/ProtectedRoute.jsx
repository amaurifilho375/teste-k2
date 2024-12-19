import React, { useState } from "react";
import { getUserData, getAdminData } from "../api";

function ProtectedRoute({ token }) {
  const [userData, setUserData] = useState(null);
  const [adminData, setAdminData] = useState(null);
  const [error, setError] = useState("");

  const handleAccessUser = async () => {
    try {
      const data = await getUserData(token);
      setUserData(data);
      setError("");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleAccessAdmin = async () => {
    try {
      const data = await getAdminData(token);
      setAdminData(data);
      setError("");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h2>Protected Routes</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button onClick={handleAccessUser}>Access /user</button>
      <button onClick={handleAccessAdmin}>Access /admin</button>
      {userData && <pre>{JSON.stringify(userData, null, 2)}</pre>}
      {adminData && <pre>{JSON.stringify(adminData, null, 2)}</pre>}
    </div>
  );
}

export default ProtectedRoute;
