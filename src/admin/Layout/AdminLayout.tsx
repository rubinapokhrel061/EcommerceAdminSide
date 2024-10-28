import React, { ReactNode } from "react";
import NavbarAdmin from "./NavbarAdmin";
import SidebarAdmin from "./SidebarAdmin";

// Define the props for the AdminLayout component
interface AdminLayoutProps {
  children: ReactNode; // Use ReactNode to allow any valid React children
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <NavbarAdmin />
      <div className="flex mt-[75px]">
        <div className="w-20 z-20">
          <SidebarAdmin />
        </div>
        <main className="w-3/4 flex-1">{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
