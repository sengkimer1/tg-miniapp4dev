// appRoutes.tsx
import { JSX } from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import WorkoutPlan from "../pages/WorkoutPlanPage";
import CouponPage from "../pages/CouponPage";
import MembershipPlan from "../pages/MembershipPlanPage"

import BranchPage from "../pages/BranchPage"; 
import Promotion from "../pages/PromotionPage";
import Home from "../pages/HomePage";
import MemberInfo from "../pages/MemberInfo"
import BranchDetailPage from "../pages/Branchdetail";

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
membershipPlan : "/membership",
branch: "/branch",
promotion: "/promotion",
memberInfo: "/info",
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
      { path: webRoutes.home, element: <Home /> },
      { path: webRoutes.workoutPlanPage, element: <WorkoutPlan /> },
      { path: webRoutes.coupon, element: <CouponPage /> },
      { path: webRoutes.membershipPlan, element: <MembershipPlan /> },
      { path: webRoutes.branch, element: <BranchPage /> },
      { path: webRoutes.promotion, element: <Promotion /> },
      { path: webRoutes.memberInfo, element: <MemberInfo /> },
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
