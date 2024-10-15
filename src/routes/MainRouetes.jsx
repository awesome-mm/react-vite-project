import {lazy} from "react";
import {Route, Routes, useLocation} from "react-router-dom";
import {AnimatePresence} from "framer-motion";
import NavigateTransition from "../components/common/navigateTransition/navigateTransition";
import NotFound from "@/components/common/notFounds/NotFound";

const UserLogin = lazy(() => import("@/pages/user/UserLogin"));
const AdminLogin = lazy(() => import("@/pages/admin/AdminLogin"));
const AssessmentLogin = lazy(() => import("@/pages/assessment/AssessmentLogin"));

export default function MainRouetes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<NavigateTransition />}>
          {/* 사용자 */}
          <Route exact path="/" element={<UserLogin />} />
          {/* 관리자 */}
          <Route path="/admin" element={<AdminLogin />} />
          {/* 평가자 */}
          <Route path="/assessment" element={<AssessmentLogin />} />
          {/* Not Found */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}
