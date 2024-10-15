import {lazy} from "react";
import {Route, Routes, useLocation} from "react-router-dom";
import {AnimatePresence} from "framer-motion";
import NavigateTransition from "../components/common/navigateTransition/navigateTransition";

// layouts
import NotFound from "@/components/common/notFounds/NotFound";
import AdminLayout from "@/pages/layouts/AdminLayout";
import AssessmentLayout from "@/pages/layouts/AssessmentLayout";
import UserLayout from "@/pages/layouts/UserLayout";

// user - 사용자화면
const UserLogin = lazy(() => import("@/pages/user/auth/UserLoginPage"));
const MainUserPage = lazy(() => import("@/pages/user/main/MainUserPage"));

// admin - 관리자화면
const AdminLogin = lazy(() => import("@/pages/admin/auth/AdminLogin"));
const MainAdminPage = lazy(() => import("@/pages/admin/main/MainAdminPage"));

// Assessment - 평가자 화면
const AssessmentLogin = lazy(() => import("@/pages/assessment/auth/AssessmentLogin"));
const MainAssessmentPage = lazy(() => import("@/pages/assessment/main/MainAssessmentPage"));

export default function MainRouetes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<NavigateTransition />}>
          {/* 사용자 */}
          <Route path="/" element={<UserLayout />}>
            <Route index element={<MainUserPage />} />
            <Route path="auth/login" element={<UserLogin />} />
          </Route>

          {/* 관리자 */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminLogin />} />
            <Route path="login" element={<MainAdminPage />} />
          </Route>

          {/* 평가자 */}
          <Route path="/assessment" element={<AssessmentLayout />}>
            <Route index element={<MainAssessmentPage />} />

            <Route path="login" element={<AssessmentLogin />} />
          </Route>
        </Route>
        {/* Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}
