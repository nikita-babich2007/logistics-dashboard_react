import { Link } from "react-router-dom";
import { RegisterForm } from "../components/auth/RegisterForm"; 
export const RegisterRoute = () => {
  return (
    <div className="w-full max-w-md">
      <h1 className="mb-6 text-3xl font-bold text-slate-900">Create account</h1>
      <RegisterForm />
      <p className="mt-6 text-center text-sm text-slate-600">
        Already have an account?{" "}
        <Link to="/login" className="font-semibold text-blue-600 hover:underline">
          Sign in
        </Link>
      </p>
    </div>
  );
};