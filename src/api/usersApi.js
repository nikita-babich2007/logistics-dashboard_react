import { api } from './axios';

export const usersApi = {
  updateProfile: async ({ id, data }) => {
    const response = await api.put(`/users/${id}`, data);
    return response.data;
  },
  changePassword: async ({ id, data }) => {
    const response = await api.put(`/users/${id}`, { password: data.newPassword });
    return response.data;
  }
};