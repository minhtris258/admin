import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, LayoutDashboard, Calendar, Stethoscope, Users, BarChart, Settings, Lock } from "lucide-react";


const Sidebar = ({ isOpen, toggleSidebar, currentView, setView }) => {
    const navItems = [
        { name: 'Dashboard', icon: LayoutDashboard, view: 'dashboard' },
        { name: 'Quản lý Lịch Hẹn', icon: Calendar, view: 'appointments' },
        { name: 'Quản lý Bác Sĩ', icon: Stethoscope, view: 'doctors' }, 
        { name: 'Quản lý Bệnh Nhân', icon: Users, view: 'patients' },
        { name: 'Báo Cáo', icon: BarChart, view: 'reports' },
        { name: 'Profile', icon: Users, view: 'profile' }, 
        { name: 'Cài Đặt', icon: Settings, view: 'settings' },
    ];

    return (
        <aside 
            className={`fixed inset-y-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:relative lg:translate-x-0 transition duration-300 ease-in-out 
                       w-64 bg-indigo-800 text-white flex flex-col z-30 shadow-2xl lg:shadow-none lg:flex-shrink-0`}
        >
            {/* Logo */}
            <div className="flex items-center justify-between h-16 px-6 border-b border-indigo-700">
                <h2 className="text-xl font-bold tracking-wider">Health Admin</h2>
                <button 
                    className="lg:hidden text-white focus:outline-none"
                    onClick={toggleSidebar}
                >
                    <Menu className="h-6 w-6 transform rotate-90" />
                </button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
                {navItems.map(item => (
                    <a
                        key={item.name}
                        href="#"
                        onClick={(e) => { e.preventDefault(); setView(item.view); if (window.innerWidth < 1024) toggleSidebar(); }}
                        className={`flex items-center px-4 py-2 rounded-lg transition duration-150 ${
                            item.view === currentView
                                ? 'bg-indigo-900 text-white shadow-md'
                                : 'text-indigo-200 hover:bg-indigo-700 hover:text-white'
                        }`}
                    >
                        <item.icon className="h-5 w-5 mr-3" />
                        <span className="font-medium">{item.name}</span>
                    </a>
                ))}
            </nav>
            
            {/* Footer/Logout Placeholder */}
            <div className="p-4 border-t border-indigo-700">
                <a href="#" onClick={(e) => { e.preventDefault(); setView('logout'); }} className="flex items-center px-4 py-2 rounded-lg text-red-300 hover:bg-indigo-700 hover:text-red-100 transition duration-150">
                    <Lock className="h-5 w-5 mr-3" />
                    Đăng Xuất
                </a>
            </div>
        </aside>
    );
};

export default Sidebar;