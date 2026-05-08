import { useContext, useCallback } from 'react';
import { UserContext, User } from '@/contexts/UserContext';
import { Alert } from 'react-native';

export function useAuth() {
  const { user, setUser, isLoading } = useContext(UserContext);

  const login = useCallback(async (email: string, password: string) => {
    // This is a mock implementation - in a real app, you would call an API
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        // Simulate successful login
        if (email && password) {
          const mockUser: User = {
            id: 'user-1',
            name: 'Mehdi Ouazzani',
            email: email,
            isArtisan: false,
            photo: 'https://images.pexels.com/photos/3785424/pexels-photo-3785424.jpeg',
          };
          setUser(mockUser);
          resolve();
        } else {
          reject(new Error('Invalid credentials'));
        }
      }, 1000);
    });
  }, [setUser]);

  const signup = useCallback(async (
    email: string, 
    password: string, 
    name: string, 
    isArtisan: boolean
  ) => {
    // This is a mock implementation
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        if (email && password && name) {
          const mockUser: User = {
            id: 'user-' + Date.now(),
            name: name,
            email: email,
            isArtisan: isArtisan,
          };
          setUser(mockUser);
          resolve();
        } else {
          reject(new Error('Invalid user data'));
        }
      }, 1000);
    });
  }, [setUser]);

  const logout = useCallback(async () => {
    // This is a mock implementation
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        setUser(null);
        resolve();
      }, 500);
    });
  }, [setUser]);

  return {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    signup,
    logout,
  };
}