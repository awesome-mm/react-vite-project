import {ADMIN_ROUTES} from "@/constants/AdminRoutes";

export default function AdminSideMenu() {
  return (
    <div className="admin-side-menu">
      <ul>
        {ADMIN_ROUTES?.map((item) => (
          <li>
            <a href={item?.href}>{item?.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
