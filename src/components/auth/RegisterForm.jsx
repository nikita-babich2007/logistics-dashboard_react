import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../../schemas/authSchemas";
import { useRegister } from "../../hooks/useRegister";
import { Button } from "../ui/Button";

export const RegisterForm = () => {
  const { mutate: registerUser, isPending } = useRegister();
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm({
    resolver: zodResolver(registerSchema)
  });

  const onSubmit = (data) => {
    registerUser(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <input 
          {...register("name")} 
          placeholder="Name" 
          className="w-full rounded-md border border-slate-300 p-2 text-sm" 
        />
        {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
      </div>

      <div>
        <input 
          {...register("email")} 
          type="email"
          placeholder="Email" 
          className="w-full rounded-md border border-slate-300 p-2 text-sm" 
        />
        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
      </div>

      <div>
        <input 
          {...register("password")} 
          type="password" 
          placeholder="Password" 
          className="w-full rounded-md border border-slate-300 p-2 text-sm" 
        />
        {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>}
      </div>

      <Button type="submit" disabled={isPending} className="w-full">
        {isPending ? "Creating account..." : "Create account"}
      </Button>
    </form>
  );
};