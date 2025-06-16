'use client';

import Image from 'next/image';
import { useState } from 'react';

export const AdminSidebar = () => {
  const [adminData] = useState({
    name: "Admin Name",
    title: "Founder & CEO",
    imageUrl: "/default-profile.jpg",
    details: [
      "BTech Loan_Wala Finance Advisor",
      "Business Management Coach",
      "Public Speaker"
    ],
    description: "With years of expertise in finance, we provide engineered financial solutions for individuals and businesses with customized loan services."
  });

  return (
    <div className="h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40 backdrop-blur-sm border-r border-slate-200/60 shadow-xl flex flex-col">
      {/* Content Area - Adjusted to prevent overflow */}
      <div className="p-4 flex-1 flex flex-col overflow-hidden">
        <div className="flex flex-col items-center h-full relative">
          {/* Decorative Background Elements - Reduced size */}
          <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-100/40 to-indigo-100/40 rounded-full blur-xl"></div>
          <div className="absolute bottom-4 left-0 w-14 h-14 bg-gradient-to-br from-purple-100/30 to-pink-100/30 rounded-full blur-lg"></div>

          {/* Main Content Container with constrained height */}
          <div className="w-full max-w-xs relative z-10 h-full flex flex-col">
            {/* Profile Section - Compact */}
            <div className="flex justify-center mb-4">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                <div className="relative w-24 h-24 rounded-full overflow-hidden border-3 border-white shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <Image
                    src={adminData.imageUrl}
                    alt="Admin Profile"
                    fill
                    className="object-cover"
                    priority
                    sizes="96px"
                  />
                </div>
                <div className="absolute bottom-1 right-1 w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full border border-white shadow-md">
                  <div className="w-full h-full rounded-full bg-green-400 animate-ping opacity-20"></div>
                </div>
              </div>
            </div>

            {/* Name and Title - Smaller */}
            <div className="text-center mb-4">
              <h2 className="text-xl font-bold bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 bg-clip-text text-transparent mb-2">
                {adminData.name}
              </h2>
              <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full shadow">
                <span className="text-white font-medium text-xs tracking-wide">
                  {adminData.title}
                </span>
              </div>
            </div>

            {/* Expertise Section - Compact */}
            <div className="mb-4 flex-1 overflow-y-auto">
              <h3 className="text-md font-semibold text-slate-700 mb-2 flex items-center">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                Expertise
              </h3>
              <div className="space-y-2">
                {adminData.details.map((item, index) => (
                  <div key={index} className="group">
                    <div className="flex items-start p-2 bg-white/70 backdrop-blur-sm rounded-lg border border-slate-200/50 shadow-xs hover:shadow-sm transition-all duration-200">
                      <div className="flex-shrink-0 w-5 h-5 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-md flex items-center justify-center shadow-sm">
                        <svg
                          className="w-2.5 h-2.5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                      <span className="ml-2 text-slate-700 font-medium text-xs leading-snug">
                        {item}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* About Section - Compact */}
            <div className="mt-auto">
              <div className="relative">
                <h3 className="text-md font-semibold text-slate-700 mb-2 flex items-center">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></div>
                  About
                </h3>
                
                <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent mb-2"></div>
                
                <div className="relative">
                  <p className="text-slate-600 leading-snug font-medium text-xs italic">
                    "{adminData.description}"
                  </p>
                </div>
                
                <div className="mt-2 flex justify-center">
                  <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};