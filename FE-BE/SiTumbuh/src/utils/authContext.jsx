import { createContext, useContext, useState, useEffect } from "react";
import { getAccessToken, putAccessToken, removeAccessToken } from "./auth";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(!!getAccessToken());

  useEffect(() => {
    const onStorage = () => setIsLoggedIn(!!getAccessToken());
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const login = (token) => {
    putAccessToken(token);
    setIsLoggedIn(true);
  };

  const logout = () => {
    removeAccessToken();
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}