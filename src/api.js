import axios from "axios";

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
    console.log('Token recebido para /user:', token);  // Verifica se o token está correto
    try {
      const response = await axios.get('/fake/user', { // Proxy para /fake
        headers: {
          Authorization: `Bearer ${token}`, // Token no cabeçalho
        },
      });
  
      if (response.status === 200) {
        console.log('Dados do usuário:', response.data);
        return response.data;
      } else {
        throw new Error('Resposta inesperada da API.');
      }
    } catch (error) {
      console.error('Erro ao buscar dados do usuário:', error.response?.data || error.message);
      throw new Error(error.response?.data?.message || 'Falha ao acessar a rota /user.');
    }
  };
  
  export const getAdminData = async (token) => {
    console.log('Token recebido para /admin:', token);  // Verifica se o token está correto
    try {
      const response = await axios.get('/fake/admin', { // Proxy para /fake
        headers: {
          Authorization: `Bearer ${token}`, // Token no cabeçalho
        },
      });
  
      if (response.status === 200) {
        console.log('Dados do administrador:', response.data);
        return response.data;
      } else {
        throw new Error('Resposta inesperada da API.');
      }
    } catch (error) {
      console.error('Erro ao buscar dados do administrador:', error.response?.data || error.message);
      throw new Error(error.response?.data?.message || 'Falha ao acessar a rota /admin.');
    }
  };
  

