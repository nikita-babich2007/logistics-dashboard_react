import { NavLink, Outlet } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import { LogoutButton } from "../components/auth/LogoutButton";

export const DashboardLayout = () => {
  const user = useAuthStore((state) => state.user);

  return (
    <div className="flex min-h-screen bg-slate-50">
      <aside className="flex w-64 flex-col border-r border-slate-200 bg-white">
        <div className="p-6">
          <div className="flex items-center gap-2 text-xl font-bold">
            <span className="flex h-8 w-8 items-center justify-center rounded bg-blue-600 text-white">
              📍
            </span>
            Logistics
          </div>
        </div>

        <nav className="mt-6 flex flex-1 flex-col gap-2 px-4">
          <NavLink
            to="/dashboard/map"
            className={({ isActive }) =>
              `rounded-md px-4 py-2 ${
                isActive
                  ? "bg-blue-50 font-medium text-blue-600"
                  : "text-slate-600 hover:bg-slate-50"
              }`
            }
          >
            Map
          </NavLink>
          <NavLink
            to="/dashboard/analytics"
            className={({ isActive }) =>
              `rounded-md px-4 py-2 ${
                isActive
                  ? "bg-blue-50 font-medium text-blue-600"
                  : "text-slate-600 hover:bg-slate-50"
              }`
            }
          >
            Analytics
          </NavLink>
          <NavLink
            to="/dashboard/favorites"
            className={({ isActive }) =>
              `rounded-md px-4 py-2 ${
                isActive
                  ? "bg-blue-50 font-medium text-blue-600"
                  : "text-slate-600 hover:bg-slate-50"
              }`
            }
          >
            Favorites
          </NavLink>
          <NavLink
            to="/dashboard/profile"
            className={({ isActive }) =>
              `rounded-md px-4 py-2 ${
                isActive
                  ? "bg-blue-50 font-medium text-blue-600"
                  : "text-slate-600 hover:bg-slate-50"
              }`
            }
          >
            Profile
          </NavLink>
        </nav>

        <div className="border-t border-slate-200 p-4">
          <LogoutButton />
        </div>
      </aside>

      <div className="flex flex-1 flex-col">
        <header className="flex h-16 items-center justify-end border-b border-slate-200 bg-white px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-sm text-white">
              {user?.name ? user.name.charAt(0).toUpperCase() : "U"}
            </div>
            <span className="text-sm font-medium">{user?.email || "No email"}</span>
          </div>
        </header>

        <main className="flex-1 overflow-auto p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};