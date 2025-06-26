'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigation = [
  { name: 'Dashboard', href: '/admin', icon: '📊' },
  { name: 'Profile', href: '/admin/profile', icon: '👤' },
  { name: 'Services', href: '/admin/services', icon: '🛠️' },
  { name: 'Feedback', href: '/admin/feedback', icon: '💬' },
  { name: 'Settings', href: '/admin/settings', icon: '⚙️' },
];

export default function AdminNav() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col h-full p-4 bg-slate-900 text-white">
      <h1 className="text-xl font-bold text-white mb-4">Admin Panel</h1>
      <nav className="flex-1 space-y-1">
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                isActive
                  ? 'bg-orange-500 text-white'
                  : 'text-slate-300 hover:bg-slate-700 hover:text-white'
              }`}
            >
              <span className="mr-3">{item.icon}</span>
              {item.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
} 