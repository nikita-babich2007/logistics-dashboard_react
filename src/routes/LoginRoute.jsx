import { Link } from "react-router-dom";
import { LoginForm } from "../components/auth/LoginForm";

export const LoginRoute = () => {
  return (
    <div className="w-full max-w-md">
      <h1 className="mb-6 text-3xl font-bold text-slate-900">Login</h1>
      <LoginForm />
      <p className="mt-6 text-center text-sm text-slate-600">
        Don't have an account?{" "}
        <Link to="/register" className="font-semibold text-blue-600 hover:underline">
          Sign up
        </Link>
      </p>
    </div>
  );
};