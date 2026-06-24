import { useQuery } from '@tanstack/react-query';
import { locationsApi } from '../api/locationsApi';

export const useLocation = (id) => {
  return useQuery({
    queryKey: ['location', id],
    queryFn: () => locationsApi.getLocationById(id),
    enabled: !!id,
  });
};