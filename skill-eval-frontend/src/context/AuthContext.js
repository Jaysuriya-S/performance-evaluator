// src/context/AuthContext.js
import React, { createContext, useContext, useState } from 'react';

// 1. Create a new context
const AuthContext = createContext();

// 2. AuthProvider to wrap around components that need access to auth state
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // default false
  const [user, setUser] = useState(null);

  // 3. Login function (you can modify with real API later)
  const login = (userData) => {
    setIsAuthenticated(true);
    setUser(userData);
  };

  // 4. Logout function
  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// 5. Hook to use auth in any component
export const useAuth = () => useContext(AuthContext);
