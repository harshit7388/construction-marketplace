'use client';

import { createContext, useContext, useState, useEffect } from 'react';

type User = {
  id: string;
  name: string;
  email: string;
  phone: string;
};

type AuthContextType = {
  user: User | null;
  login: (phone: string, password: string) => Promise<boolean>;
  register: (name: string, phone: string, password: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for saved user in localStorage
    const savedUser = localStorage.getItem('buildmart-user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        console.error('Failed to parse saved user:', error);
        localStorage.removeItem('buildmart-user');
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (phone: string, password: string): Promise<boolean> => {
    try {
      // In a real application, this would be an API call
      // For demo purposes, we'll simulate a successful login if credentials match certain values
      if (phone === '1234567890' && password === 'password') {
        const mockUser = {
          id: 'user-1',
          name: 'Demo User',
          email: 'demo@example.com',
          phone
        };
        
        setUser(mockUser);
        localStorage.setItem('buildmart-user', JSON.stringify(mockUser));
        return true;
      }
      return false;
    } catch (error) {
      console.error('Login failed:', error);
      return false;
    }
  };

  const register = async (name: string, phone: string, password: string): Promise<boolean> => {
    try {
      // In a real application, this would be an API call
      // For demo purposes, we'll simulate a successful registration
      const mockUser = {
        id: `user-${Date.now()}`,
        name,
        email: `${name.toLowerCase().replace(/\s+/g, '.')}@example.com`, // Generate mock email
        phone
      };
      
      setUser(mockUser);
      localStorage.setItem('buildmart-user', JSON.stringify(mockUser));
      return true;
    } catch (error) {
      console.error('Registration failed:', error);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('buildmart-user');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isLoading }}>
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