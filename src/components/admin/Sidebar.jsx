import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const navItems = [
  { to: "/admin/", key: "dashboard", label: "Tổng Quan", icon: IconHome },
  { to: "/admin/rooms", key: "rooms", label: "Phòng", icon: IconRooms },
  { to: "/admin/bookings", key: "bookings", label: "Đặt Phòng", icon: IconBookings },
  { to: "/admin/users", key: "users", label: "Người Dùng", icon: IconUsers },
  { to: "/admin/chat", key: "chat", label: "Trò Truyện", icon: IconChat },
];

/* ---------- Simple inline SVG icons (small & neutral) ---------- */
function IconHome(props) {
  return (
    <svg {...props} viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor">
      <path d="M3 11.5L12 4l9 7.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 21h14a1 1 0 001-1v-8.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconRooms(props) {
  return (
    <svg {...props} viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor">
      <rect x="3" y="7" width="7" height="6" rx="1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="14" y="7" width="7" height="6" rx="1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 17h18" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconBookings(props) {
  return (
    <svg {...props} viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor">
      <rect x="3" y="4" width="18" height="18" rx="2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 2v4M8 2v4M3 10h18" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconUsers(props) {
  return (
    <svg {...props} viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor">
      <path d="M16 11a4 4 0 10-8 0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M21 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconChat(props) {
  return (
    <svg {...props} viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor">
      <path d="M21 15a2 2 0 01-2 2H8l-5 4V5a2 2 0 012-2h14a2 2 0 012 2z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ---------- Sidebar component ---------- */
export default function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  // lock scroll when drawer open
  useEffect(() => {
    if (mobileOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => (document.body.style.overflow = prev);
    }
  }, [mobileOpen]);

  const handleLogout = () => {
    // replace with real logout
    alert("Đăng xuất");
  };

  return (
    <>
      {/* ---------- Desktop Sidebar ---------- */}
      <aside className="hidden md:flex flex-col bg-gradient-to-b from-gray-900 to-gray-800 border-r border-gray-700 h-screen fixed md:static top-0 left-0 z-40 shadow-2xl"
                style={{ width: 250 }}>
        <div className="h-16 flex items-center px-6 border-b border-gray-700">
          <div className="font-bold text-xl text-white flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">A</span>
            </div>
            Admin Panel
          </div>
        </div>

        <nav className="flex-1 overflow-auto px-3 py-6 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.key}
                to={item.to}
                end
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 text-sm group
                  ${isActive 
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/50" 
                    : "text-gray-300 hover:bg-gray-700/50 hover:text-white"}`
                }
              >
                <span className="flex-none text-lg group-hover:scale-110 transition-transform duration-200">
                  <Icon className="w-5 h-5" />
                </span>
                <span className="truncate font-medium">{item.label}</span>
              </NavLink>
            );
          })}
        </nav>

      
      </aside>

      {/* ---------- Mobile top + drawer ---------- */}
      <div className="md:hidden">
        {/* top bar with menu toggle */}
        <div className="fixed top-0 left-0 right-0 h-14 bg-white border-b z-40 flex items-center px-4 justify-between">
          <div className="font-semibold">Admin</div>
          <button
            className="p-2 rounded-md hover:bg-gray-100"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            {/* hamburger */}
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M4 7h16M4 12h16M4 17h16" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* drawer */}
        <div
          className={`fixed inset-0 z-50 transition-opacity ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
          aria-hidden={!mobileOpen}
        >
          {/* overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-40" onClick={() => setMobileOpen(false)} />

          {/* panel */}
          <div className={`absolute left-0 top-0 bottom-0 w-72 bg-white shadow-xl transform transition-transform ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}>
            <div className="h-14 flex items-center px-4 border-b justify-between">
              <div className="font-semibold">Menu</div>
              <button className="p-2 rounded-md hover:bg-gray-100" onClick={() => setMobileOpen(false)} aria-label="Close">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M6 6l12 12M6 18L18 6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

           
          </div>
        </div>
      </div>

    
    </>
  );
}
