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
    <div className="h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-amber-50 border-r border-slate-200/60 shadow-2xl flex flex-col relative overflow-hidden">
      {/* Elegant Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(251,146,60,0.3),transparent_50%)]"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-orange-200/20 to-transparent rounded-full blur-3xl transform translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-amber-200/20 to-transparent rounded-full blur-3xl transform -translate-x-24 translate-y-24"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col h-full p-8">
        {/* Profile Section */}
        <div className="flex flex-col items-center mb-8">
          <div className="relative group mb-6">
            {/* Animated Ring */}
            <div className="absolute -inset-2 bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 rounded-full opacity-30 blur-sm group-hover:opacity-50 transition-all duration-700 animate-pulse"></div>
            
            {/* Profile Image */}
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-2xl group-hover:shadow-3xl transition-all duration-500 transform group-hover:scale-105">
              <Image
                src={adminData.imageUrl}
                alt="Admin Profile"
                fill
                className="object-cover"
                priority
                sizes="128px"
              />
            </div>

            {/* Status Indicator */}
            <div className="absolute bottom-2 right-2 w-6 h-6 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full border-2 border-white shadow-lg">
              <div className="w-full h-full rounded-full bg-emerald-400 animate-ping opacity-30"></div>
            </div>
          </div>

          {/* Name and Title */}
          <div className="text-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-slate-800 via-orange-700 to-amber-700 bg-clip-text text-transparent mb-3 tracking-tight">
              {adminData.name}
            </h1>
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <span className="text-white font-semibold text-sm tracking-wide">
                {adminData.title}
              </span>
            </div>
          </div>
        </div>

        {/* Expertise Section */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full mr-3"></div>
            <h2 className="text-lg font-bold text-slate-700 tracking-wide">Expertise</h2>
          </div>
          
          <div className="space-y-3">
            {adminData.details.map((item, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="flex items-center p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-slate-200/50 shadow-sm hover:shadow-lg hover:bg-white/90 hover:border-orange-200 transition-all duration-300 hover:translate-x-1">
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-orange-500 to-amber-600 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
                    <svg
                      className="w-3 h-3 text-white"
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
                  <span className="ml-4 text-slate-700 font-medium text-sm leading-relaxed">
                    {item}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* About Section */}
        <div className="mt-auto">
          <div className="flex items-center mb-4">
            <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mr-3"></div>
            <h2 className="text-lg font-bold text-slate-700 tracking-wide">About</h2>
          </div>
          
          {/* Elegant Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-orange-400/40 to-transparent mb-4"></div>
          
          <div className="relative">
            <div className="absolute -left-2 top-0 w-1 h-full bg-gradient-to-b from-orange-400 to-amber-500 rounded-full opacity-30"></div>
            <blockquote className="pl-6 text-slate-600 leading-relaxed font-medium text-sm italic border-l-2 border-transparent">
              "{adminData.description}"
            </blockquote>
          </div>
          
          {/* Bottom Accent */}
          <div className="mt-6 flex justify-center">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
              <div className="w-8 h-0.5 bg-gradient-to-r from-orange-400 to-amber-500 rounded-full self-center"></div>
              <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};