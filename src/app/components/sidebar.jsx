// 'use client';

// import { useState, useEffect } from 'react';
// import Image from 'next/image';

// const DEFAULT_ADMIN = {
//   name: 'Admin User',
//   title: 'Administrator',
//   imageUrl: '/default-profile.jpg',
//   details: 'System administration, User management, Security',
//   description: 'Experienced administrator focused on system security and operational efficiency.',
// };

// export default function AdminSidebar() {
//   const [adminData, setAdminData] = useState(DEFAULT_ADMIN);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     fetchAdminData();
//   }, []);

//   const fetchAdminData = async () => {
//     try {
//       const res = await fetch('/api/admin');
//       if (!res.ok) throw new Error('Failed to fetch admin data');
//       const data = await res.json();
//       setAdminData(data || DEFAULT_ADMIN);
//     } catch (err) {
//       console.error('Error fetching admin data:', err);
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="fixed left-0 top-0 w-1/4 h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 flex items-center justify-center z-50 border-r border-slate-200/60 backdrop-blur-sm">
//         <div className="flex flex-col items-center space-y-4">
//           <div className="relative">
//             <div className="animate-spin rounded-full h-10 w-10 border-2 border-slate-200"></div>
//             <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-indigo-500 absolute top-0 left-0"></div>
//           </div>
//           <div className="text-center">
//             <p className="text-sm font-medium text-slate-600">Loading profile</p>
//             <div className="flex space-x-1 mt-2">
//               <div className="w-1 h-1 bg-indigo-400 rounded-full animate-pulse"></div>
//               <div className="w-1 h-1 bg-indigo-400 rounded-full animate-pulse delay-75"></div>
//               <div className="w-1 h-1 bg-indigo-400 rounded-full animate-pulse delay-150"></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="fixed left-0 top-0 w-1/4 h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 border-r border-slate-200/60 z-40 flex flex-col backdrop-blur-sm">
//       {/* Decorative top accent */}
//       <div className="h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
      
//       <div className="p-8 flex-1 flex flex-col">
//         {/* Profile Section */}
//         <div className="text-center mb-8 group">
//           <div className="relative inline-block">
//             <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden bg-white shadow-lg border-4 border-white mb-4 group-hover:shadow-xl transition-all duration-300">
//               <Image
//                 src={adminData?.imageUrl || '/default-profile.jpg'}
//                 alt={adminData?.name || 'Admin'}
//                 fill
//                 className="object-cover group-hover:scale-105 transition-transform duration-300"
//                 priority
//               />
//             </div>
//             {/* Status indicator */}
//             <div className="absolute bottom-4 right-2 w-4 h-4 bg-emerald-400 border-2 border-white rounded-full shadow-sm animate-pulse"></div>
//           </div>
          
//           <div className="space-y-2">
//             <h2 className="text-2xl font-bold text-slate-800 tracking-tight">
//               {adminData?.name || 'Admin User'}
//             </h2>
//             <div className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold text-indigo-700 bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100">
//               <svg className="w-3 h-3 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
//                 <path fillRule="evenodd" d="M9.243 3.03a1 1 0 01.727 1.213L9.53 6h2.94l.56-2.243a1 1 0 111.94.486L14.53 6H17a1 1 0 110 2h-2.97l-1 4H15a1 1 0 110 2h-2.47l-.56 2.243a1 1 0 11-1.94-.486L10.47 14H7.53l-.56 2.243a1 1 0 11-1.94-.486L5.47 14H3a1 1 0 110-2h2.97l1-4H5a1 1 0 110-2h2.47l.56-2.243a1 1 0 011.213-.727zM9.03 8l-1 4h2.94l1-4H9.03z" clipRule="evenodd" />
//               </svg>
//               {adminData?.title || 'Administrator'}
//             </div>
//           </div>
//         </div>

//         {/* Expertise Section */}
//         <div className="mb-6 transform hover:scale-[1.01] transition-transform duration-200">
//           <div className="flex items-center mb-3">
//             <svg className="w-4 h-4 text-slate-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
//             </svg>
//             <h3 className="text-sm font-semibold text-slate-600 uppercase tracking-wider">Expertise</h3>
//           </div>
//           <div className="bg-white/70 backdrop-blur-sm p-5 rounded-xl shadow-sm border border-slate-100/50 hover:shadow-md hover:bg-white/90 transition-all duration-200">
//             <p className="text-sm text-slate-700 leading-relaxed">
//               {adminData?.details || 'System administration, User management, Security'}
//             </p>
//           </div>
//         </div>

//         {/* About Section */}
//         <div className="mb-6 flex-1 transform hover:scale-[1.01] transition-transform duration-200">
//           <div className="flex items-center mb-3">
//             <svg className="w-4 h-4 text-slate-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//             </svg>
//             <h3 className="text-sm font-semibold text-slate-600 uppercase tracking-wider">About</h3>
//           </div>
//           <div className="bg-white/70 backdrop-blur-sm p-5 rounded-xl shadow-sm border border-slate-100/50 hover:shadow-md hover:bg-white/90 transition-all duration-200 h-full min-h-[120px]">
//             <p className="text-sm text-slate-700 leading-relaxed">
//               {adminData?.description || 'Experienced administrator focused on system security and operational efficiency.'}
//             </p>
//           </div>
//         </div>

//         {/* Error Display */}
//         {error && (
//           <div className="mt-auto">
//             <div className="p-4 bg-gradient-to-r from-red-50 to-pink-50 text-red-700 rounded-xl text-sm border border-red-100/50 flex items-start shadow-sm">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-0.5 mr-3 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
//                 <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
//               </svg>
//               <div>
//                 <p className="font-medium">Connection Error</p>
//                 <p className="mt-1 opacity-90">{error}</p>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Footer */}
//       <div className="px-8 py-5 border-t border-slate-200/60 bg-gradient-to-r from-slate-50/50 to-white/50 backdrop-blur-sm">
//         <div className="flex items-center justify-center space-x-2 text-xs text-slate-500">
//           <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
//           <span className="font-medium">Active now</span>
//         </div>
//         <p className="text-xs text-slate-400 text-center mt-1">Last seen just now</p>
//       </div>
//     </div>
//   );
// }


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
      <div className="fixed left-0 top-0 w-1/4 h-screen bg-slate-900 flex items-center justify-center z-50 border-r border-slate-700/60">
        <div className="flex flex-col items-center space-y-4">
          <div className="relative">
            <div className="animate-spin rounded-full h-10 w-10 border-2 border-slate-700"></div>
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-emerald-500 absolute top-0 left-0"></div>
          </div>
          <div className="text-center">
            <p className="text-sm font-medium text-slate-300">Loading profile</p>
            <div className="flex space-x-1 mt-2">
              <div className="w-1 h-1 bg-emerald-400 rounded-full animate-pulse"></div>
              <div className="w-1 h-1 bg-emerald-400 rounded-full animate-pulse delay-75"></div>
              <div className="w-1 h-1 bg-emerald-400 rounded-full animate-pulse delay-150"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed left-0 top-0 w-1/4 h-screen bg-slate-900 border-r border-slate-700/60 z-40 flex flex-col">
      {/* Decorative top accent */}
      <div className="h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500"></div>
      
      <div className="p-8 flex-1 flex flex-col">
        {/* Profile Section */}
        <div className="text-center mb-8 group">
          <div className="relative inline-block">
            <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden bg-slate-800 shadow-lg border-4 border-slate-700 mb-4 group-hover:shadow-xl transition-all duration-300">
              <Image
                src={adminData?.imageUrl || '/default-profile.jpg'}
                alt={adminData?.name || 'Admin'}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
            {/* Status indicator */}
            <div className="absolute bottom-4 right-2 w-4 h-4 bg-emerald-400 border-2 border-slate-900 rounded-full shadow-sm animate-pulse"></div>
          </div>
          
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-slate-100 tracking-tight">
              {adminData?.name || 'Admin User'}
            </h2>
            <div className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-semibold text-emerald-300 bg-slate-800/60 border border-slate-700/50">
              <svg className="w-3 h-3 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M9.243 3.03a1 1 0 01.727 1.213L9.53 6h2.94l.56-2.243a1 1 0 111.94.486L14.53 6H17a1 1 0 110 2h-2.97l-1 4H15a1 1 0 110 2h-2.47l-.56 2.243a1 1 0 11-1.94-.486L10.47 14H7.53l-.56 2.243a1 1 0 11-1.94-.486L5.47 14H3a1 1 0 110-2h2.97l1-4H5a1 1 0 110-2h2.47l.56-2.243a1 1 0 011.213-.727zM9.03 8l-1 4h2.94l1-4H9.03z" clipRule="evenodd" />
              </svg>
              {adminData?.title || 'Administrator'}
            </div>
          </div>
        </div>

        {/* Expertise Section */}
        <div className="mb-6 transform hover:scale-[1.01] transition-transform duration-200">
          <div className="flex items-center mb-3">
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
        <div className="mb-6 flex-1 transform hover:scale-[1.01] transition-transform duration-200">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-3">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">About</h3>
          </div>
          <div className="bg-slate-800/40 backdrop-blur-sm p-5 rounded-xl border border-slate-700/50 hover:bg-slate-800/60 transition-all duration-200 h-full min-h-[120px]">
            <p className="text-sm text-slate-300 leading-relaxed">
              {adminData?.description || 'Experienced administrator focused on system security and operational efficiency.'}
            </p>
          </div>
        </div>

        {/* Additional Info Cards */}
        <div className="space-y-4 mb-6">
          <div className="bg-slate-800/40 backdrop-blur-sm p-4 rounded-xl border border-slate-700/50 hover:bg-slate-800/60 transition-all duration-200">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-200">Performance</h4>
                <p className="text-xs text-slate-400">System optimization & monitoring</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/40 backdrop-blur-sm p-4 rounded-xl border border-slate-700/50 hover:bg-slate-800/60 transition-all duration-200">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-200">Security</h4>
                <p className="text-xs text-slate-400">Data protection & compliance</p>
              </div>
            </div>
          </div>
        </div>

        {/* Error Display */}
        {error && (
          <div className="mt-auto">
            <div className="p-4 bg-red-900/30 text-red-300 rounded-xl text-sm border border-red-700/50 flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-0.5 mr-3 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
              <div>
                <p className="font-medium">Connection Error</p>
                <p className="mt-1 opacity-90">{error}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="px-8 py-5 border-t border-slate-700/60 bg-slate-800/30">
        <div className="flex items-center justify-center space-x-2 text-xs text-slate-300">
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
          <span className="font-medium">Active now</span>
        </div>
        <p className="text-xs text-slate-500 text-center mt-1">Last seen just now</p>
      </div>
    </div>
  );
}