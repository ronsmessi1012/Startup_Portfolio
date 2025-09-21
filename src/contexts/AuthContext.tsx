import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  tokenNumber: string;
  name: string;
  projectId: string;
}

interface AuthContextType {
  user: User | null;
  login: (token: string) => boolean;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock user data - in real app this would come from backend
const mockUsers: Record<string, User> = {
  'ndoc01': {
    tokenNumber: 'ndoc01',
    name: 'Rudranil Chowdhury',
    projectId: 'PROJ-2024-001'
  }
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Check if user is already logged in
    const savedUser = localStorage.getItem('ndoc_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = (token: string): boolean => {
    const foundUser = mockUsers[token];
    if (foundUser) {
      setUser(foundUser);
      localStorage.setItem('ndoc_user', JSON.stringify(foundUser));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('ndoc_user');
  };

  return (
    <AuthContext.Provider value={{
      user,
      login,
      logout,
      isAuthenticated: !!user
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};