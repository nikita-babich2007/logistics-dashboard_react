import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

export default function HomeRoute() {
  const isAuthenticated = useAuthStore(state => state.isAuthenticated);
  return isAuthenticated ? <Navigate to="/dashboard/map" replace /> : <Navigate to="/login" replace />;
}