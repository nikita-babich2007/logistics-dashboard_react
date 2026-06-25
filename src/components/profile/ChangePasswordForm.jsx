import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { changePasswordSchema } from "../../schemas/profileSchemas";
import { useAuthStore } from "../../store/authStore";
import { useChangePassword } from "../../hooks/useChangePassword";
import { Button } from "../ui/button";

export const ChangePasswordForm = () => {
  const user = useAuthStore((state) => state.user);
  const { mutate: changePassword, isPending, isSuccess } = useChangePassword();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(changePasswordSchema),
  });

  const onSubmit = (data) => {
    changePassword(
      { id: user.id, data },
      {
        onSuccess: () => {
          reset();
        },
      }
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-md mt-8">
      <h3 className="text-xl font-semibold mb-4">Password</h3>
      
      <div>
        <input 
          {...register("currentPassword")} 
          type="password" 
          placeholder="Current password" 
          className="border p-2 w-full rounded" 
        />
        {errors.currentPassword && (
          <p className="text-red-500 text-sm mt-1">{errors.currentPassword.message}</p>
        )}
      </div>

      <div>
        <input 
          {...register("newPassword")} 
          type="password" 
          placeholder="New password" 
          className="border p-2 w-full rounded" 
        />
        {errors.newPassword && (
          <p className="text-red-500 text-sm mt-1">{errors.newPassword.message}</p>
        )}
      </div>

      <div>
        <input 
          {...register("confirmPassword")} 
          type="password" 
          placeholder="Confirm password" 
          className="border p-2 w-full rounded" 
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>
        )}
      </div>

      <Button type="submit" disabled={isPending}>
        {isPending ? "Saving..." : "Save changes"}
      </Button>

      {isSuccess && (
        <p className="text-green-500 text-sm mt-2">Password changed successfully!</p>
      )}
    </form>
  );
};