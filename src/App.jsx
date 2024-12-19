import React, { useState } from "react";
import { login } from "./api";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminPage from "./pages/AdminPage";
import UserPage from "./pages/UserPage";

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

  return (
    <div>
      <h1>Authentication Demo</h1>
      {token ? (
        <>
          <ProtectedRoute
            token={token}
            renderAdminPage={() => <AdminPage token={token} />}
            renderUserPage={() => <UserPage token={token} />}
          />
        </>
      ) : (
        <Login onLogin={handleLogin} error={error} />
      )}
    </div>
  );
}

export default App;
