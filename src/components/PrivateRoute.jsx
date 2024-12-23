import React, { useEffect, useState } from "react";
import { getUserData, getAdminData } from "../api";
import "./PrivateRoute.css";

const ProtectedRoute = ({ token, isAdmin }) => {
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

  const { message, data: userInfo } = data;

  return (
    <div className="protected-route-container">
      <h1>{isAdmin ? "Dashboard de Admin" : "Dashboard de Usuário Padrão"}</h1>
      <h2>{message}</h2>
      <div className="info-card">
        <p><strong>Nome:</strong> {userInfo.name}</p>
        <p><strong>Email:</strong> {userInfo.email}</p>

        {isAdmin ? (
          <div>
            <h3>Permissões:</h3>
            <ul>
              {userInfo.permissions.map((permission, index) => (
                <li key={index}>{permission}</li>
              ))}
            </ul>
          </div>
        ) : (
          <div>
            <h3>Compras:</h3>
            <ul>
              {userInfo.purchases.map((purchase) => (
                <li key={purchase.id}>
                  <strong>Item:</strong> {purchase.item} | <strong>Price:</strong> ${purchase.price}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProtectedRoute;
