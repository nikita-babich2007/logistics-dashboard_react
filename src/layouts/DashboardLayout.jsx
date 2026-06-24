import { NavLink, Outlet } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import { LogoutButton } from "../components/auth/LogoutButton";

export default function DashboardLayout() {
    const user = useAuthStore(state => state.user);

    return (
        <>
            <aside>
                <nav>
                    <NavLink to="/dashboard/map">Map</NavLink>
                    <NavLink to="/dashboard/analytics">Analytics</NavLink>
                    <NavLink to="/dashboard/favorites">Favorites</NavLink>
                    <NavLink to="/dashboard/profile">Profile</NavLink>
                </nav>
                <LogoutButton />
            </aside>
            <main>
                <header>
                    <strong>User:</strong> {user?.email || "No email"}
                </header>
                <Outlet />
            </main>
        </>
    );
}