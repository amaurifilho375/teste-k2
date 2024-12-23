import React, { useState } from "react";
import { login } from "./api";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [token, setToken] = useState(null);
  const [error, setError] = useState("");

  const handleLogin = async (username, password) => {
    try {
      const jwt = await login(username, password);
      setToken(jwt);
      setError("");
    } catch (err) {
      setError(err.message);
    }
  };

  const isAdmin = token === "mocked_admin_token";

  return (
    <div>
      <h1>Bem-vindo ao nosso Sistema</h1>
      {token ? (
        <ProtectedRoute token={token} isAdmin={isAdmin} />
      ) : (
        <Login onLogin={handleLogin} error={error} />
      )}
    </div>
  );
}

export default App;
