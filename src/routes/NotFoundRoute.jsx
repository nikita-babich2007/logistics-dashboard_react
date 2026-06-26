import { Link } from "react-router-dom";

export const NotFoundRoute = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50 p-4 text-center">
      <h1 className="text-6xl font-bold text-slate-900">404</h1>
      <p className="mt-4 text-xl text-slate-600">Page not found</p>
      <Link to="/" className="mt-6 rounded bg-slate-900 px-4 py-2 text-white">Back to Home</Link>
    </div>
  );
};