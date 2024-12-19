import React, { useEffect, useState } from "react";
import { getUserData } from "../api";

function UserPage({ token }) {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUserData(token);
        setUserData(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, [token]);

  return (
    <div>
      <h2>User Page</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {userData ? (
        <pre>{JSON.stringify(userData, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default UserPage;
