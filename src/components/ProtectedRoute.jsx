import React, { useEffect, useState } from "react";
import { getUserData, getAdminData } from "../api";

const ProtectedRoute = ({ token, isAdmin }) => {
    console.log('isAdmin', isAdmin)
    console.log('response1', getUserData)
    console.log('response2', getAdminData)
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = isAdmin ? await getAdminData(token) : await getUserData(token);
        setData(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [token, isAdmin]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container">
      <h1>{isAdmin ? "Pagina de Admin" : "Pagina de Usuário comum"}</h1>
      <div className="card">
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </div>
  );
};

export default ProtectedRoute;
