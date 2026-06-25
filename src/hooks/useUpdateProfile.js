import { useMutation, useQueryClient } from "@tanstack/react-query";
import { usersApi } from "../api/usersApi";
import { useAuthStore } from "../store/authStore";

export const useUpdateProfile = () => {
  const queryClient = useQueryClient();
  const setAuth = useAuthStore(state => state.setAuth);

  return useMutation({
    mutationFn: usersApi.updateProfile,
    onSuccess: (updatedUser) => {
      setAuth(updatedUser);
      queryClient.invalidateQueries({ queryKey: ["profile"] });
    }
  });
};