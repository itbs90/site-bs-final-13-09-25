import { useState, useEffect } from 'react';

interface User {
  username: string;
}

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem('admin-user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = (username: string, password: string): boolean => {
    if (username === 'isa' && password === '123isa') {
      const userData = { username };
      localStorage.setItem('admin-user', JSON.stringify(userData));
      setUser(userData);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem('admin-user');
    setUser(null);
  };

  return {
    user,
    isLoading,
    login,
    logout
  };
};