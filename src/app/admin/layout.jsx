'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigation = [
  { name: 'Dashboard', href: '/admin', icon: '📊' },
  { name: 'Profile', href: '/admin/profile', icon: '👤' },
  { name: 'Services', href: '/admin/services', icon: '🛠️' },
  { name: 'Feedback', href: '/admin/feedback', icon: '💬' },
  { name: 'Settings', href: '/admin/settings', icon: '⚙️' },
];

export default function AdminLayout({ children }) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between h-16 px-4 border-b">
            <h1 className="text-xl font-bold text-gray-800">Admin Panel</h1>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="p-2 rounded-md lg:hidden hover:bg-gray-100"
            >
              <span className="sr-only">Close sidebar</span>
              ✕
            </button>
          </div>
          
          <nav className="flex-1 px-2 py-4 space-y-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                    isActive
                      ? 'bg-orange-100 text-orange-600'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <span className="mr-3">{item.icon}</span>
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className={`lg:pl-64 flex flex-col flex-1 ${isSidebarOpen ? 'pl-64' : 'pl-0'}`}>
        {/* Top bar */}
        <div className="sticky top-0 z-10 flex items-center h-16 px-4 bg-white border-b lg:hidden">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 rounded-md hover:bg-gray-100"
          >
            <span className="sr-only">Open sidebar</span>
            ☰
          </button>
          <h1 className="ml-4 text-lg font-semibold text-gray-800">Admin Panel</h1>
        </div>

        {/* Page content */}
        <main className="flex-1 p-4">
          {children}
        </main>
      </div>
    </div>
  );
} 