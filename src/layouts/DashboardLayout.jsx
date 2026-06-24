import { NavLink, Outlet } from "react-router-dom";

export default function DashboardLayout() {
    return (
        <>
            <aside>
                <nav>
                    <NavLink to="/dashboard/map">Map</NavLink>
                    <NavLink to="/dashboard/analytics">Analytics</NavLink>
                    <NavLink to="/dashboard/favorites">Favorites</NavLink>
                    <NavLink to="/dashboard/profile">Profile</NavLink>
                </nav>
            </aside>
            <main>
                <Outlet />
            </main>
        </>
    );
}