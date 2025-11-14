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
        <header className="w-full bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
            <div className=" mx-auto px-4 sm:px-6 ">
                <div className="h-16 flex items-center justify-between">
                    {/* Left: hamburger + title + search */}
                    <div className="flex items-center space-x-4">
                        <button
                            onClick={() => onToggleSidebar && onToggleSidebar()}
                            className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            aria-label="Toggle sidebar"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>

                    

                        <div className="hidden md:flex items-center bg-gray-100 dark:bg-gray-700 rounded-md px-2 py-1">
                            <svg className="w-5 h-5 text-gray-500 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
                            </svg>
                            <input
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Search..."
                                className="w-80 ml-2 bg-transparent focus:outline-none text-sm text-gray-700 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400"
                            />
                        </div>
                    </div>

                    {/* Right: actions */}
                    <div className="flex items-center space-x-3">
                        <button
                            className="relative p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            aria-label="Notifications"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-medium leading-none text-white bg-red-500 rounded-full transform translate-x-1/2 -translate-y-1/2">
                                3
                            </span>
                        </button>

                        <div className="relative" ref={menuRef}>
                            <button
                                onClick={() => setOpen((v) => !v)}
                                className="flex items-center space-x-2 p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                aria-haspopup="true"
                                aria-expanded={open}
                            >
                                <img
                                    src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='36' height='36'><rect width='100%' height='100%' fill='%23829' /><text x='50%' y='50%' fill='white' font-size='16' font-family='Arial' text-anchor='middle' dy='.35em'>A</text></svg>"
                                    alt="avatar"
                                    className="w-9 h-9 rounded-full object-cover"
                                />
                                <span className="hidden sm:block text-sm text-gray-700 dark:text-gray-200">Admin User</span>
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {open && (
                                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg z-50">
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Profile</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Settings</a>
                                    <div className="border-t border-gray-100 dark:border-gray-700"></div>
                                    <button className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-700">Sign out</button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}