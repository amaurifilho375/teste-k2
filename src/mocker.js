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
    message: "Hello, user!",
    data: {
      name: "John Doe",
      email: "john@example.com",
      purchases: [
        { id: 1, item: "Laptop", price: 2500 },
        { id: 2, item: "Smartphone", price: 1200 },
      ],
    },
  });
  
  export const mockAdminData = () => ({
    message: "Hello, admin!",
    data: {
      name: "Jane Admin",
      email: "admin@example.com",
      permissions: ["create", "read", "update", "delete"],
    },
  });
  