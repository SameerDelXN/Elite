'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import AdminNav from './AdminNav';

const DEFAULT_ADMIN = {
  name: 'Admin User',
  title: 'Administrator',
  designation: 'Senior System Administrator',
  imageUrl: '',
  details: 'System administration, User management, Security',
  description: 'Experienced administrator focused on system security and operational efficiency.',
};

export default function AdminSidebar() {
  const pathname = usePathname();
  const [adminData, setAdminData] = useState(DEFAULT_ADMIN);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    if (!pathname.startsWith('/admin')) {
      fetchAdminData();
    }
  }, [pathname]);

  const fetchAdminData = async () => {
    try {
      const res = await fetch('/api/admin');
      const data = await res.json();
      
      if (!res.ok) {
        throw new Error(data.error || 'Failed to fetch admin data');
      }
      
      console.log('Sidebar: Fetched admin data:', data);
      setAdminData(data || DEFAULT_ADMIN);
    } catch (err) {
      console.error('Error fetching admin data:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Add a function to refresh admin data
  const refreshAdminData = () => {
    setLoading(true);
    fetchAdminData();
  };

  // Listen for storage events to refresh when admin data is updated
  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === 'adminDataUpdated') {
        console.log('Sidebar: Admin data updated, refreshing...');
        refreshAdminData();
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  if (pathname.startsWith('/admin')) {
    return <AdminNav />;
  }

  if (loading) {
    return (
      <div className="w-full h-full bg-slate-900 flex items-center justify-center border-r border-slate-700/60">
        <div className="flex flex-col items-center space-y-4">
          <div className="relative">
            <div className="animate-spin rounded-full h-12 w-12 border-2 border-slate-700"></div>
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-emerald-500 absolute top-0 left-0"></div>
          </div>
          <div className="text-center">
            <p className="text-base font-medium text-slate-300">Loading profile</p>
            <div className="flex space-x-1 mt-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse delay-75"></div>
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse delay-150"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-slate-900 border-r border-slate-700/60 flex flex-col">
      {/* Decorative top accent */}
      <div className="h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 flex-shrink-0"></div>
      
      <div className="p-6 lg:p-8 flex-1 flex flex-col">
        {/* Profile Section */}
        <div className="text-center mb-8 group flex-shrink-0">
          <div className="relative inline-block">
            <div className="relative w-32 h-32 lg:w-36 lg:h-36 mx-auto rounded-full overflow-hidden bg-slate-800 shadow-lg border-4 border-slate-700 mb-4 group-hover:shadow-xl transition-all duration-300">
              <Image
                src={adminData?.imageUrl}
                alt={adminData?.name || 'Admin'}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                priority
                // onError={(e) => {
                //   e.target.src = '/default-profile.jpg';
                // }}
              />
            </div>
            {/* Status indicator */}
            <div className="absolute bottom-4 right-4 w-4 h-4 bg-emerald-400 border-2 border-slate-900 rounded-full shadow-sm animate-pulse"></div>
          </div>
          
          <div className="space-y-3">
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-100 tracking-tight leading-tight">
              {adminData?.name || 'Admin User'}
            </h2>
            <div className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-semibold text-emerald-300 bg-slate-800/60 border border-slate-700/50">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M9.243 3.03a1 1 0 01.727 1.213L9.53 6h2.94l.56-2.243a1 1 0 111.94.486L14.53 6H17a1 1 0 110 2h-2.97l-1 4H15a1 1 0 110 2h-2.47l-.56 2.243a1 1 0 11-1.94-.486L10.47 14H7.53l-.56 2.243a1 1 0 11-1.94-.486L5.47 14H3a1 1 0 110-2h2.97l1-4H5a1 1 0 110-2h2.47l.56-2.243a1 1 0 011.213-.727zM9.03 8l-1 4h2.94l1-4H9.03z" clipRule="evenodd" />
              </svg>
              {adminData?.title || 'Administrator'}
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 space-y-6">
          {/* Designation Section */}
          {adminData?.designation && (
            <div className="transform hover:scale-[1.02] transition-transform duration-200">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 112 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6a2 2 0 012-2h4a2 2 0 012 2z" />
                  </svg>
                </div>
                <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">Designation</h3>
              </div>
              <div className="bg-slate-800/40 backdrop-blur-sm p-5 rounded-xl border border-slate-700/50 hover:bg-slate-800/60 transition-all duration-200">
                <p className="text-sm text-slate-300 leading-relaxed">
                  {adminData.designation}
                </p>
              </div>
            </div>
          )}

          {/* Expertise Section */}
          <div className="transform hover:scale-[1.02] transition-transform duration-200">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">Expertise</h3>
            </div>
            <div className="bg-slate-800/40 backdrop-blur-sm p-5 rounded-xl border border-slate-700/50 hover:bg-slate-800/60 transition-all duration-200">
              <p className="text-sm text-slate-300 leading-relaxed">
                {adminData?.details || 'System administration, User management, Security'}
              </p>
            </div>
          </div>

          {/* About Section */}
          <div className="transform hover:scale-[1.02] transition-transform duration-200">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">About</h3>
            </div>
            <div className="bg-slate-800/40 backdrop-blur-sm p-5 rounded-xl border border-slate-700/50 hover:bg-slate-800/60 transition-all duration-200">
              <p className="text-sm text-slate-300 leading-relaxed">
                {adminData?.description || 'Experienced administrator focused on system security and operational efficiency.'}
              </p>
            </div>
          </div>

          {/* Error Display */}
          {error && (
            <div className="mt-4">
              <div className="p-4 bg-red-900/30 text-red-300 rounded-xl text-sm border border-red-700/50 flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-0.5 mr-3 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <div className="min-w-0">
                  <p className="font-medium">Connection Error</p>
                  <p className="mt-1 opacity-90 break-words">{error}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer - Always at bottom */}
        <div className="mt-6 pt-4 border-t border-slate-700/60 bg-slate-800/30 rounded-lg flex-shrink-0">
          <div className="flex items-center justify-center space-x-2 text-sm text-slate-300 mb-2">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <span className="font-medium">Active now</span>
          </div>
          <p className="text-xs text-slate-500 text-center">Last seen just now</p>
          
          {/* Additional footer info */}
          <div className="mt-3 pt-3 border-t border-slate-700/30">
            <div className="flex justify-between items-center text-xs text-slate-400">
              <span>Version 2.1.0</span>
              <span>© 2024 Elite</span>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={toggleMobileMenu}
        ></div>
      )}
    </div>
  );
}