export const mockLogin = (username, password) => {
    if (username === "admin" && password === "JKSipm0YH") {
      return {
        access_token: "mocked_admin_token", 
      };
    } else if (username === "user" && password === "L0XuwPOdS5U") {
      return {
        access_token: "mocked_user_token", 
      };
    } else {
      throw new Error("Credenciais inválidas.");
    }
  };
  
  export const mockUserData = () => ({
    message: "Bem vindo, Usuário Padrão!",
    data: {
      name: "John Doe",
      email: "john@example.com",
      compras: [
        { id: 1, item: "Laptop", price: 2500 },
        { id: 2, item: "Smartphone", price: 1200 },
      ],
    },
  });
  
  export const mockAdminData = () => ({
    message: "Bem vindo, Usuário Admin!",
    data: {
      name: "Jane Admin",
      email: "admin@example.com",
      permissions: ["create", "read", "update", "delete"],
    },
  });
  