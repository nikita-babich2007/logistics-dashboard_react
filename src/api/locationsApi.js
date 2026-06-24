import { api } from './axios';

export const locationsApi = {
  getLocations: async () => {
    const { data } = await api.get('/locations');
    return data;
  },
  getLocationById: async (id) => {
    const { data } = await api.get(`/locations/${id}`);
    return data;
  }
};