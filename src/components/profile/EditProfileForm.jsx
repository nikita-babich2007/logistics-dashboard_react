import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { profileSchema } from "../../schemas/profileSchemas";
import { useAuthStore } from "../../store/authStore";
import { useUpdateProfile } from "../../hooks/useUpdateProfile";
import { Button } from "../ui/button";

export const EditProfileForm = () => {
  const user = useAuthStore(state => state.user);
  const { mutate: updateProfile, isPending, isSuccess } = useUpdateProfile();
  
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(profileSchema),
    defaultValues: { name: user?.name || "", email: user?.email || "", phone: user?.phone || "" }
  });

  const onSubmit = (data) => updateProfile({ id: user.id, data });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-md">
      <h3>Edit Profile</h3>
      <input {...register("name")} placeholder="Name" className="border p-2 w-full" />
      {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
      
      <input {...register("email")} placeholder="Email" className="border p-2 w-full" />
      {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
      
      <input {...register("phone")} placeholder="Phone" className="border p-2 w-full" />
      {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
      
      <Button type="submit" disabled={isPending}>Save changes</Button>
      {isSuccess && <p className="text-green-500">Profile updated successfully</p>}
    </form>
  );
};