// AuthContext.js
import React, { createContext, useContext, useState } from 'react';

export const AuthContext = createContext();

// export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [ isLoggedIn, setLoggedIn] = useState(null)

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  const register = (userData) => {
    setUser(userData);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register, isLoggedIn, setLoggedIn, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
