'use client';

import Image from 'next/image';
import { Linkedin, Star, Users, Award, ArrowRight } from 'lucide-react';

export default function OfferPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 font-sans overflow-hidden">
      {/* Hero Section with Floating Elements */}
      <section className="relative px-6 md:px-20 py-20">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-yellow-200/30 to-orange-200/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* New Financial Year Offer - Floating Glass Morphism */}
        <div className="relative mb-32">
          <div className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2 relative">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500">
                  <Image
                    src="/offer1.jpg"
                    alt="New Financial Year Offer"
                    width={600}
                    height={400}
                    className="object-cover w-full h-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                {/* Floating Badge */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg animate-bounce">
                  Limited Time
                </div>
              </div>
              
              <div className="lg:w-1/2 text-center lg:text-left space-y-6">
                <div className="space-y-4">
                  <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 bg-clip-text text-transparent leading-tight">
                    New Financial Year Special
                  </h1>
                  <div className="h-1 w-24 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mx-auto lg:mx-0"></div>
                </div>
                
                <p className="text-2xl text-gray-700 font-medium">
                  Get <span className="text-3xl font-bold text-orange-600">20% OFF</span> on 1:1 consultation
                </p>
                
                <button className="group bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto lg:mx-0">
                  Book Now & Save Big
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Section - Minimal Floating Design */}
        <div className="relative mb-32">
          <div className="max-w-4xl mx-auto">
            {/* Quote Icon */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white text-2xl font-bold shadow-lg">
                "
              </div>
            </div>
            
            {/* Testimonial Content */}
            <div className="backdrop-blur-xl bg-white/30 border border-white/40 rounded-3xl p-8 md:p-12 shadow-2xl text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 italic">
                "BTech Loan_Wala made my loan process effortless! I got urgent funds with minimal hassle and expert guidance. Their team is professional, fast, and reliable. Highly recommend them!"
              </blockquote>
              
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  N
                </div>
                <div className="text-left">
                  <p className="font-bold text-gray-800">Navnath Tikode</p>
                  <p className="text-gray-600">Verified Customer</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Connect Section - Modern Minimalist */}
        <div className="relative mb-32">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Connect Beyond Consultations
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Follow our journey on LinkedIn for insights, updates, and financial wisdom
              </p>
              <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto"></div>
            </div>
            
            <div className="inline-block">
              <a
                href="https://www.linkedin.com/company/btechloanwala/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <Linkedin className="w-6 h-6" />
                Follow on LinkedIn
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Free Loan Services - Premium Layout */}
        <div className="relative">
          <div className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
              <div className="lg:w-1/2 relative">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500">
                  <Image
                    src="/offer2.jpg"
                    alt="Free Loan Services Offer"
                    width={600}
                    height={400}
                    className="object-cover w-full h-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                {/* Floating Stats */}
                <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-green-600" />
                    <span className="text-sm font-bold text-gray-800">25+ Banks</span>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/2 text-center lg:text-left space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 justify-center lg:justify-start">
                    <Award className="w-8 h-8 text-green-600" />
                    <span className="text-sm font-bold text-green-600 uppercase tracking-wide">Free Service</span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent leading-tight">
                    Unlock FREE Loan Services
                  </h1>
                  <div className="h-1 w-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mx-auto lg:mx-0"></div>
                </div>
                
                <p className="text-xl text-gray-700 leading-relaxed">
                  Book a session with 25+ banks - from eligibility check to smooth disbursement, we've got you covered.
                </p>
                
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <div className="bg-white/50 rounded-full px-4 py-2 text-sm font-medium text-gray-700">
                    Eligibility Check
                  </div>
                  <div className="bg-white/50 rounded-full px-4 py-2 text-sm font-medium text-gray-700">
                    Documentation
                  </div>
                  <div className="bg-white/50 rounded-full px-4 py-2 text-sm font-medium text-gray-700">
                    Quick Approval
                  </div>
                </div>
                
                <button className="group bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto lg:mx-0">
                  Book Free Session
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}