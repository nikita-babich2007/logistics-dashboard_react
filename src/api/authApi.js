import { api } from './axios';

export const authApi = {
  login: async (credentials) => {
    const { data } = await api.get(`/users?email=${credentials.email}`);
    if (!data.length) throw new Error("Користувача не знайдено або невірний пароль");
    return data[0]; 
  },
  register: async (userData) => {
    const { data } = await api.post('/users', userData);
    return data;
  }
};