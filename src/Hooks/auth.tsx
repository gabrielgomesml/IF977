import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

interface User {
  id: string;
}

interface AuthState {
  user: User;
  token: string;
}
interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextProps {
  user: User;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}
const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const user = localStorage.getItem('@strateegia:user');
    const token = localStorage.getItem('@strateegia:token');

    if (user && token) {
      api.defaults.headers.authorization = `Bearer ${token}`;
      return { user: JSON.parse(user), token };
    }

    return {} as AuthState;
  });
  const signIn = useCallback(async ({ email, password }) => {
    console.log('entrou 2')
    const response = await api.post('/users/v1/auth/signin', {}, {auth:{username: email, password: password}});

    const { user, token } = response.data;

    localStorage.setItem('access_token', JSON.stringify(user));
    localStorage.setItem('refresh_token', token);

    api.defaults.headers.authorization = `Bearer ${token}`;

    //setData({ user, token });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');

    delete api.defaults.headers.authorization;

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider');
  }

  return context;
};