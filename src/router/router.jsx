import { createBrowserRouter } from "react-router-dom";
import { AuthLayout } from "../layouts/AuthLayout";
import { DashboardLayout } from "../layouts/DashboardLayout";
import { LoginRoute } from "../routes/LoginRoute";
import { RegisterRoute } from "../routes/RegisterRoute";
import { MapRoute } from "../routes/MapRoute";
import { AnalyticsRoute } from "../routes/AnalyticsRoute";
import { FavoritesRoute } from "../routes/FavoritesRoute";
import { ProfileRoute } from "../routes/ProfileRoute";
import { LocationDetailsRoute } from "../routes/LocationDetailsRoute";
import { ErrorRoute } from "../routes/ErrorRoute";
import { locationsService } from "../services/locationsService";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <LoginRoute />,
      },
      {
        path: "register",
        element: <RegisterRoute />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    errorElement: <ErrorRoute />,
    children: [
      {
        path: "map",
        loader: () => locationsService.get(),
        element: <MapRoute />,
      },
      {
        path: "location/:id",
        loader: ({ params }) => locationsService.getById(params.id),
        element: <LocationDetailsRoute />,
      },
      {
        path: "analytics",
        element: <AnalyticsRoute />,
      },
      {
        path: "favorites",
        element: <FavoritesRoute />,
      },
      {
        path: "profile",
        element: <ProfileRoute />,
      },
    ],
  },
]);