import { useQuery } from '@tanstack/react-query';
import { locationsApi } from '../api/locationsApi';

export const useLocations = () => {
  return useQuery({
    queryKey: ['locations'],
    queryFn: locationsApi.getLocations,
  });
};