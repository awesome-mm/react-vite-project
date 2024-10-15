import AdminSideMenu from "@/components/common/hedaer/AdminSideMenu";
import {Outlet} from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="admin_layout" id="admin_layout">
      <AdminSideMenu />
      <article className="conetents" id="conetents">
        <Outlet />
      </article>
    </div>
  );
}
