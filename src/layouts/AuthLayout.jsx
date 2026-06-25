import { Outlet } from "react-router-dom";

export const AuthLayout = () => {
  return (
    <div className="flex min-h-screen">
      <div className="hidden w-1/2 flex-col items-center justify-center bg-blue-600 p-12 text-white lg:flex">
        <div className="mb-8 flex items-center gap-3 text-2xl font-bold">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-blue-600">
            🚚
          </div>
          Logistics Dashboard
        </div>
        <h1 className="mb-4 text-4xl font-bold">Welcome back!</h1>
        <p className="text-center text-blue-100 max-w-sm">
          Sign in to your account to continue managing your logistics network.
        </p>
      </div>

      <div className="flex w-full flex-col items-center justify-center p-8 lg:w-1/2">
        <div className="w-full max-w-md">
          <Outlet />
        </div>
      </div>
    </div>
  );
};