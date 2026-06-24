import { Outlet } from "react-router-dom";

export default function AuthLayout() {
    return (
        <>
            <h2>Logistics Dashboard Auth</h2>
            <Outlet />
        </>
    );
}