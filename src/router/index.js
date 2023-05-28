import Demo from "@/views/Demo";
import { lazy } from "react";
import { Navigate } from "react-router-dom";
const Dashboard = lazy(() => import("@/views/Dashboard"));
const Detail = lazy(() => import("@/views/Detail"));
const Entire = lazy(() => import("@/views/Entire"));

const routes = [
  {
    path: "/",
    element: <Navigate to="/dashboard" />
  },
  {
    path: "/dashboard",
    element: <Dashboard />
  },
  {
    path: "/detail",
    element: <Detail />
  },
  {
    path: "/entire",
    element: <Entire />
  },
  {
    path: "/demo",
    element: <Demo />
  }
];

export default routes;
