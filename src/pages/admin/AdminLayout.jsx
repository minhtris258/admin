// Pages/Admin/AdminLayout.jsx
import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import Sidebar from "../../components/admin/Sidebar";
// import Navbar from "../../Components/Admin/Navbar";
import Header from "../../components/admin/Header";

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
   
    <div className="flex h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
              <Sidebar />
              
      

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <Header onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
       

        {/* Content area */}
        <main className="p-6 flex-1 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
