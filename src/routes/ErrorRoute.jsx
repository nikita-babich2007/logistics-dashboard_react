import { useRouteError, Link } from "react-router-dom";

export const ErrorRoute = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50 p-4 text-center">
      <h1 className="text-4xl font-bold text-red-500">Something went wrong</h1>
      <p className="mt-4 text-slate-600">{error?.statusText || error?.message}</p>
      <Link to="/" className="mt-6 rounded bg-slate-900 px-4 py-2 text-white">Back to Home</Link>
    </div>
  );
};