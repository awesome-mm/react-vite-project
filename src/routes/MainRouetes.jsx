import {lazy} from "react";
import {Route, Routes, useLocation} from "react-router-dom";
import {AnimatePresence} from "framer-motion";
import NavigateTransition from "../components/common/navigateTransition/navigateTransition";

// layouts
import NotFound from "@/components/common/notFounds/NotFound";
import AssessmentLayout from "@/pages/layouts/AssessmentLayout";
import UserMainLayout from "@/pages/layouts/UserMainLayout";

// user - 사용자화면
const UserLogin = lazy(() => import("@/pages/user/auth/UserLoginPage"));
const MainUserPage = lazy(() => import("@/pages/user/main/MainUserPage"));

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
          <Route path="/" element={<UserMainLayout />}>
            <Route index element={<MainUserPage />} />

            <Route path="auth">
              <Route path="login" element={<UserLogin />} />
            </Route>
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
