import axios from "axios";
import { mockLogin, mockUserData, mockAdminData } from "./mocker";

const API_URL = "https://api-onecloud.multicloud.tivit.com/fake";

export const login = async (username, password) => {
  try {
    const url = `${API_URL}/token?username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`;
    const response = await axios.post(url);

    if (response.status === 200 && response.data.access_token) {
      return response.data.access_token;
    } else {
      throw new Error("Token não encontrado na resposta.");
    }
  } catch (error) {
    console.error("Login error:", error.response?.data || error.message);
    throw new Error(error.response?.data?.message || "Credenciais inválidas.");
  }
};

export const getUserData = async (token) => {
  console.log("token:", token);
  try {
    const isMock = true; 
    if (isMock) {
      return mockUserData();
    }

    const response = await axios.get(`${API_URL}/user`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Resposta inesperada da API.");
    }
  } catch (error) {
    console.error("Error fetching user data:", error.response?.data || error.message);
    throw new Error(error.response?.data?.message || "Falha ao acessar a rota /user.");
  }
};

export const getAdminData = async (token) => {
  try {
    const isMock = true; 
    if (isMock) {
      return mockAdminData();
    }

    const response = await axios.get(`${API_URL}/admin`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Resposta inesperada da API.");
    }
  } catch (error) {
    console.error("Error fetching admin data:", error.response?.data || error.message);
    throw new Error(error.response?.data?.message || "Falha ao acessar a rota /admin.");
  }
};
