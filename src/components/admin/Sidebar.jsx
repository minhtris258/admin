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

        <div className="p-4 border-t border-gray-700">
          <div className="relative">
            <button
              onClick={() => setProfileOpen((s) => !s)}
              className="w-full flex items-center gap-3 text-sm rounded-lg px-3 py-3 hover:bg-gray-700/50 transition-colors duration-200"
              aria-expanded={profileOpen}
            >
              <img
                src="https://static.vecteezy.com/system/resources/previews/019/194/935/non_2x/global-admin-icon-color-outline-vector.jpg"
                alt="avatar"
                className="w-10 h-10 rounded-full object-cover ring-2 ring-blue-500"
              />
              <div className="flex-1 text-left">
                <div className="text-sm font-semibold text-white">Admin</div>
                <div className="text-xs text-gray-400">admin@example.com</div>
              </div>
              <svg className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${profileOpen ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M6 9l6 6 6-6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {profileOpen && (
              <div className="absolute left-2 right-2 bottom-14 bg-gray-800 border border-gray-700 rounded-lg shadow-2xl py-1 z-40">
                <button className="w-full text-left px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-150" onClick={() => alert("Trang cá nhân")}>
                  Chỉnh sửa trang cá nhân
                </button>
                <button className="w-full text-left px-4 py-2 text-red-400 hover:bg-gray-700 hover:text-red-300 transition-colors duration-150" onClick={handleLogout}>
                  Đăng xuất
                </button>
              </div>
            )}
          </div>
        </div>
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

            <nav className="p-3 space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <NavLink
                    key={item.key}
                    to={item.to}
                    end
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-3 py-2 rounded-lg text-sm ${isActive ? "bg-indigo-600 text-white" : "text-gray-700 hover:bg-gray-50"}`
                    }
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </NavLink>
                );
              })}
            </nav>

            <div className="p-4 border-t">
              <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-50" onClick={() => alert("Trang cá nhân")}>
                Chỉnh sửa trang cá nhân
              </button>
              <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-50" onClick={handleLogout}>
                Đăng xuất
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ---------- Mobile bottom nav ---------- */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t z-40 flex items-center justify-between px-2 h-14">
        {navItems.slice(0, 4).map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.key}
              to={item.to}
              end
              className={({ isActive }) => `flex flex-col items-center justify-center text-xs w-1/5 ${isActive ? "text-indigo-600" : "text-gray-600"}`}
            >
              <Icon className="w-5 h-5 mb-0.5" />
              <span className="truncate">{item.label}</span>
            </NavLink>
          );
        })}

        {/* profile / more button */}
        <button onClick={() => setProfileOpen((s) => !s)} className="flex flex-col items-center justify-center text-xs w-1/5 text-gray-600">
          <svg className="w-5 h-5 mb-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 7a4 4 0 100-8 4 4 0 000 8z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>Admin</span>
        </button>

        {/* mobile profile popup */}
        {profileOpen && (
          <div className="absolute bottom-14 right-3 bg-white shadow-lg rounded z-50 w-44 p-1">
            <button className="block w-full text-left px-3 py-2 text-sm hover:bg-gray-50" onClick={() => alert("Trang cá nhân")}>
              Chỉnh sửa trang cá nhân
            </button>
            <button className="block w-full text-left px-3 py-2 text-sm hover:bg-gray-50" onClick={handleLogout}>
              Đăng xuất
            </button>
          </div>
        )}
      </nav>
    </>
  );
}
