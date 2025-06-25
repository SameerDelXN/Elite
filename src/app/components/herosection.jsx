'use client';

import { Linkedin, Star, Users, Award, ArrowRight, CheckCircle, Shield, Clock, TrendingUp, Sparkles, Zap, Trophy, ExternalLink } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Geometric shapes */}
        <div className="absolute top-20 right-20 w-32 h-32 border border-cyan-400/20 rotate-45 animate-spin" style={{ animationDuration: '20s' }} />
        <div className="absolute bottom-40 left-16 w-24 h-24 border border-purple-400/20 rotate-12 animate-pulse" />
        
        {/* Large gradient orbs */}
        <div className="absolute -top-32 -right-32 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-cyan-400/15 to-blue-600/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 -left-32 w-72 h-72 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] bg-gradient-to-br from-purple-400/15 to-pink-600/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
        <div className="absolute -bottom-32 right-1/4 w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 bg-gradient-to-br from-emerald-400/15 to-teal-600/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }} />
        
        {/* Floating elements */}
        <div className="hidden md:block absolute top-1/4 left-1/4 w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-bounce" />
        <div className="hidden md:block absolute top-1/3 right-1/3 w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
        <div className="hidden md:block absolute bottom-1/3 left-1/3 w-2.5 h-2.5 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full animate-bounce" style={{ animationDelay: '2s' }} />
      </div>

      {/* Main Content Container */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16 z-10">
        {/* Enhanced Financial Offer Section */}
        <div className="w-full">
          <div className="relative bg-gradient-to-br from-slate-800/95 via-slate-700/90 to-slate-800/95 backdrop-blur-xl border border-slate-500/40 rounded-3xl lg:rounded-[2rem] shadow-2xl overflow-hidden group hover:shadow-purple-500/25 transition-all duration-700 hover:scale-[1.02]">
            {/* Dynamic glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/10 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            {/* Animated border effect */}
            <div className="absolute inset-0 rounded-3xl lg:rounded-[2rem] bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm" />

            <div className="flex flex-col lg:flex-row relative z-10">
              {/* Left side - Enhanced Visual */}
              <div className="w-full lg:w-1/2 relative overflow-hidden rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none">
                <div className="relative h-72 sm:h-80 lg:h-[28rem]">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/90 via-purple-600/85 to-pink-600/90 flex items-center justify-center">
                    {/* Enhanced visual content */}
                    <div className="text-center text-white p-6 sm:p-8 lg:p-12 relative">
                      {/* Background decorative elements */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl" />
                      
                      <div className="relative z-10">
                        <div className="mb-6 relative">
                          <Sparkles className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto animate-spin text-yellow-300" style={{ animationDuration: '4s' }} />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-pulse" />
                          </div>
                        </div>
                        
                        <div className="space-y-3 lg:space-y-4">
                          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black leading-tight">
                            Financial 
                            <span className="block text-yellow-300">Excellence</span>
                          </h2>
                          <p className="text-lg sm:text-xl font-semibold opacity-95">Your Success Journey</p>
                          <div className="flex justify-center space-x-2 mt-4">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 text-yellow-300 fill-current animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Enhanced badge */}
                  <div className="absolute top-4 right-4 sm:top-6 sm:right-6 lg:top-8 lg:right-8">
                    <div className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-sm sm:text-base font-bold shadow-xl animate-pulse border-2 border-white/20">
                      <Zap className="w-4 h-4 sm:w-5 sm:h-5 inline mr-2 animate-bounce" />
                      Limited Offer
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right side - Enhanced Content */}
              <div className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-12 xl:p-16 flex flex-col justify-center">
                <div className="space-y-6 lg:space-y-8">
                  {/* Enhanced header section */}
                  <div>
                    <div className="inline-flex items-center bg-gradient-to-r from-orange-500/25 to-red-500/25 text-orange-200 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-sm sm:text-base font-semibold mb-6 sm:mb-8 border border-orange-400/40 backdrop-blur-sm">
                      <Trophy className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-yellow-400" />
                      New Financial Year Special
                    </div>
                    
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[0.9] mb-6 sm:mb-8">
                      Expert Financial 
                      <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse mt-2">
                        Consultation
                      </span>
                    </h1>
                  </div>
                  
                  {/* Enhanced highlight box */}
                  <div className="relative group/box">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/30 to-red-500/30 rounded-2xl lg:rounded-3xl blur-sm opacity-75 group-hover/box:opacity-100 transition-opacity" />
                    <div className="relative bg-gradient-to-br from-orange-500/20 via-red-500/15 to-pink-500/20 rounded-2xl lg:rounded-3xl p-6 lg:p-8 xl:p-10 border border-orange-400/40 backdrop-blur-sm">
                      <div className="text-center">
                        <div className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-3 sm:mb-4 drop-shadow-2xl flex items-center justify-center gap-2">
                          <span className="text-orange-300">20%</span>
                          <span className="text-2xl sm:text-3xl lg:text-4xl">OFF</span>
                        </div>
                        <div className="text-orange-200 font-bold text-lg sm:text-xl lg:text-2xl">
                          1:1 Personalized Consultation
                        </div>
                        <div className="text-orange-300/80 font-medium text-sm sm:text-base mt-2">
                          Worth ₹5,000 - Now ₹4,000
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Enhanced features list */}
                  <div className="space-y-4 sm:space-y-5">
                    {[
                      { text: 'Expert financial guidance', icon: Shield },
                      { text: 'Tailored loan solutions', icon: TrendingUp },
                      { text: 'Quick approval process', icon: Clock }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center text-slate-200 group/item hover:text-white transition-colors">
                        <div className="relative mr-4 sm:mr-5">
                          <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 text-emerald-400 group-hover/item:scale-110 transition-transform duration-300" />
                          <item.icon className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-600 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                        </div>
                        <span className="font-semibold text-base sm:text-lg">{item.text}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Enhanced CTA button */}
                  <button className="group/cta relative bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 text-white px-8 sm:px-10 lg:px-12 py-5 sm:py-6 lg:py-7 rounded-2xl lg:rounded-3xl font-black text-lg sm:text-xl lg:text-2xl shadow-2xl hover:shadow-purple-500/50 transform hover:-translate-y-2 hover:scale-105 transition-all duration-500 flex items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 opacity-0 group-hover/cta:opacity-100 transition-opacity duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-pink-400/20 animate-pulse" />
                    <span className="relative z-10">Book Consultation Now</span>
                    <ArrowRight className="w-6 h-6 sm:w-7 sm:h-7 group-hover/cta:translate-x-2 transition-transform duration-300 relative z-10" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* LinkedIn Connection Card */}
        <div className="mt-8 lg:mt-12 flex justify-center">
          <div className="bg-gradient-to-r from-slate-800/90 to-slate-700/90 backdrop-blur-xl border border-slate-600/40 rounded-2xl shadow-xl p-6 sm:p-8 max-w-md w-full hover:shadow-blue-500/20 transition-all duration-500 group/linkedin hover:scale-105">
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-3 rounded-full group-hover/linkedin:scale-110 transition-transform duration-300">
                  <Linkedin className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Connect with us on LinkedIn</h3>
                <p className="text-slate-300 text-sm">Stay updated with financial tips and industry insights</p>
              </div>
              
              <a 
                href="https://www.linkedin.com/company/btechloanwala/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 group-hover/linkedin:shadow-lg group-hover/linkedin:shadow-blue-500/25"
              >
                <span>Follow BTech LoanWala</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              
              <div className="flex items-center justify-center gap-4 pt-2 text-slate-400 text-sm">
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  <span>1K+ Followers</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span>4.8 Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}