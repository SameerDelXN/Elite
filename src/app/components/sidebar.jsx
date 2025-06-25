'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const DEFAULT_ADMIN = {
  name: 'Admin User',
  title: 'Administrator',
  imageUrl: '/default-profile.jpg',
  details: 'System administration, User management, Security',
  description: 'Experienced administrator focused on system security and operational efficiency.',
};

export default function AdminSidebar() {
  const [adminData, setAdminData] = useState(DEFAULT_ADMIN);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchAdminData();
  }, []);

  const fetchAdminData = async () => {
    try {
      const res = await fetch('/api/admin');
      if (!res.ok) throw new Error('Failed to fetch admin data');
      const data = await res.json();
      setAdminData(data || DEFAULT_ADMIN);
    } catch (err) {
      console.error('Error fetching admin data:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="w-96 h-full bg-slate-900 flex items-center justify-center border-r border-slate-700/60">
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
    <div className="w-96 h-full bg-slate-900 border-r border-slate-700/60 flex flex-col overflow-y-auto">
      {/* Decorative top accent */}
      <div className="h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 flex-shrink-0"></div>
      
      <div className="p-6 lg:p-8 flex-1 flex flex-col min-h-0">
        {/* Profile Section */}
        <div className="text-center mb-8 group flex-shrink-0">
          <div className="relative inline-block">
            <div className="relative w-32 h-32 lg:w-36 lg:h-36 mx-auto rounded-full overflow-hidden bg-slate-800 shadow-lg border-4 border-slate-700 mb-4 group-hover:shadow-xl transition-all duration-300">
              <Image
                src={adminData?.imageUrl || '/default-profile.jpg'}
                alt={adminData?.name || 'Admin'}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                priority
                onError={(e) => {
                  e.target.src = '/default-profile.jpg';
                }}
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

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto min-h-0 space-y-6">
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

          {/* Skills/Specializations Grid */}
          <div className="space-y-4">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">Specializations</h3>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-slate-800/40 backdrop-blur-sm p-4 rounded-xl border border-slate-700/50 hover:bg-slate-800/60 transition-all duration-200">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-sm font-semibold text-slate-200">Performance</h4>
                    <p className="text-xs text-slate-400 mt-1">System optimization</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/40 backdrop-blur-sm p-4 rounded-xl border border-slate-700/50 hover:bg-slate-800/60 transition-all duration-200">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-sm font-semibold text-slate-200">Security</h4>
                    <p className="text-xs text-slate-400 mt-1">Data protection</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/40 backdrop-blur-sm p-4 rounded-xl border border-slate-700/50 hover:bg-slate-800/60 transition-all duration-200">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-sm font-semibold text-slate-200">Management</h4>
                    <p className="text-xs text-slate-400 mt-1">User administration</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/40 backdrop-blur-sm p-4 rounded-xl border border-slate-700/50 hover:bg-slate-800/60 transition-all duration-200">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-sm font-semibold text-slate-200">Analytics</h4>
                    <p className="text-xs text-slate-400 mt-1">Data insights</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-gradient-to-r from-slate-800/60 to-slate-700/60 backdrop-blur-sm p-5 rounded-xl border border-slate-600/50">
            <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-4">Quick Stats</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-400 mb-1">99.9%</div>
                <div className="text-xs text-slate-400">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 mb-1">24/7</div>
                <div className="text-xs text-slate-400">Support</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400 mb-1">1.2K</div>
                <div className="text-xs text-slate-400">Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-400 mb-1">156</div>
                <div className="text-xs text-slate-400">Projects</div>
              </div>
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
    </div>
  );
}