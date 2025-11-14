import React, { useState, useRef, useEffect } from "react";

export default function Header({ onToggleSidebar }) {
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState("");
    const menuRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(e) {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setOpen(false);
            }
        }
        function handleEsc(e) {
            if (e.key === "Escape") setOpen(false);
        }
        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleEsc);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleEsc);
        };
    }, []);

    return (
        <header className="w-full bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm">
            <div className=" mx-auto px-4 sm:px-6 ">
                <div className="h-16 flex items-center justify-between">
                    {/* Left: hamburger + title + search */}
                    <div className="flex items-center space-x-4">
                        <button
                            onClick={() => onToggleSidebar && onToggleSidebar()}
                            className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                            aria-label="Toggle sidebar"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>

                    

                        <div className="hidden md:flex items-center bg-gradient-to-r from-gray-50 to-gray-100 dark:bg-gray-700 rounded-lg px-4 py-2 border border-gray-200 dark:border-gray-600 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 transition-all duration-200">
                            <svg className="w-5 h-5 text-gray-400 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
                            </svg>
                            <input
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Tìm kiếm..."
                                className="w-80 ml-2 bg-transparent focus:outline-none text-sm text-gray-700 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-400"
                            />
                        </div>
                    </div>

                    {/* Right: actions */}
                    <div className="flex items-center space-x-3">
                        <button
                            className="relative p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                            aria-label="Notifications"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                            <span className="absolute top-0 right-0 inline-flex items-center justify-center w-5 h-5 text-xs font-bold leading-none text-white bg-gradient-to-r from-red-500 to-pink-500 rounded-full transform translate-x-1/2 -translate-y-1/2 shadow-lg">
                                3
                            </span>
                        </button>

                        <div className="relative" ref={menuRef}>
                            <button
                                onClick={() => setOpen((v) => !v)}
                                className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                                aria-haspopup="true"
                                aria-expanded={open}
                            >
                                <img
                                    src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='36' height='36'><rect width='100%' height='100%' fill='%23829' /><text x='50%' y='50%' fill='white' font-size='16' font-family='Arial' text-anchor='middle' dy='.35em'>A</text></svg>"
                                    alt="avatar"
                                    className="w-9 h-9 rounded-full object-cover ring-2 ring-blue-500"
                                />
                                <span className="hidden sm:block text-sm font-medium text-gray-700 dark:text-gray-200">Admin User</span>
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {open && (
                                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl z-50 overflow-hidden">
                                    <a href="#" className="block px-4 py-3 text-sm text-gray-700 dark:text-gray-200 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:bg-gray-700 transition-colors duration-150">Profile</a>
                                    <a href="#" className="block px-4 py-3 text-sm text-gray-700 dark:text-gray-200 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:bg-gray-700 transition-colors duration-150">Settings</a>
                                    <div className="border-t border-gray-100 dark:border-gray-700"></div>
                                    <button className="w-full text-left px-4 py-3 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-gray-700 transition-colors duration-150 font-medium">Sign out</button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}