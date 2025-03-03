// appRoutes.tsx
import { JSX } from "react";
import { createBrowserRouter } from "react-router-dom";
import ProfilePage from "../pages/ProfilePage"; // Correct path
import Layout from "../pages/Layout";
import WorkoutPlan from "../pages/workoutPlan";
import Coupon from "../pages/coupon";
import Membership_plan from "../pages/membership_plan"

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
  workoutPlanPage: "/workout-plan",
  coupon: "/coupon",


  Membership_plan: "/membership",
  // discover: "/discover",
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
      { path: webRoutes.home, element: <ProfilePage /> },
      { path: webRoutes.workoutPlanPage, element: <WorkoutPlan /> },
      { path: webRoutes.coupon, element: <Coupon /> },
      { path: webRoutes.Membership_plan, element: <Membership_plan /> },

      // { path: webRoutes.discover, element: <DiscoverPage /> },
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
