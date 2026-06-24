import { createBrowserRouter } from "react-router-dom";

import { AuthLayout } from "../layouts/AuthLayout";
import { DashboardLayout } from "../layouts/DashboardLayout";
import { ProtectedRoute } from "./ProtectedRoute";
import { PublicRoute } from "./PublicRoute";
import { HomeRoute } from "../routes/HomeRoute";
import { LoginRoute } from "../routes/LoginRoute";
import { RegisterRoute } from "../routes/RegisterRoute";
import { MapRoute } from "../routes/MapRoute";
import { AnalyticsRoute } from "../routes/AnalyticsRoute";
import { FavoritesRoute } from "../routes/FavoritesRoute";
import { ProfileRoute } from "../routes/ProfileRoute";
import { LocationDetailsRoute } from "../routes/LocationDetailsRoute";
import { ErrorRoute } from "../routes/ErrorRoute";
import { NotFoundRoute } from "../routes/NotFoundRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeRoute />,
    errorElement: <ErrorRoute />,
  },
  {
    element: <PublicRoute />,
    children: [
      {
        element: <AuthLayout />,
        children: [
          { path: "login", element: <LoginRoute /> },
          { path: "register", element: <RegisterRoute /> },
        ],
      },
    ],
  },
  {
    path: "/dashboard",
    element: <ProtectedRoute />,
    children: [
      {
        element: <DashboardLayout />,
        children: [
          { path: "map", element: <MapRoute /> },
          { path: "location/:id", element: <LocationDetailsRoute /> },
          { path: "analytics", element: <AnalyticsRoute /> },
          { path: "favorites", element: <FavoritesRoute /> },
          { path: "profile", element: <ProfileRoute /> },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundRoute />,
  },
]);