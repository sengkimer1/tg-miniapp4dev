// appRoutes.tsx
import { JSX } from "react";
import { createBrowserRouter } from "react-router-dom";
import ProfilePage from "../pages/ProfilePage"; // Correct path
import Layout from "../pages/Layout";
import BranchPage from "../pages/BranchPage"; // Correct path
import BranchDetailPage from "../pages/BranchDetailPage";
export interface AppRoute {
  path?: string;
  element: JSX.Element;
  errorElement?: JSX.Element;
  children?: AppRoute[];
}

export const webRoutes = {
  home: "/",
  branch: "/branch",
  branchDetail: "/branch/:location", // Dynamic route for branch detail
};

const errorElement = (
  <div className="flex items-center justify-center h-screen">
    Sorry, something went wrong
  </div>
);

const appRoutes: AppRoute[] = [
  {
    path: "/",
    element: <Layout />, // The layout page will wrap around all the child routes
    children: [
      { path: webRoutes.home, element: <ProfilePage /> }, // Home route
      { path: webRoutes.branch, element: <BranchPage /> }, // Branch page route
      { path: webRoutes.branchDetail, element: <BranchDetailPage /> }, // Branch detail page route
    ],
  },
  {
    path: "*",
    element: <div>NotFoundPage</div>, // Fallback route if not found
    errorElement: errorElement,
  },
];

const router = createBrowserRouter(appRoutes);

export default router;
