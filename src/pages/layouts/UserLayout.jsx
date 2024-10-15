import UserHeader from "@/components/common/hedaer/UserHeader";
import {Outlet} from "react-router-dom";

export default function UserLayout() {
  return (
    <div className="user_layout" id="user_layout">
      <UserHeader />
      <article className="contents" id="contents">
        <Outlet />
      </article>
      <div className="footer" id="footer">
        footer
      </div>
    </div>
  );
}
