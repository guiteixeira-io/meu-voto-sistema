import React, { createContext, useState, useEffect } from "react";
import { googleAuthService } from "../services/googleAuth";

// Separar contexto em arquivo próprio para evitar erro Fast Refresh
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Verificar se há um usuário logado ao carregar a aplicação
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    // Simular API call - substituir por chamada real
    try {
      // Verificar se o usuário existe no localStorage
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      const user = users.find(
        (u) => u.email === email && u.password === password
      );

      if (!user) {
        throw new Error("Email ou senha inválidos");
      }

      // Remove password before storing user data
      const { password: _, ...userWithoutPassword } = user;

      localStorage.setItem("user", JSON.stringify(userWithoutPassword));
      setUser(userWithoutPassword);

      return { success: true, user: userWithoutPassword };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const register = async (userData) => {
    try {
      const { name, email, password } = userData;

      // Verificar se já existe um usuário com este email
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      const existingUser = users.find((u) => u.email === email);

      if (existingUser) {
        throw new Error("Este email já está em uso");
      }

      // Criar novo usuário
      const newUser = {
        id: Date.now().toString(),
        name,
        email,
        password, // Em um app real, isso seria hasheado
        createdAt: new Date().toISOString(),
      };

      // Salvar no localStorage
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));

      // Remove password before storing user data
      const { password: _, ...userWithoutPassword } = newUser;

      localStorage.setItem("user", JSON.stringify(userWithoutPassword));
      setUser(userWithoutPassword);

      return { success: true, user: userWithoutPassword };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const loginWithGoogle = async () => {
    try {
      const result = await googleAuthService.signInWithGoogle();

      if (result.success) {
        // Verificar se usuário já existe, senão criar um novo
        const users = JSON.parse(localStorage.getItem("users") || "[]");
        let user = users.find((u) => u.email === result.user.email);

        if (!user) {
          // Criar novo usuário do Google
          user = {
            id: result.user.id,
            name: result.user.name,
            email: result.user.email,
            picture: result.user.picture,
            provider: "google",
            createdAt: new Date().toISOString(),
          };
          users.push(user);
          localStorage.setItem("users", JSON.stringify(users));
        }

        localStorage.setItem("user", JSON.stringify(user));
        setUser(user);

        return { success: true, user };
      }

      return result;
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  const forgotPassword = async (email) => {
    try {
      // Verificar se o usuário existe
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      const user = users.find((u) => u.email === email);

      if (!user) {
        throw new Error("Email não encontrado");
      }

      // Simular envio de email (em um app real, isso seria feito no backend)
      console.log(`Link de recuperação de senha enviado para: ${email}`);

      return {
        success: true,
        message: "Link de recuperação enviado para seu email",
      };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const resetPassword = async (email, newPassword) => {
    try {
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      const userIndex = users.findIndex((u) => u.email === email);

      if (userIndex === -1) {
        throw new Error("Usuário não encontrado");
      }

      // Atualizar senha
      users[userIndex].password = newPassword;
      localStorage.setItem("users", JSON.stringify(users));

      return {
        success: true,
        message: "Senha alterada com sucesso",
      };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const value = {
    user,
    loading,
    login,
    loginWithGoogle,
    register,
    logout,
    forgotPassword,
    resetPassword,
    isAuthenticated: !!user,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export { AuthContext };
