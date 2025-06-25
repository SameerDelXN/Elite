// app/layout.js or app/layout.tsx

import './globals.css';
import { Inter } from 'next/font/google';
import AdminSidebar from './components/sidebar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Elite Admin',
  description: 'Admin dashboard for Elite',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>
        <div className="flex h-screen overflow-hidden">
          {/* Sticky Sidebar */}
          <aside className="w-96 bg-gray-800 text-white h-full sticky top-0 overflow-y-auto">
            <AdminSidebar />
          </aside>

          {/* Main Content */}
          <main className="flex-1 overflow-y-auto bg-gray-100 ">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
