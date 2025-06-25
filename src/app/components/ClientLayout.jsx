'use client';

import dynamic from 'next/dynamic';

const AdminSidebar = dynamic(() => import('./sidebar'), {
  ssr: false,
  loading: () => (
    <div className="fixed left-0 top-0 w-full bg-gray-50 flex items-center justify-center h-screen z-50">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
    </div>
  ),
});

export default function ClientLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-white">
      <AdminSidebar />
      <main className="flex-1 ml-96">
        {children}
      </main>
    </div>
  );
} 