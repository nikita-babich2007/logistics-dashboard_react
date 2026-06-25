import { useMutation } from "@tanstack/react-query";
import { usersApi } from "../api/usersApi";

export const useChangePassword = () => {
  return useMutation({
    mutationFn: usersApi.changePassword,
  });
};