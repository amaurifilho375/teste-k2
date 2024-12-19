import React, { useEffect, useState } from "react";
import { getAdminData } from "../api";

function AdminPage({ token }) {
  const [adminData, setAdminData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAdminData(token);
        setAdminData(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, [token]);

  return (
    <div>
      <h2>Admin Page</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {adminData ? (
        <pre>{JSON.stringify(adminData, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default AdminPage;
