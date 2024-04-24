import { ReactNode, useState } from "react";
import AdminSidebar from "./AdminSidebar";
import { SideBarNav } from "@/types/Types";

type LayoutProps = { children?: ReactNode };

export default function AdminLayout({ children }: LayoutProps) {

  const [isLogin, setIsLogin] = useState(false)
  
  return (
    <main className="admin-layout">
      <AdminSidebar />
      <div className="lab-admin">{children}</div>
    </main>
  );
}
