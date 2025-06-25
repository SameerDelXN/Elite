'use client';

import { Linkedin, Star, Users, Award, ArrowRight, CheckCircle, Shield, Clock, TrendingUp, Sparkles, Zap, Trophy } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Background Elements - Fixed positioning issues */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large gradient circles - Better positioned */}
        <div className="absolute -top-20 -right-20 w-40 h-40 md:w-60 md:h-60 lg:w-80 lg:h-80 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 -left-20 w-48 h-48 md:w-72 md:h-72 lg:w-96 lg:h-96 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute -bottom-20 right-1/4 w-36 h-36 md:w-56 md:h-56 lg:w-72 lg:h-72 bg-gradient-to-br from-emerald-400/20 to-teal-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Floating particles - Hidden on mobile to reduce clutter */}
        <div className="hidden md:block absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-bounce" />
        <div className="hidden md:block absolute top-1/3 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
        <div className="hidden md:block absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '2s' }} />
      </div>

      {/* Main Content Container */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16 z-10">
        {/* Financial Offer Section */}
        <div className="w-full">
          <div className="relative bg-gradient-to-r from-slate-800/90 to-slate-700/90 backdrop-blur-xl border border-slate-600/30 rounded-2xl lg:rounded-3xl shadow-2xl overflow-hidden group hover:shadow-cyan-500/20 transition-all duration-500">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="flex flex-col lg:flex-row relative z-10">
              {/* Left side - Image/Graphic */}
              <div className="w-full lg:w-1/2 relative overflow-hidden">
                <div className="relative h-64 sm:h-80 lg:h-96">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/80 to-purple-600/80 flex items-center justify-center">
                    <div className="text-center text-white p-4 sm:p-6 lg:p-8">
                      <Sparkles className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mx-auto mb-3 sm:mb-4 animate-spin" style={{ animationDuration: '3s' }} />
                      <div className="text-xl sm:text-2xl font-bold mb-2">Financial Excellence</div>
                      <div className="text-sm opacity-90">Your Future Starts Here</div>
                    </div>
                  </div>
                  
                  {/* Badge */}
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 lg:top-6 lg:right-6 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-lg animate-pulse">
                    <Zap className="w-3 h-3 sm:w-4 sm:h-4 inline mr-1" />
                    Limited Time
                  </div>
                </div>
              </div>
              
              {/* Right side - Content */}
              <div className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
                <div className="space-y-6 lg:space-y-8">
                  <div>
                    <div className="inline-flex items-center bg-gradient-to-r from-orange-500/20 to-red-500/20 text-orange-300 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 border border-orange-500/30">
                      <Trophy className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                      New Financial Year Special
                    </div>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight mb-4 sm:mb-6">
                      Expert Financial 
                      <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                        Consultation
                      </span>
                    </h1>
                  </div>
                  
                  {/* Highlight box */}
                  <div className="relative bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-xl lg:rounded-2xl p-6 lg:p-8 border border-orange-500/30 backdrop-blur-sm">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-red-500/5 rounded-xl lg:rounded-2xl animate-pulse" />
                    <div className="text-center relative z-10">
                      <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-2 sm:mb-3 drop-shadow-lg">
                        20% OFF
                      </div>
                      <div className="text-orange-200 font-semibold text-base sm:text-lg">
                        1:1 Personalized Consultation
                      </div>
                    </div>
                  </div>
                  
                  {/* Features list */}
                  <div className="space-y-3 sm:space-y-4">
                    {[
                      'Expert financial guidance',
                      'Tailored loan solutions',
                      'Quick approval process'
                    ].map((item, index) => (
                      <div key={index} className="flex items-center text-slate-200 group">
                        <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400 mr-3 sm:mr-4 group-hover:scale-110 transition-transform flex-shrink-0" />
                        <span className="font-medium text-sm sm:text-base">{item}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* CTA button */}
                  <button className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 sm:px-8 lg:px-10 py-4 sm:py-5 rounded-xl lg:rounded-2xl font-bold text-base sm:text-lg lg:text-xl shadow-2xl hover:shadow-cyan-500/50 transform hover:-translate-y-1 lg:hover:-translate-y-2 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 w-full sm:w-auto relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative z-10">Book Consultation Now</span>
                    <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 sm:group-hover:translate-x-2 transition-transform relative z-10" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}