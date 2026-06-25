import { Link } from "react-router-dom";

export const NotFoundRoute = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50">
      <div className="flex flex-col items-center rounded-xl bg-white p-12 shadow-sm border border-slate-100 text-center max-w-md">
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-slate-100">
          <span className="text-2xl">🔍</span> 
        </div>
        <h1 className="mb-2 text-5xl font-bold text-slate-900">404</h1>
        <h2 className="mb-4 text-xl font-semibold text-slate-900">Page not found</h2>
        <p className="mb-8 text-slate-500">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="flex w-full items-center justify-center gap-2 rounded-md bg-slate-900 px-4 py-2 font-medium text-white transition-colors hover:bg-slate-800"
        >
          <span>🏠</span> Back to Home
        </Link>
      </div>
    </div>
  );
};